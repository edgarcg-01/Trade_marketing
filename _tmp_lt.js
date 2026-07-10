const { Client } = require('pg');
(async () => {
  const c = new Client({ connectionString: 'postgresql://postgres:superoot@192.168.0.245:5432/KP_CONCENTRADA', connectionTimeoutMillis: 15000 });
  await c.connect();
  // Cadena por sucursal: OC(35) -> vale(37 via c39=OC.c6) -> OE(40 via c39=vale.c6). gap = OE.fecha - OC.fecha.
  const q = `
    WITH oc AS (SELECT sucursal, c6, c9::date f, c10 prov, c32 provname FROM kp.kdm1 WHERE c2='X' AND c3='A' AND c4='35'),
    vale AS (SELECT sucursal, c6, c39 FROM kp.kdm1 WHERE c2='X' AND c3='A' AND c4='37'),
    oe AS (SELECT sucursal, c9::date f, c39 FROM kp.kdm1 WHERE c2='X' AND c3='A' AND c4='40'),
    chain AS (
      SELECT oc.sucursal, oc.prov, oc.provname, oc.f oc_f, oe.f oe_f, (oe.f - oc.f) gap
        FROM oc
        JOIN vale v ON v.sucursal=oc.sucursal AND v.c39=oc.c6
        JOIN oe    ON oe.sucursal=v.sucursal AND oe.c39=v.c6
       WHERE oc.f >= current_date - 365
    )
    SELECT count(*) n,
      count(*) FILTER (WHERE gap<=0) d0,
      count(*) FILTER (WHERE gap BETWEEN 1 AND 3) d1_3,
      count(*) FILTER (WHERE gap BETWEEN 4 AND 7) d4_7,
      count(*) FILTER (WHERE gap BETWEEN 8 AND 30) d8_30,
      count(*) FILTER (WHERE gap>30) d30p,
      round(avg(gap),2) avg_gap, round(stddev_pop(gap),2) sd_gap,
      percentile_disc(0.5) within group (order by gap) median
    FROM chain`;
  const r = await c.query(q);
  console.log('=== OC(35) → Orden de entrada(40) gap, 365d, todas sucursales ===');
  console.log(JSON.stringify(r.rows[0], null, 0));

  // ¿Hay proveedores con lead time real consistente (>0)?
  const q2 = `
    WITH oc AS (SELECT sucursal, c6, c9::date f, c32 provname FROM kp.kdm1 WHERE c2='X' AND c3='A' AND c4='35'),
    vale AS (SELECT sucursal, c6, c39 FROM kp.kdm1 WHERE c2='X' AND c3='A' AND c4='37'),
    oe AS (SELECT sucursal, c9::date f, c39 FROM kp.kdm1 WHERE c2='X' AND c3='A' AND c4='40'),
    chain AS (SELECT oc.provname, (oe.f - oc.f) gap FROM oc
        JOIN vale v ON v.sucursal=oc.sucursal AND v.c39=oc.c6
        JOIN oe ON oe.sucursal=v.sucursal AND oe.c39=v.c6
       WHERE oc.f >= current_date - 365 AND oc.c32 IS NOT NULL)
    SELECT provname, count(*) n, round(avg(gap),1) avg_gap, max(gap) max_gap
      FROM chain GROUP BY provname HAVING count(*)>=5 AND avg(gap)>=1 ORDER BY avg(gap) DESC LIMIT 12`;
  const r2 = await c.query(q2);
  console.log(`\n=== Proveedores con lead time promedio ≥1 día (≥5 OCs) ===`);
  console.log('total proveedores con LT real:', r2.rows.length);
  for(const x of r2.rows) console.log(`  ${(x.provname||'').slice(0,32).padEnd(32)} n=${x.n} avg=${x.avg_gap}d max=${x.max_gap}d`);
  await c.end();
})().catch(e=>{console.error('ERR',e.message);process.exit(1)});

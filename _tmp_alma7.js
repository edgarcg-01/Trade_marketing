const { Client } = require('pg');
(async () => {
  const db = new Client({ connectionString: 'postgresql://postgres:superoot@localhost:5433/kepler_consolidado', connectionTimeoutMillis: 8000 });
  await db.connect();
  const q = async (label, sql, params=[]) => {
    try { const r = await db.query(sql, params); console.log(`\n== ${label} (${r.rowCount}) ==`); console.table(r.rows.slice(0,40)); }
    catch(e){ console.log(`\n== ${label} ERROR: ${e.message}`); }
  };
  await q('mart tables', `SELECT table_name FROM information_schema.tables WHERE table_schema='mart' ORDER BY 1`);
  // ALMA SKUs list
  const alma = ['19311','64068','23140','23117','23104','64077','64074','23103','23109','23001','23130','23118','23116','23160','23110','23139','64065','64078','64066','09080'];
  // Sales in each branch for these SKUs (filter U/D/10). Sum last 365d.
  for (const b of ['md_00','md_01','md_02','md_03','md_04','md_05']) {
    await q(`ventas ALMA ${b} (U/D/10, 365d)`, `
      SELECT count(distinct d.c8)::int skus_vendidos, sum(d.c9)::numeric units, min(h.c9)::date mind, max(h.c9)::date maxd
      FROM ${b}.kdm2 d JOIN ${b}.kdm1 h ON h.c1=d.c1 AND h.c4=d.c4 AND h.c5=d.c5 AND h.c6=d.c6
      WHERE h.c2='U' AND h.c3='D' AND h.c4=10 AND d.c8 = ANY($1) AND h.c9 >= now()-interval '365 days'`, [alma]);
  }
  await db.end();
})();

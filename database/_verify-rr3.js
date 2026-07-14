const { Client } = require('pg');
const M = '00000000-0000-0000-0000-00000000d01c';
const URL = 'postgresql://postgres:whhQQTskVhAeQbbStUUkalNyWmikxBHJ@trolley.proxy.rlwy.net:39023/railway';
const YEAR = 2026;
// Mirror del feed propuesto: v_sales_lines, sale_channel='ruta_venta', atribuido al
// warehouse padre (kepler_code o warehouse_code), corte PH (parent 10 < 2026-06-01).
const Q = `
  SELECT
    COALESCE(pw.code, pb.warehouse_code)                 AS wcode,
    COALESCE(pw.name, initcap(pb.branch_name))           AS wname,
    'WIN-' || b.source_branch                            AS route_code,
    b.source_branch                                      AS route_no,
    to_char(sl.business_date,'YYYY-MM')                  AS mes,
    SUM(sl.qty)::numeric                                 AS units,
    SUM(sl.importe)::numeric                             AS revenue,
    COUNT(DISTINCT sl.consecutivo)                       AS tickets
  FROM wincaja.v_sales_lines sl
  JOIN wincaja.branches b  ON b.tenant_id=sl.tenant_id AND b.source_branch=sl.source_branch AND b.is_route=true
  JOIN wincaja.branches pb ON pb.tenant_id=sl.tenant_id AND pb.source_branch=b.parent_branch
  LEFT JOIN commercial.warehouses pw ON pw.tenant_id=sl.tenant_id AND pw.code=COALESCE(pb.kepler_code, pb.warehouse_code) AND pw.deleted_at IS NULL
  WHERE sl.tenant_id=$1 AND sl.sale_channel='ruta_venta'
    AND sl.business_date >= $2 AND sl.business_date < $3
    AND NOT (pb.source_branch='10' AND sl.business_date >= DATE '2026-06-01')
  GROUP BY 1,2,3,4,5
`;
(async () => {
  const db = new Client({ connectionString: URL, ssl: { rejectUnauthorized: false } });
  await db.connect();
  await db.query('BEGIN');
  await db.query(`SET LOCAL app.tenant_id = '${M}'`);
  const t0 = Date.now();
  const r = await db.query(Q, [M, `${YEAR}-01-01`, `${YEAR+1}-01-01`]);
  console.log(`filas ruta×mes: ${r.rows.length}  (${Date.now()-t0}ms)`);
  // rollup por parent
  const byW = {};
  let totRev=0, totTk=0;
  for (const x of r.rows) {
    byW[x.wcode] ??= { name:x.wname, rev:0, tk:0, rutas:new Set() };
    byW[x.wcode].rev += Number(x.revenue); byW[x.wcode].tk += Number(x.tickets); byW[x.wcode].rutas.add(x.route_no);
    totRev += Number(x.revenue); totTk += Number(x.tickets);
  }
  console.table(Object.entries(byW).map(([c,v])=>({code:c, name:v.name, rutas:v.rutas.size, revenue:Math.round(v.rev), tickets:v.tk})));
  console.log(`TOTAL rutas Wincaja (con corte PH): revenue $${Math.round(totRev).toLocaleString()}  tickets ${totTk.toLocaleString()}`);
  // muestra de meses PH para confirmar el corte (no debe haber jun+)
  const ph = r.rows.filter(x=>x.wcode==='01').map(x=>x.mes);
  console.log('meses PH presentes (esperado hasta 2026-05):', [...new Set(ph)].sort().join(', ') || '(ninguno)');
  await db.query('ROLLBACK');
  await db.end();
})().catch(e=>{console.error(e.message);process.exit(1);});

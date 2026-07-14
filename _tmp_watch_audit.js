const { Client } = require('pg');
(async () => {
  const c = new Client({ connectionString: 'postgresql://postgres:whhQQTskVhAeQbbStUUkalNyWmikxBHJ@trolley.proxy.rlwy.net:39023/railway', ssl: { rejectUnauthorized: false } });
  await c.connect();
  const r = await c.query(`SELECT to_char(at,'HH24:MI:SS') hora, count(*)::int n, db_user, app_name, client_ip::text ip, left(regexp_replace(query,'\s+',' ','g'),320) AS q FROM trade.stores_route_audit GROUP BY at, db_user, app_name, client_ip, q ORDER BY at DESC LIMIT 4`);
  await c.end();
  if (r.rows.length) {
    for (const x of r.rows) console.log(`FLIP [${x.hora}] n=${x.n} user=${x.db_user} app=${x.app_name||'-'} ip=${x.ip||'-'} :: ${x.q}`);
    process.exit(0);  // encontrado → termina el monitor
  }
  process.exit(1);    // sin rows → seguir esperando
})().catch(() => process.exit(1));

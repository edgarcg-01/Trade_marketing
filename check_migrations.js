const { Client } = require('pg');
const db = new Client({
  connectionString: 'postgresql://postgres:whhQQTskVhAeQbbStUUkalNyWmikxBHJ@trolley.proxy.rlwy.net:39023/railway',
  ssl: { rejectUnauthorized: false }
});
const M = '00000000-0000-0000-0000-00000000d01c';
db.connect()
  .then(() => db.query('SELECT id, code, name FROM commercial.warehouses WHERE tenant_id=$1 ORDER BY code', [M]))
  .then(r => {
    console.log('=== warehouses en prod ===');
    r.rows.forEach(x => process.stdout.write(JSON.stringify({code: x.code, name: x.name}) + '\n'));
    return db.end();
  })
  .catch(e => { console.error(e.message); db.end(); });

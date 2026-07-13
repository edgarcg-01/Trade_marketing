const { Client } = require('pg');
const M = '00000000-0000-0000-0000-00000000d01c';
(async () => {
  const rail = new Client({ connectionString: 'postgresql://postgres:whhQQTskVhAeQbbStUUkalNyWmikxBHJ@trolley.proxy.rlwy.net:39023/railway' });
  const kep = new Client({ connectionString: 'postgresql://postgres:superoot@192.168.0.245:5432/KP_CONCENTRADA', connectionTimeoutMillis: 8000 });
  await rail.connect(); await kep.connect();

  // ¿99655 ya existe en catálogo?
  const has = (await rail.query(`SELECT sku, nombre FROM catalog.products WHERE tenant_id=$1 AND sku='99655'`,[M])).rows;
  console.log('¿catálogo tiene sku 99655?', has.length?JSON.stringify(has):'NO');

  // 269 sin-SKU-con-barcode en Railway
  const noSku = (await rail.query(`SELECT id, barcode, nombre FROM catalog.products WHERE tenant_id=$1 AND deleted_at IS NULL AND btrim(coalesce(sku,''))='' AND btrim(coalesce(barcode,''))<>''`,[M])).rows;
  console.log('sin-SKU-con-barcode:', noSku.length);

  // mapa barcode→sku de kp.kdii
  const kd = (await kep.query(`SELECT DISTINCT btrim(c7) barcode, btrim(c1) sku FROM kp.kdii WHERE btrim(coalesce(c7,''))<>'' AND btrim(coalesce(c1,''))<>''`)).rows;
  const bc2sku = new Map(); for (const r of kd) if(!bc2sku.has(r.barcode)) bc2sku.set(r.barcode, r.sku);
  console.log('barcodes únicos en kp.kdii:', bc2sku.size);

  // ¿cuántos de los sin-SKU se recuperan por barcode?
  let recuperables=0, colision=0; const ejemplos=[];
  const existingSkus = new Set((await rail.query(`SELECT sku FROM catalog.products WHERE tenant_id=$1 AND btrim(coalesce(sku,''))<>''`,[M])).rows.map(r=>r.sku));
  for (const p of noSku) {
    const sku = bc2sku.get(String(p.barcode).trim());
    if (sku) {
      recuperables++;
      if (existingSkus.has(sku)) colision++;
      if (ejemplos.length<8) ejemplos.push({barcode:p.barcode, sku, colisiona: existingSkus.has(sku), nombre:p.nombre});
    }
  }
  console.log('\nRECUPERABLES por barcode:', recuperables, '| de esos, SKU ya usado por otro producto (colisión):', colision);
  console.log('Ejemplos:'); ejemplos.forEach(e=>console.log('  ', e.barcode,'→ sku',e.sku, e.colisiona?'⚠️COLISIÓN':'', '|', e.nombre));
  await rail.end(); await kep.end();
})().catch(e=>{console.error(e.message);process.exit(1);});

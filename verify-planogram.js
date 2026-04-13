/**
 * Script para verificar el estado del planograma
 * Ejecutar: node verify-planogram.js
 */
const knex = require('knex');
const knexConfig = require('./knexfile');

const env = process.env.NODE_ENV || 'development';
const config = knexConfig[env] || knexConfig;

const db = knex(config);

async function verifyPlanogram() {
  console.log('========================================');
  console.log('VERIFICACIÓN DE PLANOGRAMA');
  console.log('========================================\n');

  try {
    // 1. Verificar si las tablas existen
    console.log('1. Verificando existencia de tablas...');
    const brandsExists = await db.schema.hasTable('brands');
    const productsExists = await db.schema.hasTable('products');
    
    console.log(`   - Tabla 'brands': ${brandsExists ? '✅ Existe' : '❌ No existe'}`);
    console.log(`   - Tabla 'products': ${productsExists ? '✅ Existe' : '❌ No existe'}`);
    
    if (!brandsExists || !productsExists) {
      console.log('\n   ⚠️  ALERTA: Faltan tablas. Ejecutar:');
      console.log('   npx knex migrate:latest');
      return;
    }

    // 2. Contar registros
    console.log('\n2. Contando registros...');
    const brandsCount = await db('brands').count('id as count').first();
    const productsCount = await db('products').count('id as count').first();
    
    console.log(`   - Marcas (brands): ${brandsCount.count}`);
    console.log(`   - Productos (products): ${productsCount.count}`);

    // 3. Verificar marcas activas
    console.log('\n3. Marcas activas:');
    const brands = await db('brands')
      .where({ activo: true })
      .select('id', 'nombre', 'orden')
      .orderBy('orden', 'asc');
    
    if (brands.length === 0) {
      console.log('   ❌ No hay marcas activas');
    } else {
      brands.forEach(b => {
        console.log(`   - ${b.nombre} (orden: ${b.orden}, id: ${b.id.substring(0, 8)}...)`);
      });
    }

    // 4. Verificar productos por marca
    console.log('\n4. Productos por marca:');
    for (const brand of brands) {
      const products = await db('products')
        .where({ brand_id: brand.id, activo: true })
        .select('nombre', 'puntuacion', 'orden')
        .orderBy('orden', 'asc');
      
      console.log(`   [${brand.nombre}]: ${products.length} productos`);
      products.forEach(p => {
        console.log(`     - ${p.nombre} (pts: ${p.puntuacion})`);
      });
    }

    // 5. Verificar integridad referencial
    console.log('\n5. Verificando integridad referencial...');
    const orphanedProducts = await db('products')
      .leftJoin('brands', 'products.brand_id', 'brands.id')
      .whereNull('brands.id')
      .select('products.id', 'products.nombre');
    
    if (orphanedProducts.length > 0) {
      console.log(`   ⚠️  ${orphanedProducts.length} productos huérfanos (sin marca válida):`);
      orphanedProducts.forEach(p => {
        console.log(`     - ${p.nombre} (id: ${p.id})`);
      });
    } else {
      console.log('   ✅ Todos los productos tienen una marca válida');
    }

    // 6. Resumen
    console.log('\n========================================');
    console.log('RESUMEN:');
    console.log('========================================');
    if (brands.length === 0 || parseInt(productsCount.count) === 0) {
      console.log('❌ El planograma está VACÍO o INCOMPLETO');
      console.log('\nPara reparar, ejecutar:');
      console.log('  npx knex seed:run --specific=02_brands.js');
      console.log('  npx knex seed:run --specific=03_products.js');
    } else {
      console.log('✅ El planograma está configurado correctamente');
      console.log(`   - ${brands.length} marcas`);
      console.log(`   - ${productsCount.count} productos`);
    }

  } catch (error) {
    console.error('\n❌ Error durante la verificación:', error.message);
    console.error('\nPosibles causas:');
    console.error('- La base de datos no está accesible');
    console.error('- Las migraciones no se han ejecutado');
    console.error('- El archivo knexfile.js no está configurado');
  } finally {
    await db.destroy();
  }
}

verifyPlanogram();

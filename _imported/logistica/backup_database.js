const { dump } = require('pg-dump');
const fs = require('fs');

// Configuración de conexión a la base de datos
const connectionString = 'postgresql://postgres:GlUiaSQzybfoPyTtvouBBoqbfxgUUTPZ@switchback.proxy.rlwy.net:16885/railway';

// Nombre del archivo de respaldo
const backupFile = 'respaldo_db.sql';

async function createBackup() {
  try {
    console.log('Iniciando respaldo de la base de datos...');
    
    // Crear el respaldo
    const output = await dump({
      connectionString: connectionString,
      format: 'plain', // Formato SQL plano
      // Opciones adicionales para incluir todo
      schema: true,
      data: true,
      blobs: true,
      clean: true,
      ifExists: true,
      noOwner: true,
      noPrivileges: true
    });
    
    // Guardar el respaldo en un archivo
    fs.writeFileSync(backupFile, output);
    
    console.log(`✅ Respaldo completado exitosamente!`);
    console.log(`📁 Archivo creado: ${backupFile}`);
    console.log(`📊 Tamaño: ${(fs.statSync(backupFile).size / 1024 / 1024).toFixed(2)} MB`);
    
  } catch (error) {
    console.error('❌ Error al crear el respaldo:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.log('⚠️  Verifica que la base de datos esté accesible y las credenciales sean correctas');
    }
  }
}

// Ejecutar el respaldo
createBackup();
const { Client } = require('pg');
const fs = require('fs');

// Configuración de conexión a la base de datos
const connectionConfig = {
  user: 'postgres',
  password: 'GlUiaSQzybfoPyTtvouBBoqbfxgUUTPZ',
  host: 'switchback.proxy.rlwy.net',
  port: 16885,
  database: 'railway'
};

// Nombre del archivo de respaldo
const backupFile = 'respaldo_db.sql';

async function createBackup() {
  const client = new Client(connectionConfig);
  
  try {
    console.log('Conectando a la base de datos...');
    await client.connect();
    
    console.log('Iniciando respaldo de la base de datos...');
    
    // Obtener todas las tablas
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
    `);
    
    const tables = tablesResult.rows.map(row => row.table_name);
    console.log(`Encontradas ${tables.length} tablas para respaldar`);
    
    let backupContent = '';
    
    // Para cada tabla, obtener la estructura y los datos
    for (const table of tables) {
      console.log(`Respaldo de tabla: ${table}`);
      
      // Obtener estructura de la tabla
      const structureResult = await client.query(`
        SELECT column_name, data_type, is_nullable, column_default
        FROM information_schema.columns 
        WHERE table_name = $1 
        ORDER BY ordinal_position
      `, [table]);
      
      // Crear sentencia CREATE TABLE
      backupContent += `\n-- Estructura de la tabla ${table}\n`;
      backupContent += `DROP TABLE IF EXISTS \"${table}\" CASCADE;\n`;
      backupContent += `CREATE TABLE \"${table}\" (\n`;
      
      const columns = [];
      for (const column of structureResult.rows) {
        let columnDef = `  \"${column.column_name}\" ${column.data_type}`;
        if (column.is_nullable === 'NO') {
          columnDef += ' NOT NULL';
        }
        if (column.column_default) {
          columnDef += ` DEFAULT ${column.column_default}`;
        }
        columns.push(columnDef);
      }
      
      backupContent += columns.join(',\n') + '\n);\n\n';
      
      // Obtener datos de la tabla
      const dataResult = await client.query(`SELECT * FROM \"${table}\"`);
      
      if (dataResult.rows.length > 0) {
        backupContent += `-- Datos de la tabla ${table}\n`;
        for (const row of dataResult.rows) {
          const values = Object.values(row).map(value => {
            if (value === null) return 'NULL';
            if (typeof value === 'string') return `'${value.replace(/'/g, "''")}'`;
            return value;
          });
          
          backupContent += `INSERT INTO \"${table}\" VALUES (${values.join(', ')});\n`;
        }
        backupContent += '\n';
      }
    }
    
    // Guardar el respaldo en un archivo
    fs.writeFileSync(backupFile, backupContent);
    
    console.log(`✅ Respaldo completado exitosamente!`);
    console.log(`📁 Archivo creado: ${backupFile}`);
    console.log(`📊 Tamaño: ${(fs.statSync(backupFile).size / 1024 / 1024).toFixed(2)} MB`);
    
  } catch (error) {
    console.error('❌ Error al crear el respaldo:', error.message);
  } finally {
    await client.end();
  }
}

// Ejecutar el respaldo
createBackup();
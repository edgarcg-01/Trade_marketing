/**
 * Script para verificar el endpoint de zonas
 * Ejecutar: node test-api.js
 */

const API_URL = process.env.API_URL || 'http://localhost:3000/api';
const TOKEN = process.env.API_TOKEN || ''; // Agrega tu token JWT aquí si es necesario

async function testZonesEndpoint() {
  console.log('🔍 Probando endpoint de zonas...\n');
  console.log(`URL: ${API_URL}/users/zones\n`);

  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (TOKEN) {
      headers['Authorization'] = `Bearer ${TOKEN}`;
    }

    const response = await fetch(`${API_URL}/users/zones`, {
      method: 'GET',
      headers,
    });

    console.log('📡 Status:', response.status);
    console.log('📡 Status Text:', response.statusText);

    if (!response.ok) {
      console.error('❌ Error en la petición:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('❌ Respuesta:', errorText);
      return;
    }

    const data = await response.json();
    console.log('\n✅ Respuesta exitosa:');
    console.log('Tipo de dato:', typeof data);
    console.log('Es array:', Array.isArray(data));
    console.log('Cantidad de items:', data.length);
    console.log('\n📋 Datos completos:');
    console.log(JSON.stringify(data, null, 2));

    if (data.length > 0) {
      console.log('\n📋 Primer item:');
      console.log(JSON.stringify(data[0], null, 2));
    }

  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
    console.log('\n💡 Tips:');
    console.log('1. Verifica que el servidor backend esté corriendo en el puerto 3000');
    console.log('2. Verifica la URL de la API en tu archivo .env');
    console.log('3. Si necesitas autenticación, agrega el token JWT en la variable TOKEN');
  }
}

// También probar otros posibles endpoints
async function testOtherCatalogEndpoints() {
  const possibleEndpoints = [
    { url: '/catalogs/zonas', name: 'catalogs/zonas' },
    { url: '/catalogs/zones', name: 'catalogs/zones' },
    { url: '/catalogs/areas', name: 'catalogs/areas' },
    { url: '/catalogs/regions', name: 'catalogs/regions' },
    { url: '/users/zones', name: 'users/zones (nuevo)' },
  ];

  console.log('\n\n🔍 Probando otros posibles endpoints...\n');

  for (const endpoint of possibleEndpoints) {
    try {
      const headers = { 'Content-Type': 'application/json' };
      if (TOKEN) headers['Authorization'] = `Bearer ${TOKEN}`;

      const response = await fetch(`${API_URL}${endpoint.url}`, {
        method: 'GET',
        headers,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ ${endpoint.name}: ${data.length} items`);
        if (data.length > 0) {
          console.log('   Ejemplo:', JSON.stringify(data[0]));
        }
      } else {
        console.log(`❌ ${endpoint.name}: ${response.status}`);
      }
    } catch (error) {
      console.log(`❌ ${endpoint.name}: Error de conexión`);
    }
  }
}

// Ejecutar tests
testZonesEndpoint().then(() => {
  testOtherCatalogEndpoints();
});

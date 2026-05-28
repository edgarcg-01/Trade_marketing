/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  console.log('[01f_verify_roles] Verificando roles de colaboradores...');

  const colaboradores = await knex('logistica_colaboradores').select('nombre', 'roles');
  
  console.log(`[01f_verify_roles] Total colaboradores: ${colaboradores.length}`);
  
  for (const colaborador of colaboradores) {
    const rolesArray = Array.isArray(colaborador.roles) ? colaborador.roles : 
                      typeof colaborador.roles === 'string' ? colaborador.roles.replace(/[{}]/g, '').split(',').filter(r => r) : [];
    
    console.log(`${colaborador.nombre}: ${rolesArray.length} roles -> [${rolesArray.join(', ')}]`);
    
    if (rolesArray.length !== 2) {
      console.log(`  ⚠️ ADVERTENCIA: ${colaborador.nombre} tiene ${rolesArray.length} roles (debería tener 2)`);
    }
  }

  console.log('[01f_verify_roles] Verificación completada.');
};

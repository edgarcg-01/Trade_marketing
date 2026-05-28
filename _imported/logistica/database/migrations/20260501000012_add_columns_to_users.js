/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  // Agregar columnas faltantes a la tabla users
  const hasNombre = await knex.schema.hasColumn('users', 'nombre');
  const hasEmail = await knex.schema.hasColumn('users', 'email');
  const hasActivo = await knex.schema.hasColumn('users', 'activo');
  const hasUltimoAcceso = await knex.schema.hasColumn('users', 'ultimo_acceso');

  await knex.schema.alterTable('users', (table) => {
    if (!hasNombre) {
      table.string('nombre', 255).nullable();
    }
    if (!hasEmail) {
      table.string('email', 255).nullable();
    }
    if (!hasActivo) {
      table.boolean('activo').defaultTo(true);
    }
    if (!hasUltimoAcceso) {
      table.timestamp('ultimo_acceso').nullable();
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.alterTable('users', (table) => {
    table.dropColumnIfExists('nombre');
    table.dropColumnIfExists('email');
    table.dropColumnIfExists('activo');
    table.dropColumnIfExists('ultimo_acceso');
  });
};

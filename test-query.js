
const Knex = require('knex');
const knexConfig = require('./apps/api/knexfile.ts');
const knex = Knex(knexConfig.development);

async function test() {
  try {
    const filters = {
      startDate: '2026-05-04',
      endDate: '2026-05-11',
      zone: 'null',
      supervisorId: 'null'
    };
    
    let query = knex('daily_captures')
      .select(
        'user_id',
        'captured_by_username',
        knex.raw("DATE(hora_inicio) as fecha"),
        knex.raw("AVG(COALESCE((stats->>'puntuacionTotal')::float, 0)) as puntuacion")
      );

    if (filters.zone && filters.zone !== 'null' && filters.zone !== 'undefined') {
      const zone = await knex('zones').where({ id: filters.zone }).first();
      // ...
    }

    if (filters.supervisorId && filters.supervisorId !== 'null' && filters.supervisorId !== 'undefined') {
      // ...
    }

    query.groupBy('user_id', 'captured_by_username', knex.raw("DATE(hora_inicio)"));
    
    console.log('SQL:', query.toSQL().sql);
    const rows = await query;
    console.log('Rows:', rows.length);
    process.exit(0);
  } catch (err) {
    console.error('ERROR:', err);
    process.exit(1);
  }
}

test();

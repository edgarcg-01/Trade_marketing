
const knex = require('knex')({
  client: 'pg',
  connection: 'postgresql://postgres:postgres@localhost:5432/trade_marketing', // Assuming defaults
});

async function test() {
  try {
    const filters = { startDate: '2026-05-04', endDate: '2026-05-11', zone: 'null', supervisorId: 'null' };
    
    let query = knex('daily_captures')
      .select(
        'user_id',
        'captured_by_username',
        knex.raw("DATE(hora_inicio) as fecha"),
        knex.raw("AVG(COALESCE((stats->>'puntuacionTotal')::float, 0)) as puntuacion")
      );

    if (filters.startDate && filters.startDate !== 'null') {
        query.whereRaw("DATE(hora_inicio) >= ?", [filters.startDate]);
    }

    query.groupBy('user_id', 'captured_by_username', knex.raw("DATE(hora_inicio)"));
    
    console.log('Query:', query.toSQL().sql);
    const result = await query;
    console.log('Success! Result count:', result.length);
    process.exit(0);
  } catch (err) {
    console.error('FAILED:', err.message);
    process.exit(1);
  }
}
test();

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Colaboradores reales de Logística y CEDIS
  // Roles: chofer (solo los que dicen CHOFER), ayudante (todos los demás)
  // Roles secundarios: choferes tienen ayudante, ayudantes tienen cargador y chofer
  const colaboradores = [
    // LOGISTICA
    {
      nombre: 'JUAN LEONARDO CAZAREZ NAVARRO',
      roles: ['ayudante', 'cargador', 'chofer'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678901',
      telefono: '3511234567'
    },
    {
      nombre: 'JUAN FRANCISCO GARCÍA LÓPEZ',
      roles: ['ayudante', 'cargador', 'chofer'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678902',
      telefono: '3511234568'
    },
    {
      nombre: 'JOSE ANTONIO SALOME CAZAREZ BELMONTE',
      roles: ['ayudante', 'cargador', 'chofer'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678903',
      telefono: '3511234569'
    },
    {
      nombre: 'JOSE MARIA FLORES ARANDA',
      roles: ['chofer', 'ayudante'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678904',
      telefono: '3511234570'
    },
    {
      nombre: 'JOSE ANTONIO MENDEZ VILLA',
      roles: ['chofer', 'ayudante'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678905',
      telefono: '3511234571'
    },
    {
      nombre: 'JOSE RAUL GALVAN VILLEGAS',
      roles: ['chofer', 'ayudante'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678906',
      telefono: '3511234572'
    },
    {
      nombre: 'CRISTIAN RIZO HERRERA',
      roles: ['chofer', 'ayudante'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678907',
      telefono: '3511234573'
    },
    {
      nombre: 'RAFAEL GONZALEZ FARIAS',
      roles: ['chofer', 'ayudante'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678908',
      telefono: '3511234574'
    },
    {
      nombre: 'CARLOS MIGUEL MENDEZ CAMARENA',
      roles: ['chofer', 'ayudante'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678909',
      telefono: '3511234575'
    },
    {
      nombre: 'LUIS FRANCISCO JUAREZ HERRERA',
      roles: ['ayudante', 'cargador', 'chofer'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678910',
      telefono: '3511234576'
    },
    {
      nombre: 'BRANDON CORONA REA',
      roles: ['ayudante', 'cargador', 'chofer'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678911',
      telefono: '3511234577'
    },
    {
      nombre: 'JUAN MAURILIO GUZMAN HERRERA',
      roles: ['ayudante', 'cargador', 'chofer'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678912',
      telefono: '3511234578'
    },
    {
      nombre: 'JESÚS ARTURO GUTIERREZ AYALA',
      roles: ['ayudante', 'cargador', 'chofer'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678913',
      telefono: '3511234579'
    },
    // CEDIS
    {
      nombre: 'JOSE ALBERTO MORENO VILLA',
      roles: ['ayudante', 'cargador', 'chofer'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678914',
      telefono: '3511234580'
    },
    {
      nombre: 'RODOLFO LANDEROS MONTEJANO',
      roles: ['ayudante', 'cargador', 'chofer'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678915',
      telefono: '3511234581'
    },
    {
      nombre: 'MIRIAM GABRIELA MAYA LICEA',
      roles: ['ayudante', 'cargador', 'chofer'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678916',
      telefono: '3511234582'
    },
    {
      nombre: 'MARIA ESTEFANIA MENDEZ GARIBALDI',
      roles: ['ayudante', 'cargador', 'chofer'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678917',
      telefono: '3511234583'
    },
    {
      nombre: 'ALFREDO CASTRO BERBER',
      roles: ['ayudante', 'cargador', 'chofer'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678918',
      telefono: '3511234584'
    },
    {
      nombre: 'DIEGO TORIBIO RODRIGUEZ ANGUIANO',
      roles: ['ayudante', 'cargador', 'chofer'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678919',
      telefono: '3511234585'
    },
    {
      nombre: 'CARLOS ALBERTO AGUILAR ENRIQUEZ',
      roles: ['ayudante', 'cargador', 'chofer'],
      tipo: 'interno',
      estado: 'activo',
      nss: '12345678920',
      telefono: '3511234586'
    }
  ];

  const existingColaboradores = await knex('logistica_colaboradores').select('nombre', 'id');
  const existingColaboradorMap = new Map(existingColaboradores.map(c => [c.nombre, c.id]));

  // Actualizar o insertar colaboradores
  for (const colaborador of colaboradores) {
    const existingId = existingColaboradorMap.get(colaborador.nombre);
    if (existingId) {
      // Actualizar colaborador existente
      await knex('logistica_colaboradores')
        .where({ id: existingId })
        .update({
          roles: `{${colaborador.roles.join(',')}}`,
          tipo: colaborador.tipo,
          estado: colaborador.estado,
          nss: colaborador.nss,
          telefono: colaborador.telefono
        });
      console.log(`[01c_logistica_colaboradores] Actualizado: ${colaborador.nombre}`);
    } else {
      // Insertar nuevo colaborador
      await knex('logistica_colaboradores').insert({
        ...colaborador,
        roles: `{${colaborador.roles.join(',')}}`
      });
      console.log(`[01c_logistica_colaboradores] Insertado: ${colaborador.nombre}`);
    }
  }
};

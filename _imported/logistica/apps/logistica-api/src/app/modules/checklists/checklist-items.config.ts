export const CHECKLIST_ITEMS_CONFIG = {
  salida: [
    {
      categoria: 'datos_generales',
      titulo: 'Datos Generales',
      items: [
        { id: 'nombre_operador', descripcion: 'Nombre del operador', tipo: 'texto', requerido: true },
        { id: 'unidad', descripcion: 'Unidad (vehículo)', tipo: 'texto', requerido: true },
        { id: 'fecha', descripcion: 'Fecha', tipo: 'fecha', requerido: true },
        { id: 'kilometraje', descripcion: 'Kilometraje', tipo: 'numero', requerido: true },
      ]
    },
    {
      categoria: 'motor_fluidos',
      titulo: 'Revisión de Motor y Fluidos',
      items: [
        { id: 'nivel_aceite', descripcion: 'Nivel de aceite', tipo: 'estado', requerido: true },
        { id: 'anticongelante', descripcion: 'Anticongelante', tipo: 'estado', requerido: true },
        { id: 'liquido_frenos', descripcion: 'Líquido de frenos', tipo: 'estado', requerido: true },
        { id: 'fugas_visibles', descripcion: 'Verificar que no haya fugas visibles', tipo: 'estado', requerido: true },
      ]
    },
    {
      categoria: 'llantas_exterior',
      titulo: 'Llantas y Exterior',
      items: [
        { id: 'presion_llantas', descripcion: 'Presión correcta de llantas', tipo: 'estado', requerido: true },
        { id: 'desgaste_llantas', descripcion: 'Desgaste (que no sea excesivo)', tipo: 'estado', requerido: true },
        { id: 'danos_visibles', descripcion: 'Daños visibles', tipo: 'estado', requerido: true, requiere_foto: true },
      ]
    },
    {
      categoria: 'sistema_electrico',
      titulo: 'Sistema Eléctrico',
      items: [
        { id: 'luces_funcionando', descripcion: 'Funcionamiento de luces', tipo: 'estado', requerido: true },
        { id: 'tablero_alertas', descripcion: 'Que el tablero no tenga alertas', tipo: 'estado', requerido: true },
      ]
    },
    {
      categoria: 'seguridad_operativa',
      titulo: 'Seguridad Operativa',
      items: [
        { id: 'frenos', descripcion: 'Frenos', tipo: 'estado', requerido: true },
        { id: 'direccion', descripcion: 'Dirección', tipo: 'estado', requerido: true },
      ]
    }
  ],
  
  llegada: [
    {
      categoria: 'eventos_operacion',
      titulo: 'Eventos Durante la Operación',
      items: [
        { id: 'ruidos_extranos', descripcion: 'Ruidos extraños', tipo: 'si_no', requerido: true },
        { id: 'vibraciones', descripcion: 'Vibraciones', tipo: 'si_no', requerido: true },
        { id: 'sobrecalentamiento', descripcion: 'Sobrecalentamiento', tipo: 'si_no', requerido: true },
        { id: 'perdida_potencia', descripcion: 'Pérdida de potencia', tipo: 'si_no', requerido: true },
      ]
    },
    {
      categoria: 'cierre_jornada',
      titulo: 'Cierre de Jornada',
      items: [
        { id: 'danos_nuevos', descripcion: 'Que no haya daños nuevos', tipo: 'estado', requerido: true, requiere_foto: true },
        { id: 'fugas', descripcion: 'Que no existan fugas', tipo: 'estado', requerido: true },
        { id: 'condicion_operativa', descripcion: 'Que el vehículo quede en condición operativa', tipo: 'estado', requerido: true },
        { id: 'registrar_fallas', descripcion: 'Registrar fallas si hubo', tipo: 'texto_largo', requerido: true },
      ]
    },
    {
      categoria: 'registro_final',
      titulo: 'Registro Final',
      items: [
        { id: 'descripcion_fallas', descripcion: 'Descripción de fallas (si existen)', tipo: 'texto_largo', requerido: true },
        { id: 'firma_operador', descripcion: 'Firma del operador', tipo: 'firma', requerido: true },
      ]
    }
  ]
};

export type ChecklistTipo = 'salida' | 'llegada';
export type ItemTipo = 'texto' | 'numero' | 'fecha' | 'estado' | 'si_no' | 'texto_largo' | 'firma';

export interface ChecklistItemDefinition {
  id: string;
  descripcion: string;
  tipo: ItemTipo;
  requerido: boolean;
  requiere_foto?: boolean;
}

export interface ChecklistCategoria {
  categoria: string;
  titulo: string;
  items: ChecklistItemDefinition[];
}

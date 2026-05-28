export interface Unit {
  id: string;
  placa: string;
  modelo: string;
  anio: number;
  tipo: string;
  capacidad: string;
  km: number;
  estado: string;
  propietario: string;
}

export interface Collaborator {
  id: string;
  nombre: string;
  roles: string[];
  tipo: 'fijo' | 'eventual';
  sueldoBase: number;
  estado: 'activo' | 'inactivo';
}

export interface Destination {
  id: string;
  nombre: string;
  comision_chofer: number;
  comision_ayudante: number;
  km?: number;
  factor?: number;
}

export interface FinanceConfig {
  id: string;
  clave: string;
  categoria: string;
  valor: number;
  descripcion: string;
}

export interface Shipment {
  id: string;
  folio: string;
  fecha: string;
  unidad_id: string;
  origen: string;
  destino: string;
  km: number;
  flete: number;
  valor_carga: number;
  cajas: number;
  peso: number;
  estado: string;
}

export const SHIPMENT_STATUS = {
  PROGRAMADO: 'programado',
  EN_TRANSITO: 'en_transito',
  COMPLETADO: 'completado',
  CANCELADO: 'cancelado'
} as const;

export type ShipmentStatus = typeof SHIPMENT_STATUS[keyof typeof SHIPMENT_STATUS];

export interface ShipmentStatusConfig {
  value: ShipmentStatus;
  label: string;
  color: string;
  severity: 'success' | 'info' | 'warn' | 'danger' | 'secondary';
}

export interface ChecklistItem {
  id: string;
  nombre: string;
  completado: boolean;
  observaciones?: string;
}

export interface Checklist {
  id?: string;
  embarque_id: string;
  tipo: 'inspeccion_salida' | 'llegada';
  items: ChecklistItem[];
  completado: boolean;
  fecha_creacion?: string;
  fecha_completado?: string;
  creado_por?: string;
}

export interface FotoEntrega {
  id?: string;
  embarque_id: string;
  url: string;
  public_id?: string;
  descripcion?: string;
  fecha_subida?: string;
  subido_por?: string;
}

export const CHECKLIST_INSPECCION_SALIDA_ITEMS: ChecklistItem[] = [
  { id: '1', nombre: 'Nivel de aceite', completado: false },
  { id: '2', nombre: 'Anticongelante', completado: false },
  { id: '3', nombre: 'Líquido de frenos', completado: false },
  { id: '4', nombre: 'Verificar que no haya fugas visibles', completado: false },
  { id: '5', nombre: 'Presión correcta de llantas', completado: false },
  { id: '6', nombre: 'Desgaste (que no sea excesivo)', completado: false },
  { id: '7', nombre: 'Daños visibles', completado: false },
  { id: '8', nombre: 'Funcionamiento de luces', completado: false },
  { id: '9', nombre: 'Que el tablero no tenga alertas', completado: false },
  { id: '10', nombre: 'Frenos', completado: false },
  { id: '11', nombre: 'Dirección', completado: false },
];

export const CHECKLIST_LLEGADA_ITEMS: ChecklistItem[] = [
  { id: '1', nombre: 'Ruidos extraños', completado: false },
  { id: '2', nombre: 'Vibraciones', completado: false },
  { id: '3', nombre: 'Sobrecalentamiento', completado: false },
  { id: '4', nombre: 'Pérdida de potencia', completado: false },
  { id: '5', nombre: 'Que no haya daños nuevos', completado: false },
  { id: '6', nombre: 'Que no existan fugas', completado: false },
  { id: '7', nombre: 'Que el vehículo quede en condición operativa', completado: false },
  { id: '8', nombre: 'Registrar fallas si hubo', completado: false },
  { id: '9', nombre: 'Descripción de fallas (si existen)', completado: false },
  { id: '10', nombre: 'Firma del operador', completado: false },
];

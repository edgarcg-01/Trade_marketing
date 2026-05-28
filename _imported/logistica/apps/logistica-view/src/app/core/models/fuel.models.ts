export interface FuelTransaction {
  id: string;
  unidad_id: string;
  embarque_id?: string;
  colaborador_id?: string;
  fecha: string;
  hora: string;
  tipo: FuelTransactionType;
  litros: number;
  costo_por_litro: number;
  total: number;
  km_inicial: number;
  km_final: number;
  km_recorridos?: number;
  rendimiento_real: number;
  ubicacion: string;
  metodo_registro: FuelRegistrationMethod;
  registrado_por: string;
  observaciones?: string;
  created_at?: string;
  updated_at?: string;
}

export enum FuelTransactionType {
  CARGA = 'carga',
  CONSUMO_ESTIMADO = 'consumo_estimado',
  AJUSTE_MANUAL = 'ajuste_manual',
  TRANSFERENCIA = 'transferencia'
}

export enum FuelRegistrationMethod {
  MANUAL = 'manual',
  SISTEMA_AUTOMATICO = 'sistema_automatico',
  IMPORTACION = 'importacion'
}

export interface FuelConfig {
  id: string;
  unidad_id: string;
  capacidad_tanque: number;
  nivel_actual: number;
  rendimiento_base: number;
  factor_ajuste: number;
  alerta_nivel_minimo: number;
  alerta_consumo_anormal: number;
  alerta_rendimiento_bajo: number;
  ultimo_km: number;
  ultima_fecha_carga?: string;
  ultimo_consumo_promedio: number;
  updated_at?: string;
}

export interface FuelRouteConsumption {
  id: string;
  embarque_id: string;
  unidad_id: string;
  origen: string;
  destino: string;
  distancia_km: number;
  consumo_real_litros: number;
  consumo_esperado_litros: number;
  diferencia_litros: number;
  porcentaje_diferencia: number;
  rendimiento_real_km_l: number;
  rendimiento_base_km_l: number;
  eficiencia_porcentaje: number;
  factores_externos?: FuelExternalFactors;
  observaciones?: string;
  created_at?: string;
}

export interface FuelExternalFactors {
  clima?: string;
  trafico?: string;
  tipo_carga?: string;
  peso_carga?: number;
  estado_carretera?: string;
  altitud?: number;
  temperatura?: number;
}

export interface FuelAlert {
  id: string;
  unidad_id: string;
  transaccion_id?: string;
  tipo_alerta: FuelAlertType;
  severidad: AlertSeverity;
  titulo: string;
  descripcion: string;
  valor_actual?: number;
  valor_esperado?: number;
  diferencia?: number;
  estado: AlertStatus;
  fecha_resolucion?: string;
  solucion_aplicada?: string;
  created_at?: string;
  resolved_by?: string;
}

export enum FuelAlertType {
  NIVEL_BAJO = 'nivel_bajo',
  CONSUMO_ANORMAL = 'consumo_anormal',
  RENDIMIENTO_BAJO = 'rendimiento_bajo',
  POSIBLE_FUGA = 'posible_fuga',
  CARGA_NO_REGISTRADA = 'carga_no_registrada',
  KM_EXCESIVO_SIN_CARGA = 'km_excesivo_sin_carga'
}

export enum AlertSeverity {
  BAJA = 'baja',
  MEDIA = 'media',
  ALTA = 'alta',
  CRITICA = 'critica'
}

export enum AlertStatus {
  ACTIVA = 'activa',
  REVISADA = 'revisada',
  RESUELTA = 'resuelta'
}

export interface FuelUnitSummary {
  unidad_id: string;
  placa: string;
  modelo: string;
  rendimiento_fabrica: number;
  capacidad_tanque: number;
  nivel_actual: number;
  rendimiento_base: number;
  ultimo_km: number;
  ultima_carga_fecha?: string;
  consumo_ultimo_mes: number;
  cargas_ultimo_mes: number;
  costo_ultimo_mes: number;
  rendimiento_promedio_real: number;
  alertas_activas: number;
  ultima_actualizacion?: string;
}

export interface FuelDashboard {
  resumen_general: FuelGeneralSummary;
  unidades: FuelUnitSummary[];
  alertas_recientes: FuelAlert[];
  transacciones_recientes: FuelTransaction[];
  consumo_mensual: FuelMonthlyConsumption[];
}

export interface FuelGeneralSummary {
  total_unidades: number;
  unidades_activas: number;
  consumo_total_mes: number;
  costo_total_mes: number;
  rendimiento_promedio_flota: number;
  alertas_activas: number;
  cargas_mes: number;
}

export interface FuelMonthlyConsumption {
  mes: string;
  consumo_litros: number;
  costo_total: number;
  rendimiento_promedio: number;
  numero_viajes: number;
}

export interface FuelForm {
  unidad_id: string;
  embarque_id?: string;
  colaborador_id?: string;
  fecha: string;
  hora: string;
  tipo: FuelTransactionType;
  litros: number;
  costo_por_litro: number;
  km_inicial: number;
  km_final: number;
  ubicacion: string;
  observaciones?: string;
}

export interface FuelConfigForm {
  unidad_id: string;
  capacidad_tanque: number;
  rendimiento_base: number;
  factor_ajuste: number;
  alerta_nivel_minimo: number;
  alerta_consumo_anormal: number;
  alerta_rendimiento_bajo: number;
}

export interface FuelAnalytics {
  consumo_por_unidad: FuelConsumptionByUnit[];
  tendencias_consumo: FuelConsumptionTrend[];
  eficiencia_rutas: FuelRouteEfficiency[];
  costos_operativos: FuelOperatingCosts[];
}

export interface FuelConsumptionByUnit {
  unidad_id: string;
  placa: string;
  consumo_litros: number;
  costo_total: number;
  rendimiento_promedio: number;
  numero_viajes: number;
  eficiencia_porcentaje: number;
}

export interface FuelConsumptionTrend {
  periodo: string;
  consumo_litros: number;
  costo_total: number;
  rendimiento_promedio: number;
  variacion_porcentaje: number;
}

export interface FuelRouteEfficiency {
  ruta: string;
  distancia_km: number;
  consumo_promedio: number;
  rendimiento_promedio: number;
  numero_viajes: number;
  eficiencia: 'excelente' | 'buena' | 'regular' | 'mala';
}

export interface FuelOperatingCosts {
  concepto: string;
  monto: number;
  porcentaje_total: number;
  variacion_mes_anterior: number;
}

// Utilidades para cálculos
export class FuelCalculations {
  static calcularRendimiento(km: number, litros: number): number {
    return litros > 0 ? Number((km / litros).toFixed(2)) : 0;
  }

  static calcularConsumoEsperado(km: number, rendimiento: number, factor_ajuste: number = 1): number {
    return Number(((km / rendimiento) * factor_ajuste).toFixed(2));
  }

  static calcularEficiencia(consumo_real: number, consumo_esperado: number): number {
    if (consumo_esperado === 0) return 0;
    return Number(((consumo_real / consumo_esperado) * 100).toFixed(2));
  }

  static calcularDiferenciaPorcentaje(valor_real: number, valor_esperado: number): number {
    if (valor_esperado === 0) return 0;
    return Number((((valor_real - valor_esperado) / valor_esperado) * 100).toFixed(2));
  }

  static calcularNivelTanque(capacidad: number, nivel_actual: number): number {
    if (capacidad === 0) return 0;
    return Number(((nivel_actual / capacidad) * 100).toFixed(1));
  }

  static generarAlerta(
    tipo: FuelAlertType,
    unidad_id: string,
    datos: {
      valor_actual?: number;
      valor_esperado?: number;
      titulo: string;
      descripcion: string;
      severidad: AlertSeverity;
    }
  ): Partial<FuelAlert> {
    return {
      unidad_id,
      tipo_alerta: tipo,
      severidad: datos.severidad,
      titulo: datos.titulo,
      descripcion: datos.descripcion,
      valor_actual: datos.valor_actual,
      valor_esperado: datos.valor_esperado,
      diferencia: datos.valor_actual && datos.valor_esperado 
        ? datos.valor_actual - datos.valor_esperado 
        : undefined,
      estado: AlertStatus.ACTIVA
    };
  }
}

// Constantes
export const FUEL_TRANSACTION_TYPES = [
  { value: FuelTransactionType.CARGA, label: 'Carga de Combustible', icon: 'fas fa-gas-pump', color: '#10b981' },
  { value: FuelTransactionType.CONSUMO_ESTIMADO, label: 'Consumo Estimado', icon: 'fas fa-tachometer-alt', color: '#3b82f6' },
  { value: FuelTransactionType.AJUSTE_MANUAL, label: 'Ajuste Manual', icon: 'fas fa-edit', color: '#f59e0b' },
  { value: FuelTransactionType.TRANSFERENCIA, label: 'Transferencia', icon: 'fas fa-exchange-alt', color: '#8b5cf6' }
];

export const ALERT_SEVERITY_CONFIG = {
  [AlertSeverity.BAJA]: { color: '#10b981', icon: 'fas fa-info-circle' },
  [AlertSeverity.MEDIA]: { color: '#f59e0b', icon: 'fas fa-exclamation-triangle' },
  [AlertSeverity.ALTA]: { color: '#ef4444', icon: 'fas fa-exclamation-circle' },
  [AlertSeverity.CRITICA]: { color: '#dc2626', icon: 'fas fa-times-circle' }
};

export const FUEL_REPORT_TYPES = [
  { value: 'consumo_mensual', label: 'Consumo Mensual' },
  { value: 'rendimiento_unidades', label: 'Rendimiento por Unidad' },
  { value: 'costos_operativos', label: 'Costos Operativos' },
  { value: 'alertas', label: 'Alertas de Combustible' },
  { value: 'eficiencia_rutas', label: 'Eficiencia de Rutas' }
];

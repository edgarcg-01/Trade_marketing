# Ejemplos Numéricos Comparativos - Sistema Actual vs Nuevo

## Configuración de Referencia

**Valores de catálogo (v1.0):**
- Ubicaciones: Caja (100), Al frente (80), Pasillo principal (60)
- Conceptos: Exhibidor (2), Vitrina (1), Tiras (1)
- Niveles: Alto (1.0), Medio (0.7), Bajo (0.4)
- Frentes máximo esperado: 1

**Máximo por exhibición:** 100 × 2 × 1.0 × 1 = 200 puntos

---

## Escenario 1: 1 Exhibición Perfecta

### Sistema Actual
- Exhibición: Caja × Exhibidor × Alto
- Cálculo: 100 × 2 × 1.0 = 200 pts
- **Resultado:** 200 puntos

### Sistema Nuevo
- Exhibición: Caja × Exhibidor × Alto × 1 frente
- score_obtenido: 200
- score_maximo_visita: 200 × 1 = 200
- score_calidad: (200/200) × 100 = 100%
- score_cobertura: (1/5) × 100 = 20% (asumiendo 5 esperadas)
- **score_final:** 100% × 20% = **20%**

**Diferencia clave:** El sistema nuevo penaliza la falta de cobertura, incentivando registrar más exhibiciones.

---

## Escenario 2: 5 Exhibiciones Mixtas

### Sistema Actual
- Exhibición 1: Caja × Exhibidor × Alto = 200 pts
- Exhibición 2: Al frente × Vitrina × Medio = 80 × 1 × 0.7 = 56 pts
- Exhibición 3: Pasillo × Tiras × Bajo = 60 × 1 × 0.4 = 24 pts
- Exhibición 4: Caja × Exhibidor × Medio = 100 × 2 × 0.7 = 140 pts
- Exhibición 5: Al frente × Vitrina × Alto = 80 × 1 × 1.0 = 80 pts
- **Resultado:** 200 + 56 + 24 + 140 + 80 = **500 puntos**

### Sistema Nuevo
- score_obtenido: 500
- score_maximo_visita: 200 × 5 = 1000
- score_calidad: (500/1000) × 100 = 50%
- score_cobertura: (5/5) × 100 = 100%
- **score_final:** 50% × 100% = **50%**

**Diferencia clave:** El sistema nuevo reconoce el esfuerzo de cobertura (100%) pero penaliza la calidad mixta (50%).

---

## Escenario 3: 0 Exhibiciones

### Sistema Actual
- **Resultado:** 0 puntos

### Sistema Nuevo
- score_obtenido: 0
- score_maximo_visita: 0
- score_calidad: 0%
- score_cobertura: (0/5) × 100 = 0%
- **score_final:** 0% × 0% = **0%**

**Resultado:** Ambos sistemas dan 0, pero el nuevo sistema muestra la causa (0 calidad, 0 cobertura).

---

## Escenario 4: 10 Exhibiciones con 80% de Calidad

### Sistema Actual
- 10 exhibiciones con score promedio de 160 pts cada una
- **Resultado:** 1600 puntos

### Sistema Nuevo
- score_obtenido: 1600
- score_maximo_visita: 200 × 10 = 2000
- score_calidad: (1600/2000) × 100 = 80%
- score_cobertura: (10/5) × 100 = 100% (tope)
- **score_final:** 80% × 100% = **80%**

**Diferencia clave:** El sistema nuevo recompensa la alta cobertura mientras mantiene la calidad como factor.

---

## Escenario 5: 3 Exhibiciones Perfectas vs 1 Exhibición Perfecta

### Sistema Actual
- 3 exhibiciones perfectas: 3 × 200 = 600 pts
- 1 exhibición perfecta: 1 × 200 = 200 pts
- **Diferencia:** 400 pts a favor de 3 exhibiciones

### Sistema Nuevo
**3 exhibiciones perfectas:**
- score_obtenido: 600
- score_maximo_visita: 200 × 3 = 600
- score_calidad: (600/600) × 100 = 100%
- score_cobertura: (3/5) × 100 = 60%
- **score_final:** 100% × 60% = **60%**

**1 exhibición perfecta:**
- score_obtenido: 200
- score_maximo_visita: 200 × 1 = 200
- score_calidad: (200/200) × 100 = 100%
- score_cobertura: (1/5) × 100 = 20%
- **score_final:** 100% × 20% = **20%**

**Diferencia clave:** El sistema nuevo elimina el incentivo perverso de registrar menos exhibiciones para obtener mejor score.

---

## Resumen de Mejoras

| Aspecto | Sistema Actual | Sistema Nuevo |
|---------|---------------|--------------|
| **Incentivo perverso** | ❌ 1 exhibición perfecta > 10 con esfuerzo | ✅ Cobertura penalizada |
| **Normalización dinámica** | ❌ Máximo fijo (200) | ✅ Derivado de catálogo |
| **Versionamiento** | ❌ Config mutable sin historial | ✅ Versionado con inmutabilidad |
| **Cobertura** | ❌ No considerada | ✅ score_cobertura_pct |
| **Calidad** | ⚠️ Solo puntos brutos | ✅ score_calidad_pct |
| **Frentes** | ❌ No considerados | ✅ Multiplicador en fórmula |
| **Nivel objetivo** | ❌ Subjetivo (Alto/Medio/Bajo) | ✅ Rúbrica con criterios |
| **Histórico** | ❌ Vulnerable a cambios de config | ✅ Inmutable con config_version_id |

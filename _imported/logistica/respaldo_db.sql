
-- Estructura de la tabla knex_migrations_products_lock
DROP TABLE IF EXISTS "knex_migrations_products_lock" CASCADE;
CREATE TABLE "knex_migrations_products_lock" (
  "index" integer NOT NULL DEFAULT nextval('knex_migrations_products_lock_index_seq'::regclass),
  "is_locked" integer
);

-- Datos de la tabla knex_migrations_products_lock
INSERT INTO "knex_migrations_products_lock" VALUES (1, 0);


-- Estructura de la tabla logistica_guias
DROP TABLE IF EXISTS "logistica_guias" CASCADE;
CREATE TABLE "logistica_guias" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "numero" character varying NOT NULL,
  "embarque_id" uuid,
  "tipo" character varying DEFAULT 'entrega'::character varying,
  "estado" character varying DEFAULT 'pendiente'::character varying,
  "chofer_id" uuid,
  "comision_chofer" numeric DEFAULT '0'::numeric,
  "ayudante1_id" uuid,
  "comision_ayudante1" numeric DEFAULT '0'::numeric,
  "ayudante2_id" uuid,
  "comision_ayudante2" numeric DEFAULT '0'::numeric,
  "hora_salida" time without time zone,
  "hora_llegada" time without time zone,
  "duerme" boolean DEFAULT false,
  "viaticos_total" numeric DEFAULT '0'::numeric,
  "viaticos_detalle" jsonb,
  "observaciones" text,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "fecha_salida" timestamp with time zone,
  "fecha_llegada" timestamp with time zone,
  "viaticos" numeric DEFAULT '0'::numeric
);


-- Estructura de la tabla logistica_guias_destinatarios
DROP TABLE IF EXISTS "logistica_guias_destinatarios" CASCADE;
CREATE TABLE "logistica_guias_destinatarios" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "guia_id" uuid,
  "cliente" character varying NOT NULL,
  "direccion" character varying,
  "cajas" integer DEFAULT 0,
  "peso" numeric DEFAULT '0'::numeric,
  "valor" numeric DEFAULT '0'::numeric,
  "estado" character varying DEFAULT 'pendiente'::character varying,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- Estructura de la tabla logistica_detalles_carga
DROP TABLE IF EXISTS "logistica_detalles_carga" CASCADE;
CREATE TABLE "logistica_detalles_carga" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "embarque_id" uuid,
  "colaborador_id" uuid,
  "tarifa" numeric DEFAULT '0'::numeric,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- Estructura de la tabla logistica_detalles_descarga
DROP TABLE IF EXISTS "logistica_detalles_descarga" CASCADE;
CREATE TABLE "logistica_detalles_descarga" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "embarque_id" uuid,
  "colaborador_id" uuid,
  "monto" numeric DEFAULT '0'::numeric,
  "tipo" character varying NOT NULL,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- Estructura de la tabla logistica_periodos
DROP TABLE IF EXISTS "logistica_periodos" CASCADE;
CREATE TABLE "logistica_periodos" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "numero" integer NOT NULL,
  "inicio" date NOT NULL,
  "fin" date NOT NULL,
  "pago" date NOT NULL,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Datos de la tabla logistica_periodos
INSERT INTO "logistica_periodos" VALUES ('f2623623-1500-4587-8495-915257bf5ae0', 1, Thu Jan 01 2026 00:00:00 GMT-0600 (hora estándar central), Wed Jan 14 2026 00:00:00 GMT-0600 (hora estándar central), Sat Jan 17 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('6634e8ae-1551-4be9-bf20-57a93baefff5', 2, Thu Jan 15 2026 00:00:00 GMT-0600 (hora estándar central), Wed Jan 28 2026 00:00:00 GMT-0600 (hora estándar central), Sat Jan 31 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('29f61825-b197-4de0-bbd9-d4db3b849f8d', 3, Thu Jan 29 2026 00:00:00 GMT-0600 (hora estándar central), Wed Feb 11 2026 00:00:00 GMT-0600 (hora estándar central), Sat Feb 14 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('f3db6cf2-3bde-4a34-9e61-344ed3338638', 4, Thu Feb 12 2026 00:00:00 GMT-0600 (hora estándar central), Wed Feb 25 2026 00:00:00 GMT-0600 (hora estándar central), Sat Feb 28 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('90fe4c41-4c85-4460-a012-eb07f2cce637', 5, Thu Feb 26 2026 00:00:00 GMT-0600 (hora estándar central), Wed Mar 11 2026 00:00:00 GMT-0600 (hora estándar central), Sat Mar 14 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('8038c862-90db-4bc6-8b9c-65775908d605', 6, Thu Mar 12 2026 00:00:00 GMT-0600 (hora estándar central), Wed Mar 25 2026 00:00:00 GMT-0600 (hora estándar central), Sat Mar 28 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('6296ce71-5180-401a-ae6d-2c766d61888c', 7, Thu Mar 26 2026 00:00:00 GMT-0600 (hora estándar central), Wed Apr 08 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 11 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('b5308694-c8ff-41a7-84e7-a7c94c3f2e60', 8, Thu Apr 09 2026 00:00:00 GMT-0600 (hora estándar central), Wed Apr 22 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 25 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('a67932e6-309d-4c3c-b0f0-6ea6b00ab62d', 9, Thu Apr 23 2026 00:00:00 GMT-0600 (hora estándar central), Wed May 06 2026 00:00:00 GMT-0600 (hora estándar central), Sat May 09 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('6e073f5a-cb5e-4d61-a8dd-b9d15d12800f', 10, Thu May 07 2026 00:00:00 GMT-0600 (hora estándar central), Wed May 20 2026 00:00:00 GMT-0600 (hora estándar central), Sat May 23 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('9cb13d44-103f-4362-ae07-26b6c1be430e', 11, Thu May 21 2026 00:00:00 GMT-0600 (hora estándar central), Wed Jun 03 2026 00:00:00 GMT-0600 (hora estándar central), Sat Jun 06 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('aba0de35-ef3a-4be0-b598-17cf4daea8b9', 12, Thu Jun 04 2026 00:00:00 GMT-0600 (hora estándar central), Wed Jun 17 2026 00:00:00 GMT-0600 (hora estándar central), Sat Jun 20 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('1325c7c6-c5e3-41d7-ba6e-db674a25bbc6', 13, Thu Jun 18 2026 00:00:00 GMT-0600 (hora estándar central), Wed Jul 01 2026 00:00:00 GMT-0600 (hora estándar central), Sat Jul 04 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('0e8be59b-0e43-429e-aca4-2be7a473f57f', 14, Thu Jul 02 2026 00:00:00 GMT-0600 (hora estándar central), Wed Jul 15 2026 00:00:00 GMT-0600 (hora estándar central), Sat Jul 18 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('1728ceff-9acb-450c-a31d-d97642197c28', 15, Thu Jul 16 2026 00:00:00 GMT-0600 (hora estándar central), Wed Jul 29 2026 00:00:00 GMT-0600 (hora estándar central), Sat Aug 01 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('a1e6a37e-03aa-4bd5-996e-d19a01e71a37', 16, Thu Jul 30 2026 00:00:00 GMT-0600 (hora estándar central), Wed Aug 12 2026 00:00:00 GMT-0600 (hora estándar central), Sat Aug 15 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('4d267a3b-8ff1-46c2-a7ca-e8ac7d22868b', 17, Thu Aug 13 2026 00:00:00 GMT-0600 (hora estándar central), Wed Aug 26 2026 00:00:00 GMT-0600 (hora estándar central), Sat Aug 29 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('5ed4f168-9f85-487e-9a3e-f754564654df', 18, Thu Aug 27 2026 00:00:00 GMT-0600 (hora estándar central), Wed Sep 09 2026 00:00:00 GMT-0600 (hora estándar central), Sat Sep 12 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('b0fae6b6-158e-4545-b77f-76fe8dd1f424', 19, Thu Sep 10 2026 00:00:00 GMT-0600 (hora estándar central), Wed Sep 23 2026 00:00:00 GMT-0600 (hora estándar central), Sat Sep 26 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('80934cd0-94fe-4b49-9851-a96a864cc7ba', 20, Thu Sep 24 2026 00:00:00 GMT-0600 (hora estándar central), Wed Oct 07 2026 00:00:00 GMT-0600 (hora estándar central), Sat Oct 10 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('1a36ecc0-4ecb-4829-bae9-5897bb50faa3', 21, Thu Oct 08 2026 00:00:00 GMT-0600 (hora estándar central), Wed Oct 21 2026 00:00:00 GMT-0600 (hora estándar central), Sat Oct 24 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('7394a53f-9b74-47da-a3e6-620a9b0e13af', 22, Thu Oct 22 2026 00:00:00 GMT-0600 (hora estándar central), Wed Nov 04 2026 00:00:00 GMT-0600 (hora estándar central), Sat Nov 07 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('77fc8131-7bf0-432a-8bcf-65692a903480', 23, Thu Nov 05 2026 00:00:00 GMT-0600 (hora estándar central), Wed Nov 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Nov 21 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('2914df40-b2e2-4200-acf7-01f6a9595d74', 24, Thu Nov 19 2026 00:00:00 GMT-0600 (hora estándar central), Wed Dec 02 2026 00:00:00 GMT-0600 (hora estándar central), Sat Dec 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('993d7778-fe9d-4d95-837f-616c60d212fa', 25, Thu Dec 03 2026 00:00:00 GMT-0600 (hora estándar central), Wed Dec 16 2026 00:00:00 GMT-0600 (hora estándar central), Sat Dec 19 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_periodos" VALUES ('dc6573a5-14b1-4e3c-a41c-e10ef711a799', 26, Thu Dec 17 2026 00:00:00 GMT-0600 (hora estándar central), Wed Dec 30 2026 00:00:00 GMT-0600 (hora estándar central), Sat Jan 02 2027 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));


-- Estructura de la tabla logistica_combustible_consumo_ruta
DROP TABLE IF EXISTS "logistica_combustible_consumo_ruta" CASCADE;
CREATE TABLE "logistica_combustible_consumo_ruta" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "embarque_id" uuid,
  "unidad_id" uuid,
  "origen" character varying NOT NULL,
  "destino" character varying NOT NULL,
  "distancia_km" integer NOT NULL,
  "consumo_real_litros" numeric NOT NULL,
  "consumo_esperado_litros" numeric NOT NULL,
  "diferencia_litros" numeric DEFAULT '0'::numeric,
  "porcentaje_diferencia" numeric DEFAULT '0'::numeric,
  "rendimiento_real_km_l" numeric NOT NULL,
  "rendimiento_base_km_l" numeric NOT NULL,
  "eficiencia_porcentaje" numeric DEFAULT '0'::numeric,
  "factores_externos" jsonb,
  "observaciones" text,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- Estructura de la tabla logistica_config_finanzas
DROP TABLE IF EXISTS "logistica_config_finanzas" CASCADE;
CREATE TABLE "logistica_config_finanzas" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "clave" character varying NOT NULL,
  "categoria" character varying NOT NULL,
  "descripcion" character varying,
  "valor" numeric NOT NULL,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Datos de la tabla logistica_config_finanzas
INSERT INTO "logistica_config_finanzas" VALUES ('d1fb1449-878a-4fd7-b0d9-1e1782dd54c7', 'factor_aguascalientes', 'factor', 'A AGUASCALIENTES', '0.6048', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('77281e93-35cc-491f-9e2a-93e17978a7e4', 'factor_michoacan', 'factor', 'A URUAPAN', '1.0170', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('2283ec5a-02e5-4fb6-8818-57f6ab7f7746', 'factor_jalisco_zacatecas', 'factor', 'A GDL Y ZAC.', '1.0588', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('bcf2525d-898c-414d-a32c-76638630acb9', 'factor_guanajuato', 'factor', 'PROM GTO Y LEON', '0.8668', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('b380e713-0d17-400b-bfbe-c73dfe0bdfbc', 'factor_slp', 'factor', 'A LA CAPITAL S.L.P.', '1.2195', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('1fff8402-6070-4529-a125-60c727da859a', 'factor_queretaro', 'factor', '', '1.0000', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('61a986ad-624d-4d7b-b185-5c50113e30d7', 'factor_edomex_cdmx', 'factor', 'A TEOLOYUCAN', '1.2640', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('29a5f7db-0323-4ee0-9664-55ae118e63fb', 'costo_km_international', 'costo_km', 'INTERNATIONAL', '7.6400', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('52d87dfe-26f1-4090-b2e2-da7caaa03c9d', 'costo_km_international_ii', 'costo_km', 'INTERNATIONAL II', '8.0900', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('bda54c56-fb6d-45cc-8ffa-38656e1e8a91', 'costo_km_freightliner_std', 'costo_km', 'FREIGHTLINER STD', '5.9200', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('d4784e68-a765-4bd6-9455-aa0b337a109f', 'costo_km_freightliner_auto', 'costo_km', 'FREIGHTLINER AUTO', '5.8900', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('fc8cda8e-61c3-41f7-bfba-546bc1fc6152', 'costo_km_hino_500', 'costo_km', 'HINO 500', '23.5300', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('ae83b2d0-7603-43cb-ace1-4365919ae500', 'costo_km_international_iii', 'costo_km', 'INTERNATIONAL III', '17.1600', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('56ded78e-3cf3-476b-b913-59acf5be0bbc', 'costo_km_international_city_star', 'costo_km', 'INTERNATIONAL CITY STAR', '7.1200', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('f0cfe578-0378-4456-8ac3-c9d60665ad69', 'costo_km_kodiak', 'costo_km', 'KODIAK', '11.4700', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('0605eeed-ba4e-4481-8fc4-b4c5bd0494c3', 'costo_km_f350', 'costo_km', 'F-350', '4.0500', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('bc06adb9-3ffb-4540-a33e-90ce5b4c8229', 'costo_km_f450', 'costo_km', 'F-450', '4.9100', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('75389239-8239-4dd2-8669-0041ebc1bf25', 'costo_km_nissan_fz0437b', 'costo_km', 'NISSAN FZ0437B', '4.5300', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('95ed66d3-f379-4159-8fff-dd8d6926b7e7', 'costo_km_ram_4000_zamora', 'costo_km', 'RAM 4000 ZAMORA', '7.1400', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('dddc3ef6-630f-4518-8389-742a6580a687', 'costo_km_ram_4000_morelia', 'costo_km', 'RAM 4000 MORELIA', '7.0700', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('d0336fe5-7e0e-4c78-ac6b-2de0c9ebfb43', 'costo_km_nissan_jv05705', 'costo_km', 'NISSAN JV05705', '6.2800', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('4fe14dee-30cc-4c16-8c88-3f2a936be950', 'tarifa_maniobra_carga', 'tarifa_maniobra', 'Carga por persona', '30.0000', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));
INSERT INTO "logistica_config_finanzas" VALUES ('c5e5aae5-9c99-41d1-9ed9-5c7154fb8fee', 'tarifa_maniobra_descarga', 'tarifa_maniobra', 'Descarga por caja', '1.0000', Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:06 GMT-0600 (hora estándar central));


-- Estructura de la tabla logistica_embarque_historial
DROP TABLE IF EXISTS "logistica_embarque_historial" CASCADE;
CREATE TABLE "logistica_embarque_historial" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "embarque_id" uuid,
  "estado_anterior" character varying,
  "estado_nuevo" character varying NOT NULL,
  "fecha_hora" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  "usuario_id" uuid,
  "observaciones" text
);


-- Estructura de la tabla logistica_embarques
DROP TABLE IF EXISTS "logistica_embarques" CASCADE;
CREATE TABLE "logistica_embarques" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "folio" character varying NOT NULL,
  "fecha" date NOT NULL,
  "unidad_id" uuid,
  "origen" character varying,
  "destino" character varying,
  "km" integer,
  "flete" numeric DEFAULT '0'::numeric,
  "valor_carga" numeric DEFAULT '0'::numeric,
  "cajas" integer DEFAULT 0,
  "peso" numeric DEFAULT '0'::numeric,
  "tipo" character varying DEFAULT 'entrega'::character varying,
  "estado" character varying DEFAULT 'programado'::character varying,
  "observaciones" text,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "fecha_salida" timestamp with time zone,
  "fecha_llegada" timestamp with time zone,
  "fecha_hora_creacion" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  "fecha_hora_salida" timestamp with time zone,
  "fecha_hora_llegada" timestamp with time zone,
  "fecha_hora_completado" timestamp with time zone,
  "operador_id" uuid,
  "destino_id" uuid,
  "destino_texto" character varying,
  "monto_carga" numeric DEFAULT '0'::numeric,
  "monto_descarga" numeric DEFAULT '0'::numeric,
  "monto_maniobra" numeric DEFAULT '0'::numeric
);

-- Datos de la tabla logistica_embarques
INSERT INTO "logistica_embarques" VALUES ('c3214fec-d75d-407d-a5dc-14901510a432', 'EMB-2026-001', Tue Apr 14 2026 00:00:00 GMT-0600 (hora estándar central), '4e873b01-f968-4082-a86e-b0f07350ac71', 'ZAMORA', NULL, 120, '3500.00', '45000.00', 200, '8500.00', 'entrega', 'completado', NULL, Thu Apr 30 2026 15:57:14 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:14 GMT-0600 (hora estándar central), NULL, NULL, Thu Apr 30 2026 15:57:14 GMT-0600 (hora estándar central), NULL, NULL, NULL, '01a90069-8ce3-49fb-8c98-2d56054961d8', NULL, 'AGUASCALIENTES', '0.00', '0.00', '0.00');
INSERT INTO "logistica_embarques" VALUES ('5f7abc74-90f2-462f-9b06-dd9770bee677', 'EMB-2026-002', Wed Apr 15 2026 00:00:00 GMT-0600 (hora estándar central), '4fe0ffb0-da00-425c-ac91-dd7ad9c76f4e', 'MORELIA', NULL, 180, '5200.00', '62000.00', 280, '12000.00', 'entrega', 'en_transito', NULL, Thu Apr 30 2026 15:57:14 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:14 GMT-0600 (hora estándar central), NULL, NULL, Thu Apr 30 2026 15:57:14 GMT-0600 (hora estándar central), NULL, NULL, NULL, '86425d56-8a14-44b5-8641-645cdc940534', NULL, 'APATZINGAN', '0.00', '0.00', '0.00');
INSERT INTO "logistica_embarques" VALUES ('a9f2d4cb-0c19-4aca-b84a-f72afb3cd013', 'EMB-2026-003', Thu Apr 16 2026 00:00:00 GMT-0600 (hora estándar central), '1463e70e-d922-495e-ad1c-ae260fda7740', 'LA PIEDAD', NULL, 95, '2800.00', '32000.00', 150, '6500.00', 'entrega', 'programado', NULL, Thu Apr 30 2026 15:57:14 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:14 GMT-0600 (hora estándar central), NULL, NULL, Thu Apr 30 2026 15:57:14 GMT-0600 (hora estándar central), NULL, NULL, NULL, 'e1bb19c8-aa71-406a-b64f-589998a35727', NULL, 'ARANDAS MATUTINO', '0.00', '0.00', '0.00');
INSERT INTO "logistica_embarques" VALUES ('7eb9287b-1bd6-4f08-87cd-0614070ce186', 'EMB-2026-586235609', Wed Apr 15 2026 00:00:00 GMT-0600 (hora estándar central), '4e873b01-f968-4082-a86e-b0f07350ac71', 'ZAMORA', NULL, 159, '6986.00', '56076.00', 208, '4839.29', 'entrega', 'completado', NULL, Thu Apr 30 2026 15:57:15 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:15 GMT-0600 (hora estándar central), NULL, NULL, Thu Apr 30 2026 15:57:15 GMT-0600 (hora estándar central), NULL, NULL, NULL, '01a90069-8ce3-49fb-8c98-2d56054961d8', NULL, 'GUADALAJARA', '0.00', '0.00', '0.00');
INSERT INTO "logistica_embarques" VALUES ('b93da6d5-862b-4570-81d9-5c1364ed7851', 'EMB-2026-915434205', Wed Apr 15 2026 00:00:00 GMT-0600 (hora estándar central), '4e873b01-f968-4082-a86e-b0f07350ac71', 'ZAMORA', NULL, 321, '18985.00', '188346.00', 413, '11448.53', 'entrega', 'completado', NULL, Mon May 04 2026 11:23:48 GMT-0600 (hora estándar central), Mon May 04 2026 11:23:48 GMT-0600 (hora estándar central), NULL, NULL, Mon May 04 2026 11:23:48 GMT-0600 (hora estándar central), NULL, NULL, NULL, '01a90069-8ce3-49fb-8c98-2d56054961d8', NULL, 'GUADALAJARA', '0.00', '0.00', '0.00');
INSERT INTO "logistica_embarques" VALUES ('5792ea4b-f336-4942-915c-54954b63e091', 'EMB-2026-915557063', Wed Apr 15 2026 00:00:00 GMT-0600 (hora estándar central), '4e873b01-f968-4082-a86e-b0f07350ac71', 'ZAMORA', NULL, 120, '5040.00', '40340.00', 146, '3043.15', 'entrega', 'completado', NULL, Mon May 04 2026 11:25:51 GMT-0600 (hora estándar central), Mon May 04 2026 11:25:51 GMT-0600 (hora estándar central), NULL, NULL, Mon May 04 2026 11:25:51 GMT-0600 (hora estándar central), NULL, NULL, NULL, '01a90069-8ce3-49fb-8c98-2d56054961d8', NULL, 'GUADALAJARA', '0.00', '0.00', '0.00');
INSERT INTO "logistica_embarques" VALUES ('c411809d-cdb8-48ea-95b1-3883ca71d0aa', 'EMB-2026-999328193', Wed Apr 15 2026 00:00:00 GMT-0600 (hora estándar central), '4e873b01-f968-4082-a86e-b0f07350ac71', 'ZAMORA', NULL, 329, '17909.00', '190877.00', 100, '2842.23', 'entrega', 'completado', NULL, Tue May 05 2026 10:42:07 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:07 GMT-0600 (hora estándar central), NULL, NULL, Tue May 05 2026 10:42:07 GMT-0600 (hora estándar central), NULL, NULL, NULL, '01a90069-8ce3-49fb-8c98-2d56054961d8', NULL, 'GUADALAJARA', '0.00', '0.00', '0.00');


-- Estructura de la tabla logistica_fotos_entrega
DROP TABLE IF EXISTS "logistica_fotos_entrega" CASCADE;
CREATE TABLE "logistica_fotos_entrega" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "embarque_id" uuid,
  "url" character varying NOT NULL,
  "public_id" character varying,
  "descripcion" text,
  "fecha_subida" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "guia_id" uuid,
  "tipo" character varying DEFAULT 'general'::character varying,
  "metadata" jsonb,
  "chofer_id" uuid,
  "fecha_hora_subida" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


-- Estructura de la tabla scoring_config_versions
DROP TABLE IF EXISTS "scoring_config_versions" CASCADE;
CREATE TABLE "scoring_config_versions" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "version" character varying NOT NULL,
  "fecha_inicio" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "fecha_fin" timestamp with time zone,
  "creado_por" character varying NOT NULL,
  "notas" text,
  "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  "score_maximo" numeric,
  "score_maximo_calculado_at" timestamp with time zone
);

-- Datos de la tabla scoring_config_versions
INSERT INTO "scoring_config_versions" VALUES ('e6360075-a05b-4287-9ded-f34fee311923', 'v1.0', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central), NULL, 'system_migration', 'Migración desde scoring_config original', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central), '200.00', Sat Apr 18 2026 07:44:08 GMT-0600 (hora estándar central));


-- Estructura de la tabla role_permissions
DROP TABLE IF EXISTS "role_permissions" CASCADE;
CREATE TABLE "role_permissions" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "role_name" character varying NOT NULL,
  "permissions" jsonb NOT NULL DEFAULT '{}'::jsonb
);

-- Datos de la tabla role_permissions
INSERT INTO "role_permissions" VALUES ('67515dde-792c-4a79-aa29-69589003b5df', 'superadmin', [object Object]);
INSERT INTO "role_permissions" VALUES ('7d3a6972-0d01-476d-a6f7-1f11a6313188', 'admin', [object Object]);
INSERT INTO "role_permissions" VALUES ('f39b3209-99c5-4afa-b611-92ae7edc3a82', 'supervisor', [object Object]);
INSERT INTO "role_permissions" VALUES ('fe1928f8-2311-43c1-82c8-84a33e22af2d', 'supervisor_v', [object Object]);
INSERT INTO "role_permissions" VALUES ('62836db5-759e-4e91-87ec-6be63e076fcb', 'Jefe_M', [object Object]);
INSERT INTO "role_permissions" VALUES ('3ebb520b-0ed7-4f3e-8318-9bd154c67016', 'colaborador', [object Object]);
INSERT INTO "role_permissions" VALUES ('4ba46777-93be-432f-8bff-8a7552cc4933', 'ejecutivo', [object Object]);
INSERT INTO "role_permissions" VALUES ('8c5e4a2b-1d9f-4e8c-9b3a-7f2d1e9c8a6f', 'chofer', [object Object]);
INSERT INTO "role_permissions" VALUES ('33970d6e-d258-48f0-94a0-ea42731efd47', 'jefe de marketing', [object Object]);
INSERT INTO "role_permissions" VALUES ('25c9cb5e-8acc-49f1-8225-d068ee724a32', 'supervisor de ventas', [object Object]);
INSERT INTO "role_permissions" VALUES ('eb1ed861-dd58-4551-9c0a-b1f290009104', 'supervisor_ventas', [object Object]);
INSERT INTO "role_permissions" VALUES ('ea9bd13a-1879-423f-a05d-a6f911ea6b68', 'jefe_de_marketing', [object Object]);


-- Estructura de la tabla knex_migrations
DROP TABLE IF EXISTS "knex_migrations" CASCADE;
CREATE TABLE "knex_migrations" (
  "id" integer NOT NULL DEFAULT nextval('knex_migrations_id_seq'::regclass),
  "name" character varying,
  "batch" integer,
  "migration_time" timestamp with time zone
);

-- Datos de la tabla knex_migrations
INSERT INTO "knex_migrations" VALUES (1, '20260330165441_20260330_init_auth_schema.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (2, '20260330165442_20260330_init_captures_schema.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (3, '20260330165443_20260330_init_daily_captures_schema.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (4, '20260330165444_20260330_init_planograma_schema.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (5, '20260330165445_20260330_init_catalogs_schema.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (6, '20260330165446_20260330_init_scoring_schema.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (7, '20260330165447_20260330_init_field_operations_schema.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (8, '20260331000000_v2_daily_captures_schema.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (9, '20260331000001_v3_add_scores_to_catalogs.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (10, '20260331231959_add_gps_to_captures.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (11, '20260401000000_v4_rename_planograma_to_planograms.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (12, '20260402130000_add_supervisor_id_to_users.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (13, '20260402141501_add_parent_id_to_catalogs.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (14, '20260402141502_create_daily_assignments.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (15, '20260402160000_update_assignments_to_weekly.js', 1, Tue Apr 07 2026 12:21:06 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (16, '20260409174829_refactor_zones.js', 2, Fri Apr 10 2026 12:54:40 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (17, '20260410151048_add_cloudinary_public_id.js', 2, Fri Apr 10 2026 12:54:40 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (18, '20260410170612_fix_catalogs_parent_id_constraint.js', 2, Fri Apr 10 2026 12:54:40 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (19, '20260413210000_fix_zones_uuids.js', 3, Mon Apr 13 2026 14:57:42 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (20, '20260413233200_change_puntuacion_to_decimal.js', 4, Mon Apr 13 2026 17:38:13 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (21, '20260414103600_fix_roles_case_production.js', 5, Tue Apr 14 2026 10:47:35 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (22, '20260414104000_sync_roles_production.js', 5, Tue Apr 14 2026 10:47:35 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (23, '20260414104200_normalize_production_roles.js', 5, Tue Apr 14 2026 10:47:35 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (24, '20260414120000_fix_supervisor_id_integrity.js', 6, Tue Apr 14 2026 12:14:12 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (25, '20260414130000_fix_supervisor_id_production.js', 7, Tue Apr 14 2026 12:31:34 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (26, '20260414200000_add_scoring_config_versions.js', 8, Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (27, '20260414210000_add_scoring_fields_to_daily_captures.js', 8, Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (28, '20260414220000_add_rubrica_ejecucion.js', 8, Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (29, '20260414220001_add_score_maximo_to_config_versions.js', 8, Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (30, '20250415100000_add_offline_sync_fields.js', 9, Thu Apr 16 2026 11:34:40 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (31, '20260417180000_add_pertenece_mega_dulces_to_exhibitions.js', 10, Fri Apr 17 2026 18:36:04 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (71, '20250101000000_init_logistics_schema.js', 11, Thu Apr 30 2026 15:42:28 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (72, '20250101000001_add_checklists_and_fotos.js', 11, Thu Apr 30 2026 15:42:30 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (73, '20250428000000_add_detalles_tables.js', 11, Thu Apr 30 2026 15:42:30 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (74, '20250428110000_add_fechas_embarques.js', 11, Thu Apr 30 2026 15:42:31 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (75, '20250428120001_add_chofer_id_to_fotos.js', 11, Thu Apr 30 2026 15:42:31 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (76, '20250428120002_add_guia_id_to_fotos.js', 11, Thu Apr 30 2026 15:42:31 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (77, '20250428130000_consolidate_fotos_columns.js', 11, Thu Apr 30 2026 15:42:32 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (78, '20250428130002_remove_subido_por.js', 11, Thu Apr 30 2026 15:42:32 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (79, '20250428130003_recreate_chofer_id.js', 11, Thu Apr 30 2026 15:42:33 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (80, '20250428140000_fix_fotos_missing_columns.js', 11, Thu Apr 30 2026 15:42:34 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (81, '20250428170000_add_timestamps_to_embarques.js', 11, Thu Apr 30 2026 15:42:36 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (82, '20250428180000_add_columns_to_users.js', 11, Thu Apr 30 2026 15:42:37 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (83, '20260424120000_add_repartidor_km_to_destinos.js', 11, Thu Apr 30 2026 15:42:37 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (84, '20260424163000_add_fleet_fields_to_unidades.js', 11, Thu Apr 30 2026 15:42:39 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (85, '20260424170000_add_estado_to_colaboradores.js', 11, Thu Apr 30 2026 15:42:39 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (86, '20260424171000_add_ayudantes_to_guias.js', 11, Thu Apr 30 2026 15:42:40 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (87, '20260424173000_add_costos_columns.js', 11, Thu Apr 30 2026 15:42:42 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (88, '20260427000001_link_users_to_colaboradores.js', 11, Thu Apr 30 2026 15:42:42 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (89, '20260427000002_fix_checklists_fotos_foreign_keys.js', 11, Thu Apr 30 2026 15:42:43 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (90, '20260427000003_fix_checklists_fotos_foreign_keys_v2.js', 11, Thu Apr 30 2026 15:42:44 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (91, '20260427000004_create_fuel_management_schema.js', 11, Thu Apr 30 2026 15:42:48 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (92, '20260428000100_add_chofer_id_to_checklists.js', 11, Thu Apr 30 2026 15:42:49 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (93, '20260428000200_add_respuestas_to_checklists.js', 11, Thu Apr 30 2026 15:42:49 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (94, '20260428000300_make_items_nullable.js', 11, Thu Apr 30 2026 15:42:49 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (95, '20260429000000_add_roles_to_users.js', 11, Thu Apr 30 2026 15:42:50 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (96, '20260429000001_fix_embarques_missing_columns.js', 12, Thu Apr 30 2026 15:46:40 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations" VALUES (97, '20260429000002_fix_guias_missing_columns.js', 13, Thu Apr 30 2026 15:56:56 GMT-0600 (hora estándar central));


-- Estructura de la tabla knex_migrations_lock
DROP TABLE IF EXISTS "knex_migrations_lock" CASCADE;
CREATE TABLE "knex_migrations_lock" (
  "index" integer NOT NULL DEFAULT nextval('knex_migrations_lock_index_seq'::regclass),
  "is_locked" integer
);

-- Datos de la tabla knex_migrations_lock
INSERT INTO "knex_migrations_lock" VALUES (1, 0);


-- Estructura de la tabla rubrica_niveles
DROP TABLE IF EXISTS "rubrica_niveles" CASCADE;
CREATE TABLE "rubrica_niveles" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "config_version_id" uuid NOT NULL,
  "nombre" character varying NOT NULL,
  "criterios_minimos" integer NOT NULL,
  "criterios_maximos" integer NOT NULL,
  "multiplicador" numeric NOT NULL,
  "color" character varying,
  "orden" integer DEFAULT 0,
  "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);

-- Datos de la tabla rubrica_niveles
INSERT INTO "rubrica_niveles" VALUES ('d1346968-8091-46ea-9c21-962fa27a5bbf', 'e6360075-a05b-4287-9ded-f34fee311923', 'Alto', 5, 5, '1.00', '#10b981', 1, Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "rubrica_niveles" VALUES ('08eb5224-0fd1-45a3-9ccc-4025f5a3cfdf', 'e6360075-a05b-4287-9ded-f34fee311923', 'Medio', 3, 4, '0.70', '#f59e0b', 2, Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "rubrica_niveles" VALUES ('973cc742-11c5-4b28-aa10-a2aa3dd5343d', 'e6360075-a05b-4287-9ded-f34fee311923', 'Bajo', 1, 2, '0.40', '#ef4444', 3, Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "rubrica_niveles" VALUES ('fda8b5e4-ac32-45d4-87e9-ded14f2da9da', 'e6360075-a05b-4287-9ded-f34fee311923', 'Crítico', 0, 0, '0.20', '#7f1d1d', 4, Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));


-- Estructura de la tabla captures
DROP TABLE IF EXISTS "captures" CASCADE;
CREATE TABLE "captures" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "folio" character varying NOT NULL,
  "user_id" uuid NOT NULL,
  "captured_by_username" character varying NOT NULL,
  "zona_captura" character varying NOT NULL,
  "kpis_data" jsonb NOT NULL,
  "fecha_captura" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


-- Estructura de la tabla scoring_config
DROP TABLE IF EXISTS "scoring_config" CASCADE;
CREATE TABLE "scoring_config" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "config" jsonb NOT NULL DEFAULT '{"factores_tipo": {"tira": 1, "vitrina": 1.5, "exhibidor": 2, "refrigerador": 1.8}, "pesos_posicion": {"caja": 100, "detras": 10, "anaquel": 25, "vitrina": 60, "adyacente": 70, "exhibidor": 50, "refrigerador": 40}, "niveles_ejecucion": {"alto": 1, "bajo": 0.4, "medio": 0.7}}'::jsonb,
  "updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);

-- Datos de la tabla scoring_config
INSERT INTO "scoring_config" VALUES ('91528fd9-463d-4121-990a-53cdcb5b9cdf', [object Object], Thu Apr 02 2026 09:52:21 GMT-0600 (hora estándar central));


-- Estructura de la tabla stores
DROP TABLE IF EXISTS "stores" CASCADE;
CREATE TABLE "stores" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "nombre" character varying NOT NULL,
  "direccion" text,
  "zona" character varying,
  "latitud" numeric,
  "longitud" numeric,
  "activo" boolean DEFAULT true,
  "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  "zona_id" uuid,
  "exhibiciones_esperadas" integer DEFAULT 5
);


-- Estructura de la tabla exhibitions
DROP TABLE IF EXISTS "exhibitions" CASCADE;
CREATE TABLE "exhibitions" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "visit_id" uuid,
  "posicion" character varying NOT NULL,
  "tipo" character varying NOT NULL,
  "nivel_ejecucion" character varying NOT NULL,
  "score" numeric NOT NULL DEFAULT '0'::numeric,
  "notas" text,
  "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  "pertenece_mega_dulces" boolean
);


-- Estructura de la tabla rubrica_criterios
DROP TABLE IF EXISTS "rubrica_criterios" CASCADE;
CREATE TABLE "rubrica_criterios" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "config_version_id" uuid NOT NULL,
  "criterio" character varying NOT NULL,
  "descripcion" character varying,
  "orden" integer DEFAULT 0,
  "activo" boolean DEFAULT true,
  "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);

-- Datos de la tabla rubrica_criterios
INSERT INTO "rubrica_criterios" VALUES ('cc0a2cc2-3997-4567-8170-4b7e4c847ddd', 'e6360075-a05b-4287-9ded-f34fee311923', 'Producto visible de frente sin obstrucciones', 'El producto principal debe estar visible desde el frente del exhibidor', 1, true, Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "rubrica_criterios" VALUES ('a472fefe-ed32-4c5e-a3f3-ac48dc48cbeb', 'e6360075-a05b-4287-9ded-f34fee311923', 'Precio visible', 'El precio del producto debe estar claramente visible', 2, true, Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "rubrica_criterios" VALUES ('9c81cee1-fbdd-49fc-bacc-0fd5ef3b9afd', 'e6360075-a05b-4287-9ded-f34fee311923', 'Sin producto caducado o dañado', 'No debe haber productos vencidos o con daños visibles', 3, true, Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "rubrica_criterios" VALUES ('60a5c375-ee6e-43ae-9795-15b3c249d84d', 'e6360075-a05b-4287-9ded-f34fee311923', 'Exhibición completa según planograma', 'La exhibición debe cumplir con el planograma establecido', 4, true, Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "rubrica_criterios" VALUES ('2471263f-b3f0-49f9-83a7-363deb99d267', 'e6360075-a05b-4287-9ded-f34fee311923', 'Material POP visible y en buen estado', 'El material promocional debe estar visible y en buenas condiciones', 5, true, Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));


-- Estructura de la tabla scoring_pesos
DROP TABLE IF EXISTS "scoring_pesos" CASCADE;
CREATE TABLE "scoring_pesos" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "config_version_id" uuid NOT NULL,
  "tipo" text NOT NULL,
  "nombre" character varying NOT NULL,
  "valor" numeric NOT NULL,
  "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);

-- Datos de la tabla scoring_pesos
INSERT INTO "scoring_pesos" VALUES ('3b4bc524-3a88-4e3b-9c99-cda639717e24', 'e6360075-a05b-4287-9ded-f34fee311923', 'posicion', 'caja', '100.00', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "scoring_pesos" VALUES ('db4b1452-e3cb-4723-a481-c35dac6e6bc3', 'e6360075-a05b-4287-9ded-f34fee311923', 'posicion', 'detras', '10.00', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "scoring_pesos" VALUES ('6896834e-b6ee-420e-92e4-ee0ec85f670d', 'e6360075-a05b-4287-9ded-f34fee311923', 'posicion', 'anaquel', '25.00', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "scoring_pesos" VALUES ('4c143f5b-b691-422d-b6b4-a73e1f801272', 'e6360075-a05b-4287-9ded-f34fee311923', 'posicion', 'vitrina', '60.00', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "scoring_pesos" VALUES ('0822c38f-d57f-4565-baa7-aa036078e849', 'e6360075-a05b-4287-9ded-f34fee311923', 'posicion', 'adyacente', '70.00', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "scoring_pesos" VALUES ('c7fd3ab8-4fe3-4a69-9194-a1d1aef18918', 'e6360075-a05b-4287-9ded-f34fee311923', 'posicion', 'exhibidor', '50.00', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "scoring_pesos" VALUES ('584c01e5-b308-4a5c-8ab5-3c21736899e4', 'e6360075-a05b-4287-9ded-f34fee311923', 'posicion', 'refrigerador', '40.00', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "scoring_pesos" VALUES ('5e97e4e5-1fa5-4ac3-a26d-96314d3b6226', 'e6360075-a05b-4287-9ded-f34fee311923', 'exhibicion', 'tira', '1.00', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "scoring_pesos" VALUES ('1eb0916b-45a6-438e-a831-7cb1e9dc52f2', 'e6360075-a05b-4287-9ded-f34fee311923', 'exhibicion', 'vitrina', '1.50', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "scoring_pesos" VALUES ('0aa57bbc-5529-4f52-b963-2587469e18a8', 'e6360075-a05b-4287-9ded-f34fee311923', 'exhibicion', 'exhibidor', '2.00', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "scoring_pesos" VALUES ('aa2b1bec-87c2-46d2-8876-72afd2e6c7c6', 'e6360075-a05b-4287-9ded-f34fee311923', 'exhibicion', 'refrigerador', '1.80', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "scoring_pesos" VALUES ('aa8e4c44-7965-4bb5-8e63-e276d0b973c3', 'e6360075-a05b-4287-9ded-f34fee311923', 'ejecucion', 'alto', '1.00', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "scoring_pesos" VALUES ('2491da78-1e7e-4a45-ab6e-7c2095ce0e0b', 'e6360075-a05b-4287-9ded-f34fee311923', 'ejecucion', 'bajo', '0.40', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));
INSERT INTO "scoring_pesos" VALUES ('3a10da79-ac15-4765-953a-b1e4fb85f7b0', 'e6360075-a05b-4287-9ded-f34fee311923', 'ejecucion', 'medio', '0.70', Tue Apr 14 2026 17:47:10 GMT-0600 (hora estándar central));


-- Estructura de la tabla catalogs
DROP TABLE IF EXISTS "catalogs" CASCADE;
CREATE TABLE "catalogs" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "catalog_id" character varying NOT NULL,
  "value" character varying NOT NULL,
  "orden" integer DEFAULT 0,
  "puntuacion" numeric DEFAULT '0'::numeric,
  "icono" character varying,
  "parent_id" uuid
);

-- Datos de la tabla catalogs
INSERT INTO "catalogs" VALUES ('8f607ef1-416b-4c9d-9888-da9d264622ac', 'niveles', 'Alto', 1, '1.00', '', NULL);
INSERT INTO "catalogs" VALUES ('8d3bcc13-c008-4f40-bb43-27a81319012a', 'conceptos', 'Exhibidor', 1, '2.00', '', NULL);
INSERT INTO "catalogs" VALUES ('592951a7-89d6-4829-9bba-0fe2509ca483', 'rutas', 'Centro', 6, '0.00', '', NULL);
INSERT INTO "catalogs" VALUES ('5873d945-592e-422c-b376-9e1d832a3514', 'rutas', 'Ruta 11 - Juarez', 1, '0.00', NULL, 'b3e5d1cf-bf7e-419f-9037-b02f070bd2bc');
INSERT INTO "catalogs" VALUES ('9d055fde-93dc-41d6-8b0c-3190c17de42b', 'rutas', 'Ruta 12 - Minsa', 2, '0.00', NULL, 'b3e5d1cf-bf7e-419f-9037-b02f070bd2bc');
INSERT INTO "catalogs" VALUES ('5b500ce6-2c03-4968-94bb-c121f51ea5dd', 'rutas', 'Ruta 13 - Jacona', 3, '0.00', NULL, 'b3e5d1cf-bf7e-419f-9037-b02f070bd2bc');
INSERT INTO "catalogs" VALUES ('89ec0319-a085-4c48-bce3-b03cff3b23c9', 'rutas', 'Ruta 14 - Centro', 4, '0.00', NULL, 'b3e5d1cf-bf7e-419f-9037-b02f070bd2bc');
INSERT INTO "catalogs" VALUES ('c51faa33-868a-428d-bd49-4d32087be6e1', 'rutas', 'Ruta 15 - Valle', 5, '0.00', NULL, 'b3e5d1cf-bf7e-419f-9037-b02f070bd2bc');
INSERT INTO "catalogs" VALUES ('fc8b799e-d093-4d58-a864-03a2c6bd10d0', 'rutas', 'Ruta 21 - Camelinas', 1, '0.00', NULL, '2107b482-7d3a-4c82-9377-c9f2427e699e');
INSERT INTO "catalogs" VALUES ('81b7c788-4bbe-4cfb-ab47-02a1d5d7cb28', 'rutas', 'Ruta 22 - Centro Hist', 2, '0.00', NULL, '2107b482-7d3a-4c82-9377-c9f2427e699e');
INSERT INTO "catalogs" VALUES ('8cd739ba-47fd-4e0a-857b-d86698270cf9', 'rutas', 'Ruta 23 - Tres Marias', 3, '0.00', NULL, '2107b482-7d3a-4c82-9377-c9f2427e699e');
INSERT INTO "catalogs" VALUES ('a3f03773-e92c-4e9c-a792-f49280c5c3c1', 'rutas', 'Ruta 24 - Salida Quiroga', 4, '0.00', NULL, '2107b482-7d3a-4c82-9377-c9f2427e699e');
INSERT INTO "catalogs" VALUES ('14905d26-4de3-4c1c-97ff-692488c07048', 'rutas', 'Ruta 25 - Mil Cumbres', 5, '0.00', NULL, '2107b482-7d3a-4c82-9377-c9f2427e699e');
INSERT INTO "catalogs" VALUES ('98e94f6e-a382-47bf-9c75-71e082dbe971', 'conceptos', 'Vitrina', 2, '1.50', '', NULL);
INSERT INTO "catalogs" VALUES ('a7022833-0c65-4db2-8e82-4dbb196a5771', 'conceptos', 'Refrigerador', 3, '1.80', '', NULL);
INSERT INTO "catalogs" VALUES ('0e83a84a-59bb-4e94-a25a-04b6c0b77d84', 'ubicaciones', 'Caja', 1, '100.00', '', NULL);
INSERT INTO "catalogs" VALUES ('4b1ec990-a73b-4039-b7fa-381f4d7ed1fa', 'ubicaciones', 'Adyacente', 2, '70.00', '', NULL);
INSERT INTO "catalogs" VALUES ('83bfb372-870e-4be1-8612-ee361703cc03', 'ubicaciones', 'Vitrina', 3, '60.00', '', NULL);
INSERT INTO "catalogs" VALUES ('0f801485-6d8f-4855-895b-e1c06b0f75ba', 'ubicaciones', 'Exhibidor', 4, '50.00', '', NULL);
INSERT INTO "catalogs" VALUES ('91637da2-8743-4ac0-9feb-8dac29275b51', 'ubicaciones', 'Refrigerador', 5, '40.00', '', NULL);
INSERT INTO "catalogs" VALUES ('ecce723f-796c-4b90-9374-f1428166c21d', 'ubicaciones', 'Anaquel', 6, '25.00', '', NULL);
INSERT INTO "catalogs" VALUES ('dfa3827e-8672-420e-ba41-eb6dbb119fe6', 'ubicaciones', 'Detras', 7, '10.00', '', NULL);
INSERT INTO "catalogs" VALUES ('ebade76d-916d-47cb-a14b-f230e3a28ae7', 'niveles', 'Medio', 2, '0.70', '', NULL);
INSERT INTO "catalogs" VALUES ('ef320f32-eeef-4988-8b54-4a490a7e14c5', 'niveles', 'Crítico', 3, '0.40', '', NULL);
INSERT INTO "catalogs" VALUES ('fb02e99c-03b8-4c79-802c-95eef673d695', 'rutas', 'Ruta 21', 2, '0.00', '', 'fb136f01-5efe-4c9f-b297-48f06574002c');
INSERT INTO "catalogs" VALUES ('db511e4c-a59f-40f1-8183-8b3108e17591', 'rutas', 'Ruta 22', 3, '0.00', '', 'fb136f01-5efe-4c9f-b297-48f06574002c');
INSERT INTO "catalogs" VALUES ('d71e9c77-8ca3-4e24-b100-9368cf403b5e', 'roles', 'colaborador', 4, '0.00', '', NULL);
INSERT INTO "catalogs" VALUES ('eb4fdefd-d8ac-433d-97cf-9a5c63a538a4', 'roles', 'superadmin', 1, '0.00', '', NULL);
INSERT INTO "catalogs" VALUES ('e920b0b2-d9b4-481a-bf69-8eb9b4b04b51', 'roles', 'jefe_de_marketing', 2, '0.00', '', NULL);
INSERT INTO "catalogs" VALUES ('dab548b5-179b-4152-9cf1-7c679fc5a1d3', 'roles', 'supervisor_ventas', 3, '0.00', '', NULL);
INSERT INTO "catalogs" VALUES ('e08d07bf-9b46-47e6-822e-2272c1d176c1', 'rutas', 'Ruta28', 6, '0.00', '', NULL);
INSERT INTO "catalogs" VALUES ('6b08af36-84ef-4863-8550-362e5606264a', 'rutas', 'Ruta 28', 1, '0.00', '', 'fb136f01-5efe-4c9f-b297-48f06574002c');
INSERT INTO "catalogs" VALUES ('eb3812d8-fbc9-4f53-9245-c878a8697a13', 'conceptos', 'Tira', 5, '1.00', '', NULL);
INSERT INTO "catalogs" VALUES ('8f870726-31d1-4c83-889b-a7ca6648a636', 'conceptos', 'Vitrolero', 5, '1.70', '', NULL);
INSERT INTO "catalogs" VALUES ('ba4cdb36-8894-4c7e-9b56-ea9ddb0c47a8', 'rutas', 'Ruta 23', 4, '0.00', '', 'fb136f01-5efe-4c9f-b297-48f06574002c');
INSERT INTO "catalogs" VALUES ('a9accdf9-4568-442d-95c7-643b4f6a4329', 'rutas', 'Ruta 26', 5, '0.00', '', 'fb136f01-5efe-4c9f-b297-48f06574002c');
INSERT INTO "catalogs" VALUES ('c98be3d3-de2a-4a42-98a1-598d880ad23c', 'conceptos', 'Sin Exhibidor', 6, '1.00', '', NULL);
INSERT INTO "catalogs" VALUES ('f99e41d5-3c23-4f1c-b905-fe89d25d711d', 'zonas', 'LA PIEDAD VECINAL', 6, '0.00', '', NULL);
INSERT INTO "catalogs" VALUES ('fb136f01-5efe-4c9f-b297-48f06574002c', 'zonas', 'LA PIEDAD RD', 1, '0.00', '', NULL);
INSERT INTO "catalogs" VALUES ('8cc06343-c671-429a-85e0-44fd2f9fabc3', 'rutas', 'PRUEBA', 1, '0.00', '', NULL);
INSERT INTO "catalogs" VALUES ('989de0c1-96c8-4094-8da4-d3381e032f2a', 'rutas', 'prueba1', 1, '0.00', '', 'cc7738f3-5a7b-441c-9258-9d53935f9d38');


-- Estructura de la tabla daily_captures
DROP TABLE IF EXISTS "daily_captures" CASCADE;
CREATE TABLE "daily_captures" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "folio" character varying NOT NULL,
  "user_id" uuid NOT NULL,
  "captured_by_username" character varying NOT NULL,
  "zona_captura" character varying NOT NULL,
  "fecha" date NOT NULL,
  "hora_inicio" timestamp with time zone NOT NULL,
  "hora_fin" timestamp with time zone NOT NULL,
  "exhibiciones" jsonb NOT NULL DEFAULT '[]'::jsonb,
  "stats" jsonb NOT NULL DEFAULT '{}'::jsonb,
  "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  "latitud" numeric,
  "longitud" numeric,
  "config_version_id" uuid,
  "score_maximo" numeric,
  "score_calidad_pct" numeric,
  "score_cobertura_pct" numeric,
  "score_final_pct" numeric,
  "sync_uuid" uuid,
  "distancia_tienda" numeric,
  "confianza_ubicacion" text DEFAULT 'alta'::text,
  "flag_fraude_frontend" boolean DEFAULT false,
  "flag_fraude_backend" boolean DEFAULT false,
  "flag_revisado_auditoria" boolean DEFAULT false,
  "fecha_revision_auditoria" timestamp with time zone,
  "notas_auditoria" text,
  "intentos_sincronizacion" integer DEFAULT 0,
  "fecha_creacion_dispositivo" timestamp with time zone,
  "fecha_sincronizacion" timestamp with time zone
);

-- Datos de la tabla daily_captures
INSERT INTO "daily_captures" VALUES ('a3efe15a-814f-4a0a-96c7-3c33a8131d05', 'M-091239', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Fri Apr 17 2026 00:00:00 GMT-0600 (hora estándar central), Fri Apr 17 2026 09:12:15 GMT-0600 (hora estándar central), Fri Apr 17 2026 09:12:39 GMT-0600 (hora estándar central), [object Object], [object Object], Fri Apr 17 2026 09:12:38 GMT-0600 (hora estándar central), '20.35270000', '-102.01760000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('5987d36b-a483-4edf-a5da-b32fd6ac82e0', 'A-071549', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 07:13:51 GMT-0600 (hora estándar central), Sat Apr 18 2026 07:15:49 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 07:16:04 GMT-0600 (hora estándar central), '20.34651830', '-102.02010890', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('63877fbc-eafb-4215-aa8d-a063e40fd928', '8ab27bd7', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Fri Apr 17 2026 00:00:00 GMT-0600 (hora estándar central), Fri Apr 17 2026 13:29:44 GMT-0600 (hora estándar central), Fri Apr 17 2026 13:36:07 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 07:30:27 GMT-0600 (hora estándar central), '20.44586684', '-102.14347538', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('7b0dec5a-073e-498d-8926-73b744a441ed', '8ab27bd7', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Fri Apr 17 2026 00:00:00 GMT-0600 (hora estándar central), Fri Apr 17 2026 13:29:44 GMT-0600 (hora estándar central), Fri Apr 17 2026 13:36:07 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 07:39:53 GMT-0600 (hora estándar central), '20.44586684', '-102.14347538', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('b2187ea0-fac9-47e7-b33a-1a67d379cf94', 'V-093603', '53903fa5-edba-49cf-869a-7e3b75eedd24', 'victorino_urbano', 'LA PIEDAD', Fri Apr 17 2026 00:00:00 GMT-0600 (hora estándar central), Fri Apr 17 2026 07:16:00 GMT-0600 (hora estándar central), Fri Apr 17 2026 09:36:03 GMT-0600 (hora estándar central), [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object], [object Object], Fri Apr 17 2026 09:36:28 GMT-0600 (hora estándar central), '20.34645861', '-102.02001393', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('412292b1-b72e-4dd4-aa41-16bed86569a9', '8e071956', '53903fa5-edba-49cf-869a-7e3b75eedd24', 'victorino_urbano', 'LA PIEDAD', Fri Apr 17 2026 00:00:00 GMT-0600 (hora estándar central), Fri Apr 17 2026 07:16:00 GMT-0600 (hora estándar central), Fri Apr 17 2026 09:36:03 GMT-0600 (hora estándar central), [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object], [object Object], Fri Apr 17 2026 09:59:33 GMT-0600 (hora estándar central), '20.34645861', '-102.02001393', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('c990dcfc-e381-402b-93dd-2790e198c16f', 'V-104944', '53903fa5-edba-49cf-869a-7e3b75eedd24', 'victorino_urbano', 'LA PIEDAD', Fri Apr 17 2026 00:00:00 GMT-0600 (hora estándar central), Fri Apr 17 2026 10:42:59 GMT-0600 (hora estándar central), Fri Apr 17 2026 10:49:44 GMT-0600 (hora estándar central), [object Object], [object Object], Fri Apr 17 2026 10:50:03 GMT-0600 (hora estándar central), '20.45054287', '-102.09818812', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('c8aed062-2fba-4360-a045-a266011b39e6', '8ab27bd7', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Fri Apr 17 2026 00:00:00 GMT-0600 (hora estándar central), Fri Apr 17 2026 13:29:44 GMT-0600 (hora estándar central), Fri Apr 17 2026 13:36:07 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 07:41:57 GMT-0600 (hora estándar central), '20.44586684', '-102.14347538', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('dfa16e08-2e0f-42b0-bbd0-d267e4f9e8d1', '96a0db14', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Fri Apr 17 2026 00:00:00 GMT-0600 (hora estándar central), Fri Apr 17 2026 15:11:25 GMT-0600 (hora estándar central), Fri Apr 17 2026 15:15:56 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 07:54:16 GMT-0600 (hora estándar central), '20.34692120', '-102.01880180', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('7f75faf1-f364-4ff5-9f1f-61b1559b91ac', 'M-080237', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 07:58:11 GMT-0600 (hora estándar central), Sat Apr 18 2026 08:02:37 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 07:58:58 GMT-0600 (hora estándar central), '20.35397120', '-102.04453650', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('53cfa8fb-0705-4692-b59b-f2d92d7bbc5a', 'J-081306', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 07:38:44 GMT-0600 (hora estándar central), Sat Apr 18 2026 08:13:06 GMT-0600 (hora estándar central), [object Object],[object Object], [object Object], Sat Apr 18 2026 08:13:23 GMT-0600 (hora estándar central), '20.35051378', '-102.05719198', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('8c940a85-28ce-47e8-b0fb-ae33fff0317b', 'J-084131', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 08:39:54 GMT-0600 (hora estándar central), Sat Apr 18 2026 08:41:31 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 08:41:41 GMT-0600 (hora estándar central), '20.37446809', '-102.02558187', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('59c4ecbd-3693-4113-967c-928391064f65', 'M-085022', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 08:18:32 GMT-0600 (hora estándar central), Sat Apr 18 2026 08:50:22 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 08:46:43 GMT-0600 (hora estándar central), '20.35188550', '-102.04202300', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('5c0bf02f-b9f9-4a8e-89ff-9e8589d29a73', 'J-084734', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 08:45:54 GMT-0600 (hora estándar central), Sat Apr 18 2026 08:47:34 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 08:47:50 GMT-0600 (hora estándar central), '20.37644646', '-102.01997005', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('6d4720a6-295b-4f77-b499-202e16223c61', 'J-090740', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 08:55:19 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:07:40 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 09:07:51 GMT-0600 (hora estándar central), '20.37600927', '-102.02384504', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('08e2c25f-56c7-4abd-b7e7-1c044d6041e8', 'A-091637', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:09:03 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:16:37 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 09:16:45 GMT-0600 (hora estándar central), '20.33171170', '-102.03698170', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('998af02b-f544-408e-baea-f45132e56861', '02f8de00', 'f1fccc8b-976b-48df-9184-39cda22f229c', 'superoot', 'No Asignada', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 08:49:36 GMT-0600 (hora estándar central), Sat Apr 18 2026 08:49:57 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 09:17:02 GMT-0600 (hora estándar central), '20.38594941', '-101.90149267', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('4f48ce1d-731d-4932-ac5e-605258ee3ea9', 'J-091755', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:12:39 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:17:55 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 09:18:04 GMT-0600 (hora estándar central), '20.37607712', '-102.02558246', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('1aa9f767-ef32-4af0-8919-78eb7499813b', 'J-092723', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:21:10 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:27:23 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 09:27:34 GMT-0600 (hora estándar central), '20.37560928', '-102.02554544', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('2fa92533-8a69-4277-866f-e02b2131e5e3', 'S-092922', 'f1fccc8b-976b-48df-9184-39cda22f229c', 'superoot', 'No Asignada', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:23:45 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:29:22 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 09:29:33 GMT-0600 (hora estándar central), '20.41077479', '-101.96209640', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('609c0f91-6b8f-4cf6-beb7-82d844dcd22e', 'A-095238', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:47:45 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:52:38 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 09:52:44 GMT-0600 (hora estándar central), '20.47279670', '-102.19443000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('8b8f0428-5e1d-4c25-8d95-43b7338724b8', 'J-094325', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:37:29 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:43:25 GMT-0600 (hora estándar central), [object Object],[object Object], [object Object], Sat Apr 18 2026 09:43:42 GMT-0600 (hora estándar central), '20.37617743', '-102.03087102', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('ce3e1412-a398-4b9e-9a18-e0a9b3116d6e', 'S-095342', 'f1fccc8b-976b-48df-9184-39cda22f229c', 'superoot', 'No Asignada', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:40:49 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:53:42 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 09:53:55 GMT-0600 (hora estándar central), '20.41205387', '-101.96266103', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('b880684d-d640-4619-a43f-aa5736cab322', 'b16c3a9c', 'f1fccc8b-976b-48df-9184-39cda22f229c', 'superoot', 'No Asignada', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:40:49 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:53:42 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 09:57:39 GMT-0600 (hora estándar central), '20.41205387', '-101.96266103', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('51c2334a-35cc-4232-8fa7-17231222b863', 'M-100520', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:20:20 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:05:20 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 10:01:44 GMT-0600 (hora estándar central), '20.34069910', '-102.03360140', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('0a0e08d1-8f57-4890-b237-0bb7298fc1f9', 'S-100917', 'f1fccc8b-976b-48df-9184-39cda22f229c', 'superoot', 'No Asignada', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:04:31 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:09:17 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 10:09:28 GMT-0600 (hora estándar central), '20.41343146', '-101.96122244', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('08415c5c-e6f3-44f8-9e3e-6d1c772d08e0', 'J-101144', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 09:57:42 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:11:44 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 10:11:54 GMT-0600 (hora estándar central), '20.37576722', '-102.03200972', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('ca18e193-2881-426a-9b72-06da3873c470', 'J-101717', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:16:34 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:17:17 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 10:17:26 GMT-0600 (hora estándar central), '20.37402558', '-102.03343675', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('7496866f-1298-4399-901d-2db1762ea04c', 'S-101812', 'f1fccc8b-976b-48df-9184-39cda22f229c', 'superoot', 'No Asignada', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:16:43 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:18:12 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 10:18:24 GMT-0600 (hora estándar central), '20.41341982', '-101.96062111', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('a45aabfe-8e28-4ba1-92af-06c2b9c7f561', 'M-102438', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:20:27 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:24:38 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 10:20:58 GMT-0600 (hora estándar central), '20.34177790', '-102.03437210', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('ca97f56b-8aa5-4bdf-bd30-219746089c01', 'A-102107', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:12:36 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:21:07 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 10:21:17 GMT-0600 (hora estándar central), '20.46919500', '-102.22202330', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('344486ea-6f0a-48db-8ba3-545ffa79ebfb', 'J-102302', '64400165-08be-4487-9ec2-2801006ad410', 'jose_garcia', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:20:49 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:23:02 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 10:23:13 GMT-0600 (hora estándar central), '20.41559194', '-101.95996751', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('3e4c8773-71d8-4303-b2da-4aca2f05211f', 'J-102816', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:20:16 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:28:16 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 10:28:26 GMT-0600 (hora estándar central), '20.37379229', '-102.03316214', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('af31e3ab-5175-4808-9a2a-09e2dc11b4d7', 'J-103759', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:32:53 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:37:59 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 10:38:07 GMT-0600 (hora estándar central), '20.37385725', '-102.03147018', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('1e813c35-871e-45cd-b1b3-cc49af97e81f', 'A-090607', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Tue Apr 21 2026 00:00:00 GMT-0600 (hora estándar central), Tue Apr 21 2026 09:05:49 GMT-0600 (hora estándar central), Tue Apr 21 2026 09:06:07 GMT-0600 (hora estándar central), [object Object], [object Object], Tue Apr 21 2026 09:06:08 GMT-0600 (hora estándar central), '20.35270000', '-102.01760000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('1f31a127-630c-4947-a54b-d361c24c241a', 'J-103820', '64400165-08be-4487-9ec2-2801006ad410', 'jose_garcia', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:26:48 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:38:20 GMT-0600 (hora estándar central), [object Object],[object Object], [object Object], Sat Apr 18 2026 10:38:39 GMT-0600 (hora estándar central), '20.41590036', '-101.96024210', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('1f2a0c05-d192-4849-a562-4efc079d8efa', 'd9015b61', '64400165-08be-4487-9ec2-2801006ad410', 'jose_garcia', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:26:48 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:38:20 GMT-0600 (hora estándar central), [object Object],[object Object], [object Object], Sat Apr 18 2026 10:39:07 GMT-0600 (hora estándar central), '20.41590036', '-101.96024210', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('2f778a79-2cb0-4548-8926-4fa2a2ed79e5', 'M-114553', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 11:38:45 GMT-0600 (hora estándar central), Sat Apr 18 2026 11:45:53 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 11:42:11 GMT-0600 (hora estándar central), '20.29811810', '-101.97811820', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('c7d0cb3b-63e0-4105-89d0-2a879fde1196', 'A-105240', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:48:31 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:52:40 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 10:53:06 GMT-0600 (hora estándar central), '20.44269150', '-102.19179120', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('ad33481c-2113-4592-96b0-d03eab1a1f1f', 'J-105805', '64400165-08be-4487-9ec2-2801006ad410', 'jose_garcia', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:54:32 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:58:05 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 10:58:17 GMT-0600 (hora estándar central), '20.41606734', '-101.96058521', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('476bfedf-ee06-438a-a306-95a99509db8f', 'c7ec8c63', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 11:03:22 GMT-0600 (hora estándar central), Sat Apr 18 2026 11:10:07 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 11:18:00 GMT-0600 (hora estándar central), '20.29876730', '-101.98793830', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('446cfc84-217c-4a72-870c-1beeab452dff', 'M-112211', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 11:15:09 GMT-0600 (hora estándar central), Sat Apr 18 2026 11:22:11 GMT-0600 (hora estándar central), [object Object],[object Object], [object Object], Sat Apr 18 2026 11:18:55 GMT-0600 (hora estándar central), '20.29925830', '-101.98838000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('c591193e-e1e3-4c31-9218-67b6a0b10995', 'A-113450', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 11:31:59 GMT-0600 (hora estándar central), Sat Apr 18 2026 11:34:50 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 11:35:00 GMT-0600 (hora estándar central), '20.44218500', '-102.19312000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('09bf7247-b247-4f4a-a54e-b1b89b9e9392', 'M-123103', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:22:02 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:31:03 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 12:27:23 GMT-0600 (hora estándar central), '20.29850430', '-101.97868900', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('2553b1f9-aabd-4af2-b838-d856abddff2c', 'M-120348', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 11:54:37 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:03:48 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 12:00:08 GMT-0600 (hora estándar central), '20.29810800', '-101.97809560', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('7efdca0a-c238-4337-8528-356b986b59cf', 'J-120741', '64400165-08be-4487-9ec2-2801006ad410', 'jose_garcia', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 10:58:31 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:07:41 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 12:07:52 GMT-0600 (hora estándar central), '20.41599186', '-101.96026932', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('efd5a1a9-b30e-41ea-93c0-10845dd20dce', 'M-121706', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:09:32 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:17:06 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 12:13:26 GMT-0600 (hora estándar central), '20.30069990', '-101.97867480', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('24e8f433-b3ee-49e6-803d-210235c1a499', 'A-122110', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:19:08 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:21:10 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 12:21:18 GMT-0600 (hora estándar central), '20.44602830', '-102.13173000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('4b2a6e0c-5264-4376-ac5c-f231e26a422a', 'J-122206', '64400165-08be-4487-9ec2-2801006ad410', 'jose_garcia', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:17:23 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:22:06 GMT-0600 (hora estándar central), [object Object],[object Object], [object Object], Sat Apr 18 2026 12:22:27 GMT-0600 (hora estándar central), '20.41776980', '-101.96225055', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('7a57bca8-7a87-4aa8-bfff-9685256d233b', 'A-123054', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:29:03 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:30:54 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 12:31:02 GMT-0600 (hora estándar central), '20.44394170', '-102.12935670', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('67a83d05-efec-4fe0-ba8e-7feb6b739dd6', 'M-140807', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 13:55:42 GMT-0600 (hora estándar central), Sat Apr 18 2026 14:08:07 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 14:04:27 GMT-0600 (hora estándar central), '20.32216110', '-102.00355200', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('5d52cee4-0445-45bd-9cd5-20726e676bfb', 'M-124131', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:32:34 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:41:31 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 12:37:51 GMT-0600 (hora estándar central), '20.29857810', '-101.97858600', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('7c4e70ac-d85a-4799-bd9c-259304436b76', 'M-130225', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 12:51:41 GMT-0600 (hora estándar central), Sat Apr 18 2026 13:02:25 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 12:58:47 GMT-0600 (hora estándar central), '20.29793060', '-101.97884400', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('0e743f34-afae-4202-bab9-e4d9f226f88c', '31d78f16', '64400165-08be-4487-9ec2-2801006ad410', 'jose_garcia', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 13:05:10 GMT-0600 (hora estándar central), Sat Apr 18 2026 13:08:45 GMT-0600 (hora estándar central), [object Object],[object Object],[object Object], [object Object], Sat Apr 18 2026 13:13:08 GMT-0600 (hora estándar central), '20.44425457', '-101.97088945', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('7bdd80c1-b54b-41eb-996b-d812c5b0edb6', '2d64b866', '64400165-08be-4487-9ec2-2801006ad410', 'jose_garcia', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 13:11:44 GMT-0600 (hora estándar central), Sat Apr 18 2026 13:15:04 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 13:37:21 GMT-0600 (hora estándar central), '20.44425141', '-101.97089119', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('3f58ee3f-41c4-4cb6-bf90-16138416476a', 'J-134033', '64400165-08be-4487-9ec2-2801006ad410', 'jose_garcia', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 13:37:08 GMT-0600 (hora estándar central), Sat Apr 18 2026 13:40:33 GMT-0600 (hora estándar central), [object Object],[object Object], [object Object], Sat Apr 18 2026 13:40:59 GMT-0600 (hora estándar central), '20.44495965', '-101.96958962', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('452c8576-913b-4412-813a-296ec1e707bd', 'M-145021', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat Apr 18 2026 00:00:00 GMT-0600 (hora estándar central), Sat Apr 18 2026 14:45:48 GMT-0600 (hora estándar central), Sat Apr 18 2026 14:50:21 GMT-0600 (hora estándar central), [object Object], [object Object], Sat Apr 18 2026 14:46:45 GMT-0600 (hora estándar central), '20.32747840', '-102.01354120', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('763b33dd-038c-4409-8c91-240f6291886e', 'M-081656', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 07:56:06 GMT-0600 (hora estándar central), Mon Apr 20 2026 08:16:56 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 08:13:16 GMT-0600 (hora estándar central), '20.30022090', '-101.98726480', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('bb802527-568f-49d0-8f84-6cb62c773302', 'A-081429', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 08:12:46 GMT-0600 (hora estándar central), Mon Apr 20 2026 08:14:29 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 08:14:38 GMT-0600 (hora estándar central), '20.35987950', '-102.01429750', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('14be6c2f-55c6-4240-bd3f-16bb1529cdca', 'A-100134', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Fri May 01 2026 00:00:00 GMT-0600 (hora estándar central), Fri May 01 2026 10:01:12 GMT-0600 (hora estándar central), Fri May 01 2026 10:01:34 GMT-0600 (hora estándar central), [object Object], [object Object], Fri May 01 2026 10:01:36 GMT-0600 (hora estándar central), '20.37037807', '-102.02267941', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('fdd26876-fdf0-444a-a9ae-f6a59411fadb', 'M-085149', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 08:39:02 GMT-0600 (hora estándar central), Mon Apr 20 2026 08:51:49 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 08:48:11 GMT-0600 (hora estándar central), '20.29987080', '-101.97886420', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('b359caf8-3c32-4e28-b13d-157f7b73db0a', 'S-093453', 'f1fccc8b-976b-48df-9184-39cda22f229c', 'superoot', 'No Asignada', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 09:34:20 GMT-0600 (hora estándar central), Mon Apr 20 2026 09:34:53 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 09:34:56 GMT-0600 (hora estándar central), '20.35270000', '-102.01760000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('4cdbe2a6-ff7c-48b3-b6c9-fbaedd81e977', 'A-135845', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 13:53:21 GMT-0600 (hora estándar central), Mon Apr 20 2026 13:58:45 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 13:59:00 GMT-0600 (hora estándar central), '20.32985660', '-102.02595100', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('ee858f79-dc1c-48a2-8e60-04685759db48', 'A-094006', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 09:38:18 GMT-0600 (hora estándar central), Mon Apr 20 2026 09:40:06 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 09:40:49 GMT-0600 (hora estándar central), '20.33372090', '-102.03528830', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('e2130356-38a8-44b6-8fc4-4f131fc4273e', 'A-100454', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 10:01:57 GMT-0600 (hora estándar central), Mon Apr 20 2026 10:04:54 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 10:05:02 GMT-0600 (hora estándar central), '20.33369960', '-102.03701550', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('a18ae126-1c2e-4c3c-887b-699529fc6853', 'A-102202', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 10:17:32 GMT-0600 (hora estándar central), Mon Apr 20 2026 10:22:02 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 10:22:14 GMT-0600 (hora estándar central), '20.33591230', '-102.03908430', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('ff4b98dc-8918-4301-9688-4fb12111dd0e', 'A-103514', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 10:30:28 GMT-0600 (hora estándar central), Mon Apr 20 2026 10:35:14 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 10:35:22 GMT-0600 (hora estándar central), '20.33604830', '-102.03826500', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('6751d929-c08b-422c-8a93-ee88a4bb3833', 'A-104223', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 10:38:29 GMT-0600 (hora estándar central), Mon Apr 20 2026 10:42:23 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 10:42:31 GMT-0600 (hora estándar central), '20.33658410', '-102.03800010', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('36019603-d2be-4c63-95d0-333cfe3c08f3', 'S-090518', 'f1fccc8b-976b-48df-9184-39cda22f229c', 'superoot', 'No Asignada', Tue Apr 21 2026 00:00:00 GMT-0600 (hora estándar central), Tue Apr 21 2026 09:04:55 GMT-0600 (hora estándar central), Tue Apr 21 2026 09:05:18 GMT-0600 (hora estándar central), [object Object], [object Object], Tue Apr 21 2026 09:05:19 GMT-0600 (hora estándar central), '20.35270000', '-102.01760000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('d3c91a5d-5b80-4509-a930-813bcad5e94b', 'A-111016', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 11:07:59 GMT-0600 (hora estándar central), Mon Apr 20 2026 11:10:16 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 11:10:22 GMT-0600 (hora estándar central), '20.33688560', '-102.03659450', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('8b748127-94a1-4c64-9fa1-866275f50d7f', 'A-112118', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 11:19:17 GMT-0600 (hora estándar central), Mon Apr 20 2026 11:21:18 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 11:21:27 GMT-0600 (hora estándar central), '20.33551330', '-102.03692670', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('c38176b3-f281-43d6-a462-93903ac70170', 'A-112715', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 11:24:09 GMT-0600 (hora estándar central), Mon Apr 20 2026 11:27:15 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 11:27:24 GMT-0600 (hora estándar central), '20.33448510', '-102.03549520', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('9e4437a9-572a-422c-bc63-a4ea03961885', 'A-113510', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 11:32:37 GMT-0600 (hora estándar central), Mon Apr 20 2026 11:35:10 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 11:35:19 GMT-0600 (hora estándar central), '20.33693670', '-102.03417000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('bb56ad21-c054-4491-9a17-f2fa0e3bda2a', 'A-130536', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 13:03:51 GMT-0600 (hora estándar central), Mon Apr 20 2026 13:05:36 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 13:05:49 GMT-0600 (hora estándar central), '20.33168150', '-102.02716520', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('49503df0-5dcb-4b21-a984-d1aad1c2fae9', 'a6ea5103', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon Apr 20 2026 00:00:00 GMT-0600 (hora estándar central), Mon Apr 20 2026 13:25:33 GMT-0600 (hora estándar central), Mon Apr 20 2026 13:27:21 GMT-0600 (hora estándar central), [object Object], [object Object], Mon Apr 20 2026 13:53:47 GMT-0600 (hora estándar central), '20.33196330', '-102.02492830', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('7bbf99db-31fa-429b-a8bf-d81e505fa3df', 'S-091012', 'f1fccc8b-976b-48df-9184-39cda22f229c', 'superoot', 'No Asignada', Tue Apr 21 2026 00:00:00 GMT-0600 (hora estándar central), Tue Apr 21 2026 09:09:53 GMT-0600 (hora estándar central), Tue Apr 21 2026 09:10:12 GMT-0600 (hora estándar central), [object Object], [object Object], Tue Apr 21 2026 09:10:19 GMT-0600 (hora estándar central), '20.34684016', '-102.01863057', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('06da627a-5465-48ef-8b4d-7e3a55074227', 'S-171421', 'f1fccc8b-976b-48df-9184-39cda22f229c', 'superoot', 'No Asignada', Tue Apr 21 2026 00:00:00 GMT-0600 (hora estándar central), Tue Apr 21 2026 17:14:06 GMT-0600 (hora estándar central), Tue Apr 21 2026 17:14:21 GMT-0600 (hora estándar central), [object Object], [object Object], Tue Apr 21 2026 17:14:27 GMT-0600 (hora estándar central), '20.34684102', '-102.01862806', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('06b474d5-52fc-4e9d-a4cc-f7895902a560', 'M-130727', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Fri May 01 2026 00:00:00 GMT-0600 (hora estándar central), Fri May 01 2026 12:57:20 GMT-0600 (hora estándar central), Fri May 01 2026 13:07:27 GMT-0600 (hora estándar central), [object Object], [object Object], Fri May 01 2026 13:04:09 GMT-0600 (hora estándar central), '20.21642980', '-101.73241030', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('d4762a90-f6ad-4efc-ba95-9055bdadff83', 'M-161523', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Fri May 01 2026 00:00:00 GMT-0600 (hora estándar central), Fri May 01 2026 15:56:36 GMT-0600 (hora estándar central), Fri May 01 2026 16:15:23 GMT-0600 (hora estándar central), [object Object], [object Object], Fri May 01 2026 16:11:39 GMT-0600 (hora estándar central), '20.28816860', '-101.63926290', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('576259bc-2e69-47b2-a2e9-95c9d0fd3f29', 'M-082053', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat May 02 2026 00:00:00 GMT-0600 (hora estándar central), Sat May 02 2026 08:10:01 GMT-0600 (hora estándar central), Sat May 02 2026 08:20:53 GMT-0600 (hora estándar central), [object Object], [object Object], Sat May 02 2026 08:17:08 GMT-0600 (hora estándar central), '20.28816860', '-101.63926290', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('f6ef8a8f-53a2-49a8-a35c-088746f89b19', 'M-100023', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat May 02 2026 00:00:00 GMT-0600 (hora estándar central), Sat May 02 2026 09:50:48 GMT-0600 (hora estándar central), Sat May 02 2026 10:00:23 GMT-0600 (hora estándar central), [object Object], [object Object], Sat May 02 2026 09:56:39 GMT-0600 (hora estándar central), '20.28816860', '-101.63926290', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('a82004c1-7d8a-4ae4-afe2-132099d90e1d', 'a6d22646', 'f1fccc8b-976b-48df-9184-39cda22f229c', 'superoot', 'No Asignada', Sat May 02 2026 00:00:00 GMT-0600 (hora estándar central), Sat May 02 2026 15:11:27 GMT-0600 (hora estándar central), Sat May 02 2026 15:19:26 GMT-0600 (hora estándar central), [object Object],[object Object], [object Object], Sat May 02 2026 15:21:50 GMT-0600 (hora estándar central), '20.34674090', '-102.01852848', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('40427635-c824-4f01-97ba-515b926bf0d4', 'S-152231', 'f1fccc8b-976b-48df-9184-39cda22f229c', 'superoot', 'No Asignada', Sat May 02 2026 00:00:00 GMT-0600 (hora estándar central), Sat May 02 2026 15:18:48 GMT-0600 (hora estándar central), Sat May 02 2026 15:22:31 GMT-0600 (hora estándar central), [object Object], [object Object], Sat May 02 2026 15:22:53 GMT-0600 (hora estándar central), '20.34687180', '-102.01857870', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('f4f9e128-80a6-4ede-8458-8233ce4fd6c4', 'J-153436', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', 'LA PIEDAD', Sat May 02 2026 00:00:00 GMT-0600 (hora estándar central), Sat May 02 2026 15:33:03 GMT-0600 (hora estándar central), Sat May 02 2026 15:34:36 GMT-0600 (hora estándar central), [object Object], [object Object], Sat May 02 2026 15:34:38 GMT-0600 (hora estándar central), '20.34653361', '-102.01847466', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('ed2c6301-2887-4542-ab53-8eda0ecf3277', 'A-080123', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon May 04 2026 00:00:00 GMT-0600 (hora estándar central), Mon May 04 2026 07:51:26 GMT-0600 (hora estándar central), Mon May 04 2026 08:01:23 GMT-0600 (hora estándar central), [object Object], [object Object], Mon May 04 2026 08:01:27 GMT-0600 (hora estándar central), '20.35620160', '-102.01324390', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('d88172b0-83a5-4332-ab07-24b38ca5d26e', 'A-082454', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon May 04 2026 00:00:00 GMT-0600 (hora estándar central), Mon May 04 2026 08:17:08 GMT-0600 (hora estándar central), Mon May 04 2026 08:24:54 GMT-0600 (hora estándar central), [object Object], [object Object], Mon May 04 2026 08:24:57 GMT-0600 (hora estándar central), '20.35900410', '-102.01367670', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('081c18d6-6fce-4763-8cff-2591b8775b2f', '3198055d', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat May 02 2026 00:00:00 GMT-0600 (hora estándar central), Sat May 02 2026 11:21:54 GMT-0600 (hora estándar central), Sat May 02 2026 11:33:16 GMT-0600 (hora estándar central), [object Object], [object Object], Mon May 04 2026 11:03:34 GMT-0600 (hora estándar central), '20.28816860', '-101.63926290', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('84076096-8ee9-43de-8040-733cc31f7492', '82addf8d', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Sat May 02 2026 00:00:00 GMT-0600 (hora estándar central), Sat May 02 2026 11:58:53 GMT-0600 (hora estándar central), Sat May 02 2026 12:19:07 GMT-0600 (hora estándar central), [object Object], [object Object], Mon May 04 2026 11:03:37 GMT-0600 (hora estándar central), '20.28816860', '-101.63926290', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('995ca210-2b44-40b7-bfe3-3591027d3d22', 'A-113708', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon May 04 2026 00:00:00 GMT-0600 (hora estándar central), Mon May 04 2026 11:33:17 GMT-0600 (hora estándar central), Mon May 04 2026 11:37:08 GMT-0600 (hora estándar central), [object Object], [object Object], Mon May 04 2026 11:37:12 GMT-0600 (hora estándar central), '20.33682740', '-102.03655060', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('2470e2a7-46a1-47cb-bea1-22653dc34f38', 'A-114937', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon May 04 2026 00:00:00 GMT-0600 (hora estándar central), Mon May 04 2026 11:45:40 GMT-0600 (hora estándar central), Mon May 04 2026 11:49:37 GMT-0600 (hora estándar central), [object Object], [object Object], Mon May 04 2026 11:49:41 GMT-0600 (hora estándar central), '20.33551820', '-102.03693630', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('f543a1fa-d21d-44a7-9629-cf3e2b3bc04f', 'A-122013', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon May 04 2026 00:00:00 GMT-0600 (hora estándar central), Mon May 04 2026 12:15:23 GMT-0600 (hora estándar central), Mon May 04 2026 12:20:13 GMT-0600 (hora estándar central), [object Object], [object Object], Mon May 04 2026 12:20:17 GMT-0600 (hora estándar central), '20.33454720', '-102.03540140', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('127c4090-f5fc-4678-ae22-33dc98a96843', 'A-122915', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon May 04 2026 00:00:00 GMT-0600 (hora estándar central), Mon May 04 2026 12:23:39 GMT-0600 (hora estándar central), Mon May 04 2026 12:29:15 GMT-0600 (hora estándar central), [object Object], [object Object], Mon May 04 2026 12:29:19 GMT-0600 (hora estándar central), '20.33371790', '-102.03526370', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('b0ad4d97-ff2a-46de-97f6-0a6933e1e11e', 'A-124100', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Mon May 04 2026 00:00:00 GMT-0600 (hora estándar central), Mon May 04 2026 12:37:40 GMT-0600 (hora estándar central), Mon May 04 2026 12:41:00 GMT-0600 (hora estándar central), [object Object], [object Object], Mon May 04 2026 12:41:05 GMT-0600 (hora estándar central), '20.33165740', '-102.03702810', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('45056180-7d42-4423-b324-c88c34980b8b', 'B-081134', '33f1b85d-ec36-42f5-a090-d5962483dffc', 'bruno_lopez', 'NACIONAL', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 08:08:46 GMT-0600 (hora estándar central), Tue May 05 2026 08:11:34 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 08:11:37 GMT-0600 (hora estándar central), '20.25933136', '-102.14028788', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('fc85c58f-906b-49f8-817b-5e5273fb9e6c', 'B-142819', '33f1b85d-ec36-42f5-a090-d5962483dffc', 'bruno_lopez', 'NACIONAL', Mon May 04 2026 00:00:00 GMT-0600 (hora estándar central), Mon May 04 2026 14:24:30 GMT-0600 (hora estándar central), Mon May 04 2026 14:28:19 GMT-0600 (hora estándar central), [object Object],[object Object], [object Object], Mon May 04 2026 14:29:16 GMT-0600 (hora estándar central), '20.34542506', '-102.01452602', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('4cae77dc-1a3b-4b65-9853-b86d993ecd47', 'V-100605', '53903fa5-edba-49cf-869a-7e3b75eedd24', 'victorino_urbano', 'LA PIEDAD', Fri Apr 17 2026 00:00:00 GMT-0600 (hora estándar central), Fri Apr 17 2026 09:57:00 GMT-0600 (hora estándar central), Fri Apr 17 2026 10:06:05 GMT-0600 (hora estándar central), [object Object],[object Object], [object Object], Fri Apr 17 2026 10:06:12 GMT-0600 (hora estándar central), '20.45169864', '-102.12491917', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('482bb898-e1de-4ef2-9993-018aaf2ce6cb', '96dd12b2', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Mon May 04 2026 00:00:00 GMT-0600 (hora estándar central), Mon May 04 2026 14:39:25 GMT-0600 (hora estándar central), Mon May 04 2026 14:47:59 GMT-0600 (hora estándar central), [object Object], [object Object], Mon May 04 2026 15:39:50 GMT-0600 (hora estándar central), '20.36890500', '-101.80748500', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('77a231b4-60c2-4c62-ac61-3ad080a28ff9', 'B-080314', '33f1b85d-ec36-42f5-a090-d5962483dffc', 'bruno_lopez', 'NACIONAL', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 07:56:55 GMT-0600 (hora estándar central), Tue May 05 2026 08:03:14 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 08:04:17 GMT-0600 (hora estándar central), '20.25854812', '-102.14342249', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('1244da09-0396-41f4-9077-c5aae7ca6cf0', 'M-080930', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 07:52:14 GMT-0600 (hora estándar central), Tue May 05 2026 08:09:30 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 08:05:59 GMT-0600 (hora estándar central), '20.33697410', '-102.04266930', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('001b781e-80ef-410b-bfb9-66b8cc93211a', 'B-081839', '33f1b85d-ec36-42f5-a090-d5962483dffc', 'bruno_lopez', 'NACIONAL', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 08:13:44 GMT-0600 (hora estándar central), Tue May 05 2026 08:18:39 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 08:18:53 GMT-0600 (hora estándar central), '20.25808850', '-102.13905824', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('31ea8242-c1a8-4e88-bc15-8f59f0a84e9a', 'B-083705', '33f1b85d-ec36-42f5-a090-d5962483dffc', 'bruno_lopez', 'NACIONAL', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 08:24:42 GMT-0600 (hora estándar central), Tue May 05 2026 08:37:05 GMT-0600 (hora estándar central), [object Object],[object Object], [object Object], Tue May 05 2026 08:37:50 GMT-0600 (hora estándar central), '20.26045579', '-102.14213112', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('4e174324-dda4-4628-bf57-26ca4f3bd493', 'M-085019', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 08:26:57 GMT-0600 (hora estándar central), Tue May 05 2026 08:50:19 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 08:46:36 GMT-0600 (hora estándar central), '20.32728680', '-102.01996890', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('6d9f68b6-c60a-466e-adc0-b5f6b24a92a8', 'B-090527', '33f1b85d-ec36-42f5-a090-d5962483dffc', 'bruno_lopez', 'NACIONAL', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 08:55:40 GMT-0600 (hora estándar central), Tue May 05 2026 09:05:27 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 09:06:49 GMT-0600 (hora estándar central), '20.26088781', '-102.14293596', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('855fb4fd-6bd4-4697-b295-bc1f37afc4f3', 'B-090958', '33f1b85d-ec36-42f5-a090-d5962483dffc', 'bruno_lopez', 'NACIONAL', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 09:06:54 GMT-0600 (hora estándar central), Tue May 05 2026 09:09:58 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 09:10:38 GMT-0600 (hora estándar central), '20.26145136', '-102.14301551', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('fbf79361-3335-4841-aa22-4eea15af5fca', 'M-091548', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 09:08:04 GMT-0600 (hora estándar central), Tue May 05 2026 09:15:48 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 09:12:05 GMT-0600 (hora estándar central), '20.29793460', '-101.98936390', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('7fec75dc-79d7-42ce-9aeb-aaf443a98810', 'M-101731', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:08:28 GMT-0600 (hora estándar central), Tue May 05 2026 10:17:31 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 10:13:55 GMT-0600 (hora estándar central), '20.29771990', '-101.97985340', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('6db63d99-792f-44ae-8d34-f241472c171c', '3de755c3', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 09:36:29 GMT-0600 (hora estándar central), Tue May 05 2026 10:16:38 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 10:24:50 GMT-0600 (hora estándar central), '20.34737640', '-102.28327640', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('9a5ef817-1dab-4079-9fc1-fb983e825056', '71e86d4f', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:17:48 GMT-0600 (hora estándar central), Tue May 05 2026 10:33:39 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 10:32:23 GMT-0600 (hora estándar central), '20.27157420', '-101.96226940', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('e869aa86-2e9a-452d-8e9b-d0d9307d5634', '71e86d4f', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:17:48 GMT-0600 (hora estándar central), Tue May 05 2026 10:33:39 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 10:36:15 GMT-0600 (hora estándar central), '20.27157420', '-101.96226940', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('1d2ef84b-6293-4eca-8a1f-9c48514be861', '7fd2fc38', '33f1b85d-ec36-42f5-a090-d5962483dffc', 'bruno_lopez', 'NACIONAL', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 09:23:35 GMT-0600 (hora estándar central), Tue May 05 2026 09:32:34 GMT-0600 (hora estándar central), [object Object],[object Object], [object Object], Tue May 05 2026 10:37:24 GMT-0600 (hora estándar central), '20.26209006', '-102.14160989', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('6ed63614-a107-46d2-b82c-4046393ca56e', 'A-103945', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:37:02 GMT-0600 (hora estándar central), Tue May 05 2026 10:39:45 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 10:39:50 GMT-0600 (hora estándar central), '20.34967500', '-102.28141000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('6cc6bbc1-49a8-4fc1-933b-5a5491f65990', 'B-104041', '33f1b85d-ec36-42f5-a090-d5962483dffc', 'bruno_lopez', 'NACIONAL', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:36:16 GMT-0600 (hora estándar central), Tue May 05 2026 10:40:41 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 10:40:46 GMT-0600 (hora estándar central), '20.32471503', '-102.02492925', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('2486e565-b2d5-4dfd-b103-62f2aee7ee12', 'M-104952', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:39:58 GMT-0600 (hora estándar central), Tue May 05 2026 10:49:52 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 10:46:20 GMT-0600 (hora estándar central), '20.27150580', '-101.96144620', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('8b63304d-f8d1-4a27-bbc0-4512557c637e', 'B-105457', '33f1b85d-ec36-42f5-a090-d5962483dffc', 'bruno_lopez', 'NACIONAL', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:41:59 GMT-0600 (hora estándar central), Tue May 05 2026 10:54:57 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 10:55:02 GMT-0600 (hora estándar central), '20.32411969', '-102.02726507', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('1381b1d5-b976-42b0-b3f8-eafba0cf54be', 'B-111758', '33f1b85d-ec36-42f5-a090-d5962483dffc', 'bruno_lopez', 'NACIONAL', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 11:17:33 GMT-0600 (hora estándar central), Tue May 05 2026 11:17:58 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 11:17:59 GMT-0600 (hora estándar central), '20.35270000', '-102.01760000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('6af9d56f-ee49-43fb-a9d0-181d780b83a1', '22b415ed', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 10:59:06 GMT-0600 (hora estándar central), Tue May 05 2026 11:05:04 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 11:58:10 GMT-0600 (hora estándar central), '20.35271670', '-102.28408500', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('213947a0-3dc7-42fe-8aac-777fa02dbf1d', '270054e3', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 11:21:34 GMT-0600 (hora estándar central), Tue May 05 2026 11:26:11 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 11:58:26 GMT-0600 (hora estándar central), '20.35152950', '-102.28298880', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('5d19ffb8-bf44-4e53-88c8-919710a9fd57', '4fbb045e', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 11:11:29 GMT-0600 (hora estándar central), Tue May 05 2026 11:14:11 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 11:58:30 GMT-0600 (hora estándar central), '20.35145500', '-102.28282330', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('ac2462cc-01f6-4f98-b3ee-f0fcce7c170d', 'A-120053', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 11:57:46 GMT-0600 (hora estándar central), Tue May 05 2026 12:00:53 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 12:00:58 GMT-0600 (hora estándar central), '20.34837240', '-102.28395210', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('e8748d4f-43f3-4196-8cf8-46427fbec7ef', 'M-140348', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 13:58:04 GMT-0600 (hora estándar central), Tue May 05 2026 14:03:48 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 14:00:05 GMT-0600 (hora estándar central), '20.11484170', '-101.93851310', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('41b03608-1347-4ce9-b821-e87f9fa22de0', 'M-143245', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 14:04:20 GMT-0600 (hora estándar central), Tue May 05 2026 14:32:45 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 14:29:05 GMT-0600 (hora estándar central), '20.11210960', '-101.93605500', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);
INSERT INTO "daily_captures" VALUES ('1b058d19-bb99-488e-bfdf-f97e237ffc80', 'M-150314', 'd024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', 'LA PIEDAD', Tue May 05 2026 00:00:00 GMT-0600 (hora estándar central), Tue May 05 2026 15:00:12 GMT-0600 (hora estándar central), Tue May 05 2026 15:03:14 GMT-0600 (hora estándar central), [object Object], [object Object], Tue May 05 2026 14:59:31 GMT-0600 (hora estándar central), '20.16756880', '-101.93649000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alta', false, false, false, NULL, NULL, 0, NULL, NULL);


-- Estructura de la tabla brands
DROP TABLE IF EXISTS "brands" CASCADE;
CREATE TABLE "brands" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "nombre" character varying NOT NULL,
  "activo" boolean DEFAULT true,
  "orden" integer DEFAULT 0
);

-- Datos de la tabla brands
INSERT INTO "brands" VALUES ('764b437f-210c-4a08-a471-eb5066f65007', 'HERSHEYS', true, 0);
INSERT INTO "brands" VALUES ('c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BIMBO BARCEL', true, 0);
INSERT INTO "brands" VALUES ('bd447067-3ce8-4d63-bb93-afed012c8ef0', 'TINAJITA', true, 0);
INSERT INTO "brands" VALUES ('007777e8-5934-4ca9-bb8b-286dcefc4695', 'HUBIN', true, 0);
INSERT INTO "brands" VALUES ('fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'GONAC', true, 0);
INSERT INTO "brands" VALUES ('af19872b-fee3-4ff7-ace1-64474802872e', 'NUTRESA', true, 0);
INSERT INTO "brands" VALUES ('9d7cfe9a-b10f-4adc-9c3e-80b7f5a23121', 'FRUTIFRESK', true, 0);
INSERT INTO "brands" VALUES ('03a48614-e030-4191-a0c9-385a4a0bdcd7', 'QUALAMEX', true, 0);
INSERT INTO "brands" VALUES ('ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA', true, 0);
INSERT INTO "brands" VALUES ('fb12ec4b-363d-4405-8bed-d8092da348f6', 'PEPSICO', true, 0);
INSERT INTO "brands" VALUES ('b0ccdbe5-f393-4767-884a-3ae8245b4b7e', 'CABADAS', true, 0);
INSERT INTO "brands" VALUES ('211086c8-df7b-49c4-bbbc-bfab2cca5cc6', 'JOVY', true, 0);
INSERT INTO "brands" VALUES ('5ccfd622-329c-4c39-b1b2-fc84ccb644f7', 'TOTIS', true, 0);
INSERT INTO "brands" VALUES ('eaf995c9-5d2e-499b-8eb2-1efd9482a98e', 'APROZA', true, 0);
INSERT INTO "brands" VALUES ('18bdd265-522b-461d-b3d3-276d91dbbc87', 'SALSA TAMAZULA', true, 0);
INSERT INTO "brands" VALUES ('ec85b771-2414-4e87-a73e-e46fe7a6a7da', 'LA POSSE', true, 0);
INSERT INTO "brands" VALUES ('d3054621-c605-45a3-af10-14e04d6d8c66', 'VUALA', true, 0);
INSERT INTO "brands" VALUES ('df3d2818-2b64-4846-8ed0-ed72e61c49bf', 'PIN PON', true, 0);
INSERT INTO "brands" VALUES ('5bc625d6-61f8-4974-9309-8e2c3c922aa5', 'GLOBO PAYASO', true, 0);
INSERT INTO "brands" VALUES ('0696dd41-8d97-467d-b84b-6097bf721e86', 'ELECTROLIT', true, 0);
INSERT INTO "brands" VALUES ('1bd49829-af34-4ea3-b815-c6858e471a5d', 'BOKADOS', true, 0);
INSERT INTO "brands" VALUES ('7723a193-bf22-426d-ba96-c2704e2b7fdd', 'LUSSEL', true, 0);
INSERT INTO "brands" VALUES ('e0d61e79-796b-42ed-a1e9-c316a6ba8d4f', 'CHOMPYS', true, 0);
INSERT INTO "brands" VALUES ('355b9d86-7312-4555-904b-007158baff44', 'ABARROTES', true, 0);
INSERT INTO "brands" VALUES ('277c9c08-a681-4b3f-bbaf-676c0f53f011', 'PURO RELAJO', true, 0);
INSERT INTO "brands" VALUES ('6f0bc280-e9b3-4e9f-a287-b4e4b9af5e8a', 'DART', true, 0);
INSERT INTO "brands" VALUES ('672de2c8-2418-4ee5-9c4c-a9295b27bd45', 'JAGUAR', true, 0);
INSERT INTO "brands" VALUES ('ada76b61-269a-4e42-81c3-6329a343b9a4', 'JHONNY', true, 0);
INSERT INTO "brands" VALUES ('43c6eef1-b513-4736-9942-6962c9c8bfb7', 'PROVIDENCIA', true, 0);
INSERT INTO "brands" VALUES ('e3bc8016-5331-4296-824e-28579f8639cf', 'PERFETTI', true, 0);
INSERT INTO "brands" VALUES ('09218f60-ff2c-4cfa-b9e7-86572a7e2623', 'AJEMEX', true, 0);
INSERT INTO "brands" VALUES ('59cd791f-5cb8-426a-bcbb-0c56afe7ebd4', 'ANAHUAC', true, 0);
INSERT INTO "brands" VALUES ('abef406e-fb55-4297-9115-afe5edf90151', 'SUPER/PALMER', true, 0);
INSERT INTO "brands" VALUES ('47a42f16-cf04-4ed6-9400-0f7b9d3260fa', 'PIGUI', true, 0);
INSERT INTO "brands" VALUES ('cf79da15-6e73-4034-896a-d23db543f910', 'COOL TOONS', true, 0);
INSERT INTO "brands" VALUES ('3868b1f6-54f2-4ced-b3cb-c651505bea0d', 'CIMARRON', true, 0);
INSERT INTO "brands" VALUES ('1a7e18ed-94c8-438c-8d76-e5cd83e0c69c', 'AZTECA CONFITERIA', true, 0);
INSERT INTO "brands" VALUES ('23fd51c0-9fd9-4754-a227-cf8f353ab525', 'JUMEX', true, 0);
INSERT INTO "brands" VALUES ('6c92c5d2-d38d-4d1d-8518-76f12dfab377', 'TECNICA', true, 0);
INSERT INTO "brands" VALUES ('a7784274-2a34-4579-9f0b-ca8bae276e83', 'BONDY FIESTA', true, 0);
INSERT INTO "brands" VALUES ('0d1c7a59-969d-4fda-84f3-43d87ea75bb3', 'BOING', true, 0);
INSERT INTO "brands" VALUES ('263c5089-9dea-448b-847f-f26166a5e0c3', 'DULANDY', true, 0);
INSERT INTO "brands" VALUES ('880373be-9a46-4c6c-94ac-e273e1e3ea19', 'NESTLE', true, 0);
INSERT INTO "brands" VALUES ('a91a4148-5fe9-41ed-985a-1f0550797356', 'MARS', true, 0);
INSERT INTO "brands" VALUES ('93582692-d9c8-4ca9-837e-d5e505b6378e', 'RICOLINO/MONDELEZ', true, 0);
INSERT INTO "brands" VALUES ('d5ef6965-4388-48f8-810a-0c09ddc43d81', 'FERRERO', true, 0);
INSERT INTO "brands" VALUES ('a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'BOLSAS DE LOS ALTOS 2', true, 0);
INSERT INTO "brands" VALUES ('7f6833fb-5f0f-4f80-8351-f32563a605c2', 'DELICIAS', true, 0);
INSERT INTO "brands" VALUES ('48120e2d-4533-4c5c-92a2-379e416cf6d4', 'ARCOR', true, 3);
INSERT INTO "brands" VALUES ('d54096c4-ecaf-4505-b510-3f04cbea2c71', 'WINIS', true, 4);
INSERT INTO "brands" VALUES ('aba43d16-6652-4f08-8766-d9138daff311', 'CANELS', true, 5);
INSERT INTO "brands" VALUES ('5895c198-d28e-488a-b235-dc792e460dce', 'MONTES', true, 6);
INSERT INTO "brands" VALUES ('c728fb5a-adf9-472d-9fef-9ae05d73f6af', 'AP', true, 7);
INSERT INTO "brands" VALUES ('a7f45120-07fa-4c88-9f6c-88ea8e618a24', 'DELICIATE', true, 8);
INSERT INTO "brands" VALUES ('4bd2dc1c-503e-4388-a3fd-767211384193', 'BOLSAS DE LOS ALTOS', true, 9);
INSERT INTO "brands" VALUES ('1b7b4167-a81c-483b-9989-30a0b0f9b6e8', 'LAS DELICIAS', true, 10);
INSERT INTO "brands" VALUES ('7caec435-7469-4596-985a-5ab15bb8a788', 'INTERCANDY', true, 11);
INSERT INTO "brands" VALUES ('ef741ae4-ff0f-43ac-875f-c630025c24d1', 'KALU', true, 12);
INSERT INTO "brands" VALUES ('dd77f71c-d4ac-4666-9937-f3171d62501b', 'FRUTI FRESK', true, 13);
INSERT INTO "brands" VALUES ('c20c3d16-094a-49ab-88f2-afa52756693a', 'La Rosa', true, 0);


-- Estructura de la tabla products
DROP TABLE IF EXISTS "products" CASCADE;
CREATE TABLE "products" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "brand_id" uuid,
  "nombre" character varying NOT NULL,
  "activo" boolean DEFAULT true,
  "orden" integer DEFAULT 0,
  "puntuacion" numeric DEFAULT '0'::numeric
);

-- Datos de la tabla products
INSERT INTO "products" VALUES ('09653d2e-96b6-446c-bd1f-21ef6ba16b40', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'Nikolo', true, 1, '5.00');
INSERT INTO "products" VALUES ('d02339ac-4220-4abd-9d75-dc9ebcc83163', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'Bon o Bon', true, 2, '5.00');
INSERT INTO "products" VALUES ('b2fcb4b0-5c90-43f7-893e-ef8a7bc04759', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'Butter Toffe', true, 3, '5.00');
INSERT INTO "products" VALUES ('1865d9df-c75f-4775-825a-c94440d0fc01', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'Poosh', true, 4, '5.00');
INSERT INTO "products" VALUES ('33b7233b-2db8-4995-80f7-7ea3dc21aff5', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'Winis T7', true, 1, '5.00');
INSERT INTO "products" VALUES ('455212a6-110c-44af-9487-42c870a181c6', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'Maxi Tubo', true, 2, '5.00');
INSERT INTO "products" VALUES ('77020202-3cf9-4e68-88bb-90abb954f05c', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'Winis Paleta', true, 3, '5.00');
INSERT INTO "products" VALUES ('dbd4fff8-e4b9-40bf-8144-edd3fd4f755c', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'Frutaffy', true, 4, '5.00');
INSERT INTO "products" VALUES ('42ded419-cbf6-436a-8b0b-40a17c91088c', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'Acidup', true, 5, '5.00');
INSERT INTO "products" VALUES ('cc3b52ec-f49c-42ec-a4cb-f79a0cfe3de4', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'Cuadreta', true, 6, '5.00');
INSERT INTO "products" VALUES ('0511b082-00ca-48cc-b793-052034fffd68', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'Tubito', true, 7, '5.00');
INSERT INTO "products" VALUES ('33470391-5111-480e-94e9-11123013f34a', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'Congelada', true, 8, '5.00');
INSERT INTO "products" VALUES ('c1322126-41e9-4d9e-9b58-c6663a83ad07', 'aba43d16-6652-4f08-8766-d9138daff311', 'Canels 4s', true, 1, '5.00');
INSERT INTO "products" VALUES ('56ecccb9-654b-4fd4-96b6-cf12b44f2ac2', 'aba43d16-6652-4f08-8766-d9138daff311', 'Goma Tueni', true, 2, '5.00');
INSERT INTO "products" VALUES ('a3d0a90f-74fb-49c4-b034-417646fce20b', 'aba43d16-6652-4f08-8766-d9138daff311', 'Cherry Sours', true, 3, '5.00');
INSERT INTO "products" VALUES ('1820edca-8e3b-4714-afc6-3f54e3cd9eb7', 'aba43d16-6652-4f08-8766-d9138daff311', 'ICEE 50g', true, 4, '5.00');
INSERT INTO "products" VALUES ('50411cc7-1332-4e50-8400-b6b58e72b97e', 'aba43d16-6652-4f08-8766-d9138daff311', 'Mini Chicloso', true, 5, '5.00');
INSERT INTO "products" VALUES ('7a3d2679-3524-4416-baaf-56b081f5932b', 'aba43d16-6652-4f08-8766-d9138daff311', 'T7 ICEE', true, 6, '5.00');
INSERT INTO "products" VALUES ('3d4d9cad-54f2-4b16-9483-88c97519e6f7', 'aba43d16-6652-4f08-8766-d9138daff311', 'Paletón Vaquita', true, 7, '5.00');
INSERT INTO "products" VALUES ('ed1874a8-c9cb-4698-a1c5-2a3124fc852d', 'aba43d16-6652-4f08-8766-d9138daff311', 'Pal ICEE', true, 8, '5.00');
INSERT INTO "products" VALUES ('bd2ef8f3-437a-42bd-becd-042662973fac', '5895c198-d28e-488a-b235-dc792e460dce', 'Damy', true, 1, '5.00');
INSERT INTO "products" VALUES ('e0a87d56-b305-4e10-ac6e-23ed9baea081', '5895c198-d28e-488a-b235-dc792e460dce', 'Ricos Besos', true, 2, '5.00');
INSERT INTO "products" VALUES ('397396e0-c8ba-4e24-ab79-a273027e6caa', '5895c198-d28e-488a-b235-dc792e460dce', 'Chicloso Surtido', true, 3, '5.00');
INSERT INTO "products" VALUES ('cb984871-6af0-4bf3-b60c-425946ccc03e', 'c728fb5a-adf9-472d-9fef-9ae05d73f6af', 'Michamoy', true, 1, '5.00');
INSERT INTO "products" VALUES ('6096fd91-15ed-426f-9aee-e0d8182593ee', 'a7f45120-07fa-4c88-9f6c-88ea8e618a24', 'Ate Azúcar', true, 1, '5.00');
INSERT INTO "products" VALUES ('007e153a-5b32-40b3-94af-c13eb26f12ad', 'a7f45120-07fa-4c88-9f6c-88ea8e618a24', 'Ate Chile', true, 2, '5.00');
INSERT INTO "products" VALUES ('8e4ad33f-7ba5-4428-bd45-6c526b543b81', 'a7f45120-07fa-4c88-9f6c-88ea8e618a24', 'Manguito', true, 3, '5.00');
INSERT INTO "products" VALUES ('bcf2a875-3820-41df-837e-ea1990e608e2', 'a7f45120-07fa-4c88-9f6c-88ea8e618a24', 'Gummy Tiras', true, 4, '5.00');
INSERT INTO "products" VALUES ('a04154dc-51e5-4fb7-8d73-6cd4c080ae00', '4bd2dc1c-503e-4388-a3fd-767211384193', '60x90', true, 1, '5.00');
INSERT INTO "products" VALUES ('b1d97ce6-21e6-4b0b-a041-b496b45181b5', '4bd2dc1c-503e-4388-a3fd-767211384193', '50x70', true, 2, '5.00');
INSERT INTO "products" VALUES ('0eecd5ad-2a52-4ab2-9bf9-988a1198b67e', '4bd2dc1c-503e-4388-a3fd-767211384193', '90x120', true, 3, '5.00');
INSERT INTO "products" VALUES ('9af891d1-2c3f-44b4-b1f4-71ce686021b5', '1b7b4167-a81c-483b-9989-30a0b0f9b6e8', 'Wafer Choco', true, 1, '5.00');
INSERT INTO "products" VALUES ('a1c0d1cb-0a53-4b43-8595-49f1d3480e58', '1b7b4167-a81c-483b-9989-30a0b0f9b6e8', 'Astridix', true, 2, '5.00');
INSERT INTO "products" VALUES ('57d7b345-ea49-4c7c-8fa0-915303e8a9fd', '1b7b4167-a81c-483b-9989-30a0b0f9b6e8', 'Choco Galletín', true, 3, '5.00');
INSERT INTO "products" VALUES ('557fa935-754a-423c-b63b-4aa68ab80d53', '1b7b4167-a81c-483b-9989-30a0b0f9b6e8', 'Crunch Caritas', true, 4, '5.00');
INSERT INTO "products" VALUES ('a7330223-2519-486e-937d-d80afbd3a61f', '1b7b4167-a81c-483b-9989-30a0b0f9b6e8', 'Frutal Soda', true, 5, '5.00');
INSERT INTO "products" VALUES ('abf08fe3-1443-4930-9ee1-edd3d24dce62', '1b7b4167-a81c-483b-9989-30a0b0f9b6e8', 'Trueno Pop', true, 6, '5.00');
INSERT INTO "products" VALUES ('eb12f1c0-2bc5-43a7-a37d-9105efb8601c', '1b7b4167-a81c-483b-9989-30a0b0f9b6e8', 'Huevito', true, 7, '5.00');
INSERT INTO "products" VALUES ('1fb132f0-6a1c-41ea-97e5-fe67a77ee9c5', '1b7b4167-a81c-483b-9989-30a0b0f9b6e8', 'Brocheta', true, 8, '5.00');
INSERT INTO "products" VALUES ('eef81f23-a881-49a1-960d-ee7ac6b8e137', '7caec435-7469-4596-985a-5ab15bb8a788', 'Gelatina', true, 1, '5.00');
INSERT INTO "products" VALUES ('a3944d93-6b5a-476d-973a-df239bb733f8', '7caec435-7469-4596-985a-5ab15bb8a788', 'Rainbow', true, 2, '5.00');
INSERT INTO "products" VALUES ('053f0f29-b8bc-4695-854f-a20133362e4c', '7caec435-7469-4596-985a-5ab15bb8a788', 'Baileys', true, 3, '5.00');
INSERT INTO "products" VALUES ('a31826a3-fbb9-44fe-804b-efb2c99ed46e', '7caec435-7469-4596-985a-5ab15bb8a788', 'Truffles', true, 4, '5.00');
INSERT INTO "products" VALUES ('d3484b25-72f9-4cec-8520-131d84ebdc90', '7caec435-7469-4596-985a-5ab15bb8a788', 'Malvavisco ICEE', true, 5, '5.00');
INSERT INTO "products" VALUES ('41d72294-ebd8-4461-8649-ae2412a4d21b', 'ef741ae4-ff0f-43ac-875f-c630025c24d1', 'Volmond', true, 1, '5.00');
INSERT INTO "products" VALUES ('3fd77d71-81ff-436f-8234-06adb04e367d', 'ef741ae4-ff0f-43ac-875f-c630025c24d1', 'Fruit 3D', true, 2, '5.00');
INSERT INTO "products" VALUES ('c3842958-70a7-4c6b-bcee-ee433f8911de', 'ef741ae4-ff0f-43ac-875f-c630025c24d1', 'Pelafrut', true, 3, '5.00');
INSERT INTO "products" VALUES ('d01b127c-a806-4722-a025-34f8e36f0486', 'ef741ae4-ff0f-43ac-875f-c630025c24d1', 'Jelly Pop', true, 4, '5.00');
INSERT INTO "products" VALUES ('6cb2e1bd-2e66-4b15-b621-ffdb5df2145b', 'dd77f71c-d4ac-4666-9937-f3171d62501b', 'Cometinix', true, 1, '5.00');
INSERT INTO "products" VALUES ('aea8e31a-02f2-48ed-843a-72f29472a6fd', 'dd77f71c-d4ac-4666-9937-f3171d62501b', 'Freskiice', true, 2, '5.00');
INSERT INTO "products" VALUES ('440aa798-e685-4bb6-9d37-10d8806c7c42', 'dd77f71c-d4ac-4666-9937-f3171d62501b', 'Freskysoda', true, 3, '5.00');
INSERT INTO "products" VALUES ('8200ef50-e062-42b1-9d4d-89ad660d37db', 'dd77f71c-d4ac-4666-9937-f3171d62501b', 'Agua Calid', true, 4, '5.00');
INSERT INTO "products" VALUES ('2f1de049-8f71-4403-a82d-0852df71637d', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Mazapán Clásico', true, 0, '0.00');
INSERT INTO "products" VALUES ('08fbbb40-7844-422b-ae11-1d9e84e850b7', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Mazapán Gigante', true, 0, '0.00');
INSERT INTO "products" VALUES ('6b2196a8-a083-4ece-b9e6-e5c4aac7bbfb', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Nugs', true, 0, '0.00');
INSERT INTO "products" VALUES ('7be5196d-f2b1-449e-b268-63b8a8ce4cd7', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Nugs Recreo', true, 0, '0.00');
INSERT INTO "products" VALUES ('4ad4ff75-7caa-4a85-a379-83e2a56813fd', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Suizo', true, 0, '0.00');
INSERT INTO "products" VALUES ('22a505de-1c76-4d69-9236-9a533080c5c8', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Japonés 200g', true, 0, '0.00');
INSERT INTO "products" VALUES ('7bc51df6-0d61-4707-91a4-d653b2f0e5b1', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Japonés 60g', true, 0, '0.00');
INSERT INTO "products" VALUES ('213d5ceb-7e4f-435d-b55d-f095b6d9827d', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Gummy Pop', true, 0, '0.00');
INSERT INTO "products" VALUES ('64abf25c-4207-4b04-a743-359411b6f2f4', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Paleta Jumbo', true, 0, '0.00');
INSERT INTO "products" VALUES ('bc6b0513-b800-4898-9b04-faf6bb4d01d5', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Bombón Chocolate', true, 0, '0.00');
INSERT INTO "products" VALUES ('b7d9042d-47de-45aa-bfe9-4d4ae2050231', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Ranita', true, 0, '0.00');
INSERT INTO "products" VALUES ('c44c92fa-47ed-4233-8cc9-e1a14497b9d0', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Suave Acidito', true, 0, '0.00');
INSERT INTO "products" VALUES ('9a8636f3-3d48-4272-a065-7a061baea321', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Bombón Mini', true, 0, '0.00');
INSERT INTO "products" VALUES ('1229cf75-d9b0-40da-ad9e-f77d44f07a84', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Malvabón', true, 0, '0.00');
INSERT INTO "products" VALUES ('08e15441-c401-42d5-9a3d-9cfa320460f7', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Mazapán Chocolate', true, 0, '0.00');
INSERT INTO "products" VALUES ('a7854830-2d8f-492a-ab16-a3d2cdef4587', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Pulparindo', true, 0, '0.00');
INSERT INTO "products" VALUES ('d27cd4d4-83dd-44ff-b53e-a74b62549ad4', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Bombón Gigante', true, 0, '0.00');
INSERT INTO "products" VALUES ('8b31c7f8-baaa-454d-a92a-585d8a87dfd1', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'Confichoky', true, 0, '0.00');
INSERT INTO "products" VALUES ('1cbbe50f-7433-4807-ba11-b02a21d50d0a', '764b437f-210c-4a08-a471-eb5066f65007', 'PELON PELO RICO MINI 18P 13GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('93f38790-61f9-499c-b860-4602eb1c16eb', '764b437f-210c-4a08-a471-eb5066f65007', 'PELON PELO RICO TAM BLS 12P 30GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('28fbec73-d8c6-4b8b-a164-1737f6e52cf3', '764b437f-210c-4a08-a471-eb5066f65007', 'CRAYON SURTIDO / 10', true, 0, '0.00');
INSERT INTO "products" VALUES ('1803d57b-b198-44c4-a154-dc6110948ddb', '764b437f-210c-4a08-a471-eb5066f65007', 'KISSES 807.5 NATURAL 2985', true, 0, '0.00');
INSERT INTO "products" VALUES ('5683c0f7-d62a-4e37-9420-106f58075055', '764b437f-210c-4a08-a471-eb5066f65007', 'HERSHEYS BARRA COOKIES N CREME 12P 20GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('9a1cf5d7-a74a-462a-a810-827caf3f36fb', '764b437f-210c-4a08-a471-eb5066f65007', 'PELON PELO RICO TAM BLS 12+2 30GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('92fe7589-6369-46d4-a094-40de14eaeb47', '764b437f-210c-4a08-a471-eb5066f65007', 'KISSES LECHE BRAND C / 1 KG HERSHEY', true, 0, '0.00');
INSERT INTO "products" VALUES ('111fb7c0-e232-4f1c-93d0-14d2205b8a73', '764b437f-210c-4a08-a471-eb5066f65007', 'HERSHEYS BARRA LECHE 12P 20GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('64624cce-a519-4947-ae60-59aa2d53051b', '764b437f-210c-4a08-a471-eb5066f65007', 'KISSES 850G C/ALMENDRA / HERSHEYS', true, 0, '0.00');
INSERT INTO "products" VALUES ('598da515-6b45-47cc-bdb2-0757238c6d45', '764b437f-210c-4a08-a471-eb5066f65007', 'PELONETES TAMARINDO 6P 30GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('d232fef1-8c9d-4477-ba3b-5ef532213bdc', '764b437f-210c-4a08-a471-eb5066f65007', 'PELON PELO RICO TAM EXH 10P 30GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('c2771c26-cb34-4003-902f-7e3e0aac82e5', '764b437f-210c-4a08-a471-eb5066f65007', 'HERSHEYS MINIATURA 850 / HERSHEYS', true, 0, '0.00');
INSERT INTO "products" VALUES ('d5083eb9-59dd-48e5-a255-20c5d8d24664', '764b437f-210c-4a08-a471-eb5066f65007', 'PELONETA TAMA C/MANGO 18P', true, 0, '0.00');
INSERT INTO "products" VALUES ('1c982ad0-1d28-4273-8b44-575ff672b64d', '764b437f-210c-4a08-a471-eb5066f65007', 'HERSHEYS JARABE CHOCOLATE 589GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('8539d8d4-4871-4bb3-908f-7a425cb26466', '764b437f-210c-4a08-a471-eb5066f65007', 'HERSHEYS COOKIES N CREAM 6P', true, 0, '0.00');
INSERT INTO "products" VALUES ('8b8f1c36-e2cb-4000-b615-19fd011f6b03', '764b437f-210c-4a08-a471-eb5066f65007', 'PELONETA CHAMOY C/SANDIA 18P', true, 0, '0.00');
INSERT INTO "products" VALUES ('5dd28f56-0c57-4239-88f7-99c39c01d9dd', '764b437f-210c-4a08-a471-eb5066f65007', 'KISSES ALMENDRA 935GR / HERSHEYS', true, 0, '0.00');
INSERT INTO "products" VALUES ('546d75e4-77e2-4a03-8533-7257e105f9ac', '764b437f-210c-4a08-a471-eb5066f65007', 'HERSHEYS ALMENDRA 6P 27G', true, 0, '0.00');
INSERT INTO "products" VALUES ('5e773a62-d393-43d5-8db3-581dd9949b47', '764b437f-210c-4a08-a471-eb5066f65007', 'HERSHEYS JOLLY RANCHER PASTILLA 12 PZAS 2756', true, 0, '0.00');
INSERT INTO "products" VALUES ('aa77b9a8-2797-4336-af72-880731666935', '764b437f-210c-4a08-a471-eb5066f65007', 'PELON PELO RICO MINI MIXTO 18P 13GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('c582fbf4-93cb-48f5-a4d0-ce07c8d2b5fa', '764b437f-210c-4a08-a471-eb5066f65007', 'HERSHEYS LECHE BARRA 6P', true, 0, '0.00');
INSERT INTO "products" VALUES ('78cc42ca-fabe-4b2f-b0fd-13caf37c162f', '764b437f-210c-4a08-a471-eb5066f65007', 'PELON PELONAZO 4P', true, 0, '0.00');
INSERT INTO "products" VALUES ('e1696f12-045a-4939-87ec-bff847368b19', '764b437f-210c-4a08-a471-eb5066f65007', 'KISSES TAKE HOME SURTIDO (265G) / HERSHEYS', true, 0, '0.00');
INSERT INTO "products" VALUES ('9ebafc53-294f-4e80-ab72-22073d7edc5d', '764b437f-210c-4a08-a471-eb5066f65007', 'DEL PUESTO SANDIA HERSHEY / 10', true, 0, '0.00');
INSERT INTO "products" VALUES ('5a9651ff-1591-4a63-83a8-29469a20c7a5', '764b437f-210c-4a08-a471-eb5066f65007', 'PELONETA TAMA-MANGO 18+2P', true, 0, '0.00');
INSERT INTO "products" VALUES ('20039fb1-442a-4e1e-8961-e1de0ead9831', '764b437f-210c-4a08-a471-eb5066f65007', 'FIESTEROS DE PELON 895GR / 80 APROX', true, 0, '0.00');
INSERT INTO "products" VALUES ('bd21f41c-815c-43a8-8676-959c49e412e3', '764b437f-210c-4a08-a471-eb5066f65007', 'HERSHEYS ESPECIAL DARK 3P 0105', true, 0, '0.00');
INSERT INTO "products" VALUES ('71f559b5-5d71-4361-a10a-a5c33c752cc9', '764b437f-210c-4a08-a471-eb5066f65007', 'KISSES SELECCION ESPECIAL 260.5 GR HERSHEY', true, 0, '0.00');
INSERT INTO "products" VALUES ('4c3a995a-532a-47a8-9b9f-c71f6c19b62e', '764b437f-210c-4a08-a471-eb5066f65007', 'HERSHEYS MINIATURA 503G / HERSHEYS', true, 0, '0.00');
INSERT INTO "products" VALUES ('a0dd2de5-118f-4944-9aae-7ef9b067b430', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BIMBO BOCADIN BOLSA / 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('1f773337-6c30-41de-a390-0488144be2f5', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BARCEL MIX PACK 737GR / 14', true, 0, '0.00');
INSERT INTO "products" VALUES ('9e2a104a-df60-49ce-9d7a-6ffc344b43e9', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BARCEL TAKIS FUEGO MINI 25P', true, 0, '0.00');
INSERT INTO "products" VALUES ('9b58f501-bdc5-4272-a47d-0a4037cceed9', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BIMBO BARRITAS FRESA SOBRE 402G / 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('3dd1534c-780e-4237-9707-2f2f27bbfab3', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BIMBO CANELITAS SOBRE 360G / 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('07390a0f-2b0b-463a-a32e-4b325f5df745', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BIMBO PRINCIPE SOBRE 378G / 9', true, 0, '0.00');
INSERT INTO "products" VALUES ('4234203b-aab6-400c-bb6d-9958058b6936', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BARCEL TAKIS MIX MINI 25P', true, 0, '0.00');
INSERT INTO "products" VALUES ('0c6e8ffa-45aa-4fa5-ba96-ab74a1c0e3f1', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BIMBO TRIKI TRAKES SOBRE 408G / 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('696f1e35-97b8-4235-8535-517c64fcc084', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BIMBO PASTELITO HERSHEYS 250GR / 10', true, 0, '0.00');
INSERT INTO "products" VALUES ('a379d354-671f-4dd4-ae4d-0a384735c80d', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BIMBO GANSITO MINI 192 GR / 8', true, 0, '0.00');
INSERT INTO "products" VALUES ('b408334b-d8e9-4fb0-a097-aae76fc60bf4', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BIMBO CHOCO ROLL MINI 224 GR / 8', true, 0, '0.00');
INSERT INTO "products" VALUES ('7fad24e3-92f9-42c2-b3a6-c484311f363b', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BIMBO BARRITAS PINA SOBRE 402GR / 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('bbe40452-4078-4fa9-9e05-7d0162c235ea', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BIMBO BARRA GANSITO 220GR / 10', true, 0, '0.00');
INSERT INTO "products" VALUES ('e3f3515b-d9c0-4721-87c7-d4da51974564', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BARCEL RUNNERS MINI 25P', true, 0, '0.00');
INSERT INTO "products" VALUES ('ce0af536-cdb6-48d4-a0a6-93b3af42c7b3', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BIMBO PINGUINO MINI 200 GR / 8', true, 0, '0.00');
INSERT INTO "products" VALUES ('c12cb6fd-84af-40f5-ac2a-43e6a3022c63', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BARCEL TAKIS PACK 15P', true, 0, '0.00');
INSERT INTO "products" VALUES ('3abbdd07-1557-48ee-a692-0266ab06d7fa', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BARCEL CHIPS FUEGO 10P 42GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('30a56a61-3498-4d43-b118-400943413264', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BARCEL FUEGO PACK 10P 56GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('5f2c15f6-4ed6-45b6-bc9f-03df250aef19', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BARCEL CHIPS JALAPENO 10P 42GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('f56a4f95-9c68-4dd5-a2f2-097a4b90f99f', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BIMBO POLVORONES SOBRE 444G / 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('f2d5fe3c-dc7f-4111-af02-dbae82165d4c', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BARCEL CHIPS MINI FUEGO 25P 18GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('79617645-6094-4c8e-b0e7-2531b06a4330', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BIMBO ROCKO MINI BLS (400GR) / 40 MARINELA', true, 0, '0.00');
INSERT INTO "products" VALUES ('cab74f61-01ef-4c6b-a887-ea35b28807ad', 'c618bf60-c9f1-4e0d-9a9c-6ce80758b5af', 'BARCEL TAKIS MINI VERDE 25P', true, 0, '0.00');
INSERT INTO "products" VALUES ('478eb57a-009a-41f1-91e3-9153c7bbcb88', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'BANITO TRONADOR 96GR / 12 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('9a260a0b-332c-4bbb-9039-71e38cc99e54', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'VIT JELLY TINIX 1.60L / 160 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('d9e834a8-613b-4a23-b566-a89334b32054', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'BURBUJAS / 12 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('6d4da392-0dc1-408b-8adf-c0076d953acf', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'GUN SPRAY 288ML / 16 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('9111b8d5-1439-4ed8-9598-579ff4efc5c9', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'GALL VAY VAY CHOC 264 GR / 12 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('52f541f7-9c68-41e2-be07-a103c7e3bba5', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'CAR JELLY STICK BOLSA / 30 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('a1bee564-8595-419e-ab28-b893627f3694', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'CRISTAL LIPS 112 ML / 16 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('d3af4cd9-889d-45b2-a490-c04d64f1676c', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'JERINGA JELLY CAR LIQUIDO / 16 PZAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('e497d55c-79c4-4b93-9896-5339cbaf0de1', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'CHOCO PREMIUM SUPREME 200GR / 16 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('6caef689-45e3-490f-98ca-cde720ce68d9', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'VIT GUMMY OJITOS 500GR / 50 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('11157cc4-f7c8-438c-8272-45423608e46d', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'GALL VAY VAY FRESA 264 GR / 12 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('a6c36e4e-4e00-48c1-8752-be6fb651cdbd', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'GALL VAY VAY VAINILLA 264 GR / 12 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('4af3590e-668e-41cc-a8b4-f9068796c04b', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'GALL CREMAS BICOLOR 264GR / 12 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('2e693a51-0d45-47d3-9df0-53c2ff21691a', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'GUMMY FOOD 200GR / 20 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('3bf231df-0868-4038-b143-7dc2151dac49', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'CAR LIPSTICK CANDY 120GR / 20 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('976141ee-7b5f-42ae-878d-7de65703dc47', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'FUNNY SPRAY TINAJITA / 20', true, 0, '0.00');
INSERT INTO "products" VALUES ('307a384e-56a1-4010-accc-83b83a21a5f0', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'MAGIC CANDY TRONADOR 32GR / 16 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('e62df520-e8eb-414a-b6c8-54fbe7fbd03a', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'PINATA PACK 1.4 KG / TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('daf09cc5-f279-4c4a-a206-5fcb32549a6e', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'FRUTY POP 192GR / 16 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('6d3ef80c-e581-48e2-bfee-91daeaed673e', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'GALL WAFER CHOCOLATE 156GR / 12 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('09b2ede0-4519-448b-9d91-b6ce97aa0630', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'GALL WAFER VAINILLA 156GR / 12 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('4a661e8a-ead1-42c0-9818-22703bd122b5', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'BOLO FIESTA 120GR / TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('c2ddbb2e-bdf7-45fe-8328-919af9dcf19b', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'VIT GUMMY SODA 500GR / 50 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('8605e7be-f2e4-491b-bc17-b35372065f9e', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'SWEET PEN 176GR / 16 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('05ef27dd-13b5-4352-a975-9bea56e72ad9', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'CARAMELO LIQUIDO GOTERIN (440 GR) / 20 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('ca9a6211-2739-403f-a643-57e1ba72ef1b', 'bd447067-3ce8-4d63-bb93-afed012c8ef0', 'GELATINA MINI FRUTITAS BLS (700G) / 20 TINAJITA', true, 0, '0.00');
INSERT INTO "products" VALUES ('cdc431ce-40b6-49c2-873d-80a9e3f5eebd', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'KPINATON MIX 1.3KG / HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('1df211b6-4362-4c6f-b076-0c046505ee2a', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'GUMMY ANIMAL POP / 30 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('23d9ba81-65fd-4100-b674-91df18d17734', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'EXH MINI JELLY HUEVITO / 24 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('7f5080df-66a5-4659-9a42-1d6561016baf', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'UEVITO CHOPECHA 216GR / 12 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('5f0a69fa-58ec-4af7-b6e0-ce2f6e4c4ef0', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'CHOCO BISCOCHO FRESA / 12 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('d654cab7-11c8-4f80-bd4d-b959a8dd4cdc', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'GALL CHOCOOKIE MINI CHOCOLATE 500GR / 20 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('5a2936fc-57b3-4493-a9b7-e6a2cdd82520', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'SUPER FOOD MIX 150GR / 50 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('868d12a9-983d-46ac-a57d-a682e24f2d7d', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'VIT GUMMY FRUTI BANDERILLA / 30 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('6794cbe0-12b9-4310-9352-e285715c4303', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'JELLY CORAZON DISPLAY / 12 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('9414981c-fc55-49de-90f6-2c17f11bf1a0', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'GUMMY ELISE / 30 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('1fff1d90-e753-4d50-9088-808e86b1118c', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'MINI JELLY HUEVITO TIRA 300GR / 20 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('8ebe2f94-a736-41e8-9baf-8fa75ce30374', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'VIT MINI RELLENITAX 3D SURTIDO / 100 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('c7daa1ca-20f4-47e5-8439-8beab77b272f', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'JELLY VOLCAN XTREME 396GR / 12 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('3b075566-d663-4020-b04d-9c82fb6fa96c', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'CONITOY 280GR / 20 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('10dbc115-568b-41d4-85b7-97eb552db308', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'GALL CHOCOOKIE MINI RED VELVET 420G / 20 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('01035aa4-16ba-4eca-9f32-5cbd478b9ec1', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'BOLSA NAVIDENA 20X30 GRANDE / 25 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('6f3543d1-c372-4b4c-bb24-7abd6a79d0a1', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'GUMMY X MAS POP''S NEON 330GR / 30 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('2024a781-ba06-4629-9b50-b76fcf85b90f', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'JELLY HUEVITO 216 GR / 12 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('5b0ae7b6-8cf0-4d75-8969-2284fdd8e048', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'GUMMY SPAGUETTI 460GR / 20 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('1418d4ad-113d-42e1-b4cd-0f353a84af72', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'ALGODON BOMBA SURTIDO / 24 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('ae57f35c-076f-4f5f-9e4a-e75794f09b67', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'BOLO PEKE SORPRESA 100G / HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('1121ad94-11dc-48ad-9f3b-a453a6459df4', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'GUMMY CHISPITAS TIRA / 20 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('b4135a55-260f-4529-9261-4c8c48c178b5', '007777e8-5934-4ca9-bb8b-286dcefc4695', 'GUMMYS TIRASPLASH TUTIFRUTI 850 GR / 121 HUBIN', true, 0, '0.00');
INSERT INTO "products" VALUES ('a39543a7-c70b-42c7-8b2d-3d31dc620ea4', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI MEGA HOT CHILI / 24', true, 0, '0.00');
INSERT INTO "products" VALUES ('8137601a-07b5-46b2-992f-7d6602818d4b', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI PERSONAL HOT CHILI / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('f3837231-7e23-4855-ba12-370a67a97828', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI MEGA AHUMADO / 24', true, 0, '0.00');
INSERT INTO "products" VALUES ('37db9330-5ff9-41ef-9b99-31d4346b1d66', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'KIUBO REMIX EXTREMO (35GR) / 10 GONAC', true, 0, '0.00');
INSERT INTO "products" VALUES ('5a622f1b-2995-4936-ba24-876a8d33a1c1', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI PERSONAL AHUMADO / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('6081835d-b36a-4f49-baef-d123156ae5a5', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'KIUBO TOTOPO SALSA NEGRA / 10 GONAC', true, 0, '0.00');
INSERT INTO "products" VALUES ('9a63785f-3139-41d1-a112-b8ffca9f6c45', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI MEGA CHECHO QUESO / 24', true, 0, '0.00');
INSERT INTO "products" VALUES ('faf652ef-4227-4098-a741-498e3be0df67', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI MEGA JALAPENO / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('95cf84ba-f636-4515-8a81-efa9f3475be7', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI PERSONAL CHECHO / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('8de7ef63-4ef7-4563-9d60-a29f4cc31a49', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'KIUBO RE MIX EXPLOSION (32GR) / 10', true, 0, '0.00');
INSERT INTO "products" VALUES ('9469d013-9f32-43cc-a387-148d8ccc8799', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'KIUBO TOTOPO NACHO / 10', true, 0, '0.00');
INSERT INTO "products" VALUES ('04df3893-c3e6-4da5-8a9e-8b23d0dca94c', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI INTER HOT CHILI / 24', true, 0, '0.00');
INSERT INTO "products" VALUES ('d113caf6-a0cb-4c7f-8812-61e1cfa7d515', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI INTER AHUMADO / 24', true, 0, '0.00');
INSERT INTO "products" VALUES ('b1797286-b177-4e3f-8438-db1fbb299192', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI PERSONAL JALAPENO / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('ace5cdd6-79fd-4d29-bf35-89ae96e13a39', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI FRESCO MINI SURTIDO 140ML / 24', true, 0, '0.00');
INSERT INTO "products" VALUES ('3dac8cae-80d7-4399-8f0b-8824558c4f6d', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI INTER JALAPENO / 24', true, 0, '0.00');
INSERT INTO "products" VALUES ('43f7f284-a61f-45f3-af05-84ae464f450a', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI INTER CHECHO QUESO / 24', true, 0, '0.00');
INSERT INTO "products" VALUES ('c03460c1-d66d-46f4-9034-1879ee31100e', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'KIUBO RE MIX QUESO / CHILE / 10 GONAC', true, 0, '0.00');
INSERT INTO "products" VALUES ('91546941-4c5b-46d5-894c-ae4385db3a06', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI PERSONAL MICRO MIX / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('eaef85ef-146f-4df2-b9f7-251b7e7efb06', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'KIUBO EXTREMO INTENSO 40 GR / 10', true, 0, '0.00');
INSERT INTO "products" VALUES ('e7939865-8d37-4e28-9786-130ca16fea2a', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI PERSONAL DONA C/SAL / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('90459977-7935-422f-9cbf-beecec3010c8', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI PERSONAL QUESO / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('4c8d1b8c-c733-4375-a4b0-6aecdea84bdc', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'PAPAS KIUBO CASERAS FUEGO 26GR / 10 GONAC', true, 0, '0.00');
INSERT INTO "products" VALUES ('af14ece1-e21c-4598-843e-1375d87a1b0a', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'PAPAS KIUBO CASERAS CON SAL 26GR / 10 GONAC', true, 0, '0.00');
INSERT INTO "products" VALUES ('1f224358-db2d-4402-babb-fbf550d5845c', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI MEGA QUESO / 24', true, 0, '0.00');
INSERT INTO "products" VALUES ('83cffc3a-f9d3-4873-8c0c-1d12946b68bd', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI INTER DONA C/SAL / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('120b07db-1111-421e-a1a1-6582a92cd78b', 'fcfcb1e5-208b-4bdd-82a1-231aeb8b5e8d', 'CHECHI INTER MICROMIX / 24 GONAC', true, 0, '0.00');
INSERT INTO "products" VALUES ('f52668c2-9a36-459b-867e-92253e811d1b', 'af19872b-fee3-4ff7-ace1-64474802872e', 'CHOC CREMINO BICOLOR / 24 NUTRESA', true, 0, '0.00');
INSERT INTO "products" VALUES ('fe095ed7-3a93-4055-ab3e-ec238e78e736', 'af19872b-fee3-4ff7-ace1-64474802872e', 'NUCITA TRISABOR 224GR / 16 NUTRESA', true, 0, '0.00');
INSERT INTO "products" VALUES ('c7f694a0-d284-4fdb-86b5-6a4da6b9f96c', 'af19872b-fee3-4ff7-ace1-64474802872e', 'CHOC MUIBON AVELLANAS / 15 NUTRESA 9055', true, 0, '0.00');
INSERT INTO "products" VALUES ('d99654e7-830c-4658-8e57-523b019a49f8', 'af19872b-fee3-4ff7-ace1-64474802872e', 'EXH CHOC CREMINO BICOLORE NUTRESA / 50', true, 0, '0.00');
INSERT INTO "products" VALUES ('d73497e8-6bc5-4836-aaa8-72cf0e0cf58b', 'af19872b-fee3-4ff7-ace1-64474802872e', 'CHOC MONEDA EXH / 48 NUTRESA 1432', true, 0, '0.00');
INSERT INTO "products" VALUES ('99ee5278-4418-4123-85e9-42b39e593aa7', 'af19872b-fee3-4ff7-ace1-64474802872e', 'NUCITA PATITAS (152G) / 8 NUTRESA', true, 0, '0.00');
INSERT INTO "products" VALUES ('29358a74-2a90-4d75-93a0-2fdf63ef93f7', 'af19872b-fee3-4ff7-ace1-64474802872e', 'CHOC CREMINO BLANCO / 24 NUTRESA 2256', true, 0, '0.00');
INSERT INTO "products" VALUES ('0d1b50eb-c823-4d2f-9565-d481a183faee', 'af19872b-fee3-4ff7-ace1-64474802872e', 'VIT CHOC MONEDA 708G / 120 NUTRESA', true, 0, '0.00');
INSERT INTO "products" VALUES ('e898fe1a-42d0-4347-b003-82f27ac0878b', 'af19872b-fee3-4ff7-ace1-64474802872e', 'NUCITA TRISABOR CONFITES NUTRESA / 12 5868', true, 0, '0.00');
INSERT INTO "products" VALUES ('73d5d699-cc1f-46fc-8148-ce3ee50ff147', 'af19872b-fee3-4ff7-ace1-64474802872e', 'CREMINO STICK 140GR / 20 NUTRESA', true, 0, '0.00');
INSERT INTO "products" VALUES ('81e29e29-b819-46f7-8646-ce8889f7b5a1', 'af19872b-fee3-4ff7-ace1-64474802872e', 'CHOC NUCITA BARRA / 16 NUTRESA 1471', true, 0, '0.00');
INSERT INTO "products" VALUES ('1a80fca8-31b5-49e3-a126-87dbccfa6129', 'af19872b-fee3-4ff7-ace1-64474802872e', 'CHOC BALONCITOS NUTRESA / 200', true, 0, '0.00');
INSERT INTO "products" VALUES ('883b9aa4-f3ff-4f9c-823c-37d9e9bbf843', 'af19872b-fee3-4ff7-ace1-64474802872e', 'NUCITA FRESA Y CHOCOLATE 224GR / 16 NUTRESA', true, 0, '0.00');
INSERT INTO "products" VALUES ('dae84851-38c1-4c87-91bb-b0817602541f', 'af19872b-fee3-4ff7-ace1-64474802872e', 'NUCITA FRESA / VAINILLA / 16 NUTRESA', true, 0, '0.00');
INSERT INTO "products" VALUES ('6279f6ed-9c7c-419f-810c-1c215573735a', 'af19872b-fee3-4ff7-ace1-64474802872e', 'NUCITA VAINILLA Y CHOCOLATE 240GR / 16 NUTRES 78', true, 0, '0.00');
INSERT INTO "products" VALUES ('55467d5e-17e1-45a4-a4bb-66e08ad913cc', 'af19872b-fee3-4ff7-ace1-64474802872e', 'NUCITA TRIANG TRISABOR / 12 NUTRESA 2694', true, 0, '0.00');
INSERT INTO "products" VALUES ('8b9ee869-b646-4e9e-ad56-088c8eddbe11', 'af19872b-fee3-4ff7-ace1-64474802872e', 'CHOC CREMINO FRUTOS ROJOS 408GR / 24 NUTRESA', true, 0, '0.00');
INSERT INTO "products" VALUES ('2df76aa3-69bc-4348-bd7f-28016be82679', 'af19872b-fee3-4ff7-ace1-64474802872e', 'ZUKO 8 S JAMAICA EXH', true, 0, '0.00');
INSERT INTO "products" VALUES ('56289328-988a-438e-b4d9-e7ed601d4739', 'af19872b-fee3-4ff7-ace1-64474802872e', 'ZUKO 8 S HORCHATA EXH', true, 0, '0.00');
INSERT INTO "products" VALUES ('d3c76f30-60b6-4d94-a696-795ec5afc41a', 'af19872b-fee3-4ff7-ace1-64474802872e', 'CHOC BALONES BLISTER / 56 NUTRESA 1398', true, 0, '0.00');
INSERT INTO "products" VALUES ('df89ae08-6251-4a2c-be9c-e60b77f7af50', 'af19872b-fee3-4ff7-ace1-64474802872e', 'ZUKO 8 S NARANJA EXH', true, 0, '0.00');
INSERT INTO "products" VALUES ('41752934-cf9d-4864-b3f5-30f9c0047ab7', 'af19872b-fee3-4ff7-ace1-64474802872e', 'ZUKO 8 S FRESA EXH', true, 0, '0.00');
INSERT INTO "products" VALUES ('28c4d365-ba3c-4dd4-a693-f592f39cbe52', 'af19872b-fee3-4ff7-ace1-64474802872e', 'ZUKO 8 S LIMON EXH', true, 0, '0.00');
INSERT INTO "products" VALUES ('b2667190-fdd0-4b38-8e63-f319485c3f7b', '9d7cfe9a-b10f-4adc-9c3e-80b7f5a23121', 'FRES KIDD SABORES SURT / 24', true, 0, '0.00');
INSERT INTO "products" VALUES ('2c5d1005-0e2b-4e53-aad6-8ab9ba463716', '9d7cfe9a-b10f-4adc-9c3e-80b7f5a23121', 'BOLI COMETIN-IX / 10 FRESKI FRUTT', true, 0, '0.00');
INSERT INTO "products" VALUES ('01bc0165-f4e9-41b1-8487-5f6a59454bf4', '9d7cfe9a-b10f-4adc-9c3e-80b7f5a23121', 'BOLI FRESKI ICE FRUTT (700 ML) / 10', true, 0, '0.00');
INSERT INTO "products" VALUES ('2fc2a96c-b7e0-4c23-a872-e28c27f48ec6', '9d7cfe9a-b10f-4adc-9c3e-80b7f5a23121', 'FRESKI SODA MORA AZUL 355ML / FRUTI FRESK', true, 0, '0.00');
INSERT INTO "products" VALUES ('e4be16e8-fc2b-4a38-bf8f-ed2335cf6f5c', '9d7cfe9a-b10f-4adc-9c3e-80b7f5a23121', 'FRESKI SODA UVA 355ML / 1 FRUTI FRESK', true, 0, '0.00');
INSERT INTO "products" VALUES ('8239f638-0a30-4bde-b90a-4ddcbca77fa1', '9d7cfe9a-b10f-4adc-9c3e-80b7f5a23121', 'AGUA GASIFICADA CALID 355ML / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('b98cc892-3283-4d01-94d7-14f294e32f4b', 'c728fb5a-adf9-472d-9fef-9ae05d73f6af', 'MI CHAMOY / 24 AP', true, 0, '0.00');
INSERT INTO "products" VALUES ('0ae006ca-7b07-4bab-b8c6-848fa511a97b', 'c728fb5a-adf9-472d-9fef-9ae05d73f6af', 'MI CHAMOY 35 GR C / 12 AP', true, 0, '0.00');
INSERT INTO "products" VALUES ('30ba897b-b8a6-4c9f-84d6-d5e2a94e2ba2', 'c728fb5a-adf9-472d-9fef-9ae05d73f6af', 'MI MANGO 300GR / 12 AP', true, 0, '0.00');
INSERT INTO "products" VALUES ('cb8ff710-2e7b-4f38-9373-8f9448cfb187', 'c728fb5a-adf9-472d-9fef-9ae05d73f6af', 'MI SANDIA / 12 AP', true, 0, '0.00');
INSERT INTO "products" VALUES ('858ad404-b09e-464d-9b25-fd39b9070392', 'c728fb5a-adf9-472d-9fef-9ae05d73f6af', 'MAZAPAN GALLETA 1.2KG / 12 AP', true, 0, '0.00');
INSERT INTO "products" VALUES ('665d4c8e-4514-400f-a64c-5f09aae2e59f', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'AMPER ENERGY 473 ML / PAQUETE 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('2cef1076-387a-48a1-99a4-c6b486078f31', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'BONICE SOTE (400ML) / 4 QUALA', true, 0, '0.00');
INSERT INTO "products" VALUES ('93a1dab3-29e3-4a12-80f8-dc9cef33a0ff', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'BONICE DOBLE ACIDULCE 388ML / 4 QUALA', true, 0, '0.00');
INSERT INTO "products" VALUES ('5fa2c136-9e51-4e22-b1f7-183f4c243f77', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'BONNIEVE 400ML / 4 QUALA', true, 0, '0.00');
INSERT INTO "products" VALUES ('60f29b11-e8a1-42be-aabf-1fbd138d5650', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'VIVE 100 GRANDE (600ML) / QUALA', true, 0, '0.00');
INSERT INTO "products" VALUES ('f233848e-dba4-4365-826f-f630ee8a6d32', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'VITALOE (500ML) / 12 PAQUETE', true, 0, '0.00');
INSERT INTO "products" VALUES ('6b023bf8-c38f-4f1d-93ad-2503b44ec157', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'AMPER KALACA 473 ML / PAQUETE 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('d8c8e636-e234-40ee-87a0-0d2262958dfb', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'VIVE 100 CHICO (400ML) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('468481c8-ce06-41dc-bb9b-874ffea6b8ed', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'AMPER ENERGY BLUE 473ML / PAQUETE 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('0ff407ea-3b66-45dc-bcaf-1fe4bb7c4c4f', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'ROGUE DRINK BLUEBERRY 355 ML / PAQ 12 QUALA', true, 0, '0.00');
INSERT INTO "products" VALUES ('3f3f709a-1f36-41e7-9f12-6c31c9387991', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'VITALOE (320ML) / 12 PAQUETE', true, 0, '0.00');
INSERT INTO "products" VALUES ('b9f4b538-bab4-40fc-892a-f96372ff3b57', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'RIKO POLLO (660G) / 20 QUALAMEX', true, 0, '0.00');
INSERT INTO "products" VALUES ('f7e503c9-263f-41a0-9bf9-fd62b1c545fc', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'NUTRIBELA 10 RESTAURACION 90 GR / 1 QUALA', true, 0, '0.00');
INSERT INTO "products" VALUES ('73edc5ac-9816-455c-b3d5-3f4ff51a3c57', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'KOOL DRINK FRESA Y MORAS 355ML / PAQ 12 QUALA', true, 0, '0.00');
INSERT INTO "products" VALUES ('3fb58fab-2f6a-4553-bd5f-f70679fba3d3', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'AMPER MANGO PARTY 473ML / PAQUETE 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('9239f3a0-2df6-4a3a-a8f0-a01995f8960d', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'NUTRIBELA KERATINA NATURAL 90GR / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('9ed832f2-4a89-4e34-8652-1309ccb42af3', '03a48614-e030-4191-a0c9-385a4a0bdcd7', 'MR BLUE AZULITO SIX PACK 473ML', true, 0, '0.00');
INSERT INTO "products" VALUES ('5a686b33-fcbb-4d2a-88c0-3100e9086952', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA VASO #8 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('ad25371b-3efc-496a-9d77-d08f3aac116e', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA VASO #12 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('780f771a-5e97-46ca-afa9-7fc0fd3ba771', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA VASO #16 25P', true, 0, '0.00');
INSERT INTO "products" VALUES ('0e4a0f87-c7f3-45c7-b1c1-594228a20beb', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA VASO #10 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('0b9f6068-6ee0-4f11-9aaf-6641f0a46bf7', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'MARIEL CHAROLA 855 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('719c4559-494e-41ec-b24a-3d68d7ac2e3b', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA VASO #16 LARGO 25P', true, 0, '0.00');
INSERT INTO "products" VALUES ('d3b57b0c-e3f7-464a-85f4-0a32e3ad3c0f', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'MARIEL CHAROLA 66 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('ec696de6-3765-431b-9692-7365938b5b03', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA VASO #14 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('84cd8d5e-3ad9-4228-beee-c6ab06423170', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA PLATO PH8 25P', true, 0, '0.00');
INSERT INTO "products" VALUES ('5ae89b7f-46cd-4825-98da-b4cd0b237243', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA VASO #5 1/2 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('4bec84c3-bd90-4a32-9cc0-f583fa49f1bd', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA CONT HAMBURGUESA 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('0d1d1a6f-fe6d-4cbe-882c-e1b0ae4d0204', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA CONT 7X7 LISO 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('bde6029e-c102-4e30-80f8-459f455a77b4', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA VASO #6 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('70ba45ec-0eec-469d-9d4d-db05b880f1d0', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA PLATO 006 PASTELERO 25P', true, 0, '0.00');
INSERT INTO "products" VALUES ('fc5ffccf-0892-42b0-8b35-dd8916e1aa3e', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA VASO #7 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('643e0688-dc55-4341-94b6-dbd3dedb6175', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA ENVASE S/TAPA 1/2L 25P', true, 0, '0.00');
INSERT INTO "products" VALUES ('e1cebf75-b49c-4032-87bd-477451bd57ba', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA ENVASE S/TAPA 1L 25P', true, 0, '0.00');
INSERT INTO "products" VALUES ('53f2eab8-e5d0-43b3-9546-f3e8409d8c1c', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA CONT 8X8 DIVICION 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('2e4a954d-2b7d-4fd8-95f3-98b31231a0ae', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA CONT 8X8 LISO 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('49d05031-bf0f-46de-af39-79f18b9d6086', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA ROLLO BAJA 60X90 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('2034f35e-0fe3-4d7f-8f5e-90cf46f5b75b', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA TAPA PARA ENVASE 25P', true, 0, '0.00');
INSERT INTO "products" VALUES ('52b210e8-4fe9-472c-9c40-afb5a789e431', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA VASO #4-A 50P', true, 0, '0.00');
INSERT INTO "products" VALUES ('400420ac-f4a7-484a-827f-6d6be4efc5d6', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA VASO #32EU 25P', true, 0, '0.00');
INSERT INTO "products" VALUES ('8c12074d-0668-4231-a97e-b4b1d2f80adb', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA ROLLO BAJA 20X30 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('3ace2a22-cd27-4b83-95c2-5c2365beb167', 'ae5b421e-d4d2-426e-b67e-6920bace5072', 'REYMA ROLLO BAJA 40X60 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('5d121003-b4c3-4e74-89f1-7730f857e7e0', 'fb12ec4b-363d-4405-8bed-d8092da348f6', 'PAL ROCKALETA NVA / 18 SONRICS', true, 0, '0.00');
INSERT INTO "products" VALUES ('5e45295c-a131-4b98-9f0b-9765a8e4d0c1', 'fb12ec4b-363d-4405-8bed-d8092da348f6', 'PAL TIX TIX SABORES NORMAL / 30', true, 0, '0.00');
INSERT INTO "products" VALUES ('5f39e648-7fe3-4206-bc7e-1c8107993b12', 'fb12ec4b-363d-4405-8bed-d8092da348f6', 'CHUPA BARRITA SONRICS / 18', true, 0, '0.00');
INSERT INTO "products" VALUES ('f3c2bc67-e6a2-48b6-b3fa-b27240987824', 'fb12ec4b-363d-4405-8bed-d8092da348f6', 'GALL MINI MAMUT GAMESA (336GR) / 28', true, 0, '0.00');
INSERT INTO "products" VALUES ('78f8e7ad-c75e-4227-922e-c0d3887e9205', 'fb12ec4b-363d-4405-8bed-d8092da348f6', 'BOT SABRISURTIDO / 35', true, 0, '0.00');
INSERT INTO "products" VALUES ('7b91e3ad-b107-4393-9a62-bc26bd61a929', 'fb12ec4b-363d-4405-8bed-d8092da348f6', 'PAL GUDUPOP SONRICS CHILE / 40', true, 0, '0.00');
INSERT INTO "products" VALUES ('fce0b735-2efe-40d7-b16e-eeee0c5b1bb6', 'fb12ec4b-363d-4405-8bed-d8092da348f6', 'CH ROCKA BOLA 320 GR / 20', true, 0, '0.00');
INSERT INTO "products" VALUES ('0b7f2eb2-3eaf-4c0f-85fc-546a615bbd9c', 'b0ccdbe5-f393-4767-884a-3ae8245b4b7e', 'CAJETA ENVINADA 25KGS CABADAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('f47dbb56-f32c-4c66-9055-8ee5421dca92', 'b0ccdbe5-f393-4767-884a-3ae8245b4b7e', 'CAJETA ENVINADA FRASCO PET 1KG CABADAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('e751e034-694f-4d0e-be91-105dc4afc3ae', 'b0ccdbe5-f393-4767-884a-3ae8245b4b7e', 'OBLEA CAJETA ECONOMICA / 10 CABADAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('4117716d-bb66-422e-921a-ae5de25b40bf', 'b0ccdbe5-f393-4767-884a-3ae8245b4b7e', 'OBLEA CAJETA MINI 10S CABADAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('a6169d56-bb61-474d-a0d7-bc391888eaef', 'b0ccdbe5-f393-4767-884a-3ae8245b4b7e', 'CAJETA ENVINADA GOTERO 660G CABADAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('c8884817-7078-464e-a6bd-aad43fd7101b', 'b0ccdbe5-f393-4767-884a-3ae8245b4b7e', 'CAJETA ENVINADA TOPPER 1/2 KG CABADAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('14e945fd-fdc8-45e6-9359-0fc7734610c5', 'b0ccdbe5-f393-4767-884a-3ae8245b4b7e', 'CAJETA ENVINADA GOTERO 350G CABADAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('9629a26b-1965-4858-83e9-83839c9b3bc4', '211086c8-df7b-49c4-bbbc-bfab2cca5cc6', 'GUMMY BLUE SHARKS (1KG) / JOVY', true, 0, '0.00');
INSERT INTO "products" VALUES ('b907a0d7-780e-416c-98cb-433885a2e5ed', '211086c8-df7b-49c4-bbbc-bfab2cca5cc6', 'GUMMY CRAZY RINGS SANDIA (1KG) / JOVY', true, 0, '0.00');
INSERT INTO "products" VALUES ('d1e424fc-e48d-45be-a642-f1cc6ec6f1c7', '211086c8-df7b-49c4-bbbc-bfab2cca5cc6', 'GUMMY CRAZY BEAR (1KG) / JOVY', true, 0, '0.00');
INSERT INTO "products" VALUES ('6af19fcc-546b-4ad3-bbdb-f4b157e9c60e', '211086c8-df7b-49c4-bbbc-bfab2cca5cc6', 'GUMMY CRAZY DURAZNO (1KG) / JOVY', true, 0, '0.00');
INSERT INTO "products" VALUES ('4f53c387-bd2f-4b6e-9860-91281244a02a', '211086c8-df7b-49c4-bbbc-bfab2cca5cc6', 'GUMMY SHARKS MIX (1KG) / JOVY', true, 0, '0.00');
INSERT INTO "products" VALUES ('927538bf-932f-41eb-b3e8-0666e91d6b31', '211086c8-df7b-49c4-bbbc-bfab2cca5cc6', 'GUMMIES FRUTASTIKA 1 KG / JOVY', true, 0, '0.00');
INSERT INTO "products" VALUES ('148ccf0b-c315-48f7-8f45-2fa469976667', '211086c8-df7b-49c4-bbbc-bfab2cca5cc6', 'GUMMY CRAZY WORMS (1KG) / JOVY', true, 0, '0.00');
INSERT INTO "products" VALUES ('8847e4f9-4f25-4ef4-adf4-23109f437b1d', '211086c8-df7b-49c4-bbbc-bfab2cca5cc6', 'GUMMY BEAR NEON (1KG) / JOVY', true, 0, '0.00');
INSERT INTO "products" VALUES ('15b08f96-3ade-42fb-9ea9-25878e6ab9e6', '211086c8-df7b-49c4-bbbc-bfab2cca5cc6', 'GUMMY NEON SOUR RING 1 KG / JOVY', true, 0, '0.00');
INSERT INTO "products" VALUES ('0b1af43d-a309-497b-bde1-1c2eeccf5b88', '211086c8-df7b-49c4-bbbc-bfab2cca5cc6', 'GUMMY CRAZY WATERMELON 1 KG / JOVY', true, 0, '0.00');
INSERT INTO "products" VALUES ('f285094a-c9c8-4467-9fbb-72a33b3f9233', '5ccfd622-329c-4c39-b1b2-fc84ccb644f7', 'TOP-TOPS HOTCHILI 40G / 10 TOTIS', true, 0, '0.00');
INSERT INTO "products" VALUES ('c0b8cb9b-74d8-494d-b594-de14d99a5a77', '5ccfd622-329c-4c39-b1b2-fc84ccb644f7', 'TOP-TOPS NACHO 40G / 10 TOTIS', true, 0, '0.00');
INSERT INTO "products" VALUES ('903eb69c-6ffc-4ec2-a52f-4cee2befbb15', '5ccfd622-329c-4c39-b1b2-fc84ccb644f7', 'TOP-TOPS SALSA NEGRA 40G / 10 TOTIS', true, 0, '0.00');
INSERT INTO "products" VALUES ('9231acbd-d8f2-400b-868a-efaa0c071510', '5ccfd622-329c-4c39-b1b2-fc84ccb644f7', 'TOTIS PAPITAS SABOR ELOTE 90 GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('6a701a55-33cd-4dfc-b0d6-98c0484608fb', '5ccfd622-329c-4c39-b1b2-fc84ccb644f7', 'PAPITAS ADOBADAS (90GR) / 1 TOTIS', true, 0, '0.00');
INSERT INTO "products" VALUES ('09402fda-b4c2-479e-aefb-392884a6857d', '5ccfd622-329c-4c39-b1b2-fc84ccb644f7', 'TOTIS PAPITAS SAL (90 GR) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('a2f409fb-17eb-4c68-84fe-f192fac7b5ea', '5ccfd622-329c-4c39-b1b2-fc84ccb644f7', 'TOTIS DONITA SAL Y LIMON SOBRE / 25 0506', true, 0, '0.00');
INSERT INTO "products" VALUES ('453bb470-a5f3-42ef-9d7d-f0d1b1fcb739', '5ccfd622-329c-4c39-b1b2-fc84ccb644f7', 'TOTIS PAPITAS HOT CHILI (90 GR) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('d959dbe0-97b9-4b38-a29b-7f324805f4b9', '5ccfd622-329c-4c39-b1b2-fc84ccb644f7', 'TOP-TOPS SALSA NEGRA 52G / 10 TOTIS', true, 0, '0.00');
INSERT INTO "products" VALUES ('486a4e26-488e-4d9f-8d65-af47ef652b27', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'CHOC BON-BON LECHE EXH / 18', true, 0, '0.00');
INSERT INTO "products" VALUES ('fcf9fc53-3ee9-4c76-9955-0a37aa8d3c57', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'CHOC NIKOLO 21G / 30 ARCOR', true, 0, '0.00');
INSERT INTO "products" VALUES ('73140a54-e5b7-42f6-8f46-a99206881e6e', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'BUTTER TOFFEES CAFE / 50 300GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('be0dea43-1068-4dcd-a70c-7b41b49d897a', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'CHOC BONBON CAFE EXH / 18', true, 0, '0.00');
INSERT INTO "products" VALUES ('7028f32d-e832-4ebf-bc49-936c63224e6a', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'CHOC BON-BON CHOCOFRESA EXH / 18', true, 0, '0.00');
INSERT INTO "products" VALUES ('214e5dbd-e75f-47dd-b6ba-fbb4ed718da3', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'CHOC BONBON BLANCO EXH / 18', true, 0, '0.00');
INSERT INTO "products" VALUES ('31c23607-1ad5-4bbe-ad70-81b251f85a08', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'CHOC BON-BON CHOCOLATE EXH / 18', true, 0, '0.00');
INSERT INTO "products" VALUES ('3fe6593a-d52d-4989-8fa8-691cf94be861', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'CHOC NIKOLO CAFE 21G / 30 ARCOR', true, 0, '0.00');
INSERT INTO "products" VALUES ('d0e79fb3-a454-4dab-bade-65b6f3673f83', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'GOMITAS MOGUL ORUGA ENCHILADO 1KG ARCOR', true, 0, '0.00');
INSERT INTO "products" VALUES ('4bfb2e30-b8f2-4213-8903-4cd916519adb', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'CH POOSH PLUTONITA ARCOR / 40', true, 0, '0.00');
INSERT INTO "products" VALUES ('e9005285-c182-4968-848e-30cce4f886f3', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'GOMITAS MOGUL GUSANITOS 1KG ARCOR', true, 0, '0.00');
INSERT INTO "products" VALUES ('dfde6a6b-01fa-4e9e-9b54-1c85fd96b78b', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'CH POOSH FRESA ARCOR / 40', true, 0, '0.00');
INSERT INTO "products" VALUES ('47f3b39e-5a1a-4df8-b61d-00a53a89ffa1', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'GOMITAS MOGUL SANDIA ENCHILADA 1KG / ARCOR', true, 0, '0.00');
INSERT INTO "products" VALUES ('3dbfe864-73fb-471e-b900-521e7865933c', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'CH POOSH BERRIES / 40 ARCOR', true, 0, '0.00');
INSERT INTO "products" VALUES ('c7f327ce-b5d2-465a-9148-69d2e13499e7', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'BUTTER TOFFEES CHOC-CAFE 600GR ARCOR', true, 0, '0.00');
INSERT INTO "products" VALUES ('22088359-d994-418f-9d4d-ea4c5e30fcaa', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'CHOC BONBON FRESA REGALO / 15 ARCOR', true, 0, '0.00');
INSERT INTO "products" VALUES ('8dbccef6-697e-403c-9499-4373e0ea8292', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'CH POOSH SANDIA ARCOR / 40', true, 0, '0.00');
INSERT INTO "products" VALUES ('d28d92eb-5ae5-47f6-bfbc-eaa438981fe7', '48120e2d-4533-4c5c-92a2-379e416cf6d4', 'CH POOSH UNICORNIO ARCOR / 40', true, 0, '0.00');
INSERT INTO "products" VALUES ('ee458e54-0e2a-4a9b-85e8-7b3dcb57122e', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'WINIS 12 SURTIDO TUBO / 24 + 4 GRATIS', true, 0, '0.00');
INSERT INTO "products" VALUES ('1809b50a-36bc-439d-94c9-201ae90d7034', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'WINIS TA FRUTAL / 32 KLASSCO', true, 0, '0.00');
INSERT INTO "products" VALUES ('a7ec64a0-b84b-4c62-81c3-d970d00e9f22', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'WINIS MAXI TUBO UNICORNIO 16 / KLASSCO', true, 0, '0.00');
INSERT INTO "products" VALUES ('c36e696e-5fc8-4e2d-888a-c84376d8ac77', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'WINIS MAXI TUBO DRAGON 16 / KLASSCO', true, 0, '0.00');
INSERT INTO "products" VALUES ('80b0987c-3a72-4038-8afb-372e3c5f5002', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'WINIS CONGELADAS 700ML / 10', true, 0, '0.00');
INSERT INTO "products" VALUES ('1c9d5841-0471-4cad-a07a-d345dd3d43e9', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'WINIS MAXI TUBO SIRENA 16 / KLASSCO', true, 0, '0.00');
INSERT INTO "products" VALUES ('d6298316-41c7-40f8-a8cc-f8d058bc8f5f', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'WINIS BOLSA PINATERA MIX / 1.6 GR KLASSCO', true, 0, '0.00');
INSERT INTO "products" VALUES ('bbffadfc-d803-47bc-9258-de0fcee6b5fc', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'WINIS CUADRETA BLS / 150 S KLASSCO', true, 0, '0.00');
INSERT INTO "products" VALUES ('88458f29-62e1-42b2-b10a-e9c421e2fdc0', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'WINIS EN POLVO SABORES / 12 KLASSCO', true, 0, '0.00');
INSERT INTO "products" VALUES ('a621da74-dc0e-4de7-9ced-06a2cf89ea4a', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'FRUTAFFY FRESAS / CREMA / 24 + GRATIS KLASSCO', true, 0, '0.00');
INSERT INTO "products" VALUES ('d4f1ee81-5c1d-48b1-972c-f97a3228fcbc', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'WINIS COOL CONGELADAS 700ML / 10', true, 0, '0.00');
INSERT INTO "products" VALUES ('fb5b176e-f2f7-492e-95cc-4e2315132f5b', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'WINIS BOOM TORCIDO RELLENO 300GR / 100 KLASSCO', true, 0, '0.00');
INSERT INTO "products" VALUES ('c2fe6a32-ccd1-41e6-9c05-143f73aac805', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'WINIS 12 COOL CUADRETA / 16 KLASSCO', true, 0, '0.00');
INSERT INTO "products" VALUES ('6a23e56b-dc7b-4566-8bf5-94c2e04f6a04', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'WINIS MAXI TUBO WOW 16 / KLASSCO', true, 0, '0.00');
INSERT INTO "products" VALUES ('d96bac0d-e390-495d-85eb-b09a9f428316', 'd54096c4-ecaf-4505-b510-3f04cbea2c71', 'FRUTAFFY MORA AZUL / 24 + GRATIS KLASSCO', true, 0, '0.00');
INSERT INTO "products" VALUES ('6cc94602-ee23-43f1-a0ef-17089eccd8a8', 'eaf995c9-5d2e-499b-8eb2-1efd9482a98e', 'APROZA CHETO ESPECIAL CHICO 450G', true, 0, '0.00');
INSERT INTO "products" VALUES ('471d90c9-716a-4bed-894a-2cbfc48be71a', 'eaf995c9-5d2e-499b-8eb2-1efd9482a98e', 'APROZA CHETO DOBLE QUESO ESPECIAL 450G', true, 0, '0.00');
INSERT INTO "products" VALUES ('6c66931d-3ede-41c0-908e-327ee885d7e3', 'eaf995c9-5d2e-499b-8eb2-1efd9482a98e', 'APROZA CHETO PIZZA 450G', true, 0, '0.00');
INSERT INTO "products" VALUES ('cd16c06f-0ec4-49af-a67f-8b6f1e6d969b', 'eaf995c9-5d2e-499b-8eb2-1efd9482a98e', 'APROZA CHETO VALENCHETO ROJO CHILE 450GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('cce0a6df-da08-435a-b701-065ac58c49c5', 'eaf995c9-5d2e-499b-8eb2-1efd9482a98e', 'APROZA CHETO GRANDE QUESO 450G', true, 0, '0.00');
INSERT INTO "products" VALUES ('0aa91c38-ce3a-4bfa-8303-f6aa37585605', 'eaf995c9-5d2e-499b-8eb2-1efd9482a98e', 'APROZA CHETO DOBLE QUESO / 450 GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('9a178e4a-543c-4412-84b1-d11b63ebe0de', 'eaf995c9-5d2e-499b-8eb2-1efd9482a98e', 'APROZA CHETO BOLA CH 50G', true, 0, '0.00');
INSERT INTO "products" VALUES ('b2c18ff0-26c6-45b7-8dde-8923d198782b', '5895c198-d28e-488a-b235-dc792e460dce', 'DATIL 570G / 100 MONTES', true, 0, '0.00');
INSERT INTO "products" VALUES ('e88c913e-9e05-46b6-94d5-93d09219afc9', '5895c198-d28e-488a-b235-dc792e460dce', 'CHICLOSOS SURTIDOS / 100 MONTES', true, 0, '0.00');
INSERT INTO "products" VALUES ('3954898c-324d-4677-a92c-de58bdab2506', '5895c198-d28e-488a-b235-dc792e460dce', 'TOMY 470G / 100 MONTES', true, 0, '0.00');
INSERT INTO "products" VALUES ('021da28f-7d74-44e4-aec9-b2c6b785a3b3', '5895c198-d28e-488a-b235-dc792e460dce', 'RICOS BESOS / 100 MONTES', true, 0, '0.00');
INSERT INTO "products" VALUES ('8dfc4fab-9ab3-4783-a01e-ff23dd84a086', '5895c198-d28e-488a-b235-dc792e460dce', 'SUPER NATILLA / 100 MONTES', true, 0, '0.00');
INSERT INTO "products" VALUES ('7b6dbb75-69fa-4bbb-a115-b4930cae2f60', '5895c198-d28e-488a-b235-dc792e460dce', 'ANDINETA COLORES 5KG MONTES', true, 0, '0.00');
INSERT INTO "products" VALUES ('b00a9349-118f-47ee-bfa9-f0742c3c3622', '5895c198-d28e-488a-b235-dc792e460dce', 'ANDINETAS MIX 5 COLORES (500GR) / MONTES', true, 0, '0.00');
INSERT INTO "products" VALUES ('2f673674-0c75-44a3-b226-3bcc345fde44', '5895c198-d28e-488a-b235-dc792e460dce', 'ANDINETAS MIX TIRA 160G / 10 MONTES', true, 0, '0.00');
INSERT INTO "products" VALUES ('6cd7a45e-d1b8-4c33-9dd6-0b920b18fc0d', '18bdd265-522b-461d-b3d3-276d91dbbc87', 'SALSA VALENTINA PONY E/A', true, 0, '0.00');
INSERT INTO "products" VALUES ('321843ea-8cd3-4e49-9c99-90e331623979', '18bdd265-522b-461d-b3d3-276d91dbbc87', 'SALSA COSTA BRAVA PONY 370', true, 0, '0.00');
INSERT INTO "products" VALUES ('75489cc0-3eaf-490a-9d30-05446b897b1c', '18bdd265-522b-461d-b3d3-276d91dbbc87', 'SALSA COSTA BRAVA 4LTS / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('bec6ebf5-0074-4631-bfe3-0d7bad9fad00', '18bdd265-522b-461d-b3d3-276d91dbbc87', 'SALS COSTA BRAVA 1/2LITROS', true, 0, '0.00');
INSERT INTO "products" VALUES ('4fae97eb-5cde-4afc-aa91-a0c727623e07', '18bdd265-522b-461d-b3d3-276d91dbbc87', 'SALSA COSTA BRAVA 1LT', true, 0, '0.00');
INSERT INTO "products" VALUES ('a66f138c-af4d-45b2-aaf7-91ba99a4624b', '18bdd265-522b-461d-b3d3-276d91dbbc87', 'SALSA VALENTINA 1LT', true, 0, '0.00');
INSERT INTO "products" VALUES ('4ca2f0b2-207c-453e-b78a-ff8a3bad8f32', '18bdd265-522b-461d-b3d3-276d91dbbc87', 'SALSA VALENTINA PONI E/N', true, 0, '0.00');
INSERT INTO "products" VALUES ('1d44d721-55c8-49bf-9f1f-1cd4b5fcf294', 'ec85b771-2414-4e87-a73e-e46fe7a6a7da', 'LAPOSSE MAZAPAN LECHE Y ALMENDRA / 18', true, 0, '0.00');
INSERT INTO "products" VALUES ('c1751c0c-580b-4228-9c51-e85a174a3862', 'ec85b771-2414-4e87-a73e-e46fe7a6a7da', 'LAPOSSE MAZAPAN LECHE Y NUEZ / 18', true, 0, '0.00');
INSERT INTO "products" VALUES ('6acd5267-517e-44b9-b089-52484f5fca6a', 'ec85b771-2414-4e87-a73e-e46fe7a6a7da', 'CHOCO PIEDRAS 1KG LARA', true, 0, '0.00');
INSERT INTO "products" VALUES ('c04d228c-ae14-4d99-84f9-8ce936850aa1', 'ec85b771-2414-4e87-a73e-e46fe7a6a7da', 'CAR SURTIDO 18KG COLOMBINA', true, 0, '0.00');
INSERT INTO "products" VALUES ('bf1e1227-cca4-4add-816f-d9b7df5ac61e', 'ec85b771-2414-4e87-a73e-e46fe7a6a7da', 'CAR CAFE 500G LAPOSSE', true, 0, '0.00');
INSERT INTO "products" VALUES ('129fe204-add9-466d-a2fa-1c1e47058c8e', 'ec85b771-2414-4e87-a73e-e46fe7a6a7da', 'CHECOLINES TAMARINDO BOLSA / 500', true, 0, '0.00');
INSERT INTO "products" VALUES ('fc3394de-0a63-4836-a12d-85919fb5e505', 'ec85b771-2414-4e87-a73e-e46fe7a6a7da', 'CAR SURTIDO COLOMBINA 4KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('492e8e8f-03ce-4504-972c-331ae0b634fb', 'ec85b771-2414-4e87-a73e-e46fe7a6a7da', 'CAR SURTIDO 1KG COLOMBINA', true, 0, '0.00');
INSERT INTO "products" VALUES ('8af53a46-295c-44b9-9aae-647e701a4738', 'ec85b771-2414-4e87-a73e-e46fe7a6a7da', 'CAR CAFE 350G LAPOSSE / 96', true, 0, '0.00');
INSERT INTO "products" VALUES ('25600510-c7b4-4922-a350-0dfbe65bf8f9', 'd3054621-c605-45a3-af10-14e04d6d8c66', 'VUALA CHOCOLATE (60GR) / 6', true, 0, '0.00');
INSERT INTO "products" VALUES ('8df78128-c647-405e-93b8-9fe4b485c11f', 'd3054621-c605-45a3-af10-14e04d6d8c66', 'VUALA VAINILLA (60GR) / 6', true, 0, '0.00');
INSERT INTO "products" VALUES ('fe44c41e-5491-4059-8d01-4e25456afd17', 'd3054621-c605-45a3-af10-14e04d6d8c66', 'VUALA CAJETA (60GR) / 6', true, 0, '0.00');
INSERT INTO "products" VALUES ('a8d08006-20d1-4423-8c9c-fdc44394e489', 'd3054621-c605-45a3-af10-14e04d6d8c66', 'VUALA SWICH (512GR) / 16', true, 0, '0.00');
INSERT INTO "products" VALUES ('a016d98a-9392-4dec-96d1-a7346be4cf4b', 'd3054621-c605-45a3-af10-14e04d6d8c66', 'VUALA SWICH ROLL (512GR) / 16', true, 0, '0.00');
INSERT INTO "products" VALUES ('51ee501f-3ba1-4d79-ba9b-b0dd4e2e6ff6', 'df3d2818-2b64-4846-8ed0-ed72e61c49bf', 'ROLLITOS COCADA GRANDE PIN PON / 20', true, 0, '0.00');
INSERT INTO "products" VALUES ('f19f1313-1c00-4096-a101-e2330e11f3c6', 'df3d2818-2b64-4846-8ed0-ed72e61c49bf', 'ROLLO COCADA 25 GR PIN PON / 40', true, 0, '0.00');
INSERT INTO "products" VALUES ('f9198180-5b0c-4a1b-af79-d760b5ff1f3a', 'df3d2818-2b64-4846-8ed0-ed72e61c49bf', 'BANDERITAS DE COCO GRANDE / 20 PIN PON', true, 0, '0.00');
INSERT INTO "products" VALUES ('8e36a3ae-4edb-4d10-a669-735d994f43c6', 'df3d2818-2b64-4846-8ed0-ed72e61c49bf', 'ROLLO GUAYABA 60 GR / 12 PIN PON', true, 0, '0.00');
INSERT INTO "products" VALUES ('063dd440-445e-4260-8c4e-97c1182c5bc0', 'df3d2818-2b64-4846-8ed0-ed72e61c49bf', 'ROLLO COCADA PIN PON 270GRS', true, 0, '0.00');
INSERT INTO "products" VALUES ('2fd38053-f486-4dad-938b-9c173c99fc7b', 'df3d2818-2b64-4846-8ed0-ed72e61c49bf', 'ROLLO COCADA PIN PON 140GRS / 7', true, 0, '0.00');
INSERT INTO "products" VALUES ('b261718b-39f1-4b11-9d3c-dafb8ef1064f', 'df3d2818-2b64-4846-8ed0-ed72e61c49bf', 'ROLLITOS COCADA MINI PIN PON / 20', true, 0, '0.00');
INSERT INTO "products" VALUES ('56611f78-92be-4ff8-bdc9-d9713f67a1ed', 'df3d2818-2b64-4846-8ed0-ed72e61c49bf', 'ROLLO COCADA PIN PON 140GRS', true, 0, '0.00');
INSERT INTO "products" VALUES ('edf64ead-8ae9-4012-81b0-80a4f4430f49', '7caec435-7469-4596-985a-5ab15bb8a788', 'VIT CHOC GAROTO 600GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('752cb884-5cdd-449a-9432-4f76b65e93bb', '7caec435-7469-4596-985a-5ab15bb8a788', 'EST GOMA RAINBOW BELT 1 KG / INTERCANDY', true, 0, '0.00');
INSERT INTO "products" VALUES ('2c0b64a3-82c8-4922-b9dc-e643105004ed', '7caec435-7469-4596-985a-5ab15bb8a788', 'IRISH CAKE BAILEYS 390GR / 10 INTERCANDY', true, 0, '0.00');
INSERT INTO "products" VALUES ('b19bbdf8-1e68-4398-9935-4c1f3c3d96a0', '7caec435-7469-4596-985a-5ab15bb8a788', 'MALVAVISCO ICEE 71GR / CANDY BOX', true, 0, '0.00');
INSERT INTO "products" VALUES ('3e67cb4a-f6ac-419e-960d-09b2721fd1db', '7caec435-7469-4596-985a-5ab15bb8a788', 'SOUR TUBES 720GR / 24 INTERCANDY', true, 0, '0.00');
INSERT INTO "products" VALUES ('f5b0c539-6d6c-4eb1-89b9-228202ed62d4', '7caec435-7469-4596-985a-5ab15bb8a788', 'CHOC MINI TRUFFLES MIX (1 KG) / ELVAN', true, 0, '0.00');
INSERT INTO "products" VALUES ('41a916eb-6700-4c21-a014-3683265a64dc', '7caec435-7469-4596-985a-5ab15bb8a788', 'CHOCOLATE ICEE 1KG / INTER CANDY', true, 0, '0.00');
INSERT INTO "products" VALUES ('e2c6efd1-7d81-44c5-88ef-fb6a072297df', '5bc625d6-61f8-4974-9309-8e2c3c922aa5', 'GLOBO PAYASO # 9 / 100', true, 0, '0.00');
INSERT INTO "products" VALUES ('c2103682-922f-4395-92e3-e61b910bd405', '5bc625d6-61f8-4974-9309-8e2c3c922aa5', 'GLOBO PAYASO # 9 50', true, 0, '0.00');
INSERT INTO "products" VALUES ('b9ee8062-8ee9-4f4a-91ad-0bf9de9e619e', '5bc625d6-61f8-4974-9309-8e2c3c922aa5', 'GLOBO DECOR BLANCO # 9 / 50', true, 0, '0.00');
INSERT INTO "products" VALUES ('711f5f79-1ffc-4c8c-bd59-9eca1c44fcbb', '5bc625d6-61f8-4974-9309-8e2c3c922aa5', 'ESPUMA C / AROMA (250ML) / 1 PARTY IS ON', true, 0, '0.00');
INSERT INTO "products" VALUES ('409da9ac-2584-49b2-8757-1c8e8a235a09', '5bc625d6-61f8-4974-9309-8e2c3c922aa5', 'PELOTA INFL LISA SURTIDA 8.5', true, 0, '0.00');
INSERT INTO "products" VALUES ('2e3cdf2c-d7e5-4ad0-8b46-15d51b0e3504', '5bc625d6-61f8-4974-9309-8e2c3c922aa5', 'GLOBO DECOR ROSA # 9 / 50', true, 0, '0.00');
INSERT INTO "products" VALUES ('a5fd79a0-920f-4b7a-9d59-bdc7ea22d731', '5bc625d6-61f8-4974-9309-8e2c3c922aa5', 'GLOBO PAYASO # 7 100 PZS', true, 0, '0.00');
INSERT INTO "products" VALUES ('edb42ded-a7ec-458e-8ed0-c310b21951d0', '5bc625d6-61f8-4974-9309-8e2c3c922aa5', 'GLOBO PAYASO # 3 / 100', true, 0, '0.00');
INSERT INTO "products" VALUES ('cb62ec2a-5977-47ed-aae9-7faeaa751054', '5bc625d6-61f8-4974-9309-8e2c3c922aa5', 'GLOBO DECOR AZUL CIELO # 9 / 50', true, 0, '0.00');
INSERT INTO "products" VALUES ('91e623c2-cee1-4f4b-90b9-d7c5e61468fc', '5bc625d6-61f8-4974-9309-8e2c3c922aa5', 'GLOBO METALICO SURTIDO # 9 / 50', true, 0, '0.00');
INSERT INTO "products" VALUES ('731d4f92-29da-4d3f-ae27-57a834bf7f95', '5bc625d6-61f8-4974-9309-8e2c3c922aa5', 'GLOBO DECOR ROJO CEREZA # 9 / 50', true, 0, '0.00');
INSERT INTO "products" VALUES ('4cfdbeb9-d5f1-45b2-88cd-ad8b36c01db8', '5bc625d6-61f8-4974-9309-8e2c3c922aa5', 'GLOBO METAL DORADO # 9 / 50', true, 0, '0.00');
INSERT INTO "products" VALUES ('f824d305-e713-4e97-8b23-e8c0e550e939', '5bc625d6-61f8-4974-9309-8e2c3c922aa5', 'GLOBO MIX SURTIDO # 12 50PZS', true, 0, '0.00');
INSERT INTO "products" VALUES ('4557b112-9a8c-49a8-93e9-0681f8287e1d', '0696dd41-8d97-467d-b84b-6097bf721e86', 'ELECTROLIT COCO (625ML) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('291869db-4d7c-46a2-a8ca-4b2b9ad310c0', '0696dd41-8d97-467d-b84b-6097bf721e86', 'ELECTROLIT FRESA (625ML) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('79a696f8-d9d5-4116-afad-388cee37883a', '0696dd41-8d97-467d-b84b-6097bf721e86', 'ELECTROLIT FRESA KIWI (625ML) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('33473938-34c0-42e5-9145-31c8ab372e28', '0696dd41-8d97-467d-b84b-6097bf721e86', 'ELECTROLIT MORA (625ML) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('5a3db8a7-d703-4498-8abf-0c56869ca2eb', '0696dd41-8d97-467d-b84b-6097bf721e86', 'ELECTROLIT UVA (625ML) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('42d50886-528c-4f65-b762-27722982bc59', '0696dd41-8d97-467d-b84b-6097bf721e86', 'ELECTROLIT MANDARINA (625ML) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('b12d96f7-6bbe-42a9-bfd1-006a77d43de9', '0696dd41-8d97-467d-b84b-6097bf721e86', 'ELECTROLIT LIMON (625ML) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('a5203123-bea1-45be-b6d4-d27c382fe7a2', '0696dd41-8d97-467d-b84b-6097bf721e86', 'ELECTROLIT MANZANA (625ML) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('267696f9-936b-4d6d-96a0-60ff3ca2b2c3', '0696dd41-8d97-467d-b84b-6097bf721e86', 'ELECTROLIT PONCHE DE FRUTAS (625ML) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('04c15f9b-bf92-4fe9-8cbe-687827a8084e', '0696dd41-8d97-467d-b84b-6097bf721e86', 'ELECTROLIT MORA AZUL / 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('72a56545-58be-45a7-9b7b-ed72009772e9', '1bd49829-af34-4ea3-b815-c6858e471a5d', 'BOKADOS BOCACHITO EXTREME 900GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('63577ef2-39c0-4ad1-b82b-91e182191f38', '1bd49829-af34-4ea3-b815-c6858e471a5d', 'BOKADOS FRIKOS BRAVOS 900 GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('043a052f-4684-437b-8d25-9e8696e219aa', '1bd49829-af34-4ea3-b815-c6858e471a5d', 'BOKADOS BOCACHITO 900GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('e778cea7-8710-4a64-8ea4-c68ccaf757b5', '1bd49829-af34-4ea3-b815-c6858e471a5d', 'BOKADOS TOPITO NACHO 480GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('ed96064f-4bf2-46d5-89eb-1d2f9e5b8f56', '7723a193-bf22-426d-ba96-c2704e2b7fdd', 'COBERTURA 20K LUSSEL CUBETA', true, 0, '0.00');
INSERT INTO "products" VALUES ('d30ee598-3d8a-4522-a2a7-f8635c2532a1', '7723a193-bf22-426d-ba96-c2704e2b7fdd', 'COBERTURA 1K P/HELADOS LUSSEL', true, 0, '0.00');
INSERT INTO "products" VALUES ('7927e005-cd85-47c3-b769-8d65a572db63', '7723a193-bf22-426d-ba96-c2704e2b7fdd', 'COBERTURA CHOCOLATE 500GR / LUSSEL', true, 0, '0.00');
INSERT INTO "products" VALUES ('82848a67-acd9-4ef9-a95f-fe46637f34b4', '7723a193-bf22-426d-ba96-c2704e2b7fdd', 'COBERTURA 5K P/HELADO LUSSEL CUBETA', true, 0, '0.00');
INSERT INTO "products" VALUES ('0e7ec6e1-c224-493a-8f66-0d2612efb4fe', '7723a193-bf22-426d-ba96-c2704e2b7fdd', 'COBERTURA BLANCA 20KG LUSSEL CUBETA', true, 0, '0.00');
INSERT INTO "products" VALUES ('7e81d0c8-9789-4cf0-9cef-57cc6f2db83b', 'e0d61e79-796b-42ed-a1e9-c316a6ba8d4f', 'PAL SHUSHARACHA TAMARINDO 14G / 40 CHOMPYS', true, 0, '0.00');
INSERT INTO "products" VALUES ('6a261f7a-aff8-436d-910b-5bdb7553c5bc', 'e0d61e79-796b-42ed-a1e9-c316a6ba8d4f', 'PICHON SANDIA / 65 CHOMPYS', true, 0, '0.00');
INSERT INTO "products" VALUES ('a50448a2-9196-4ec0-895b-35cf30599326', 'e0d61e79-796b-42ed-a1e9-c316a6ba8d4f', 'CHOMPY GOMAS MANGUITOS ENCH 1 KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('ca865840-2df3-4077-bf76-a8c79010e9dd', 'e0d61e79-796b-42ed-a1e9-c316a6ba8d4f', 'PAL BINA CARIBENA (560GR) / 40 CHOMPYS', true, 0, '0.00');
INSERT INTO "products" VALUES ('f8b1817a-3c2c-40b6-afbf-ae9e96e0bc9b', 'e0d61e79-796b-42ed-a1e9-c316a6ba8d4f', 'PAL CHOYITAS CHOMPYS / 40', true, 0, '0.00');
INSERT INTO "products" VALUES ('cfaa0264-1f99-4a50-821b-091304a5a5c7', 'e0d61e79-796b-42ed-a1e9-c316a6ba8d4f', 'PAL JOY FRESA 14GR / 40 CHOMPYS', true, 0, '0.00');
INSERT INTO "products" VALUES ('e62b5417-2aac-458c-96c7-b3a8d0eed19f', 'e0d61e79-796b-42ed-a1e9-c316a6ba8d4f', 'PAL SABRO SANDIA / 40 CHOMPYS', true, 0, '0.00');
INSERT INTO "products" VALUES ('0a6869d4-7751-4d2e-92d1-b99a3cbf542f', '355b9d86-7312-4555-904b-007158baff44', 'JABON 1-2-3', true, 0, '0.00');
INSERT INTO "products" VALUES ('b87eb177-38cf-4a6a-b6bc-ff8ce3d8c609', '355b9d86-7312-4555-904b-007158baff44', 'ROLLO DE PAPEL BANO BIG QUALITY 600 / 6', true, 0, '0.00');
INSERT INTO "products" VALUES ('1031ee6f-c1af-4cd4-935f-cb6f7d9c2fa7', '355b9d86-7312-4555-904b-007158baff44', 'ROLLO DE PAPEL BANO BIG ROLL / 6', true, 0, '0.00');
INSERT INTO "products" VALUES ('c595549d-dc0f-4bad-8d26-f5e2e3c84296', '355b9d86-7312-4555-904b-007158baff44', 'JABON ROMA 250GR / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('73ccf19c-9578-423c-9434-9d31f042710a', '355b9d86-7312-4555-904b-007158baff44', 'JABON ROMA 500G / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('665b6ab0-202c-4459-b6be-b323c0a3028c', '355b9d86-7312-4555-904b-007158baff44', 'SOPA MARUCHAN CAMARON Y CHILE HABANERO / 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('b611ebb1-24d0-490f-bcb1-e9d1fcbbc779', '355b9d86-7312-4555-904b-007158baff44', 'LECHE ENTERA 1L / 1 LALA', true, 0, '0.00');
INSERT INTO "products" VALUES ('8302dbf3-35d8-4c10-a14d-cf57600e7a0d', '355b9d86-7312-4555-904b-007158baff44', 'JABON ROMA 1 KG / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('4942ca05-a2cf-4b9b-b4b6-004817c63473', '355b9d86-7312-4555-904b-007158baff44', 'LECHE SEMIDESCREMADA 1L / 1 LALA', true, 0, '0.00');
INSERT INTO "products" VALUES ('f51583b4-0c21-427a-974d-9c08d258bdf6', '355b9d86-7312-4555-904b-007158baff44', 'SOPA MARUCHAN CAMARON Y CHILE PIQ / 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('dad7b8c2-d11f-439a-9500-ac61c31202b1', '355b9d86-7312-4555-904b-007158baff44', 'LECHE LIGHT 1L / 1 LALA', true, 0, '0.00');
INSERT INTO "products" VALUES ('ab8d1cb4-e43d-4dd3-a0dd-27ee37ddadac', '355b9d86-7312-4555-904b-007158baff44', 'ACEITE 1-2-3 1/2 L', true, 0, '0.00');
INSERT INTO "products" VALUES ('c7e04b3e-1a4d-46e0-8b58-23c8a13e35c9', '355b9d86-7312-4555-904b-007158baff44', 'ATUN DOLORES ACEITE 133GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('60ddb06a-d08d-4664-ad09-6b5cb30653f9', '355b9d86-7312-4555-904b-007158baff44', 'MAYONESA MCCORMICK 190GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('a1c33a54-ea17-43f2-9ff5-38114ed2ab7b', '355b9d86-7312-4555-904b-007158baff44', 'PINOL 828 ML + 172 ML GRATIS', true, 0, '0.00');
INSERT INTO "products" VALUES ('90dd0c9d-d9f4-4617-967a-96e6818c20d9', '355b9d86-7312-4555-904b-007158baff44', 'MAYONESA 390GR / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('80e78d68-fe0e-4f7b-8b85-e8634f8a41ee', '355b9d86-7312-4555-904b-007158baff44', 'LECHITA SANTA CLARA SURTIDA 180 ML / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('1fac2be9-7a2f-4770-8c96-229646c919f0', '355b9d86-7312-4555-904b-007158baff44', 'SOPA MARUCHAN CAMARON / 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('d5f97b54-1a7a-4176-b78e-36f491b4ee1b', '355b9d86-7312-4555-904b-007158baff44', 'JABON BLANCA NIEVES 250GR / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('8718cba0-dce0-48d9-8b97-a48ded5e6a39', '355b9d86-7312-4555-904b-007158baff44', 'JABON ZOTE ROSA BARRA 400GR 03741', true, 0, '0.00');
INSERT INTO "products" VALUES ('d6d5fd93-e3fd-404a-a697-a7a700e81091', '355b9d86-7312-4555-904b-007158baff44', 'JABON BLANCA NIEVES 500GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('38348c3d-fe5d-4428-8496-9144059b7f71', '355b9d86-7312-4555-904b-007158baff44', 'LECHE DESLACTOSADA LIGHT 1L / 1 LALA', true, 0, '0.00');
INSERT INTO "products" VALUES ('1a2b3737-d128-4fea-99a5-533fc5938dcc', '355b9d86-7312-4555-904b-007158baff44', 'ATUN DOLORES AGUA 133GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('2308a0bf-b4e3-49d8-ab74-0dfe10e1e6e1', '355b9d86-7312-4555-904b-007158baff44', 'HARINA MASECA 1KG / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('c135bb3f-ffb6-42ed-a868-a5d54a34f781', '355b9d86-7312-4555-904b-007158baff44', 'MAYONESA MCCORMICK 3.4 KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('672d2bba-f9dd-4be0-9901-17f112308049', '355b9d86-7312-4555-904b-007158baff44', 'FABULOSO LAVANDA 1LT', true, 0, '0.00');
INSERT INTO "products" VALUES ('7694d519-cd10-447b-993f-d421f0fa5555', '355b9d86-7312-4555-904b-007158baff44', 'CERILLOS SOLES / 50', true, 0, '0.00');
INSERT INTO "products" VALUES ('8203677f-040b-4303-abda-d9283a117d09', '355b9d86-7312-4555-904b-007158baff44', 'FABULOSO MAR FRESCO 1L', true, 0, '0.00');
INSERT INTO "products" VALUES ('344d38c2-b277-4940-b6cc-0086c24871e8', '355b9d86-7312-4555-904b-007158baff44', 'SALSA EMBASA 1L TETRABRIK / 1L', true, 0, '0.00');
INSERT INTO "products" VALUES ('fab62d61-d2ca-4196-ad25-fb905ca9ea52', '355b9d86-7312-4555-904b-007158baff44', 'CHILES JALAPENOS LA MORENA 210GR / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('b7a39929-e3da-42e6-b321-09f78956b07f', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GOMA ZOMBIE 330GR / 30 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('32223b15-33ae-4c72-b769-06bd2e93f3af', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GRANEO PURO CHICLOSO 750GR / 250 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('a21f458f-7b97-4fd2-808a-2bc5c5d3c1c0', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GOMA MINI MIX 300GR / 150 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('984b6c65-f2f5-44e7-9153-b65312b1242f', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GOMA MINI BROS 300GR / 150 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('98f9e9f3-f51b-494a-8a76-3f9e3f270aaf', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GOMA OJOS 330GR / 30 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('6eb3dce2-8aca-4b1e-a03a-20bfd78b6303', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT CAPIBARA MIX / 60 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('e060b56f-e06a-4a8f-8694-b5ffa6032862', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GOMA OJOS 4D 330GR / 30 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('5861fb0e-0329-4292-9a23-115eefc0f721', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GOMA MINI OJO 300GR / 150 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('3d0a4410-29d0-42a0-97ff-e9c3993e1bd2', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GOMA DONA 330GR / 30 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('9cedbcdf-9247-4908-bc0d-a7e229a61ed9', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GOMA SPINNER 330GR / 30 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('b5eece3d-3924-4795-af56-00b201c845e3', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GOMA MIAW 330GR / 30 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('8b3dd425-9913-4405-84b7-b47afc3f31c1', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GOMA LOS BROS 330GR / 30 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('9f718d17-5622-42cf-a440-f916d167fd10', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GOMA ELOTE 330GR / 30 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('d7d6462d-56fc-416e-ba36-f6dbf8e6fb8b', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GOMA CHESCO 330GR / 30 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('542d57c3-ea36-40ad-ae87-15fa341d2039', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'GOMA LENTECITOS 120GR / 30 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('f6d7fd49-cba0-4c73-b85a-ba49a801fcf5', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GOMA FUTBOL 3D 330GR / 30 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('e0d3da1e-77f9-4f26-b5b1-c2ef4eb8033c', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'GELIHUEVO 1.14K / 30 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('2991a215-0ecd-4183-9433-1e7d34d69990', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'PINATERA GOMI MDC 1.5 KG / 100 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('22e4f394-6aa8-4a81-b00a-247dd5b281bc', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'VIT GOMA MINI LABUBU 300GR / 150 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('1bddca52-b488-4591-b410-0501c0716f33', '277c9c08-a681-4b3f-bbaf-676c0f53f011', 'ICE PULPITO 210GR / 30 PURO RELAJO', true, 0, '0.00');
INSERT INTO "products" VALUES ('0a87fb53-117e-4620-8cde-e6c205bb6859', '6f0bc280-e9b3-4e9f-a287-b4e4b9af5e8a', 'VASO DART 10J10 TERMICO / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('99b526d7-1c6b-4b0f-9bde-47ca4080b98e', '6f0bc280-e9b3-4e9f-a287-b4e4b9af5e8a', 'VASO DART 12J12 TERMICO / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('2ca1512a-30fe-4cdd-afa2-33e7dd4e512b', '6f0bc280-e9b3-4e9f-a287-b4e4b9af5e8a', 'VASO DART 8J8 TERMICO / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('e8ba2306-5656-4ec5-84e6-b04dbf7eece5', '6f0bc280-e9b3-4e9f-a287-b4e4b9af5e8a', 'VASO DART 32J32 TERMICO / 15', true, 0, '0.00');
INSERT INTO "products" VALUES ('6e2fd80c-e2db-4efa-87a7-71f65a193744', '6f0bc280-e9b3-4e9f-a287-b4e4b9af5e8a', 'VASO DART 16J16 TERMICO / 20', true, 0, '0.00');
INSERT INTO "products" VALUES ('2803026f-ecd0-4ee9-b543-fb51496029a4', '6f0bc280-e9b3-4e9f-a287-b4e4b9af5e8a', 'TAPA DART 10FTL C/SOLAPA / 100', true, 0, '0.00');
INSERT INTO "products" VALUES ('aa01d3f8-f052-40a4-8127-d23b4ff4c468', '6f0bc280-e9b3-4e9f-a287-b4e4b9af5e8a', 'TAPA DART 32SL C/POP / 100', true, 0, '0.00');
INSERT INTO "products" VALUES ('d09902a2-12db-46e9-8beb-a6add8f234dc', '6f0bc280-e9b3-4e9f-a287-b4e4b9af5e8a', 'ENVASE DART 60J60 TERMICO / 10', true, 0, '0.00');
INSERT INTO "products" VALUES ('8a1a613e-e82d-4f4f-8f3c-c573884f16c7', '6f0bc280-e9b3-4e9f-a287-b4e4b9af5e8a', 'ENVASE DART 16MJ32 TERMICO / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('9e8e9071-1a34-4342-a7f1-d7bba79f94d9', '6f0bc280-e9b3-4e9f-a287-b4e4b9af5e8a', 'TAPA DART 16SL C/POP / 100', true, 0, '0.00');
INSERT INTO "products" VALUES ('2c051844-6a71-4297-9785-6402b4515f55', '6f0bc280-e9b3-4e9f-a287-b4e4b9af5e8a', 'VASO DART 14/16 TERMICO / 20', true, 0, '0.00');
INSERT INTO "products" VALUES ('0878a73e-cae8-4802-8e03-ff22aa002470', '672de2c8-2418-4ee5-9c4c-a9295b27bd45', 'CHAROLA 855 TERMICA / 50 JAGUAR', true, 0, '0.00');
INSERT INTO "products" VALUES ('8126cbfd-3353-4c49-a259-a77b54f38a87', '672de2c8-2418-4ee5-9c4c-a9295b27bd45', 'CHAROLA 66 JAGUAR TERMICA / 50 JAGUAR', true, 0, '0.00');
INSERT INTO "products" VALUES ('6a1d57e6-5cce-4057-8968-b3e2e2867242', '672de2c8-2418-4ee5-9c4c-a9295b27bd45', 'PLATO PH8 TERMICO / 25 JAGUAR', true, 0, '0.00');
INSERT INTO "products" VALUES ('e937d0a7-ed6a-4f5c-9f17-63fde91a111c', '672de2c8-2418-4ee5-9c4c-a9295b27bd45', 'ENVASE S/TAPA JAGUAR 1L / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('ee33be1a-402d-41f1-8107-30f92d4a66d6', '672de2c8-2418-4ee5-9c4c-a9295b27bd45', 'ENVASE S/TAPA JAGUAR 1/2L / 25', true, 0, '0.00');
INSERT INTO "products" VALUES ('f70252c6-e7f0-41c7-b75f-5abb79dd80a5', '672de2c8-2418-4ee5-9c4c-a9295b27bd45', 'TAPA P/ENVASE 1L Y 1/2 L / 25 JAGUAR', true, 0, '0.00');
INSERT INTO "products" VALUES ('a8342c78-2464-4d78-a80d-2f478769b413', '672de2c8-2418-4ee5-9c4c-a9295b27bd45', 'VASO # 8 / 50 JAGUAR', true, 0, '0.00');
INSERT INTO "products" VALUES ('f75567f1-1303-4b1c-a81d-13b983811865', '672de2c8-2418-4ee5-9c4c-a9295b27bd45', 'VASO # 12 / 50 JAGUAR', true, 0, '0.00');
INSERT INTO "products" VALUES ('d8a22f7d-2f46-46dc-8dee-69c503d432b0', '672de2c8-2418-4ee5-9c4c-a9295b27bd45', 'PLATO PH6 TERMICO / 25 JAGUAR', true, 0, '0.00');
INSERT INTO "products" VALUES ('fd14dc09-b267-44c8-a91d-2c1e5fb732a6', '672de2c8-2418-4ee5-9c4c-a9295b27bd45', 'VASO # 10 / 50 JAGUAR', true, 0, '0.00');
INSERT INTO "products" VALUES ('e840b504-fe95-4d28-ba30-7407bee5d1c3', '672de2c8-2418-4ee5-9c4c-a9295b27bd45', 'PLATO #006 PASTELERO / 20 JAGUAR', true, 0, '0.00');
INSERT INTO "products" VALUES ('5842459d-dfaa-4c98-9242-55861043c3fd', '672de2c8-2418-4ee5-9c4c-a9295b27bd45', 'VASO # 14 BARRILITO / 25 JAGUAR', true, 0, '0.00');
INSERT INTO "products" VALUES ('d9b9d688-2230-420b-856c-037f7d216660', '672de2c8-2418-4ee5-9c4c-a9295b27bd45', 'VASO # 14 / 50 JAGUAR', true, 0, '0.00');
INSERT INTO "products" VALUES ('a94e11fa-61a5-4ba9-9458-c0f184181d60', 'ada76b61-269a-4e42-81c3-6329a343b9a4', 'PELLISCON TAMARINDO / 10 JHONNY $5', true, 0, '0.00');
INSERT INTO "products" VALUES ('b269cf44-d93b-4525-9427-9b8aac62a2ef', 'ada76b61-269a-4e42-81c3-6329a343b9a4', 'PELLISCON TAMARINDO / 20 JHONNY $2', true, 0, '0.00');
INSERT INTO "products" VALUES ('baa59f7b-384d-4aad-8c03-7c29a4db0775', 'ada76b61-269a-4e42-81c3-6329a343b9a4', 'VASO TAMARINDO CHICO / 20 JHONNY $1', true, 0, '0.00');
INSERT INTO "products" VALUES ('f031232f-58f3-40cf-b925-e0f331cab186', 'ada76b61-269a-4e42-81c3-6329a343b9a4', 'VASO TAMARINDO 2 ONZAS / 12 JHONNY $2', true, 0, '0.00');
INSERT INTO "products" VALUES ('e5d2275c-2a36-4b68-80f5-1312053d4c9a', 'ada76b61-269a-4e42-81c3-6329a343b9a4', 'PELLISCO TAMARINDO GRANDE / 20 JHONNY $1', true, 0, '0.00');
INSERT INTO "products" VALUES ('04843332-3ce6-494c-bfaf-a154514a1047', 'ada76b61-269a-4e42-81c3-6329a343b9a4', 'VASOTE TAMARINDO / 6 JHONNY $5', true, 0, '0.00');
INSERT INTO "products" VALUES ('9b74695d-a0ab-440d-a677-6faa1046942a', 'ada76b61-269a-4e42-81c3-6329a343b9a4', 'PULPA TAMARINDO GRANDE / 20 JHONY $1', true, 0, '0.00');
INSERT INTO "products" VALUES ('6054adf7-fd7f-429a-9ffd-e21118e1daff', '43c6eef1-b513-4736-9942-6962c9c8bfb7', 'ALMENDRA CONFITADA 1 KG / PROVIDENCIA', true, 0, '0.00');
INSERT INTO "products" VALUES ('a4a78a43-17df-46e9-b917-e792c9b23c39', '43c6eef1-b513-4736-9942-6962c9c8bfb7', 'EST JAM JUMBO LA PROVIDENCIA / 15', true, 0, '0.00');
INSERT INTO "products" VALUES ('75a9aef4-b8fd-44f8-9b3f-99b77fef54dd', '43c6eef1-b513-4736-9942-6962c9c8bfb7', 'ALMENDRA CONFITADA 500G / PROVIDENCIA', true, 0, '0.00');
INSERT INTO "products" VALUES ('a0a59f0a-7a18-481a-95e5-3ef8c6c997aa', '43c6eef1-b513-4736-9942-6962c9c8bfb7', 'CACAHUATE CONFITADO (750GR) / PROVIDENCIA', true, 0, '0.00');
INSERT INTO "products" VALUES ('4c264efe-0f71-4cf0-afc4-68b82cbbf814', '43c6eef1-b513-4736-9942-6962c9c8bfb7', 'MACARRON JUMBO (560GR) / 16 LOS ALEGRES', true, 0, '0.00');
INSERT INTO "products" VALUES ('bcf11bb7-7d83-4264-ac19-88683272fba9', '43c6eef1-b513-4736-9942-6962c9c8bfb7', 'JAM JUMBO DRO OPS BAILEYS 420GR / 12 PROVIDENCIA', true, 0, '0.00');
INSERT INTO "products" VALUES ('c5f351c9-aec4-4316-ac0f-3bd13ee02f39', '43c6eef1-b513-4736-9942-6962c9c8bfb7', 'CH BOMBI CRAYONES / 24', true, 0, '0.00');
INSERT INTO "products" VALUES ('ee3f5c10-8d47-4d17-a6a2-96b0a709596f', '43c6eef1-b513-4736-9942-6962c9c8bfb7', 'EST JAM BECERRIN MIX / 100 PROVIDENCIA', true, 0, '0.00');
INSERT INTO "products" VALUES ('c05da62d-af27-4242-be61-dc272083b3ad', '43c6eef1-b513-4736-9942-6962c9c8bfb7', 'EST JAMONCILLO NUEZ 720GR / 10 PROVIDENCIA', true, 0, '0.00');
INSERT INTO "products" VALUES ('08eff680-d326-4be2-bb13-7cecc278c219', '43c6eef1-b513-4736-9942-6962c9c8bfb7', 'ALMENDRA CONFITADA 10 KG / PROVIDENCIA', true, 0, '0.00');
INSERT INTO "products" VALUES ('63441015-d3e9-42b9-a373-1009a34e0e94', '43c6eef1-b513-4736-9942-6962c9c8bfb7', 'CAR FRUTITA CONFITADA / 1KG PROVIDENCIA', true, 0, '0.00');
INSERT INTO "products" VALUES ('398c35c9-4236-4ee2-94ee-e611fe99d01f', '43c6eef1-b513-4736-9942-6962c9c8bfb7', 'CACHIT CONFITADO 500GR PROVIDENCIA', true, 0, '0.00');
INSERT INTO "products" VALUES ('0bc442f3-a9c5-4ef0-af94-a3e462f35993', '43c6eef1-b513-4736-9942-6962c9c8bfb7', 'JAM EXTRA BECERRIN / 27 PROVIDENCIA', true, 0, '0.00');
INSERT INTO "products" VALUES ('8047f1a3-8895-46ef-866c-d6c713e68dc6', '43c6eef1-b513-4736-9942-6962c9c8bfb7', 'EST MARINA CHICA 360GR / 16 PROVIDENCIA', true, 0, '0.00');
INSERT INTO "products" VALUES ('6adb8fe2-fe10-4a13-94c9-d32317d8e1f1', 'e3bc8016-5331-4296-824e-28579f8639cf', 'MENTOS ROLL FRUTAS / 12 PERFETI', true, 0, '0.00');
INSERT INTO "products" VALUES ('c5183b23-3ef8-4521-b596-abe8bb4ef52d', 'e3bc8016-5331-4296-824e-28579f8639cf', 'MENTOS ROLL MINT / 12 CHUPA CHUPS', true, 0, '0.00');
INSERT INTO "products" VALUES ('9bb765a9-0378-409e-a329-e26dcf725966', 'e3bc8016-5331-4296-824e-28579f8639cf', 'MENTOS FANTA (348.48GR) / 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('6e646882-29b2-46f5-875e-cee0893e21e1', 'e3bc8016-5331-4296-824e-28579f8639cf', 'MENTOS ROLL FRESA (348.48GR) / 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('de863380-a1c7-4198-97e0-d6adc838ffe2', 'e3bc8016-5331-4296-824e-28579f8639cf', 'X-TREMES MORA AZUL 57 GR / 18 CHUPA', true, 0, '0.00');
INSERT INTO "products" VALUES ('4450151e-2fe7-4321-a7ca-415862474cc3', 'e3bc8016-5331-4296-824e-28579f8639cf', 'X-TREMES FRUTAS 57 GR / 18 CHUPA', true, 0, '0.00');
INSERT INTO "products" VALUES ('d8f1f1fe-3832-4725-ad76-2d5e71e69080', 'e3bc8016-5331-4296-824e-28579f8639cf', 'X-TREMES FRUTAS (57G) / 8 CHUPA CHUPS', true, 0, '0.00');
INSERT INTO "products" VALUES ('cd528429-3229-46ba-985e-a020f528310a', 'e3bc8016-5331-4296-824e-28579f8639cf', 'X-TREMES MORA AZUL (57G) / 8 CHUPA CHUPS', true, 0, '0.00');
INSERT INTO "products" VALUES ('90cbe36f-7096-4704-a93e-2fa783d1c3a3', 'e3bc8016-5331-4296-824e-28579f8639cf', 'MENTOS ROLL MIX / 12 PERFETI', true, 0, '0.00');
INSERT INTO "products" VALUES ('7a8c837c-7638-4b2d-9804-e92917c65f92', 'e3bc8016-5331-4296-824e-28579f8639cf', 'VIT PAL CHUPA CHUPS CREMOSA / 60', true, 0, '0.00');
INSERT INTO "products" VALUES ('afd26973-a5db-43ce-80c8-fdefbe88c748', 'e3bc8016-5331-4296-824e-28579f8639cf', 'MENTOS GUM FRESH MINT (80GR) / 10', true, 0, '0.00');
INSERT INTO "products" VALUES ('2b4efcc1-2451-4760-bc23-d07b13dbb53e', 'e3bc8016-5331-4296-824e-28579f8639cf', 'X-TREMES BITES / 9 CHUPA CHUPS', true, 0, '0.00');
INSERT INTO "products" VALUES ('c51852d2-a555-4f45-987a-0891b8ca438b', 'e3bc8016-5331-4296-824e-28579f8639cf', 'MENTOS GUM SPEARMINT (80GR) / 10', true, 0, '0.00');
INSERT INTO "products" VALUES ('b080e07d-5415-4030-9c8d-bea6a1ab524f', 'e3bc8016-5331-4296-824e-28579f8639cf', 'PAL CHUPA CHUPS BOLSA YOGURT / 40', true, 0, '0.00');
INSERT INTO "products" VALUES ('6136480c-247d-4c81-a6d5-44d002542b0b', 'e3bc8016-5331-4296-824e-28579f8639cf', 'CRAZY DIPS FRESA / 10 CHUPA CHUPS', true, 0, '0.00');
INSERT INTO "products" VALUES ('e4956ab5-0f64-45f9-a439-fdda1985d8d6', '09218f60-ff2c-4cfa-b9e7-86572a7e2623', 'VOLT YELLOW ENERGY (473ML) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('95dd0bb3-eb0a-4945-9de9-a05e7db9f883', '09218f60-ff2c-4cfa-b9e7-86572a7e2623', 'VOLT BLUE ENERGY LATA (473ML) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('8fd74241-6049-47bd-a1b2-d09c5b3f7815', '09218f60-ff2c-4cfa-b9e7-86572a7e2623', 'VOLT GAMER ENERGY 473GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('dd49cd23-5040-445b-81b0-be34e62fe548', '09218f60-ff2c-4cfa-b9e7-86572a7e2623', 'VOLT PINK ENERGY LATA (473ML) / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('51b16767-c78e-4858-a354-6539a61f67ac', '59cd791f-5cb8-426a-bcbb-0c56afe7ebd4', 'CAR SELZ SODA BLS / 100', true, 0, '0.00');
INSERT INTO "products" VALUES ('6dcfd848-b25b-4823-8d30-f904e3c7edd8', '59cd791f-5cb8-426a-bcbb-0c56afe7ebd4', 'PAL CHIPILETA MIX SOLAPA ANAHUAC 330GR / 30', true, 0, '0.00');
INSERT INTO "products" VALUES ('732ab976-ff00-4219-9b18-b371082e787f', '59cd791f-5cb8-426a-bcbb-0c56afe7ebd4', 'JUGO SABORES / 12 ANAHUAC', true, 0, '0.00');
INSERT INTO "products" VALUES ('6b5709c2-de29-4061-8529-4ddc0e77345c', '59cd791f-5cb8-426a-bcbb-0c56afe7ebd4', 'CH THE LONG ONE TUTTI (40G) / 24 ANAHUAC', true, 0, '0.00');
INSERT INTO "products" VALUES ('e8cc9211-23ce-43c8-bfbd-170ddffcea20', '59cd791f-5cb8-426a-bcbb-0c56afe7ebd4', 'PAL CHIPILETA NARANJA BOLSA / 30 ANAHUAC', true, 0, '0.00');
INSERT INTO "products" VALUES ('d8f76da8-c08e-470e-83dd-33a40070415f', '59cd791f-5cb8-426a-bcbb-0c56afe7ebd4', 'PAL CHIPILETA NARANJA SOLAPA / 20 ANAHUAC', true, 0, '0.00');
INSERT INTO "products" VALUES ('ed0051f9-7386-4ed7-9b64-5ac108168f3c', '59cd791f-5cb8-426a-bcbb-0c56afe7ebd4', 'SALERO MIX (12GR) / 10 ANAHUAC', true, 0, '0.00');
INSERT INTO "products" VALUES ('a496148d-cbc5-4415-b97a-5171f6abcf79', 'abef406e-fb55-4297-9115-afe5edf90151', 'CH OKA LOKA TUTTIFRUTI / CEREZA (12GR) / 12 PAF', true, 0, '0.00');
INSERT INTO "products" VALUES ('58f6f8d5-7dbc-4410-b1d9-72f474228deb', 'abef406e-fb55-4297-9115-afe5edf90151', 'CH OKA LOKA MANZANA / SANDIA / 12 PAF', true, 0, '0.00');
INSERT INTO "products" VALUES ('b1870404-87fc-4df1-93b1-23318ee31e0b', 'abef406e-fb55-4297-9115-afe5edf90151', 'CHOC SUPER SPORTS 1KG PALMER', true, 0, '0.00');
INSERT INTO "products" VALUES ('fab25e85-433a-43f1-98d9-06d6b64673a3', 'abef406e-fb55-4297-9115-afe5edf90151', 'OKA LOKA FUSION (14GR) / 12 PAF', true, 0, '0.00');
INSERT INTO "products" VALUES ('7131e213-e1aa-46a8-9237-c6aa5bd99810', 'abef406e-fb55-4297-9115-afe5edf90151', 'CHOCO PAFFY 250GR / 20 PAF', true, 0, '0.00');
INSERT INTO "products" VALUES ('f76cb4be-bcfd-4b9b-b5a2-34f312cbfd1f', 'abef406e-fb55-4297-9115-afe5edf90151', 'OKA LOKA NANOS FRESA-LIMON / 12 PAF', true, 0, '0.00');
INSERT INTO "products" VALUES ('b5d8eecb-d59a-4c4b-985a-64a6279c9b6f', 'abef406e-fb55-4297-9115-afe5edf90151', 'OKA LOKA NANOS UVA-SANDIA / 12 PAF', true, 0, '0.00');
INSERT INTO "products" VALUES ('17888dba-8aa2-4aff-8970-4a0d7f7a119f', 'abef406e-fb55-4297-9115-afe5edf90151', '400 GR CHOC SKULLS / PAF', true, 0, '0.00');
INSERT INTO "products" VALUES ('b40d0b15-80fe-45f1-a40d-3246d0734af2', 'abef406e-fb55-4297-9115-afe5edf90151', 'CHOC SUPER SPORT 500KG PAF', true, 0, '0.00');
INSERT INTO "products" VALUES ('bb02188f-d594-4b64-b0e2-2d637fd69d43', '47a42f16-cf04-4ed6-9400-0f7b9d3260fa', 'PAL CACHETADA PULPILANDIA / 20 PIGUI', true, 0, '0.00');
INSERT INTO "products" VALUES ('60cde057-9f34-4734-83b9-2f31774fdf8c', '47a42f16-cf04-4ed6-9400-0f7b9d3260fa', 'MEGA HUEVON DISPLAY / 30 PIGUI', true, 0, '0.00');
INSERT INTO "products" VALUES ('70c09932-94d0-4012-8dc5-e1608bd93b6c', '47a42f16-cf04-4ed6-9400-0f7b9d3260fa', 'MEGA HUEVON / 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('8c7b998f-b976-408b-a8f6-5c76a3113e90', '47a42f16-cf04-4ed6-9400-0f7b9d3260fa', 'CACHETADA DEVORA TIRA / 10 PIGUI', true, 0, '0.00');
INSERT INTO "products" VALUES ('88f96496-f0b3-4879-9ecd-52e90500514a', '47a42f16-cf04-4ed6-9400-0f7b9d3260fa', 'CACHETADA DEVORALIEN MIX / 10 PIGUI', true, 0, '0.00');
INSERT INTO "products" VALUES ('4ee91a98-619c-4bbc-9d32-5a5b8baaa5d1', '47a42f16-cf04-4ed6-9400-0f7b9d3260fa', 'PAL MORDIDILLA TIRA (253 GR) / 11 PIGUI', true, 0, '0.00');
INSERT INTO "products" VALUES ('76f42b6d-ff10-40bf-9046-0ab78c94cfaf', 'cf79da15-6e73-4034-896a-d23db543f910', 'PAL PUERQUITOS (560G) / 40 COOL TOON', true, 0, '0.00');
INSERT INTO "products" VALUES ('d4ca2dc4-bba3-41cc-a9bd-c45632af4e78', 'cf79da15-6e73-4034-896a-d23db543f910', 'PAL NEON LASER 336GR / 24 COOL TOONS', true, 0, '0.00');
INSERT INTO "products" VALUES ('9f7c8e2b-1dc7-4aca-a047-ef8713f06cf2', 'cf79da15-6e73-4034-896a-d23db543f910', 'PAL PUERQUITOS NEON 336G / 24 COOL TOONS', true, 0, '0.00');
INSERT INTO "products" VALUES ('203064ca-ec5d-4b28-a5a5-c3ff33a93b48', 'cf79da15-6e73-4034-896a-d23db543f910', 'PAL PUERQUITO SANDIA 620GR / 40 COOL TOONS', true, 0, '0.00');
INSERT INTO "products" VALUES ('26f3187e-595f-42e7-84e7-7260e2b3984b', '3868b1f6-54f2-4ced-b3cb-c651505bea0d', 'PISTACHOS 1KG / CIMARRON', true, 0, '0.00');
INSERT INTO "products" VALUES ('618aa573-d1f0-4584-b5d7-1dedaceef578', '3868b1f6-54f2-4ced-b3cb-c651505bea0d', 'TAZA AMOR Y AMISTAD 40GR / CIMARRON', true, 0, '0.00');
INSERT INTO "products" VALUES ('e24cb2dc-77b7-4ab2-af64-790f8c428405', '3868b1f6-54f2-4ced-b3cb-c651505bea0d', 'TAZA NAVIDAD 40GR / CIMARRON', true, 0, '0.00');
INSERT INTO "products" VALUES ('26557ebb-b591-45d7-b014-f79a1bba1d94', '3868b1f6-54f2-4ced-b3cb-c651505bea0d', 'BOLIS CONGELADO 568 ML / 8 CIMARRON', true, 0, '0.00');
INSERT INTO "products" VALUES ('e65ac594-4c7d-4049-95c5-c4c1aabd66fb', '1a7e18ed-94c8-438c-8d76-e5cd83e0c69c', 'CHOCOLATE VOLLMOND / 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('d2a630ef-0fa3-4e16-acc7-dc38156730d4', '1a7e18ed-94c8-438c-8d76-e5cd83e0c69c', 'EST GUMMY RAINBOW 900GR / 150 KALU', true, 0, '0.00');
INSERT INTO "products" VALUES ('0bd1cb6f-f33a-4568-82ce-f6fc904fdd15', '1a7e18ed-94c8-438c-8d76-e5cd83e0c69c', 'VIT GATO MINI GELATINA YOGURT 1.53KG / 100 KALU', true, 0, '0.00');
INSERT INTO "products" VALUES ('323fac06-9d25-4112-aa19-bfec010b7380', '1a7e18ed-94c8-438c-8d76-e5cd83e0c69c', 'VIT MINI GELATINA POLLO 1.53KG / 100 KALU', true, 0, '0.00');
INSERT INTO "products" VALUES ('13ff165e-517d-4e35-b585-f150e7f2879f', '1a7e18ed-94c8-438c-8d76-e5cd83e0c69c', 'VIT JELLY POP CANDY VENDING 1.73KG / 40 KALU', true, 0, '0.00');
INSERT INTO "products" VALUES ('158f7384-0c56-4f25-a21b-61cb05987fc8', '23fd51c0-9fd9-4754-a227-cf8f353ab525', 'JUMEX 413ML BOTELLIN DURAZNO / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('57635e87-f65d-4b77-b1ba-94b6fc223917', '23fd51c0-9fd9-4754-a227-cf8f353ab525', 'ARIZONA KIWI CON FRESA 570ML / JUMEX', true, 0, '0.00');
INSERT INTO "products" VALUES ('1b230b54-1f32-489d-96c2-5411af36b686', '23fd51c0-9fd9-4754-a227-cf8f353ab525', 'JUMEX 413ML BOTELLIN MANGO / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('0622371e-eaef-403f-961a-f34369873c9c', '23fd51c0-9fd9-4754-a227-cf8f353ab525', 'ARIZONA SANDIA 570ML / JUMEX', true, 0, '0.00');
INSERT INTO "products" VALUES ('0911cedb-6718-40ca-b153-03d210bad246', '23fd51c0-9fd9-4754-a227-cf8f353ab525', 'JUMEX 413ML BOTELLIN MANZANA / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('1495c59e-7839-4bef-9f4c-15c4d8c87be9', '23fd51c0-9fd9-4754-a227-cf8f353ab525', 'JUGO V8 SPLASH SURTIDO 500ML / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('edb46fd9-cef7-4e1b-adba-0c5ffa09e157', '23fd51c0-9fd9-4754-a227-cf8f353ab525', 'JUMEX MINIBRIK DURAZNO 237ML / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('08ee3eff-2494-4e57-8809-a192ccfdf8ec', '23fd51c0-9fd9-4754-a227-cf8f353ab525', 'ARIZONA MANGO 570ML / JUMEX', true, 0, '0.00');
INSERT INTO "products" VALUES ('5a30af5a-3f12-41f8-91c2-f9ef5cbc47f9', '23fd51c0-9fd9-4754-a227-cf8f353ab525', 'JUMEX MINIBRIK MANZANA 237ML / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('94d3dee4-1fcd-4cda-a12f-fc59670f6c01', '23fd51c0-9fd9-4754-a227-cf8f353ab525', 'JUMEX MINIBRIK MANGO 237ML / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('35be7bcb-037f-4251-bbd6-067176f54b7b', '6c92c5d2-d38d-4d1d-8518-76f12dfab377', 'CHOCOFRESKY BLS 500 GR / GOMEZ', true, 0, '0.00');
INSERT INTO "products" VALUES ('1f47ae18-2bca-4422-a0ca-d4f6ecc3bf9e', '6c92c5d2-d38d-4d1d-8518-76f12dfab377', 'CHOCOFRESKYS SOBRE 30GR / 9 GABY', true, 0, '0.00');
INSERT INTO "products" VALUES ('3921b1a6-9147-41ea-b942-d484b60672b3', '6c92c5d2-d38d-4d1d-8518-76f12dfab377', 'CHOCOFRESKY BLS / 33', true, 0, '0.00');
INSERT INTO "products" VALUES ('4153c4bd-1ac4-4375-b2c3-894c2f6bb450', '6c92c5d2-d38d-4d1d-8518-76f12dfab377', 'CAR TAMBORINES C/CHILE / 100', true, 0, '0.00');
INSERT INTO "products" VALUES ('dd9af338-7e48-402a-bfa6-20eb9d270344', '6c92c5d2-d38d-4d1d-8518-76f12dfab377', 'CAR TAMBORINES AZULITOS / 100', true, 0, '0.00');
INSERT INTO "products" VALUES ('217d260f-5232-4e8f-8edc-e98b1734d078', 'a7784274-2a34-4579-9f0b-ca8bae276e83', 'CAR SUAVE ICEE ROPES 600GR / 12 BONDY', true, 0, '0.00');
INSERT INTO "products" VALUES ('b89b3ee4-6b97-4012-8469-16ebbd48958a', 'a7784274-2a34-4579-9f0b-ca8bae276e83', 'ROL LIPS ICEE SURTIDO / 12 BONDY', true, 0, '0.00');
INSERT INTO "products" VALUES ('4ec9e4cb-f408-4a16-b52f-95321931e5b7', 'a7784274-2a34-4579-9f0b-ca8bae276e83', 'TA WENO ICEE SURT / 10 BONDY', true, 0, '0.00');
INSERT INTO "products" VALUES ('ba66e6c7-0326-4a49-aa8d-23211348ee2e', 'a7784274-2a34-4579-9f0b-ca8bae276e83', 'CAR SUAVE ICEE ROPES TROPICAL C/CHAMOY / 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('bf474619-e0e2-4927-a41b-58cf9f7f4508', 'a7784274-2a34-4579-9f0b-ca8bae276e83', 'ROL LIPS ICEE TROPICAL 300ML / 12 BONDY', true, 0, '0.00');
INSERT INTO "products" VALUES ('3b3fb043-bd60-4424-b895-86143f911e60', 'a7784274-2a34-4579-9f0b-ca8bae276e83', 'CAR SUAVE TIRA ICEE ROPES TROPICAL C/CHAMOY / 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('300dfdcf-d780-43a1-8bbe-1e29ccc1b61e', 'a7784274-2a34-4579-9f0b-ca8bae276e83', 'LATA ICEE 240GR / 12 BONDY', true, 0, '0.00');
INSERT INTO "products" VALUES ('6bb68945-f9b5-4882-9232-a070e806aa77', 'a7784274-2a34-4579-9f0b-ca8bae276e83', 'HUEVO MY LITTLE PONY / 8 BONDY', true, 0, '0.00');
INSERT INTO "products" VALUES ('bf2e102e-593a-48d9-a3a7-5e9053524748', 'a7784274-2a34-4579-9f0b-ca8bae276e83', 'HUEVO BOB ESPONJA / 8 BONDY', true, 0, '0.00');
INSERT INTO "products" VALUES ('b1799de6-1966-4020-90bd-c2e55c002449', '0d1c7a59-969d-4fda-84f3-43d87ea75bb3', 'BOING CAJA 500 ML SURTIDO / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('84fa232e-825b-4b45-b202-81fc3e00df93', '0d1c7a59-969d-4fda-84f3-43d87ea75bb3', 'BOING BOTELLA 354ML SURTIDO / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('27d095e1-f558-4a4a-95e8-b6f292708a1b', '0d1c7a59-969d-4fda-84f3-43d87ea75bb3', 'BOING CAJA 250 ML SURTIDO / 1	-', true, 0, '0.00');
INSERT INTO "products" VALUES ('3b47a623-f0a4-41e7-a7d3-d9f4d86ec6ff', '0d1c7a59-969d-4fda-84f3-43d87ea75bb3', 'BOING CAJA 125 ML SURTIDO / 1', true, 0, '0.00');
INSERT INTO "products" VALUES ('bf26be11-df24-40ca-8059-88553308f977', '263c5089-9dea-448b-847f-f26166a5e0c3', 'VIT GOMANDY CHAMOY 870GR DULANDY', true, 0, '0.00');
INSERT INTO "products" VALUES ('b0946b04-416c-42d4-88e7-5e5c379b08c1', '880373be-9a46-4c6c-94ac-e273e1e3ea19', 'NESTLE CARLOS V SUIZO 10P', true, 0, '0.00');
INSERT INTO "products" VALUES ('cba0f0c8-3d11-487b-a5d1-799b708dfcf9', '880373be-9a46-4c6c-94ac-e273e1e3ea19', 'NESTLE CARLOS V STICK 20P', true, 0, '0.00');
INSERT INTO "products" VALUES ('3ff7e6b1-bd7e-4215-8bf6-0ed9c4ee8fcf', '880373be-9a46-4c6c-94ac-e273e1e3ea19', 'NESTLE KITKAT 9P', true, 0, '0.00');
INSERT INTO "products" VALUES ('78ee1cc6-6dc3-4304-91d4-dda917f0179a', '880373be-9a46-4c6c-94ac-e273e1e3ea19', 'NESTLE CARLOS V STICK BLANCO 20P', true, 0, '0.00');
INSERT INTO "products" VALUES ('e77bee67-db14-4f4f-96e8-509b130269a2', '880373be-9a46-4c6c-94ac-e273e1e3ea19', 'NESTLE FRESKAS ORIGINAL 9P', true, 0, '0.00');
INSERT INTO "products" VALUES ('b5f4d82d-f214-41a2-9e00-591a3e285df6', '880373be-9a46-4c6c-94ac-e273e1e3ea19', 'NESTLE LARIN ALMENDRAS S/AZUCAR 15P', true, 0, '0.00');
INSERT INTO "products" VALUES ('d7524736-5915-472b-a689-7ed14bd734f5', '880373be-9a46-4c6c-94ac-e273e1e3ea19', 'CHOC KITKAT 498GR / 12 NESTLE', true, 0, '0.00');
INSERT INTO "products" VALUES ('a2d6402c-15af-4a44-8280-f8bd352e848a', '880373be-9a46-4c6c-94ac-e273e1e3ea19', 'NESTLE CARLOS V CERO SIN AZUCAR 10P', true, 0, '0.00');
INSERT INTO "products" VALUES ('fe15c985-d11e-4202-8c38-61ee35a19587', '880373be-9a46-4c6c-94ac-e273e1e3ea19', 'NESTLE CRUNCH STICK 20P', true, 0, '0.00');
INSERT INTO "products" VALUES ('5b2e52c9-0b8a-4437-9a3d-314bdb25743b', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'CH ORBIT 4S MENTA /40', true, 0, '0.00');
INSERT INTO "products" VALUES ('36beca7f-f3fb-4e8a-af22-93517bcce133', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'SKWINKLES SALSAGHETI SANDIA /12', true, 0, '0.00');
INSERT INTO "products" VALUES ('b3580580-7c3b-4079-83d5-eff80e7550a1', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'CHOC SNICKERS 76', true, 0, '0.00');
INSERT INTO "products" VALUES ('ee09c35d-80c3-4836-b1b0-19e8e1cd9462', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'CH ORBIT 4S HIERBABUENA /40', true, 0, '0.00');
INSERT INTO "products" VALUES ('d06f5cc0-5368-4aec-81d3-7a048c3d4df4', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'PANZON LUCAS SANDIA CHAMOY /10', true, 0, '0.00');
INSERT INTO "products" VALUES ('90be5548-196e-459e-8eaa-ebeb9c274984', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'CH ORBIT 4S POLAR MINT /40', true, 0, '0.00');
INSERT INTO "products" VALUES ('09d9ff3e-8ff9-43c4-8cf9-049c7f4ff33e', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'CHOC MILKY WAY /6', true, 0, '0.00');
INSERT INTO "products" VALUES ('bee83bc6-f28a-4b82-b9d7-30918965611d', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'GUSANO LUCAS CHAMOY EXH /10', true, 0, '0.00');
INSERT INTO "products" VALUES ('ecac8dc4-936f-4a46-88ee-1b7d147902da', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'CH ORBIT 4S FRESA /40', true, 0, '0.00');
INSERT INTO "products" VALUES ('dfb14174-b1ec-4f21-a59b-7c9ed08d8921', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'CH WRIGLEY S WINTERFRESH 5 S /720', true, 0, '0.00');
INSERT INTO "products" VALUES ('924d892f-abd6-46ce-b2f9-cdc222a2455b', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'CH WRIGLEY S DOUBLEMINT /20', true, 0, '0.00');
INSERT INTO "products" VALUES ('7387f43e-3f13-4568-893f-6f22dcfa0a69', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'CHOC M&M PEANUT /6', true, 0, '0.00');
INSERT INTO "products" VALUES ('3a25eb09-8542-4044-b0b5-8884b15ae89e', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'CHOC M&M SPLAIN /6', true, 0, '0.00');
INSERT INTO "products" VALUES ('6c3dce52-cb22-448f-a70a-1a7709369765', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'MUECAS LUCAS CHAMOY EXH /10', true, 0, '0.00');
INSERT INTO "products" VALUES ('3baca398-6aac-4eee-bb9e-3ee98d607f93', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'SKITTLES ORIGINAL /10', true, 0, '0.00');
INSERT INTO "products" VALUES ('8936f354-69ab-4cda-8c68-d1ba9c609fcd', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'MUECAS LUCAS CEREZA EXH /10', true, 0, '0.00');
INSERT INTO "products" VALUES ('db8d47ab-a743-415a-807a-761cf8913772', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'SKWINKLES SANDIA (2406) /76', true, 0, '0.00');
INSERT INTO "products" VALUES ('8430ded0-e109-4de7-857a-7ae6164a9149', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'MUECAS LUCAS SANDIA EXH /10', true, 0, '0.00');
INSERT INTO "products" VALUES ('4dee1112-320d-427e-9048-5bd198396dc3', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'MUECAS LUCAS MANGO EXH /10', true, 0, '0.00');
INSERT INTO "products" VALUES ('4651763e-8255-44ff-a38c-19bd435b8d09', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'SKITTLES WILDBERRIES /10', true, 0, '0.00');
INSERT INTO "products" VALUES ('fec0686c-f59a-4d75-8f50-9d045ccc30a9', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'SKWINKLES SANDIA CHILE RELLENOS /12', true, 0, '0.00');
INSERT INTO "products" VALUES ('e8f2d4ce-9ef8-42c4-98ff-1acc50ff673b', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'SKWINKLES PINA TAM RELLENO /12', true, 0, '0.00');
INSERT INTO "products" VALUES ('36cd4977-158e-48bf-83f5-747e8942b7a4', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'MUECAS LUCAS PEPINO EXH /10', true, 0, '0.00');
INSERT INTO "products" VALUES ('83e18e1e-9761-4dd6-b2e9-13f568f0c57f', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'MUECAS LUCAS TAMARINDO EXH /10', true, 0, '0.00');
INSERT INTO "products" VALUES ('2268299b-152e-4819-a3f8-30f5a6487008', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'CH HUBBA BUBBA ORIGINAL /6', true, 0, '0.00');
INSERT INTO "products" VALUES ('55c2360f-dd09-4ccc-9135-84d0f5db4f61', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'CH HUBBA BUBBA GRAPE /6', true, 0, '0.00');
INSERT INTO "products" VALUES ('aa6cc5d2-8313-4ed3-89a2-6c892c0dc1ca', 'a91a4148-5fe9-41ed-985a-1f0550797356', 'SKWINKLES CHAMOY EXH /12', true, 0, '0.00');
INSERT INTO "products" VALUES ('bfc75ae1-2f35-413d-a1fb-5492e5847a9b', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'CH CLORETS 5 S TIPO AMERICANO /20 MONDELEZ', true, 0, '0.00');
INSERT INTO "products" VALUES ('6fc76635-b66d-4ea3-a9c7-a31333af5994', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'CH TRIDENT 4 S YERBA /40', true, 0, '0.00');
INSERT INTO "products" VALUES ('5fae1085-aa6f-492b-b704-8193864bd8c4', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'CH TRIDENT 4S MENTA /40', true, 0, '0.00');
INSERT INTO "products" VALUES ('05818d53-20d4-4f51-a8a6-055403394657', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'ALIS TBO LEMON LYPTUS /12', true, 0, '0.00');
INSERT INTO "products" VALUES ('3dd8975f-57b8-4aab-81a5-ed172cb3a216', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'HALLS TUBO XTRA STRONG LYPTUS /12', true, 0, '0.00');
INSERT INTO "products" VALUES ('c4c4ac47-6e07-4c1f-9b81-891c61c04d52', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'LACORONA HUEVITO PINTO,1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('b27698cb-07de-4aa8-a40e-0cf0fc57361d', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'RICOLINO CHUTAZO.20P 370GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('47f92a63-410f-44a2-a704-d309c5788e70', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'RICOLINO DUVALIN-TRISABOR.18P 270G', true, 0, '0.00');
INSERT INTO "products" VALUES ('1d1546b7-94c7-4c4a-bce8-d7f17b1cc8e0', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'HALLS TUBO MENTHO LYPTUS /12', true, 0, '0.00');
INSERT INTO "products" VALUES ('2c8c8fa7-e57a-4e75-a9e7-c19b2e30a1dc', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'CHUTRIDENT,VALUPACK YERBA/12', true, 0, '0.00');
INSERT INTO "products" VALUES ('f70ae1b3-dd12-4cc0-a654-9b43251bf955', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'RICOLINO PANDITAS 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('2a3148a7-4dc4-4e02-89d7-633055aff0e2', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'BUBBALOO ERESA 239,7 GR/ 47', true, 0, '0.00');
INSERT INTO "products" VALUES ('49027f5b-29ac-440e-930f-d9f09eb383db', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'CH TRIDENT.VALUPACK MENTA /12', true, 0, '0.00');
INSERT INTO "products" VALUES ('39a33452-1a86-40fc-b23c-a209042fd819', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'RICOLINO PAQUETE DIVERSION 1.38KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('5e287d6b-15e5-4747-a5fd-96d1c25ea748', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'CH TRIDENT.VALUPACK ERESHMINT /12', true, 0, '0.00');
INSERT INTO "products" VALUES ('cb6ba34f-039e-42b5-a7f9-1a383aeded78', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'RICOLING PAYASO, MINI45P', true, 0, '0.00');
INSERT INTO "products" VALUES ('ca8bb742-6521-41a9-b0d4-0f82a7bbd689', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'VERO PICA FRESA.100P', true, 0, '0.00');
INSERT INTO "products" VALUES ('d001da44-818a-4158-b81f-0b83b9076087', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'LALISTOSO MOA LYPTUS 12', true, 0, '0.00');
INSERT INTO "products" VALUES ('2852acf5-f4d2-47c4-9603-40b5cab2dbec', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'CH TRIDENT 4 S FRESA SALVA 740', true, 0, '0.00');
INSERT INTO "products" VALUES ('902c4d14-3539-4a0a-b44a-2196df42801c', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'VERO JARRITO.40P', true, 0, '0.00');
INSERT INTO "products" VALUES ('43420cb6-f1fb-4cc5-b925-06367927d3f9', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'HALLS TUBO. YERBA LYPTUS/12', true, 0, '0.00');
INSERT INTO "products" VALUES ('efbe8f1b-3fc7-4c92-91c8-8b6157f6b418', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'RICOLIND.GOMA GUSANOS BICOLOR,1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('99dbe3b3-7791-40af-a255-8550be71acb1', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'VERO RELLERINDO 65?', true, 0, '0.00');
INSERT INTO "products" VALUES ('1622b9d3-f577-41bf-a2df-0f94c13fd1a0', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'VERO BROCHITAS PINTA AZUL 48P', true, 0, '0.00');
INSERT INTO "products" VALUES ('2f1d9974-9349-4482-9462-fa4e84018cbb', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'VERO SANDIBROCHAS RELLENAS 40P', true, 0, '0.00');
INSERT INTO "products" VALUES ('9f5b1a4e-6e8d-431c-a0f1-6b2f266efcae', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'VERO SANDIBROCHAS PRENDIDAS 40P', true, 0, '0.00');
INSERT INTO "products" VALUES ('e756029d-7305-4582-9fce-c76c0f39fe10', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'CH BUBBALO SWEET MIX 357,GR/ 70 MONDELEZ', true, 0, '0.00');
INSERT INTO "products" VALUES ('4182d285-f365-4271-8670-5f44165595d2', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'VERO BOMBA CON. CHILE 40', true, 0, '0.00');
INSERT INTO "products" VALUES ('3e2123b3-9896-4bf0-9ba2-f5fff36a4f57', '93582692-d9c8-4ca9-837e-d5e505b6378e', 'RICOLINO GOMA PINGUINOS 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('90f2aa3b-e8ad-4608-88b9-ca315dc4c4d1', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'KINDER DELICE 10P 396', true, 0, '0.00');
INSERT INTO "products" VALUES ('d9c56403-f634-4828-83ef-039d9267c04c', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'KINDER HUEVO NINA’EP', true, 0, '0.00');
INSERT INTO "products" VALUES ('05bab2e1-b70f-4d0f-aef4-486365369ccf', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'KINDER ''HUEVO NINO 8P.', true, 0, '0.00');
INSERT INTO "products" VALUES ('7b7929e9-a96a-4ff0-aac5-d26d1029386a', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'KINDER BUENO BARRITA TOP', true, 0, '0.00');
INSERT INTO "products" VALUES ('895144a5-e774-48ec-99fa-390a648e2bdf', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'KINDER BARRITA/ 18', true, 0, '0.00');
INSERT INTO "products" VALUES ('9d28cf6a-0313-4c4a-a486-1eef4df3022f', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'KINDER MAXI-210GR/10', true, 0, '0.00');
INSERT INTO "products" VALUES ('1c3758fd-7ecb-4872-83a4-9e79332fb0d1', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'KINDER HUEVO HOTWHEELS @P', true, 0, '0.00');
INSERT INTO "products" VALUES ('8239eb8d-8206-4011-ba58-6de52d1850be', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'KINDER HUEVO NATOONS PF', true, 0, '0.00');
INSERT INTO "products" VALUES ('59e8ff86-5e6c-494e-8cfb-a79931ff87ad', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'KINDER HUEVO BARBIE 8P', true, 0, '0.00');
INSERT INTO "products" VALUES ('6517debf-88a0-44cc-a94d-846350a697c4', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'KINDER BARRITA 724 FERRERO', true, 0, '0.00');
INSERT INTO "products" VALUES ('48551973-0980-4ece-be42-3a47ced5557c', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'KINDER DELICE 931P,39GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('b7b12758-1e9c-4ba9-b3e1-0feb4b4838d2', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'TIC-TAC FRUTAS /12', true, 0, '0.00');
INSERT INTO "products" VALUES ('955b91b6-5481-42f3-8423-1871fd6639ae', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'NUTELLA B-READY/10', true, 0, '0.00');
INSERT INTO "products" VALUES ('f5e8f029-4b5a-4db5-ab6c-040525e5a23e', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'FERRERO 160', true, 0, '0.00');
INSERT INTO "products" VALUES ('670484f9-62da-4c0c-babe-a4e50a561a2c', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'TIC.TAC NARANJA /12', true, 0, '0.00');
INSERT INTO "products" VALUES ('8916d0cc-7bc8-48df-873e-44346570de53', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'FERRERO SP', true, 0, '0.00');
INSERT INTO "products" VALUES ('06e8ebfa-9253-49f2-bde4-ba20a6fa0673', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'TIC.TAC FRESA /12', true, 0, '0.00');
INSERT INTO "products" VALUES ('9257b6f6-e77f-4165-a69c-6d0f0283a22f', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'KINDER HUEVO MAXI''1P.100G', true, 0, '0.00');
INSERT INTO "products" VALUES ('7143c5ff-e599-4e8e-b7bb-ead6244d6a66', 'd5ef6965-4388-48f8-810a-0c09ddc43d81', 'FERRERO 35 8P', true, 0, '0.00');
INSERT INTO "products" VALUES ('cdda4eb1-7812-4a4d-9418-b1f3844f607a', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'LA ROSA MAZAPAN GIGANTE 50G /20', true, 0, '0.00');
INSERT INTO "products" VALUES ('79da9d5d-1ee4-48f9-834e-a7bd56e9b957', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'PAT JUMBO.CEREZA /50,LA ROSA', true, 0, '0.00');
INSERT INTO "products" VALUES ('7c227ab7-623e-494f-871d-fc9e0559b43a', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'LA ROSA MAZAPAN /30', true, 0, '0.00');
INSERT INTO "products" VALUES ('c925799a-c2a6-4f9e-a4fc-b5f2bd87cba8', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'A ROSA JAPONES TUBO 60G''12P NISHIYAMA', true, 0, '0.00');
INSERT INTO "products" VALUES ('cb3e0e5a-fa8b-42c5-b809-006f8f60223b', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'CHOC EST SUIZO''/16 LA ROSA', true, 0, '0.00');
INSERT INTO "products" VALUES ('4e0d36ca-93a4-4722-a32c-894dea7ce36b', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'A ROSA NUGS RECREO 56G:10P-', true, 0, '0.00');
INSERT INTO "products" VALUES ('3794fe92-1dde-4d5b-ab74-a7f2b11b2c96', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'LA ROSA NUGS GRANDE 12P', true, 0, '0.00');
INSERT INTO "products" VALUES ('e501c9a2-b61d-4505-abd6-953c1a32fc4f', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'CROC RANITA CROA! /12 LA ROSA', true, 0, '0.00');
INSERT INTO "products" VALUES ('130aecea-f924-4ec1-b363-6b42e8ab291a', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'LA ROSA BOMBON C/CHOC SOP', true, 0, '0.00');
INSERT INTO "products" VALUES ('bda31ce7-766c-4b83-8ed9-18f1379d10c0', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'CAR SUAVE ACIDITO #100 LA ROSA', true, 0, '0.00');
INSERT INTO "products" VALUES ('65831939-5503-4724-8889-cc823ddfef04', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'CHOC CERETZZA LICOR /.1 KG LA ROSA', true, 0, '0.00');
INSERT INTO "products" VALUES ('1e966cde-56ee-42a2-9397-57edda77dadc', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'A 4S PASTILLAS DISPLAY /100 LA ROSA', true, 0, '0.00');
INSERT INTO "products" VALUES ('1d8515f0-f495-41af-b709-4e39b05f9f79', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'CHOC MALVABON FRESA /12 LA''ROSA', true, 0, '0.00');
INSERT INTO "products" VALUES ('d49da14d-3497-4154-831f-50e0f819f3da', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'A ROSA BOMBON GRANDE BLANCO/ROSA', true, 0, '0.00');
INSERT INTO "products" VALUES ('98a77b4c-2ef1-4c2d-860a-4b49f56cb596', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'LA ROSA JAPONES CHICO 286 20P. NISHIYAMA', true, 0, '0.00');
INSERT INTO "products" VALUES ('3a2d73aa-249a-483c-a91c-4c2523177376', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'A ROSA JAPONES TUBO 200G 6P NISHIYAMA', true, 0, '0.00');
INSERT INTO "products" VALUES ('5bb2952a-366f-4a9e-9263-fbbd066685f7', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'CHOC EST SUIZO C/ALMENDRA /16 LA ROSA', true, 0, '0.00');
INSERT INTO "products" VALUES ('569a6349-0c8a-4870-a85e-806f35c60f26', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'A ROSA JAPONES 800GR GRANEL', true, 0, '0.00');
INSERT INTO "products" VALUES ('1ad9b4f9-0b3f-4853-8e74-3b344ea7a58f', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'LA ROSA MAZAPAN C/CHOC GIGANTE /12', true, 0, '0.00');
INSERT INTO "products" VALUES ('fac9154f-820a-40ae-a6ee-d071d64032e4', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'A ROSA MAZAPAN C/CHOC /16', true, 0, '0.00');
INSERT INTO "products" VALUES ('6f286187-7d4e-4618-8ff3-06e550b0bd02', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'CHOC WINKY BARRA 56G /10 LA ROSA', true, 0, '0.00');
INSERT INTO "products" VALUES ('5e9d70bf-30d9-4c74-979d-396e219dff5c', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'PUTPARINBO. GRANDEY/20', true, 0, '0.00');
INSERT INTO "products" VALUES ('f12ceef3-939c-4ae0-bec6-f68835467f3a', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'LA ROSA NUGS MINI 24P', true, 0, '0.00');
INSERT INTO "products" VALUES ('79101534-6ec0-48fa-870a-a41e9c6d5ba1', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'CROC SURTIDO ESPECIAL‘20 BARRAS 420 GR/LA ROSA', true, 0, '0.00');
INSERT INTO "products" VALUES ('c2061dc9-fbfa-4d42-9244-c69f280051af', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'LA ROSA BOMBON SUPER GIGANTE 30P', true, 0, '0.00');
INSERT INTO "products" VALUES ('2b110b49-3429-4b1c-867a-eeaefe0cfc0f', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'A ROSA JAPONES TUBO 42G ''14P NISHIYAMA', true, 0, '0.00');
INSERT INTO "products" VALUES ('7706a4dd-abf2-4488-a814-04c930803b60', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'CHOC RELLENOS /16 LA ROSA', true, 0, '0.00');
INSERT INTO "products" VALUES ('1941ce30-bce9-49d3-ad69-68a5ac7d5d4e', 'c20c3d16-094a-49ab-88f2-afa52756693a', 'CH MINI PINTA-T BLS 500GR/100 LA ROSA', true, 0, '0.00');
INSERT INTO "products" VALUES ('c3b331be-9a5a-4b1f-ab09-f01154cb0556', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS CAM, MEDIANA COLOR 1KG CLASICA', true, 0, '0.00');
INSERT INTO "products" VALUES ('1e8e3503-e933-4524-b4c8-a6704521189d', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS CAM CHICA COLOR 1KG CLASICA', true, 0, '0.00');
INSERT INTO "products" VALUES ('a3ba5b43-85fe-4c8e-8cd2-944af9690d6e', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS CAM GRANDE COLOR 1KG CLASICA', true, 0, '0.00');
INSERT INTO "products" VALUES ('5562acf7-a5eb-441e-a641-1591838a697f', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS ROLLO.ALTA 25X35 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('2cce06c7-d58b-45c9-bfba-2f64441d281f', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS BAJA CORT: 20X30 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('5804098c-8ba1-4ff0-9033-6c5226e453fb', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS ROLLO.ALTA 20X30 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('b7326724-38ce-4bfc-b43a-609dce1ce470', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS CAM MINI COLOR KG CLASICA', true, 0, '0.00');
INSERT INTO "products" VALUES ('f86ca1bd-b959-4ceb-becc-fa2cc5f14fd0', '4bd2dc1c-503e-4388-a3fd-767211384193', 'GREENPACK ROLLO ALTA 60X90,C,180', true, 0, '0.00');
INSERT INTO "products" VALUES ('53ba4e67-ab1b-41a2-bf31-1dd1233cb991', '4bd2dc1c-503e-4388-a3fd-767211384193', 'GREENPACK ROLLO ALTA 90X120.C 180/10 PZA', true, 0, '0.00');
INSERT INTO "products" VALUES ('c0147226-b067-43f5-b506-9cb0a1a3bea2', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS BAIA CORT. 25X35 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('479eaec5-7d87-4821-8884-68ddfb552621', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS BAJA CORT 15X25°1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('b4095072-6be0-4825-a631-21bd1a3ca697', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS BAIA CORT 18X26 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('5115ed10-2bcb-4fe9-b965-db7d7e9c2b33', '4bd2dc1c-503e-4388-a3fd-767211384193', 'GREENPACK NEGRA 60X90. 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('b58a9e56-07f9-46b2-bf9a-a2dbb4a93aa5', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS BAJA CORT, 60X90 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('e7984616-58ba-4a33-974d-811acab72c16', '4bd2dc1c-503e-4388-a3fd-767211384193', 'GREENPACK NEGRA 90X120 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('dfc7e27e-958c-447d-b17b-1e74f0acc90b', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS BAIA CORT,08X26 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('1c4a3271-7443-4c8a-b5b6-68104c262e7d', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS ROLLO ALTA''15X25 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('2b3fdb8e-d393-4211-895b-9c55845a3c9b', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS BAIA CORT 15X20 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('a174414d-0bae-4a54-a1cb-ded1130d89a2', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS BAJA CORT 12X20 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('3b1aaf74-dc78-4aa4-b1bc-3fcd9f46493c', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS BAJA CORT.50X70 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('e2e7204d-fe67-4c57-8224-f4c6c64eb402', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS CAM JUMBO COLOR.1KG CLASICA', true, 0, '0.00');
INSERT INTO "products" VALUES ('f0683c3e-3870-4b2c-a18e-0bc9faba4f67', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS BAJA CORT.40X60 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('5484e7ff-c6e8-4eac-bb93-c9e3306c14a2', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS BAJA CORT 10X20 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('3f8104d3-e8e7-4be1-a853-e2c49eabfcdf', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS ROLLO.ALTA 30X40 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('8d91569c-1cd8-454c-9fe1-7ea372de7f9b', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS ROLLO ALTA''18X26 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('7a79e06a-9632-4443-a141-936371bc795b', '4bd2dc1c-503e-4388-a3fd-767211384193', 'BOL ROLLO 60X90 NEGRA C/.20PZA', true, 0, '0.00');
INSERT INTO "products" VALUES ('eca247f0-3625-4693-a036-c22733014559', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS BAJA CORT 14X22 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('b95e6a01-935d-44da-83ea-8ca1963caf4f', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS CAM GRANDE NEGRATKG', true, 0, '0.00');
INSERT INTO "products" VALUES ('feca3ece-a4b5-4877-8acc-4eb0ac27648c', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS BAJA CORT.35X45°1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('86475b92-4154-4f0b-a291-5c9a7617af77', '4bd2dc1c-503e-4388-a3fd-767211384193', 'ALTOS ROLLO IMPRESO 20 X30,1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('11b1b507-5b2b-4ad4-b78e-33fff74ed58d', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS ROLLO VERDE 25X35,1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('90471798-3791-4bbc-a061-054e3a49f2ba', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS ROLLO IMPRESO 25X35 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('b9c79ca6-7fab-4e1e-8884-caf4a45b9907', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS. CAM CHICA FLAT 1KG OXXO', true, 0, '0.00');
INSERT INTO "products" VALUES ('b3d57755-764c-4c69-a0d3-4b7c639558f6', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS CAM GRANDE FLAT 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('b4b471a2-25ae-4a40-a455-0d8c9c6c310a', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS BAJA CORT.90X120 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('8f1228d9-92a9-48fa-9436-2ed758cc0760', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS CAM MEDIANA NATURAL 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('eb8e0459-b6e0-4bba-8fbc-2738990eaef2', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS. CAM _MEDIANA FLAT: 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('e4502bb7-88d4-4149-abe5-51941cf3c939', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS BAJA CORT 30X40 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('beed72a5-d0be-4887-b745-ac449c128256', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS BAJA CORT-14X20°1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('24126e46-c046-4eb0-ae27-4f740d6db1ff', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS CAM GRANDE NATURAL 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('852f130e-3685-4907-94b4-11ea581e1b00', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS. CAM CHICA NATURAL 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('38be3599-ce30-4a4c-9baf-76ae4930fb1f', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS CAM MINI NEGRA 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('b280b7ee-d2e6-4453-9091-ce5bc9328bc9', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS ROLLO VERDE 20X30 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('6726b24a-b0dd-4b64-94bb-d2708495750b', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS BAJA CORT-10X25 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('c96f6723-97ca-4def-9773-80a0e61ecbc0', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'RECIGREEN. CAM CHICALIKG', true, 0, '0.00');
INSERT INTO "products" VALUES ('c6427ca8-952b-4ba4-ae29-fe6dface248f', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS BAJA CORT-10X15 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('9a3c723e-47c8-4e66-9f59-250ef5d95349', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'GREENPACK NEGRA 70+30X120 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('8e9247e2-d379-441a-a2a7-cf8193a04723', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS BAJA CORT,08X12 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('31442fc3-1340-41c6-b644-d3c4c6de6cad', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS. CAM _EXTRA(IKG', true, 0, '0.00');
INSERT INTO "products" VALUES ('8abbe57d-0713-473a-a613-eb2c5a900ab0', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS CAM MINI NATURAL 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('72b8b96a-07d7-41b8-bed6-bb1f27948045', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS. CAM CHICA NEGRA-1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('28610f70-3ad5-48e0-b4e6-14fcf4578f3c', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS CAM MEDIANA NEGRA 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('0032d53a-1691-4335-82ed-71120c7c4971', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS BAJA CORT-12X25°1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('29493ae7-f05d-4a62-90ad-66f68da68177', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS NAVIDENA NATURA 20X30 500GR.', true, 0, '0.00');
INSERT INTO "products" VALUES ('db065637-2a6f-4d8a-b770-8a275507661b', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS. CAM _MEDIANA IMPRESA OXXO 1K', true, 0, '0.00');
INSERT INTO "products" VALUES ('9843402c-0172-4c9c-b5a7-61365613763f', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'ALTOS CAM PEQUENA 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('710494f7-8ae5-49d1-b710-3ce34f25d939', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'DESC BOL ROLLO 90 X:120 NEGRA C715 PZA', true, 0, '0.00');
INSERT INTO "products" VALUES ('fc02f206-c1c3-47a5-9b27-756851bb298b', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'GREENPACK NEGRA 70X90 .1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('befa8c07-3922-4f91-a98f-f1a2f244b4bf', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'GREENPACK NEGRA 80X120,1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('9b2f2ad8-046e-4fa8-a964-2919e7e800f7', 'a85b30aa-f78e-4127-bcc4-3fc8f2b78308', 'TOS CAM CHICA IMPRESA OXXO 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('4a89fde6-70d8-4538-b264-893ca2b0cbb4', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'BOLSA PINATERA 7.4 KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('c476c8ca-847a-4af8-9e02-1bed7010d828', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'GAIL WAFER CHOC /150', true, 0, '0.00');
INSERT INTO "products" VALUES ('2ee1e0d5-ae97-4a3c-b01b-721202e26464', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'ASTRIDIX SABORES PALOLA 270GR /30', true, 0, '0.00');
INSERT INTO "products" VALUES ('8745a538-abc2-4f1c-9927-693ae6b8df07', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'TRUENO HUEVITO /24 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('9f1b4365-59e5-4692-8b2f-f25d201bbfbe', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'CHOC GALLETIN CHOCOLATE /150G DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('5d846820-7d06-4bb6-b239-da903f1a19dd', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'GETATINA BOLSA 4.5K /100 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('572c3f6a-bb4b-4607-9e69-cc7e3ea43618', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'MINI BOLO SURTIDOI (110G)/12 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('8c0d6b31-8c2b-46e4-8bd9-30a5b6ba7505', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'CHOCO. CRUNCH CARITAS CHOCOLATE /100', true, 0, '0.00');
INSERT INTO "products" VALUES ('2a74b671-fbf0-4bee-8352-817aaee8e1d0', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'GALL WAFER CHOC /65+15 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('5f02b3a7-1510-49d4-91d8-4e3689a15449', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'FURA SODA 224GR DETICIAS /O4', true, 0, '0.00');
INSERT INTO "products" VALUES ('3361fa08-51c7-4278-a5cd-3b0f306645cb', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'TRUENO POP LAS DELICIAS /50', true, 0, '0.00');
INSERT INTO "products" VALUES ('853a9ebb-47ec-4a88-951a-ed4be7689423', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'CHOC CRUNCH CARITAS JUMBO 725, DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('c7735ef0-1b30-476d-9637-a5f7d8f88f56', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'CHOC HUEVO SORPRESA’/ 24 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('09275d7f-6bde-492c-ae5d-7a6f44a7a2e0', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'GUMMY BROCHETA 300GR/:30 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('4e948513-29bf-4eb6-8d7b-d2e7fc5c9fe7', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'DELI BOTA NAVIDENA (110G}', true, 0, '0.00');
INSERT INTO "products" VALUES ('34f95e31-a4d6-47f7-a5c5-8598ff8d9bed', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'ROLONCANDY 7.12 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('0ecc0e81-9a9b-4008-9752-ffb159c7b676', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'GALL WAFER STICK TWIN CHOC/FRESA/150+30 PZGRATIS', true, 0, '0.00');
INSERT INTO "products" VALUES ('0ed7c937-6a73-444c-9186-0a752e99e38c', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'TIRALOCA 240 GR/ 24 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('fbc9a837-09b7-426e-8724-6d90a07b481b', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'GUMMY SURTIDO (192GR) / 24 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('718e0359-d626-4b5b-baa5-9b9dc5e0c5c2', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'DETIBACK''PINATERS 1KG 115°2 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('6c01a10d-de9e-4519-8744-536b203929f2', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'ASTRIDIX PACK (2606) /.20 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('ef554c36-ff42-4000-8ee6-f369f846dd50', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'ANIMALOJOS DELICIAS. T3103', true, 0, '0.00');
INSERT INTO "products" VALUES ('5efb4b6d-104d-4216-8140-228aeea48354', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'CHOC HUEVO UNICORNIO /24 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('54857d34-70b1-44de-b82b-ce15ccb7d8d2', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'GALLELIN CHOC JUMBO /10 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('3ffd6af6-9988-48f6-8632-9bea3376ed2e', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'GALL WAFER MINI CHOC /65+15 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('fd7037ba-dfaf-482d-a43f-10dce5499dca', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'TATTOO BLS (4506) /100 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('2c840e03-8afb-44a3-aa59-c3331d7284fd', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'VASO BOLO (68.5GR) / DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('53f67696-9b98-44dd-878f-4afd6fecc746', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'TRUENO, PULPITO/24 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('bfa268a6-113b-400c-88e4-1f5c25e5938c', '7f6833fb-5f0f-4f80-8351-f32563a605c2', 'GELATINA MINI FRUTAS BLS/ 40 DELICIAS', true, 0, '0.00');
INSERT INTO "products" VALUES ('64ba7187-ff34-4ef4-ac1e-6deaeffa8959', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS 4S BOLSA 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('6811322c-5d11-4f7c-b06b-ca5e502187ce', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS 4S SURTIDO DISPLAY 60P', true, 0, '0.00');
INSERT INTO "products" VALUES ('24d1afd4-8883-40a5-8ead-cb05591afaa7', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS GOMITAS TUENI 1.35 KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('63b1b264-1e80-4aa6-9dc5-d6d84e9d594f', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS 4 SURTIDO, VITROLERO, 3002', true, 0, '0.00');
INSERT INTO "products" VALUES ('17d60fd8-752e-4899-a4ec-fa7cf44fa339', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS CHERRY. VITRO 1.5KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('78b7616c-2455-4a46-a3d2-ed0679e13926', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS ICE MINI MORA 450 GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('982ed605-9b4f-4720-9b45-45a63778b7ba', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS ICEE MINI CHERRY SOURS 450 GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('93a53bc0-5ffa-43c2-9821-4bd8df8866ae', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS BLUEBERRY, SOURS. VITRO.1.5', true, 0, '0.00');
INSERT INTO "products" VALUES ('aadde9f4-b689-4f3f-893b-f059dc01733f', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS 4S FRUTAL BOLSA 1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('8524c310-5a7e-4488-812b-3739751e6ccd', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS PAQUETE FIESTA 1.3KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('c0057388-e8f7-4cce-8a60-057479fadd57', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS JELLY BEANS VITRO 1.5KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('2b652800-46f2-495e-ae0b-642a35228bfd', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS MINIATURA2202', true, 0, '0.00');
INSERT INTO "products" VALUES ('62502801-10ec-4374-840c-5eda02ea50ee', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS OSITOS ICEE 454GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('18a3f918-397a-4e86-87d9-e6c017951332', 'aba43d16-6652-4f08-8766-d9138daff311', 'VAQUITA PALETON.TIRA.10P', true, 0, '0.00');
INSERT INTO "products" VALUES ('ac75f3b3-512e-4122-b9ba-3829d82a5fb7', 'aba43d16-6652-4f08-8766-d9138daff311', 'PAL ICEE BISABOR 285GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('60339cc1-a490-4ee4-8844-6da6766125d9', 'aba43d16-6652-4f08-8766-d9138daff311', 'VAQUITA CHICLOSO. CAJETA BLS', true, 0, '0.00');
INSERT INTO "products" VALUES ('0c20a39d-c740-4d66-9e5d-a550f1c103fd', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS CHERRY. BLS.454G', true, 0, '0.00');
INSERT INTO "products" VALUES ('c5da1139-35ee-41d7-868e-87f3a3695f58', 'aba43d16-6652-4f08-8766-d9138daff311', 'VAQUITA CHICLOSO,CAJETA VITRO, 900GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('2779ea18-1873-4625-9a52-cc17db43c777', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS CAR SUAVE ICEE''576 GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('47924fc1-ec74-4e0b-b642-ee6038d4ae9a', 'aba43d16-6652-4f08-8766-d9138daff311', 'VAQUITA MINI_CHICLOSOS 880GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('6a675e4c-d8d6-409d-9b6c-f1fa14742629', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS 4S FRUTAS TROPIC DISPLAYV6OP', true, 0, '0.00');
INSERT INTO "products" VALUES ('1af8a8e0-5214-4ac9-a957-48a9346b758b', 'aba43d16-6652-4f08-8766-d9138daff311', 'VAQUITA CHICLOSOS CAJETA BLS1KG', true, 0, '0.00');
INSERT INTO "products" VALUES ('ecd4fc61-ee78-408b-9b30-71ab3012969d', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS BLUEBERRY.SOURS 454GR', true, 0, '0.00');
INSERT INTO "products" VALUES ('b99dd150-76c3-4caa-8488-0ddb78276421', 'aba43d16-6652-4f08-8766-d9138daff311', 'CANELS PAL FIESTA TIRA-CHICA:20P', true, 0, '0.00');


-- Estructura de la tabla tiendas
DROP TABLE IF EXISTS "tiendas" CASCADE;
CREATE TABLE "tiendas" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "nombre" character varying NOT NULL,
  "direccion" character varying,
  "zona" character varying,
  "latitud" numeric,
  "longitud" numeric,
  "telefono" character varying,
  "email" character varying,
  "notas" text,
  "activo" boolean DEFAULT true,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- Estructura de la tabla visits
DROP TABLE IF EXISTS "visits" CASCADE;
CREATE TABLE "visits" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "store_id" uuid,
  "user_id" uuid NOT NULL,
  "captured_by_username" character varying NOT NULL,
  "checkin_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "checkout_at" timestamp with time zone,
  "checkin_lat" numeric,
  "checkin_lng" numeric,
  "total_score" numeric DEFAULT '0'::numeric,
  "status" character varying DEFAULT 'in_progress'::character varying,
  "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


-- Estructura de la tabla zones
DROP TABLE IF EXISTS "zones" CASCADE;
CREATE TABLE "zones" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "name" character varying NOT NULL,
  "orden" integer DEFAULT 0,
  "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);

-- Datos de la tabla zones
INSERT INTO "zones" VALUES ('b3e5d1cf-bf7e-419f-9037-b02f070bd2bc', 'ZAMORA', 2, Mon Apr 13 2026 14:57:42 GMT-0600 (hora estándar central));
INSERT INTO "zones" VALUES ('2107b482-7d3a-4c82-9377-c9f2427e699e', 'MORELIA', 3, Mon Apr 13 2026 14:57:42 GMT-0600 (hora estándar central));
INSERT INTO "zones" VALUES ('a5f9532e-a836-455c-9c8c-3df906615a5b', 'NACIONAL', 4, Mon Apr 13 2026 14:57:42 GMT-0600 (hora estándar central));
INSERT INTO "zones" VALUES ('f63125c2-025f-4122-89f0-14f3c80ac0ca', 'CANINDO', 5, Mon Apr 13 2026 14:57:42 GMT-0600 (hora estándar central));
INSERT INTO "zones" VALUES ('cc7738f3-5a7b-441c-9258-9d53935f9d38', 'LA PIEDAD VECINAL', 6, Tue May 05 2026 10:35:45 GMT-0600 (hora estándar central));
INSERT INTO "zones" VALUES ('fb136f01-5efe-4c9f-b297-48f06574002c', 'LA PIEDAD RD', 1, Mon Apr 13 2026 14:57:42 GMT-0600 (hora estándar central));


-- Estructura de la tabla combinaciones_validas
DROP TABLE IF EXISTS "combinaciones_validas" CASCADE;
CREATE TABLE "combinaciones_validas" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "config_version_id" uuid NOT NULL,
  "posicion_id" uuid NOT NULL,
  "exhibicion_id" uuid NOT NULL,
  "activo" boolean DEFAULT true,
  "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


-- Estructura de la tabla knex_migrations_products
DROP TABLE IF EXISTS "knex_migrations_products" CASCADE;
CREATE TABLE "knex_migrations_products" (
  "id" integer NOT NULL DEFAULT nextval('knex_migrations_products_id_seq'::regclass),
  "name" character varying NOT NULL,
  "batch" integer,
  "migration_time" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);

-- Datos de la tabla knex_migrations_products
INSERT INTO "knex_migrations_products" VALUES (1, '20260429140000_load_products_from_json_updated.js', 1, Wed Apr 29 2026 15:37:36 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations_products" VALUES (2, '20260429140000_load_products_from_json_updated.js', 1, Thu Apr 30 2026 16:52:14 GMT-0600 (hora estándar central));
INSERT INTO "knex_migrations_products" VALUES (3, '20260430180000_load_json_products_final.js', 1, Thu Apr 30 2026 17:43:56 GMT-0600 (hora estándar central));


-- Estructura de la tabla logistica_unidades
DROP TABLE IF EXISTS "logistica_unidades" CASCADE;
CREATE TABLE "logistica_unidades" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "placa" character varying NOT NULL,
  "modelo" character varying,
  "rendimiento" numeric,
  "capacidad_cajas" integer,
  "capacidad_kg" numeric,
  "estado" character varying DEFAULT 'disponible'::character varying,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "marca" character varying,
  "anio" integer,
  "numero_serie" character varying,
  "numero_motor" character varying,
  "km_actual" numeric DEFAULT 0,
  "rendimiento_kml" numeric,
  "ultimo_mantenimiento" date,
  "proximo_mantenimiento" date,
  "km_mantenimiento" integer DEFAULT 5000,
  "observaciones" text
);

-- Datos de la tabla logistica_unidades
INSERT INTO "logistica_unidades" VALUES ('4e873b01-f968-4082-a86e-b0f07350ac71', 'ABC-123-4', 'INTERNATIONAL', '3.50', 400, '15000.00', 'disponible', Thu Apr 30 2026 15:54:27 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:54:27 GMT-0600 (hora estándar central), NULL, NULL, NULL, NULL, '0.00', NULL, NULL, NULL, 5000, NULL);
INSERT INTO "logistica_unidades" VALUES ('4fe0ffb0-da00-425c-ac91-dd7ad9c76f4e', 'DEF-567-8', 'INTERNATIONAL II', '3.20', 450, '18000.00', 'disponible', Thu Apr 30 2026 15:54:27 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:54:27 GMT-0600 (hora estándar central), NULL, NULL, NULL, NULL, '0.00', NULL, NULL, NULL, 5000, NULL);
INSERT INTO "logistica_unidades" VALUES ('1463e70e-d922-495e-ad1c-ae260fda7740', 'GHI-901-2', 'FREIGHTLINER STD', '4.00', 500, '20000.00', 'disponible', Thu Apr 30 2026 15:54:27 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:54:27 GMT-0600 (hora estándar central), NULL, NULL, NULL, NULL, '0.00', NULL, NULL, NULL, 5000, NULL);
INSERT INTO "logistica_unidades" VALUES ('8f58e3b2-2c82-4975-bb87-85bdb44bbf93', 'JKL-345-6', 'FREIGHTLINER AUTO', '3.80', 480, '19000.00', 'disponible', Thu Apr 30 2026 15:54:27 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:54:27 GMT-0600 (hora estándar central), NULL, NULL, NULL, NULL, '0.00', NULL, NULL, NULL, 5000, NULL);
INSERT INTO "logistica_unidades" VALUES ('3ac5f61e-42a6-4497-82f1-dcbb2cb59f50', 'MNO-789-0', 'HINO 500', '2.50', 300, '12000.00', 'disponible', Thu Apr 30 2026 15:54:27 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:54:27 GMT-0600 (hora estándar central), NULL, NULL, NULL, NULL, '0.00', NULL, NULL, NULL, 5000, NULL);
INSERT INTO "logistica_unidades" VALUES ('d4ab4de2-6ca7-403b-8202-1d7ef643167b', 'PQR-234-5', 'F-350', '8.00', 100, '4000.00', 'disponible', Thu Apr 30 2026 15:54:27 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:54:27 GMT-0600 (hora estándar central), NULL, NULL, NULL, NULL, '0.00', NULL, NULL, NULL, 5000, NULL);
INSERT INTO "logistica_unidades" VALUES ('1a48abd3-81dd-43ba-b365-d94580bd35cf', 'STU-678-9', 'NISSAN', '7.50', 80, '3500.00', 'disponible', Thu Apr 30 2026 15:54:27 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:54:27 GMT-0600 (hora estándar central), NULL, NULL, NULL, NULL, '0.00', NULL, NULL, NULL, 5000, NULL);


-- Estructura de la tabla logistica_colaboradores
DROP TABLE IF EXISTS "logistica_colaboradores" CASCADE;
CREATE TABLE "logistica_colaboradores" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "nombre" character varying NOT NULL,
  "roles" ARRAY NOT NULL,
  "tipo" character varying DEFAULT 'interno'::character varying,
  "estado" character varying DEFAULT 'activo'::character varying,
  "nss" character varying,
  "telefono" character varying,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "user_id" uuid
);

-- Datos de la tabla logistica_colaboradores
INSERT INTO "logistica_colaboradores" VALUES ('01a90069-8ce3-49fb-8c98-2d56054961d8', 'JUAN LEONARDO CAZAREZ NAVARRO', ayudante,cargador,chofer, 'interno', 'activo', '12345678901', '3511234567', Thu Apr 30 2026 15:57:09 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:09 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('86425d56-8a14-44b5-8641-645cdc940534', 'JUAN FRANCISCO GARCÍA LÓPEZ', ayudante,cargador,chofer, 'interno', 'activo', '12345678902', '3511234568', Thu Apr 30 2026 15:57:09 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:09 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('e1bb19c8-aa71-406a-b64f-589998a35727', 'JOSE ANTONIO SALOME CAZAREZ BELMONTE', ayudante,cargador,chofer, 'interno', 'activo', '12345678903', '3511234569', Thu Apr 30 2026 15:57:09 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:09 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('0e27a206-cfd0-4b7f-a8ef-ad77271e1761', 'JOSE MARIA FLORES ARANDA', chofer,ayudante, 'interno', 'activo', '12345678904', '3511234570', Thu Apr 30 2026 15:57:10 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:10 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('045e8db3-6bdb-40af-93a2-1e88699f244a', 'JOSE ANTONIO MENDEZ VILLA', chofer,ayudante, 'interno', 'activo', '12345678905', '3511234571', Thu Apr 30 2026 15:57:10 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:10 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('6abf74a9-a4cc-4640-8b48-7d9de4a37e1e', 'JOSE RAUL GALVAN VILLEGAS', chofer,ayudante, 'interno', 'activo', '12345678906', '3511234572', Thu Apr 30 2026 15:57:10 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:10 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('270f3a10-e1bc-4424-84ef-42c2716d97f0', 'CRISTIAN RIZO HERRERA', chofer,ayudante, 'interno', 'activo', '12345678907', '3511234573', Thu Apr 30 2026 15:57:10 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:10 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('1050379f-4516-45be-a5ee-5d0f492f9426', 'RAFAEL GONZALEZ FARIAS', chofer,ayudante, 'interno', 'activo', '12345678908', '3511234574', Thu Apr 30 2026 15:57:10 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:10 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('d69309bf-088e-451b-b4d3-89de6a1fd5fd', 'CARLOS MIGUEL MENDEZ CAMARENA', chofer,ayudante, 'interno', 'activo', '12345678909', '3511234575', Thu Apr 30 2026 15:57:10 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:10 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('f54aea29-be18-4a02-ab8e-313bf52cca61', 'LUIS FRANCISCO JUAREZ HERRERA', ayudante,cargador,chofer, 'interno', 'activo', '12345678910', '3511234576', Thu Apr 30 2026 15:57:10 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:10 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('f1b528c6-0f3e-4434-80d1-5607dff34aca', 'BRANDON CORONA REA', ayudante,cargador,chofer, 'interno', 'activo', '12345678911', '3511234577', Thu Apr 30 2026 15:57:11 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:11 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('b1581be6-d587-4250-a605-eb15bcac9e28', 'JUAN MAURILIO GUZMAN HERRERA', ayudante,cargador,chofer, 'interno', 'activo', '12345678912', '3511234578', Thu Apr 30 2026 15:57:11 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:11 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('e57cc274-e02b-4382-8e19-daabb63bc2dc', 'JESÚS ARTURO GUTIERREZ AYALA', ayudante,cargador,chofer, 'interno', 'activo', '12345678913', '3511234579', Thu Apr 30 2026 15:57:11 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:11 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('55ff79f2-e903-475c-ba30-3822a3cec375', 'JOSE ALBERTO MORENO VILLA', ayudante,cargador,chofer, 'interno', 'activo', '12345678914', '3511234580', Thu Apr 30 2026 15:57:11 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:11 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('aad1e862-4ae5-4aed-a27f-e12dbcd97ba6', 'RODOLFO LANDEROS MONTEJANO', ayudante,cargador,chofer, 'interno', 'activo', '12345678915', '3511234581', Thu Apr 30 2026 15:57:11 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:11 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('83d5f04c-e006-4cab-9d98-9a2873d3b007', 'MIRIAM GABRIELA MAYA LICEA', ayudante,cargador,chofer, 'interno', 'activo', '12345678916', '3511234582', Thu Apr 30 2026 15:57:11 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:11 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('21bd1a95-1f54-4cb7-8ceb-5a53b1632bf4', 'MARIA ESTEFANIA MENDEZ GARIBALDI', ayudante,cargador,chofer, 'interno', 'activo', '12345678917', '3511234583', Thu Apr 30 2026 15:57:11 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:11 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('be8f2a88-e4fc-4249-a01c-13cf3f16e180', 'ALFREDO CASTRO BERBER', ayudante,cargador,chofer, 'interno', 'activo', '12345678918', '3511234584', Thu Apr 30 2026 15:57:12 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:12 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('d0d84dae-378d-4dc2-b470-beb63f8241fb', 'DIEGO TORIBIO RODRIGUEZ ANGUIANO', ayudante,cargador,chofer, 'interno', 'activo', '12345678919', '3511234585', Thu Apr 30 2026 15:57:12 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:12 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('b814908f-c66b-44aa-8129-975c2150cde4', 'CARLOS ALBERTO AGUILAR ENRIQUEZ', ayudante,cargador,chofer, 'interno', 'activo', '12345678920', '3511234586', Thu Apr 30 2026 15:57:12 GMT-0600 (hora estándar central), Thu Apr 30 2026 15:57:12 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('53220c3b-13cd-42b1-9734-a2bd53fb6d25', 'JUAN PEREZ GARCIA', chofer, 'interno', 'activo', '12345678901', '3511234567', Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('4de3f214-4b65-4950-b251-3876d7a4335d', 'PEDRO LOPEZ MENDOZA', chofer, 'interno', 'activo', '12345678902', '3511234568', Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('fca3f2e6-14f7-4b03-b796-24f26cd6aef2', 'CARLOS SANCHEZ RODRIGUEZ', chofer, 'interno', 'activo', '12345678903', '3511234569', Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('95f42230-7bb4-40ef-a1e2-8e0c020a1101', 'MIGUEL ANGEL HERNANDEZ', ayudante, 'interno', 'activo', '12345678904', '3511234570', Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('4f6c2b65-c090-462f-99c1-03c01b110e68', 'JOSE LUIS GONZALEZ', ayudante, 'interno', 'activo', '12345678905', '3511234571', Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('a38d34c5-a586-42bf-83fe-77a827808075', 'ANTONIO RAMIREZ FLORES', ayudante,cargador, 'interno', 'activo', '12345678906', '3511234572', Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('9fa53521-d46d-4233-b47d-cb26f94ea323', 'FRANCISCO JIMENEZ CRUZ', cargador, 'interno', 'activo', '12345678907', '3511234573', Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), NULL);
INSERT INTO "logistica_colaboradores" VALUES ('0909deb1-9c1f-4028-87c2-d49447719dd9', 'RAUL MORALES TORRES', cargador, 'interno', 'activo', '12345678908', '3511234574', Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), Mon May 04 2026 11:23:47 GMT-0600 (hora estándar central), NULL);


-- Estructura de la tabla logistica_combustible_transacciones
DROP TABLE IF EXISTS "logistica_combustible_transacciones" CASCADE;
CREATE TABLE "logistica_combustible_transacciones" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "unidad_id" uuid,
  "embarque_id" uuid,
  "colaborador_id" uuid,
  "fecha" date NOT NULL,
  "hora" time without time zone NOT NULL,
  "tipo" text NOT NULL,
  "litros" numeric NOT NULL,
  "costo_por_litro" numeric DEFAULT '0'::numeric,
  "total" numeric DEFAULT '0'::numeric,
  "km_inicial" integer DEFAULT 0,
  "km_final" integer DEFAULT 0,
  "rendimiento_real" numeric DEFAULT '0'::numeric,
  "ubicacion" character varying DEFAULT 'Base'::character varying,
  "metodo_registro" text DEFAULT 'manual'::text,
  "registrado_por" character varying NOT NULL,
  "observaciones" text,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "created_by" uuid,
  "updated_by" uuid
);


-- Estructura de la tabla users
DROP TABLE IF EXISTS "users" CASCADE;
CREATE TABLE "users" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "username" character varying NOT NULL,
  "password_hash" character varying NOT NULL,
  "nombre" character varying,
  "zona" character varying,
  "role_name" character varying,
  "activo" boolean DEFAULT true,
  "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  "supervisor_id" uuid,
  "zona_id" uuid,
  "email" character varying,
  "ultimo_acceso" timestamp with time zone,
  "roles" ARRAY DEFAULT '{}'::text[]
);

-- Datos de la tabla users
INSERT INTO "users" VALUES ('f8d8e20f-09a1-4a49-aa7f-bc058425de4a', 'cesar_plascencia', '$2b$10$wK7.zMvXCVu03e./1wvhk.3O9ngx4YGhbApMqphMyC1qiDpsusyNK', 'CESAR RICARDO PLASCENCIA RAZO', 'MORELIA', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), '504b1d53-a6ee-4eaf-a0ef-15b4ae9a2deb', '2107b482-7d3a-4c82-9377-c9f2427e699e', NULL, NULL, );
INSERT INTO "users" VALUES ('b1606c48-91d1-4cbb-a417-dcf1794e0097', 'jose_zavala', '$2b$10$wK7.zMvXCVu03e./1wvhk.3O9ngx4YGhbApMqphMyC1qiDpsusyNK', 'JOSE DE JESUS ZAVALA VILLALOBOS', 'ZAMORA', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), 'f5ca24b4-4c08-473e-8991-c8a5377a26ed', 'b3e5d1cf-bf7e-419f-9037-b02f070bd2bc', NULL, NULL, );
INSERT INTO "users" VALUES ('155e4b4a-8501-4389-8199-cb3df6dc1956', 'jose_munoz', '$2b$10$wK7.zMvXCVu03e./1wvhk.3O9ngx4YGhbApMqphMyC1qiDpsusyNK', 'JOSE LUIS MUÑOZ MOTA', 'ZAMORA', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), 'f5ca24b4-4c08-473e-8991-c8a5377a26ed', '2107b482-7d3a-4c82-9377-c9f2427e699e', NULL, NULL, );
INSERT INTO "users" VALUES ('ba21e96b-0f8d-4188-a298-1b43fcabfc8c', 'daniel_rojano', '$2b$10$wK7.zMvXCVu03e./1wvhk.3O9ngx4YGhbApMqphMyC1qiDpsusyNK', 'DANIEL ROJAÑO PADILLA', 'ZAMORA', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), 'f5ca24b4-4c08-473e-8991-c8a5377a26ed', '2107b482-7d3a-4c82-9377-c9f2427e699e', NULL, NULL, );
INSERT INTO "users" VALUES ('8d4b7938-b6e9-424b-b37a-07648cae5107', 'victor_zalapa', '$2b$10$wK7.zMvXCVu03e./1wvhk.3O9ngx4YGhbApMqphMyC1qiDpsusyNK', 'VICTOR MANUEL ZALAPA BARRIGA', 'ZAMORA', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), 'f5ca24b4-4c08-473e-8991-c8a5377a26ed', 'b3e5d1cf-bf7e-419f-9037-b02f070bd2bc', NULL, NULL, );
INSERT INTO "users" VALUES ('64400165-08be-4487-9ec2-2801006ad410', 'jose_garcia', '$2b$10$60Kn28MsTkCi/sTfPwcMQejQwNiT449A1tikLyHJTAUGMz1YunOMa', 'JOSE DE JESUS GARCIA TORRES', 'LA PIEDAD', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'fb136f01-5efe-4c9f-b297-48f06574002c', NULL, NULL, );
INSERT INTO "users" VALUES ('413e02ec-0691-464c-ad11-d3e5cfe2113f', 'joaquin_hurtado', '$2b$10$Uv5GtcGnEfctT1Z8.Z82uONNelhPl/2r.qH92wlef.aSGeruxZ9/i', 'JOAQUIN HURTADO OROZCO', 'LA PIEDAD', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'fb136f01-5efe-4c9f-b297-48f06574002c', NULL, NULL, );
INSERT INTO "users" VALUES ('bc27798d-1cc9-426b-bb51-87707efe221a', 'joseph_guerrero', '$2b$10$wK7.zMvXCVu03e./1wvhk.3O9ngx4YGhbApMqphMyC1qiDpsusyNK', 'JOSEPH AGUSTIN GUERRERO PEREZ', 'MORELIA', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), '504b1d53-a6ee-4eaf-a0ef-15b4ae9a2deb', '2107b482-7d3a-4c82-9377-c9f2427e699e', NULL, NULL, );
INSERT INTO "users" VALUES ('33f1b85d-ec36-42f5-a090-d5962483dffc', 'bruno_lopez', '$2b$10$PGtl9czQSnhC1KlQE96WaejDdxQfduqYK6tew8Se4xtDmr5fe0yJW', 'BRUNO LOPEZ', NULL, 'colaborador', true, Sat May 02 2026 16:23:00 GMT-0600 (hora estándar central), '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'a5f9532e-a836-455c-9c8c-3df906615a5b', NULL, NULL, );
INSERT INTO "users" VALUES ('e4a4ce8d-5422-40ff-bf08-56b87415e840', 'cristian_hidalgo', '$2b$10$.X8uVjx0uRTiVb1yHEHsIu5AwgyV5LiL28mNQWQiOg0XGxsF6fYAe', 'CRISTIAN ALFONSO LOPEZ HIDALGO', NULL, 'jefe_de_marketing', true, Mon May 04 2026 17:56:32 GMT-0600 (hora estándar central), NULL, 'fb136f01-5efe-4c9f-b297-48f06574002c', NULL, NULL, );
INSERT INTO "users" VALUES ('e5c72eb4-c94a-485c-b8d4-fedbb7be754e', 'userp', '$2b$10$JDpDlKLQ7nQQiwd/NDIcPu6ddcbvpTrmWixW0NKNCHaPZqHtP1I5G', 'USUARIO PRUEBA', NULL, 'colaborador', true, Tue May 05 2026 10:37:49 GMT-0600 (hora estándar central), '7b419674-6559-45be-a5a3-9f066669fa10', 'cc7738f3-5a7b-441c-9258-9d53935f9d38', NULL, NULL, );
INSERT INTO "users" VALUES ('f1fccc8b-976b-48df-9184-39cda22f229c', 'superoot', '$2b$10$R0pQyz8YP4WQvvsFsQEneeLyOCZvIhE88OBQg261LPHqCJENpg.ma', NULL, 'NACIONAL', 'superadmin', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), NULL, NULL, NULL, Tue May 05 2026 09:16:06 GMT-0600 (hora estándar central), );
INSERT INTO "users" VALUES ('7b419674-6559-45be-a5a3-9f066669fa10', 'Paty.chavarria', '$2b$10$lMVpelF8hlEg/TnpGaaOcuVM6LFrPiGq/9nLPA.NubNgkVDUp0eea', 'Patricia Chavarria', NULL, 'supervisor_ventas', true, Tue May 05 2026 09:20:02 GMT-0600 (hora estándar central), NULL, 'cc7738f3-5a7b-441c-9258-9d53935f9d38', NULL, NULL, );
INSERT INTO "users" VALUES ('130f5efe-8d8a-42e0-b658-964256347bea', 'juan_lopez', '$2b$10$y22x5qjUoC7drW/Nlumi5uPaSB774JEd3y2ggWvp/p7Rf6WD6AXeO', 'JUAN LOPEZ', NULL, 'colaborador', true, Sat May 02 2026 16:23:39 GMT-0600 (hora estándar central), '7b419674-6559-45be-a5a3-9f066669fa10', 'cc7738f3-5a7b-441c-9258-9d53935f9d38', NULL, NULL, );
INSERT INTO "users" VALUES ('7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'angel_vazquez', '$2b$10$rigmhCsQDPsIc62wiwBZYegAJtetJyoeUNbPwYG9BQCbb33l39nze', 'ANGEL ALBERTO VAZQUEZ MEJIA', 'LA PIEDAD', 'supervisor_ventas', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), NULL, 'fb136f01-5efe-4c9f-b297-48f06574002c', NULL, NULL, );
INSERT INTO "users" VALUES ('a48104a5-d4e6-4fb9-8eb4-661a93f51ff2', 'victor_mata', '$2b$10$/RlgusCzzaHq7wqZIKMYw.9bEWyvdanzpDZ4LhdrWIK8KxCsxv78e', 'VICTOR ALFONSO MATA VILLA', 'LA PIEDAD', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'fb136f01-5efe-4c9f-b297-48f06574002c', NULL, NULL, );
INSERT INTO "users" VALUES ('f5ca24b4-4c08-473e-8991-c8a5377a26ed', 'francisco_martinez', '$2b$10$wK7.zMvXCVu03e./1wvhk.3O9ngx4YGhbApMqphMyC1qiDpsusyNK', 'FRANCISCO DE JESUS MARTINEZ RAZO', 'ZAMORA', 'supervisor_ventas', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), NULL, 'b3e5d1cf-bf7e-419f-9037-b02f070bd2bc', NULL, NULL, );
INSERT INTO "users" VALUES ('504b1d53-a6ee-4eaf-a0ef-15b4ae9a2deb', 'jose_herrera', '$2b$10$jBVB1aQ2FJiycfF/D5mqHerfG4F26hsvsdHSyJAPmplb7xvMLmeUy', 'JOSE MANUEL HERRERA MARTINEZ', 'MORELIA', 'supervisor_ventas', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), NULL, '2107b482-7d3a-4c82-9377-c9f2427e699e', NULL, NULL, );
INSERT INTO "users" VALUES ('9c02c60a-be89-4313-9a9a-f863bd8849c1', 'eduardo_miranda', '$2b$10$wK7.zMvXCVu03e./1wvhk.3O9ngx4YGhbApMqphMyC1qiDpsusyNK', 'EDUARDO MIRANDA ROMERO', 'MORELIA', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), '504b1d53-a6ee-4eaf-a0ef-15b4ae9a2deb', '2107b482-7d3a-4c82-9377-c9f2427e699e', NULL, NULL, );
INSERT INTO "users" VALUES ('eec2e856-f5ff-41f9-8ed0-56f00bf12203', 'enrique_herrera', '$2b$10$wK7.zMvXCVu03e./1wvhk.3O9ngx4YGhbApMqphMyC1qiDpsusyNK', 'ENRIQUE HERRERA SANCHEZ', 'MORELIA', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), '504b1d53-a6ee-4eaf-a0ef-15b4ae9a2deb', '2107b482-7d3a-4c82-9377-c9f2427e699e', NULL, NULL, );
INSERT INTO "users" VALUES ('f53c560a-0a90-4b5d-bab1-167d0d6d5b55', 'guillermo_hernandez', '$2b$10$wK7.zMvXCVu03e./1wvhk.3O9ngx4YGhbApMqphMyC1qiDpsusyNK', 'GUILLERMO HERNANDEZ ALMANZA', 'MORELIA', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), '504b1d53-a6ee-4eaf-a0ef-15b4ae9a2deb', '2107b482-7d3a-4c82-9377-c9f2427e699e', NULL, NULL, );
INSERT INTO "users" VALUES ('f6848024-67cb-4c30-b1a8-2c3d779605d8', 'maria_valadez', '$2b$10$kJOSnV5SMrc3LVNbOVzg.u8oFnvYVeiTPIDw6pdBJexlE2AV2mHhG', 'MARIA ELENA VALADEZ LIMON', 'LA PIEDAD', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'fb136f01-5efe-4c9f-b297-48f06574002c', NULL, NULL, );
INSERT INTO "users" VALUES ('ebf94b7d-06f1-4e4c-82f0-7ae14cae3d59', 'mariano_martinez', '$2b$10$wK7.zMvXCVu03e./1wvhk.3O9ngx4YGhbApMqphMyC1qiDpsusyNK', 'MARIANO MARTINEZ PATLAN', 'LA PIEDAD', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'fb136f01-5efe-4c9f-b297-48f06574002c', NULL, NULL, );
INSERT INTO "users" VALUES ('42d13dd6-ca03-4c94-80f2-00d0043d83d4', 'victor_garcia', '$2b$10$IvhRtKCpGuSmPg/2uJD5zuKWTqGMzlat8ZvFwZb0d9WQIJStsOnkC', 'VICTOR HUGO GARCIA HURTADO', 'LA PIEDAD', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'fb136f01-5efe-4c9f-b297-48f06574002c', NULL, NULL, );
INSERT INTO "users" VALUES ('53903fa5-edba-49cf-869a-7e3b75eedd24', 'victorino_urbano', '$2b$10$OGn3K1GkvwxXNHeq9ErmKuIFPyu0AsDQL2StpEgsSlfavY52j4jE2', 'VICTORINO URBANO OLIVARES', 'LA PIEDAD', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'fb136f01-5efe-4c9f-b297-48f06574002c', NULL, NULL, );
INSERT INTO "users" VALUES ('d024eba5-e837-42b4-8316-744b15bb2378', 'maria_rocha', '$2b$10$tfejSjTV4vz/0m9nleKvfOnFJU/eXn0LvDWQNzsRvVyI5ylok/vr.', 'MARIA TERESA ROCHA FUENTES', 'LA PIEDAD', 'colaborador', true, Thu Apr 02 2026 14:10:42 GMT-0600 (hora estándar central), '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'fb136f01-5efe-4c9f-b297-48f06574002c', NULL, NULL, );
INSERT INTO "users" VALUES ('3d463ff5-4abd-43d2-b7a5-8590e9dd4805', 'Superuser', '$2b$10$CxJu15p9mF5BA7JGxlsVTewgh8p5fV4Kl8dqOeQEKuBM9bMB0iTQe', 'Luis Francisco López Gutierrez', NULL, 'superadmin', true, Sat Apr 18 2026 14:49:37 GMT-0600 (hora estándar central), NULL, 'a5f9532e-a836-455c-9c8c-3df906615a5b', NULL, NULL, );


-- Estructura de la tabla logistica_catalogo_destinos
DROP TABLE IF EXISTS "logistica_catalogo_destinos" CASCADE;
CREATE TABLE "logistica_catalogo_destinos" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "nombre" character varying NOT NULL,
  "comision_chofer" numeric DEFAULT '0'::numeric,
  "comision_ayudante" numeric DEFAULT '0'::numeric,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "comision_repartidor" numeric DEFAULT '0'::numeric,
  "km" numeric
);

-- Datos de la tabla logistica_catalogo_destinos
INSERT INTO "logistica_catalogo_destinos" VALUES ('2cf59d3a-3544-4d7d-9880-017498814341', 'AGUASCALIENTES', '250.00', '91.20', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '130.40', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('0778301a-f237-44cf-bc6f-6bf091967d29', 'APATZINGAN', '129.00', '91.20', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '130.40', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('8b621068-c8f5-4e0c-a93b-8e0b4754719d', 'ARANDAS MATUTINO', '95.00', '67.16', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '76.00', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('a228337d-900e-4853-8a5b-77237471c5a4', 'ARANDAS VESPERTINO', '61.92', '36.48', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '48.90', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('5c15488a-1d2e-4d6e-a904-ef2324a16793', 'ARIO DE ROSALES', '129.00', '91.20', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '130.40', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('76462f3b-2721-4842-99fd-e292106d7864', 'ATOTONILCO', '103.20', '60.80', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '88.02', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('1aff0403-5940-4ce7-aa9b-afd2326f842a', 'CIUDAD HIDALGO', '129.00', '97.28', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '130.40', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('f4535443-2d5c-4654-8ffc-2d83776e10eb', 'COTIJA', '103.20', '66.88', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '88.02', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('60db414d-0e3d-4a8b-8674-fda19908d53f', 'DEGOLLADO', '51.60', '30.40', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '48.90', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('5646f687-815e-41a8-9bc6-4514985c708b', 'ECUANDUREO', '61.92', '36.48', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '48.90', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('5b0ac2bf-488b-4af9-ba6f-1ba0a074cebc', 'GUADALAJARA', '180.00', '127.25', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '127.25', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('c4f2de65-7415-44c3-bd49-c9f6dba76d56', 'GUANAJUATO', '113.52', '76.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '97.80', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('cef67bd7-3ec1-42c5-bce7-bb61965b0ca6', 'JACONA', '77.40', '51.68', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '71.72', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('106420eb-2b5f-4814-9c43-081a0670073a', 'JIQUILPAN', '98.04', '57.76', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '78.24', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('41f78ec8-3fee-4c4b-92ad-04ffd0661885', 'LA BARCA', '77.40', '45.60', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '65.20', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('c3c9abe2-d773-410c-b34a-879491ec787f', 'LEON', '113.52', '76.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '97.80', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('e1edfc70-0f46-44f2-bd41-4988541a496f', 'LOS REYES', '103.20', '76.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '114.10', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('e3932dc1-dea1-4d86-92c9-13fb9b20e797', 'MORELIA', '180.00', '111.40', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '119.89', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('394d892c-8208-4339-afe2-cac3e02b748d', 'MOROLEON', '92.88', '60.80', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '81.50', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('80c15f86-2e33-4288-b456-99df81047969', 'NUEVA ITALIA', '129.00', '91.20', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '130.40', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('b9335eaa-25ac-4433-8207-a19bc823d4be', 'PATZCUARO', '103.20', '63.84', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '84.76', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('1ba28935-a4ee-4ed6-8755-bc586227450d', 'PENJAMILLO', '77.40', '51.68', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '71.72', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('810e17db-c766-486c-a5e7-fe173ceb1206', 'PENJAMO', '51.60', '36.48', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '48.90', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('cc09b848-aba1-4100-b819-a7b1f12fa939', 'PERIBAN', '103.20', '76.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '114.10', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('3bb0b8e5-ad6c-40dd-adf1-c54c8437c890', 'PURUANDIRO', '103.20', '66.88', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '88.02', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('ffa10ba9-3ebd-437c-8aaf-39bb10fee68b', 'QUERENDARO', '129.00', '91.20', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '130.40', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('5957ec9f-d768-4511-9164-4724bfe51c13', 'QUEDAR A DORMIR / NOCHE', '180.00', '106.04', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '113.72', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('7ebcb78b-600c-49ea-8ccb-d2a1485f7222', 'TANGAMANDAPIO', '103.20', '63.84', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '84.76', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('835c99fb-dcb4-4cbb-9d82-1ec301d5992e', 'SAHUAYO', '92.88', '51.68', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '71.72', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('d7266835-b986-46ea-9782-022c4b83a7e3', 'VIAJE EN DOMINGO', '200.00', '117.82', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '126.35', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('adeb2e6b-2c7e-44a7-a242-aed9bf2aca82', 'SAN JOSE', '51.60', '30.40', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '39.12', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('a6eafc39-8598-4400-892e-067510faab31', 'SANTA ANA M', '87.72', '54.72', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '71.72', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('c61c74ad-3ee4-4244-9821-cd6737c5271b', 'SUCURSAL MATUTINO', '51.60', '30.40', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '48.90', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('0901cd2c-fe0e-4682-9c39-a6e93c58acff', 'SEGUNDO VIAJE SUCURSAL', '25.80', '0.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '16.30', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('cb370ab0-e6dc-4bec-afd0-a8115a80734b', 'TANGANCICUARO', '103.20', '60.80', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '88.02', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('465ede99-2d5b-41ab-9c44-cf7946311eb8', 'TANHUATO', '61.92', '36.48', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '48.90', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('17336423-3ede-4cb0-9698-0e9705dbaeca', 'URUAPAN', '113.52', '76.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '97.80', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('428b9113-a29a-4fed-a3f1-b621106b6450', 'VALLE DE SANTIAGO', '77.40', '45.60', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '65.20', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('f581a845-6ae8-461e-b4b5-7685e80523ff', 'VENUSTIANO CARRANZA', '77.40', '48.64', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '65.20', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('1d029000-7bcb-43ca-8fbb-1a86775d15d6', 'YURECUARO', '61.92', '36.48', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '48.90', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('8489e8e2-2c44-4b1a-8727-75905d81815c', 'YURIDIA', '92.88', '60.80', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '81.00', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('305212ed-3a82-4c97-b2a3-cd347f885da0', 'ZACAPU', '87.72', '54.72', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '71.72', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('6c6e2ad1-fa37-4601-ac77-3bcbea3adcfc', 'ZAMORA', '120.00', '100.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '100.00', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('b0b28f37-c48e-47ad-b70f-7bb80713e529', 'ZINAPECUARO', '129.00', '97.28', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '130.40', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('df084e40-0d49-4e40-89fb-d04291121ecb', 'ZITACUARO', '129.00', '97.28', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '130.40', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('53217b46-dd65-4160-90a9-a171ce7c2b0b', 'CARGA CAMION MEDIANO', '30.00', '30.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('875cacfb-b3ba-45a3-8c85-c1729f8aeea7', 'CARGA CAMION GRANDE', '50.00', '50.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '50.00', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('c6c60be5-0029-491b-8653-f3a68158c860', 'CARGA NISSAN', '30.00', '0.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('780794fa-15b2-4615-a56e-e930e12ab03e', 'COJUMATLAN DE REGULES', '94.12', '65.88', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '126.70');
INSERT INTO "logistica_catalogo_destinos" VALUES ('e7f77d75-b3c2-4272-9e56-6a31965dc4b8', 'CELAYA', '126.47', '88.53', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '145.90');
INSERT INTO "logistica_catalogo_destinos" VALUES ('a797df1b-ab29-4c5d-9016-59ac8e8788a7', 'COMONFORT', '141.64', '99.15', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '163.40');
INSERT INTO "logistica_catalogo_destinos" VALUES ('5a19bc80-275b-4eb2-8b8b-5f6ae01cd4f4', 'CUERAMARO', '58.68', '41.08', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '67.70');
INSERT INTO "logistica_catalogo_destinos" VALUES ('6d71be59-77b6-4719-8ae0-c1aeb8f52102', 'DOLORES HIDALGO', '169.03', '118.32', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '195.00');
INSERT INTO "logistica_catalogo_destinos" VALUES ('6c1e4d14-afc6-4fb3-8598-7e98afcffd48', 'IRAPUATO', '74.63', '52.24', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '86.10');
INSERT INTO "logistica_catalogo_destinos" VALUES ('0e9dcf4f-c823-4e39-8f9a-4ed6af75bcfc', 'ROMITA GTO', '90.23', '63.16', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '104.10');
INSERT INTO "logistica_catalogo_destinos" VALUES ('5ddfe0b0-4c28-4420-a735-7c0fd3b294dc', 'SAN FRANCISCO / PURISIMA DEL RINCON', '73.68', '51.58', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '85.00');
INSERT INTO "logistica_catalogo_destinos" VALUES ('3ee03d02-55ae-431f-9575-e6ac3f48752e', 'SAN MIGUEL DE ALLENDE', '162.96', '114.07', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '188.00');
INSERT INTO "logistica_catalogo_destinos" VALUES ('3823d170-2e39-4646-96a5-60a05c890809', 'AMECA JALISCO', '267.25', '187.07', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '252.40');
INSERT INTO "logistica_catalogo_destinos" VALUES ('9cf96131-072d-44b6-9809-a7ada5330c56', 'AUTLAN DE NAVARRO JAL', '486.46', '340.52', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '358.00');
INSERT INTO "logistica_catalogo_destinos" VALUES ('9ff21fa8-66eb-43e5-9034-5efea7b1372a', 'CD. GUZMAN', '311.19', '217.83', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '293.90');
INSERT INTO "logistica_catalogo_destinos" VALUES ('6c5f699b-230b-401c-aac3-3bae96148f37', 'ENCARNACION DE DIAZ JAL', '182.44', '127.70', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '172.30');
INSERT INTO "logistica_catalogo_destinos" VALUES ('040e3535-22ba-4b98-8479-02155b450f95', 'SAN GABRIEL JAL', '437.68', '306.37', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '322.10');
INSERT INTO "logistica_catalogo_destinos" VALUES ('010e19da-cafe-4be4-a476-7576b837c676', 'SAN JUAN DE LOS LAGOS JAL', '180.95', '126.67', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '170.90');
INSERT INTO "logistica_catalogo_destinos" VALUES ('88965a61-60d8-4532-82d9-5c019f5ffcf4', 'SAN MIGUEL EL ALTO JAL', '146.96', '102.88', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '138.80');
INSERT INTO "logistica_catalogo_destinos" VALUES ('062dfd05-c2e0-44d9-a65c-c60a97d4caf7', 'TEPATITLAN', '149.61', '104.73', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '141.30');
INSERT INTO "logistica_catalogo_destinos" VALUES ('a1e12f11-466e-4348-8641-65d0f3df942d', 'TESISTAN', '192.28', '134.60', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '181.60');
INSERT INTO "logistica_catalogo_destinos" VALUES ('0001c5f2-15e6-4c5a-b646-f1a917911eaf', 'UNION DE SAN ANTONIO', '120.71', '84.49', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '114.00');
INSERT INTO "logistica_catalogo_destinos" VALUES ('eae8c3f3-5db6-4ef2-944e-fe138af98d25', 'YAHUALICA', '209.54', '146.68', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '197.90');
INSERT INTO "logistica_catalogo_destinos" VALUES ('947fd0d3-444d-4ba4-b932-108eb7283633', 'ZACOALCO DE TORRES', '247.55', '173.29', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '233.80');
INSERT INTO "logistica_catalogo_destinos" VALUES ('3e93dbdf-9c50-45b9-bc80-53122405d4ba', 'ZAPOPAN', '186.99', '130.89', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '176.60');
INSERT INTO "logistica_catalogo_destinos" VALUES ('afefe5dd-91a9-406a-8928-6cd2b86316d7', 'ACAMBAY EDO MEX', '367.96', '257.57', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '291.10');
INSERT INTO "logistica_catalogo_destinos" VALUES ('5d305e93-7522-4dad-be02-72f0e7f36c51', 'ATIZAPAN / ECATEPEC', '478.69', '335.08', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '378.70');
INSERT INTO "logistica_catalogo_destinos" VALUES ('9800178f-ae9a-4235-9565-53c8799110c3', 'TEOLOYUCAN', '450.00', '315.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '356.00');
INSERT INTO "logistica_catalogo_destinos" VALUES ('a6afd041-29ca-4f82-b122-e7d26fb9b48e', 'JILOTEPEC / CHAPA DE MOTA', '399.68', '279.78', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '316.20');
INSERT INTO "logistica_catalogo_destinos" VALUES ('6854dbfa-d418-4011-a78d-67203904b058', 'TULTITLAN', '464.40', '325.08', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '367.40');
INSERT INTO "logistica_catalogo_destinos" VALUES ('414fa558-14c0-4b55-9a0a-85de287ccb99', 'CHALCO', '547.08', '382.95', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '432.80');
INSERT INTO "logistica_catalogo_destinos" VALUES ('3cebfc97-ccb4-4995-842d-47b3073c37f2', 'NEZAHUALCOYOTL', '507.13', '354.99', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '401.20');
INSERT INTO "logistica_catalogo_destinos" VALUES ('5d9af71c-f80f-43a7-a936-227803fdce77', 'APAXCO 10 TON', '200.00', '140.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('36b3d87a-f79e-4efa-87ac-814dd67824c9', 'APAXCO 15 TON', '300.00', '210.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('14d91d83-7035-405e-8909-845504c16e38', 'APAXCO TON EXTRA', '20.00', '14.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('665fc2a3-145e-4bef-b91f-4a6d04b22e9c', 'TEXCOCO', '500.00', '350.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('a1f98935-2636-4adf-bad4-630af19e8ce1', 'CUAUTITLAN IZCALLI', '450.00', '315.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('1c8fc85c-d5c1-4a3a-abfd-da04e9ac4964', 'CHICHIMEQUILLAS QRO', '226.10', '158.27', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '226.10');
INSERT INTO "logistica_catalogo_destinos" VALUES ('9c278545-d021-40b5-988a-ca4207faf783', 'QUERETARO', '189.20', '132.44', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '189.20');
INSERT INTO "logistica_catalogo_destinos" VALUES ('791ff1b5-e60d-4769-b3d2-ef35d50d2e64', 'BUENAVISTA QUERETARO', '217.00', '151.90', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '217.00');
INSERT INTO "logistica_catalogo_destinos" VALUES ('da2c50c6-2f89-4645-921b-d32af6dd8f0b', 'IZTAPALAPA 1', '400.00', '280.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('b7255c7b-e9f2-4e16-b3d5-415400c87892', 'IZTAPALAPA 2', '500.00', '350.00', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', NULL);
INSERT INTO "logistica_catalogo_destinos" VALUES ('9ebe7f16-0fb7-4ee3-9bfa-de5ca93d0641', 'SAN LUIS POTOSI', '366.82', '256.77', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '300.80');
INSERT INTO "logistica_catalogo_destinos" VALUES ('d75bc4e1-19f0-4ca7-b5dd-9a5f83d9dbff', 'VILLA DE REYES / BLEDOS SLP', '298.77', '209.14', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '245.00');
INSERT INTO "logistica_catalogo_destinos" VALUES ('5fce57de-e738-472f-95c4-ed5750c49a74', 'QUIROGA', '143.39', '100.37', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '141.00');
INSERT INTO "logistica_catalogo_destinos" VALUES ('b18199a6-e008-4725-84d9-d73f3986a435', 'JUVENTINO ROSAS', '114.59', '80.21', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '132.20');
INSERT INTO "logistica_catalogo_destinos" VALUES ('da793120-1759-4936-88bf-3494fd498145', 'IXMIQUILPAN HGO', '430.53', '301.37', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '340.60');
INSERT INTO "logistica_catalogo_destinos" VALUES ('118446a3-b622-4652-8e1c-237d020bdf8e', 'NOCHISTLAN ZACATECAS', '221.82', '155.28', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '209.50');
INSERT INTO "logistica_catalogo_destinos" VALUES ('bf6c1774-cdb4-49b5-b326-56dd550019d9', 'TLALTENANGO ZACATECAS', '466.08', '326.25', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '343.00');
INSERT INTO "logistica_catalogo_destinos" VALUES ('cc54cb6f-e5d6-4e0b-b302-650b6de555cf', 'JALPA ZACATECAS', '440.26', '308.18', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '324.00');
INSERT INTO "logistica_catalogo_destinos" VALUES ('43eb73d9-2dfd-4bab-ae30-b493f27e25fa', 'GUADALAJARA - LERMA EDO MEX', '619.38', '433.57', Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), Tue May 05 2026 10:42:05 GMT-0600 (hora estándar central), '0.00', '490.00');


-- Estructura de la tabla logistica_checklists
DROP TABLE IF EXISTS "logistica_checklists" CASCADE;
CREATE TABLE "logistica_checklists" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "embarque_id" uuid,
  "tipo" character varying NOT NULL,
  "items" jsonb,
  "completado" boolean DEFAULT false,
  "fecha_creacion" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  "fecha_completado" timestamp with time zone,
  "creado_por" uuid,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "fecha_hora_completado" timestamp with time zone,
  "chofer_id" uuid,
  "respuestas" jsonb
);


-- Estructura de la tabla sync_logs
DROP TABLE IF EXISTS "sync_logs" CASCADE;
CREATE TABLE "sync_logs" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "visita_id" uuid,
  "sync_uuid" uuid NOT NULL,
  "user_id" uuid,
  "estado" text NOT NULL,
  "detalles" jsonb,
  "fecha" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);

-- Datos de la tabla sync_logs
INSERT INTO "sync_logs" VALUES ('fca75e10-6065-47d1-8bed-0d3b121c97b9', NULL, 'd4452fa4-e980-4df6-b613-7e859fa6acaa', 'f1fccc8b-976b-48df-9184-39cda22f229c', 'error', [object Object], Thu Apr 16 2026 12:25:34 GMT-0600 (hora estándar central));


-- Estructura de la tabla daily_assignments
DROP TABLE IF EXISTS "daily_assignments" CASCADE;
CREATE TABLE "daily_assignments" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "user_id" uuid NOT NULL,
  "route_id" uuid NOT NULL,
  "assigned_by" uuid,
  "status" character varying DEFAULT 'pendiente'::character varying,
  "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  "day_of_week" integer NOT NULL
);

-- Datos de la tabla daily_assignments
INSERT INTO "daily_assignments" VALUES ('9539b459-18f1-4aae-bdff-bff897757ee9', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'fb02e99c-03b8-4c79-802c-95eef673d695', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Thu Apr 02 2026 15:28:03 GMT-0600 (hora estándar central), 1);
INSERT INTO "daily_assignments" VALUES ('f2e20c32-d4e3-4222-8bf6-e03dcbc0c734', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'db511e4c-a59f-40f1-8183-8b3108e17591', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Thu Apr 02 2026 15:28:05 GMT-0600 (hora estándar central), 2);
INSERT INTO "daily_assignments" VALUES ('2ad14a1e-1105-4cba-8859-bffc6736cf58', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'a9accdf9-4568-442d-95c7-643b4f6a4329', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Thu Apr 02 2026 15:28:06 GMT-0600 (hora estándar central), 3);
INSERT INTO "daily_assignments" VALUES ('bcf87cf8-c061-473d-ba9e-2ee51fef9a33', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'db511e4c-a59f-40f1-8183-8b3108e17591', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Thu Apr 02 2026 15:28:07 GMT-0600 (hora estándar central), 4);
INSERT INTO "daily_assignments" VALUES ('b8fbee85-a580-4287-ab2f-4c3784ef5b03', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'fb02e99c-03b8-4c79-802c-95eef673d695', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Thu Apr 02 2026 15:28:09 GMT-0600 (hora estándar central), 5);
INSERT INTO "daily_assignments" VALUES ('254bc095-e703-454d-9505-f6e65d2090a5', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'db511e4c-a59f-40f1-8183-8b3108e17591', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Thu Apr 02 2026 15:28:14 GMT-0600 (hora estándar central), 7);
INSERT INTO "daily_assignments" VALUES ('51550acd-8522-4e1b-ab99-cf8771a3a60c', '53903fa5-edba-49cf-869a-7e3b75eedd24', 'db511e4c-a59f-40f1-8183-8b3108e17591', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Thu Apr 02 2026 15:28:19 GMT-0600 (hora estándar central), 1);
INSERT INTO "daily_assignments" VALUES ('4e793673-e7f8-4d75-9a1e-587951693b05', '53903fa5-edba-49cf-869a-7e3b75eedd24', '6b08af36-84ef-4863-8550-362e5606264a', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Thu Apr 02 2026 15:28:20 GMT-0600 (hora estándar central), 2);
INSERT INTO "daily_assignments" VALUES ('d39d0959-39c2-4a1c-9f28-6076179be7cc', '53903fa5-edba-49cf-869a-7e3b75eedd24', 'a9accdf9-4568-442d-95c7-643b4f6a4329', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Thu Apr 02 2026 15:28:21 GMT-0600 (hora estándar central), 3);
INSERT INTO "daily_assignments" VALUES ('6f146f09-4ef6-4932-8634-62f54df8cb51', '53903fa5-edba-49cf-869a-7e3b75eedd24', 'db511e4c-a59f-40f1-8183-8b3108e17591', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Thu Apr 02 2026 15:28:23 GMT-0600 (hora estándar central), 4);
INSERT INTO "daily_assignments" VALUES ('4e0d90ca-a442-4981-a8a3-fdbbcd6b64fe', '53903fa5-edba-49cf-869a-7e3b75eedd24', 'db511e4c-a59f-40f1-8183-8b3108e17591', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Thu Apr 02 2026 15:28:26 GMT-0600 (hora estándar central), 6);
INSERT INTO "daily_assignments" VALUES ('b0bc570a-7f28-4455-94e6-b0b195a02ef8', '53903fa5-edba-49cf-869a-7e3b75eedd24', 'db511e4c-a59f-40f1-8183-8b3108e17591', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Thu Apr 02 2026 15:28:27 GMT-0600 (hora estándar central), 7);
INSERT INTO "daily_assignments" VALUES ('bcae37fd-48c3-4ba4-82c1-00a0685c5bb0', '64400165-08be-4487-9ec2-2801006ad410', 'ba4cdb36-8894-4c7e-9b56-ea9ddb0c47a8', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Tue Apr 14 2026 10:51:39 GMT-0600 (hora estándar central), 2);
INSERT INTO "daily_assignments" VALUES ('0ab7b06c-11a4-43b9-92cd-3f642a56f5a6', '42d13dd6-ca03-4c94-80f2-00d0043d83d4', 'fb02e99c-03b8-4c79-802c-95eef673d695', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Tue Apr 14 2026 11:24:38 GMT-0600 (hora estándar central), 2);
INSERT INTO "daily_assignments" VALUES ('a8669dc5-feb5-4040-906c-816f721505cc', '42d13dd6-ca03-4c94-80f2-00d0043d83d4', 'fb02e99c-03b8-4c79-802c-95eef673d695', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Tue Apr 14 2026 11:24:43 GMT-0600 (hora estándar central), 4);
INSERT INTO "daily_assignments" VALUES ('be2d6831-32a0-447a-84ee-a3a1ec5bff91', '42d13dd6-ca03-4c94-80f2-00d0043d83d4', 'ba4cdb36-8894-4c7e-9b56-ea9ddb0c47a8', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Tue Apr 14 2026 11:24:46 GMT-0600 (hora estándar central), 5);
INSERT INTO "daily_assignments" VALUES ('2f642fa6-add6-4b4c-bb7a-9d7457fb5c00', '42d13dd6-ca03-4c94-80f2-00d0043d83d4', '6b08af36-84ef-4863-8550-362e5606264a', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Wed Apr 15 2026 08:38:35 GMT-0600 (hora estándar central), 1);
INSERT INTO "daily_assignments" VALUES ('ff4d4f49-a71e-454b-9be6-0bcb28c320ae', 'f6848024-67cb-4c30-b1a8-2c3d779605d8', '6b08af36-84ef-4863-8550-362e5606264a', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Fri Apr 17 2026 07:16:00 GMT-0600 (hora estándar central), 1);
INSERT INTO "daily_assignments" VALUES ('389e7a8d-4ab2-4a25-82bf-3bf3d0da0115', 'f6848024-67cb-4c30-b1a8-2c3d779605d8', '6b08af36-84ef-4863-8550-362e5606264a', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Fri Apr 17 2026 07:16:13 GMT-0600 (hora estándar central), 5);
INSERT INTO "daily_assignments" VALUES ('e2c2be8e-f2fb-4fef-912f-e7447fa7cf83', '53903fa5-edba-49cf-869a-7e3b75eedd24', 'fb02e99c-03b8-4c79-802c-95eef673d695', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Thu Apr 02 2026 15:28:24 GMT-0600 (hora estándar central), 5);
INSERT INTO "daily_assignments" VALUES ('03dfbf40-acee-45b0-a33d-23f4197fb5f6', 'd024eba5-e837-42b4-8316-744b15bb2378', 'db511e4c-a59f-40f1-8183-8b3108e17591', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Fri Apr 17 2026 07:55:56 GMT-0600 (hora estándar central), 5);
INSERT INTO "daily_assignments" VALUES ('6aa03de8-673f-4595-95be-e2e95c2eb5d3', '413e02ec-0691-464c-ad11-d3e5cfe2113f', 'ba4cdb36-8894-4c7e-9b56-ea9ddb0c47a8', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Thu Apr 02 2026 15:28:11 GMT-0600 (hora estándar central), 6);
INSERT INTO "daily_assignments" VALUES ('655f7b15-1508-49fc-923a-4963c7e30481', '42d13dd6-ca03-4c94-80f2-00d0043d83d4', 'a9accdf9-4568-442d-95c7-643b4f6a4329', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Sat Apr 18 2026 07:30:03 GMT-0600 (hora estándar central), 6);
INSERT INTO "daily_assignments" VALUES ('a1a32bb2-aa92-4ace-9a60-1f755e815c98', '42d13dd6-ca03-4c94-80f2-00d0043d83d4', 'a9accdf9-4568-442d-95c7-643b4f6a4329', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Tue Apr 14 2026 11:24:40 GMT-0600 (hora estándar central), 3);
INSERT INTO "daily_assignments" VALUES ('461850c6-4b39-4f8a-bca2-0ffc4fd17b22', 'd024eba5-e837-42b4-8316-744b15bb2378', '6b08af36-84ef-4863-8550-362e5606264a', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Sat Apr 18 2026 07:12:32 GMT-0600 (hora estándar central), 6);
INSERT INTO "daily_assignments" VALUES ('337551c8-7cf8-42fe-9345-717f26b096ef', '64400165-08be-4487-9ec2-2801006ad410', '6b08af36-84ef-4863-8550-362e5606264a', '7dc8ef21-8e65-4ffd-a5db-5a31a82b9b37', 'pendiente', Fri May 01 2026 10:00:57 GMT-0600 (hora estándar central), 5);
INSERT INTO "daily_assignments" VALUES ('a90a4717-8d22-4605-a507-a936c552e5d9', '130f5efe-8d8a-42e0-b658-964256347bea', '6b08af36-84ef-4863-8550-362e5606264a', '7b419674-6559-45be-a5a3-9f066669fa10', 'pendiente', Tue May 05 2026 10:10:23 GMT-0600 (hora estándar central), 2);
INSERT INTO "daily_assignments" VALUES ('69f261e6-5ed4-4bf0-8cbf-dc134a21798d', '130f5efe-8d8a-42e0-b658-964256347bea', 'db511e4c-a59f-40f1-8183-8b3108e17591', '7b419674-6559-45be-a5a3-9f066669fa10', 'pendiente', Tue May 05 2026 10:10:24 GMT-0600 (hora estándar central), 1);
INSERT INTO "daily_assignments" VALUES ('a0df9023-e03e-4740-8853-964a17699bba', '130f5efe-8d8a-42e0-b658-964256347bea', 'ba4cdb36-8894-4c7e-9b56-ea9ddb0c47a8', '7b419674-6559-45be-a5a3-9f066669fa10', 'pendiente', Tue May 05 2026 10:10:26 GMT-0600 (hora estándar central), 3);
INSERT INTO "daily_assignments" VALUES ('3af1705d-4095-4ee7-9d4b-02bba2c7d63c', '130f5efe-8d8a-42e0-b658-964256347bea', 'db511e4c-a59f-40f1-8183-8b3108e17591', '7b419674-6559-45be-a5a3-9f066669fa10', 'pendiente', Tue May 05 2026 10:10:28 GMT-0600 (hora estándar central), 4);
INSERT INTO "daily_assignments" VALUES ('47e203fc-1a6c-4fc6-9f7d-6c352b168652', '130f5efe-8d8a-42e0-b658-964256347bea', 'ba4cdb36-8894-4c7e-9b56-ea9ddb0c47a8', '7b419674-6559-45be-a5a3-9f066669fa10', 'pendiente', Tue May 05 2026 10:10:30 GMT-0600 (hora estándar central), 5);
INSERT INTO "daily_assignments" VALUES ('714e8262-94ac-4200-af82-721c0e8f43f3', '130f5efe-8d8a-42e0-b658-964256347bea', 'fb02e99c-03b8-4c79-802c-95eef673d695', '7b419674-6559-45be-a5a3-9f066669fa10', 'pendiente', Tue May 05 2026 10:10:32 GMT-0600 (hora estándar central), 6);
INSERT INTO "daily_assignments" VALUES ('b870be54-f533-43a8-9423-a9b7f47c4fcd', '130f5efe-8d8a-42e0-b658-964256347bea', 'ba4cdb36-8894-4c7e-9b56-ea9ddb0c47a8', '7b419674-6559-45be-a5a3-9f066669fa10', 'pendiente', Tue May 05 2026 10:10:35 GMT-0600 (hora estándar central), 7);
INSERT INTO "daily_assignments" VALUES ('c7a793a7-ab18-4f39-bfaa-d2ffcc86dce1', '7b419674-6559-45be-a5a3-9f066669fa10', '8cd739ba-47fd-4e0a-857b-d86698270cf9', '7b419674-6559-45be-a5a3-9f066669fa10', 'pendiente', Tue May 05 2026 10:42:46 GMT-0600 (hora estándar central), 1);


-- Estructura de la tabla logistica_combustible_config
DROP TABLE IF EXISTS "logistica_combustible_config" CASCADE;
CREATE TABLE "logistica_combustible_config" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "unidad_id" uuid,
  "capacidad_tanque" numeric NOT NULL,
  "nivel_actual" numeric DEFAULT '0'::numeric,
  "rendimiento_base" numeric NOT NULL,
  "factor_ajuste" numeric DEFAULT '1'::numeric,
  "alerta_nivel_minimo" numeric DEFAULT '20'::numeric,
  "alerta_consumo_anormal" numeric DEFAULT '0'::numeric,
  "alerta_rendimiento_bajo" numeric DEFAULT '0'::numeric,
  "ultimo_km" integer DEFAULT 0,
  "ultima_fecha_carga" date,
  "ultimo_consumo_promedio" numeric DEFAULT '0'::numeric,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_by" uuid
);


-- Estructura de la tabla logistica_combustible_alertas
DROP TABLE IF EXISTS "logistica_combustible_alertas" CASCADE;
CREATE TABLE "logistica_combustible_alertas" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "unidad_id" uuid,
  "transaccion_id" uuid,
  "tipo_alerta" text NOT NULL,
  "severidad" text NOT NULL,
  "titulo" character varying NOT NULL,
  "descripcion" text NOT NULL,
  "valor_actual" numeric,
  "valor_esperado" numeric,
  "diferencia" numeric,
  "estado" text DEFAULT 'activa'::text,
  "fecha_resolucion" timestamp with time zone,
  "solucion_aplicada" text,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "created_by" uuid,
  "resolved_by" uuid
);


-- Estructura de la tabla logistica_liquidaciones
DROP TABLE IF EXISTS "logistica_liquidaciones" CASCADE;
CREATE TABLE "logistica_liquidaciones" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "colaborador_id" uuid,
  "periodo_id" uuid,
  "viaticos" numeric DEFAULT '0'::numeric,
  "comisiones" numeric DEFAULT '0'::numeric,
  "cargas_maniobras" numeric DEFAULT '0'::numeric,
  "bonos" numeric DEFAULT '0'::numeric,
  "deducciones" numeric DEFAULT '0'::numeric,
  "subtotal" numeric DEFAULT '0'::numeric,
  "neto" numeric DEFAULT '0'::numeric,
  "notas" text,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- Estructura de la tabla logistica_costos
DROP TABLE IF EXISTS "logistica_costos" CASCADE;
CREATE TABLE "logistica_costos" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "embarque_id" uuid,
  "combustible" numeric DEFAULT '0'::numeric,
  "casetas" numeric DEFAULT '0'::numeric,
  "hospedaje" numeric DEFAULT '0'::numeric,
  "pensiones" numeric DEFAULT '0'::numeric,
  "permisos" numeric DEFAULT '0'::numeric,
  "talachas" numeric DEFAULT '0'::numeric,
  "ayudantes_ext" numeric DEFAULT '0'::numeric,
  "maniobras" numeric DEFAULT '0'::numeric,
  "viaticos_guia" numeric DEFAULT '0'::numeric,
  "otros" numeric DEFAULT '0'::numeric,
  "subtotal_operativo" numeric DEFAULT '0'::numeric,
  "costo_fijo_km" numeric DEFAULT '0'::numeric,
  "total" numeric DEFAULT '0'::numeric,
  "observaciones" text,
  "created_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- Estructura de la tabla exhibition_photos
DROP TABLE IF EXISTS "exhibition_photos" CASCADE;
CREATE TABLE "exhibition_photos" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "exhibition_id" uuid,
  "photo_url" text NOT NULL,
  "orden" integer DEFAULT 0,
  "created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  "photo_public_id" character varying
);


# API de prueba

## Descripcion

    Este proyecto fue creado para poner a prueba y practicar mi stack

## Tecnologias utilizadas

    - Node.js
    - Express
    - Express Validator
    - PostgreSQL
    - Sequelize
    - Squelize-Cli
    - JWT
    - Jest y Supertest
    - Swagger
    - Dompurify
    - Helmet
    - Cors
    - Cross-env
    - Render
    - Neon

## Requisitos previos

Antes de instalar y ejecutar el proyecto, es necesario contar con:

    - Node.js
    - Pnpm
    - PostgreSQL
    - Git

## Instalacion

    Una vez clonado el repositorio, instalar las dependencias del proyecto:

```bash
pnpm install
```

## Variables de entorno

    El proyecto utiliza diferentes archivos de variables de entorno segun el ambiente de ejecucion.

## .env

    Archivo utilizado para setear conexiones basicas de la base de datos en local.

```env
DB_USER="Usuario de postgreSQL"
DB_PASS="Contraseña"
DB_HOST=localhost
DB_PORT="Puerto en el que corre la base de datos, normalmente 5432"
```

## .env.dev

    Archivo utilizado para indicar la base de datos de desarrollo y la clave secreta de JWT de desarrollo

```env
DB_NAME="base de datos para dev"

JWT_SECRET="clave secreta de jwt de dev"
```

## .env.test

    Archivo utilizado para indicar la base de datos de test y la clave secreta de JWT de desarrollo

```env
DB_NAME="base de datos para test"

JWT_SECRET="clave secreta de jwt de test"
```

## .env.production

    Archivo utilizado para indicar la URL de la base de datos de produccion y su clave secreta de JWT

```env
DB_URL="URL de la conexión con la base de datos de Neon"

JWT_SECRET="clave secreta de jwt de produccion"
```

## Ejecucion del proyecto

    Para ejecutar el proyecto en modo dev:

```bash
pnpm dev
```

    Por defecto, el servidor se ejecuta en:

```text
http://localhost:3000
```

    El puerto puede configurarse mediante la variable de entorno 'PORT'.

    En produccion, el servidor es ejecutado automaticamente por Render utilizando la configuracion definida en el servidor.


    Comando de inicio configurado en Render:

```bash
pnpm start
```

## Script disponibles

| Comando                 | Descripcion                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------ |
| `pnpm dev`              | Levanta el servidor en modo desarrollo.                                                    |
| `pnpm start`            | Inicia el servidor (este comando es utilizado por Render en producción).                   |
| `pnpm test`             | Ejecuta los tests automatizados.                                                           |
| `pnpm migration-create` | Creacion de una template de migracion(seguido de el va el nombre que tendra la migracion). |
| `pnpm seed-create-dev`  | Creacion de una template de la seed(seguido de el va el nombre que tendra la seed).        |
| `pnpm migrate-dev`      | Ejecuta las migraciones de la base de datos para desarrollo.                               |

## Base de datos

El proyecto utiliza PostgreSQL como base de datos junto con Sequelize como ORM.

En los entornos de desarrollo y testing se puede utilizar una instancia local de PostgreSQL.

Antes de ejecutar las migraciones, es necesario tener creada la base de datos correspondiente al entorno que se quiere utilizar.

En producción, la base de datos se encuentra alojada en Neon.

La conexión a la base de datos se configura mediante variables de entorno.

Para ejecutar las migraciones:

```bash
pnpm run migrate-{entorno}
```

Para ejecutar los seeders:

```bash
pnpm run seed-{entorno}
```

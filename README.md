# API de prueba

## Descripcion

Este proyecto fue creado para poner a prueba y practicar mi stack

<br>

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

<br>

## Requisitos previos

Antes de instalar y ejecutar el proyecto, es necesario contar con:

- Node.js
- Pnpm
- PostgreSQL
- Git

<br>

## Instalacion

Una vez clonado el repositorio, instalar las dependencias del proyecto:

```bash
pnpm install
```

<br>

## Variables de entorno

El proyecto utiliza diferentes archivos de variables de entorno según el ambiente de ejecución.

<br>

### `.env`

Archivo utilizado para configurar los datos base de conexión a PostgreSQL en local.

```env
DB_USER="Usuario de PostgreSQL"
DB_PASS="Contraseña de PostgreSQL"
DB_HOST=localhost
DB_PORT="Puerto en el que corre la base de datos, normalmente 5432"
```

### `.env.dev`

Archivo utilizado para indicar la base de datos de desarrollo y la clave secreta de JWT de desarrollo.

```env
DB_NAME="Base de datos de desarrollo"
JWT_SECRET="Clave secreta de JWT de desarrollo"
```

### `.env.test`

Archivo utilizado para indicar la base de datos de testing y la clave secreta de JWT de testing.

```env
DB_NAME="Base de datos de testing"
JWT_SECRET="Clave secreta de JWT de testing"
```

### `.env.production`

Archivo utilizado para indicar la URL de conexión a la base de datos de producción y la clave secreta de JWT de producción.

```env
DB_URL="URL de conexion con la base de datos de Neon"
JWT_SECRET="Clave secreta de JWT de produccion"
```

<br>

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

<br>

## Script disponibles

| Comando                 | Descripcion                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------ |
| `pnpm dev`              | Levanta el servidor en modo desarrollo.                                                    |
| `pnpm start`            | Inicia el servidor (este comando es utilizado por Render en producción).                   |
| `pnpm test`             | Ejecuta los tests automatizados.                                                           |
| `pnpm migration-create` | Creacion de una template de migracion(seguido de el va el nombre que tendra la migracion). |
| `pnpm seed-create-dev`  | Creacion de una template de la seed(seguido de el va el nombre que tendra la seed).        |
| `pnpm migrate-dev`      | Ejecuta las migraciones de la base de datos para desarrollo.                               |

<br>

## Base de datos

El proyecto utiliza PostgreSQL como base de datos junto con Sequelize como ORM.

Las migraciones y seeders se gestionan mediante Sequelize CLI.

En los entornos de desarrollo y testing se puede utilizar una instancia local de PostgreSQL.

Antes de ejecutar las migraciones, es necesario tener creada la base de datos correspondiente al entorno que se quiere utilizar.

En producción, la base de datos se encuentra alojada en Neon.

La conexión a la base de datos se configura mediante variables de entorno.

> **Nota:** los archivos generados por Sequelize CLI utilizan sintaxis CommonJS. Por este motivo, las migraciones, seeders y archivos de configuración generados deben utilizar la extensión `.cjs`.

Para ejecutar las migraciones:

```bash
pnpm migrate-{entorno}
```

Para ejecutar los seeders:

```bash
pnpm seed-{entorno}
```

<br>

## Tests

El proyecto utiliza Jest y Supertest para realizar tests automatizados sobre la API.

Los archivos de test se encuentran en el directorio `__test__`.

Los tests utilizan el archivo `.env.test` para configurar la conexión con la base de datos de testing y la clave JWT utilizada durante las pruebas.

Antes de ejecutar los tests, verificar que la base de datos indicada en `.env.test` exista.

Para ejecutar los tests:

```bash
pnpm test
```

<br>

## Documentacion API

La documentación interactiva de la API está disponible mediante Swagger UI.

Swagger permite visualizar los endpoints disponibles, sus parámetros, cuerpos de request y posibles respuestas.

| Entorno          | URL                                                       |
| ---------------- | --------------------------------------------------------- |
| Desarrollo local | `http://localhost:3000/api-docs`                          |
| Producción       | <https://render-conection-express.onrender.com/api-docs/> |

Los archivos relacionados con la documentación se encuentran en:

```txt
src/docs/
```

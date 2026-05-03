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

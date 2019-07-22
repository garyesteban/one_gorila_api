# Requisitos

- MongoDB 4.0 corriendo como servicio, crear base de datos llamada one_gorilla.
- Cambiar el string de conexión que se encuentra en api/server/common/db linea 10 si es necesarío.
    `const mongoDb = 'mongodb://localhost:27017/one_gorilla';`
- NPM 6.4.1
- Angular-CLI 8.0.6
- NodeJs v10.13.0

## Correr servidor api

- `cd api`
- `npm i`
- `npm run dev`

## Correr servidor angular/front-end

- `cd front-end`
- `npm i`
- `ng serve`
- Ir a la web http://localhost:4200

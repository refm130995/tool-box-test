
# Test Toolbox

Este es un proyecto de ejemplo para practicar las pruebas en un stack MERN (MongoDB, Express, React y Node.js). El proyecto consiste en una aplicación web que muestra una lista de archivos y su contenido. Los archivos son leídos desde un servidor de Node.js y los datos son mostrados en la interfaz de usuario construida con React.

## Instalación

Para instalar el proyecto, sigue los siguientes pasos:

1. Clona este repositorio en tu ordenador: `git clone https://github.com/tu-usuario/test-toolbox.git`.
2. Entra en el directorio `test-toolbox`: `cd test-toolbox`.
3. Instala las dependencias para el servidor de Node.js: `cd backend && npm install`.
4. Vuelve al directorio principal del proyecto: `cd ..`.
5. Instala las dependencias para la interfaz de usuario de React: `cd frontend && npm install`.

## Uso

### Ejecución del servidor

Para ejecutar el servidor de Node.js, sigue estos pasos:

1. En el directorio principal del proyecto, entra en el directorio `backend`: `cd test-toolbox-api`.
2. Ejecuta el servidor con el comando `npm start`.
3. El servidor estará disponible en `http://localhost:3001`.

### Ejecución de la interfaz de usuario

Para ejecutar la interfaz de usuario de React, sigue estos pasos:

1. En el directorio principal del proyecto, entra en el directorio `frontend`: `cd test-toolbox-frontend`.
2. Ejecuta la aplicación con el comando `npm start`.
3. La aplicación estará disponible en `http://localhost:3000`.

### Ejecución con Docker Compose

Para ejecutar el proyecto con Docker Compose, sigue estos pasos:

1. En el directorio principal del proyecto, ejecuta el siguiente comando: `docker-compose up --build`.
2. El servidor estará disponible en `http://localhost:3001`.
3. La aplicación estará disponible en `http://localhost:3000`.

## Pruebas

Para ejecutar las pruebas del proyecto, sigue estos pasos:

1. En el directorio `backend`, ejecuta el comando `npm run test`.
2. En el directorio `frontend`, ejecuta el comando `npm run test`.

## Autor

Ramon Eduardo Figuera Montilla
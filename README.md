# PROYECTO RECETAS NAVIDEÑAS

# INTEGRANTES DEL GRUPO
Ledy Camila Ordoñez
Karen Sofía Ordoñez

# PROFESORA Y CENTRO EDUCATIVO
Profesora: Ana Culma
Centro Educativo: Instituto Pío


Este es un proyecto de recetas navideñas que permite compartir y explorar recetas relacionadas con las fiestas navideñas. El proyecto está dividido en dos partes: un backend que gestiona las recetas y los usuarios, y un frontend que permite a los usuarios interactuar con el sistema a través de una interfaz web. ## Descripción Este proyecto tiene como objetivo proporcionar una plataforma para compartir recetas navideñas de manera fácil y accesible. Los usuarios pueden registrarse, agregar sus recetas favoritas, y ver las recetas de otros usuarios.
 
 # Características principales: 
 
 - Registro de usuarios - Agregar y ver recetas - Interfaz fácil de usar - Sistema de favoritos para guardar las recetas más queridas ## Tecnologías utilizadas ### Backend - Node.js - Express.js - TypeScript - MongoDB (para almacenamiento de datos) ### Frontend - React - TypeScript - Vite (para bundling y desarrollo) - CSS para el estilo
   
# Temática y Tecnologías Utilizadas en el Proyecto

React: Utilizado para desarrollar interfaces de usuario interactivas y reactivas.
Node.js: Un entorno de ejecución para JavaScript que nos permite ejecutar código fuera del navegador.
Express: Framework para crear aplicaciones web y APIs de manera eficiente.
Sequelize: ORM para interactuar con bases de datos SQL como PostgreSQL, MySQL, etc.
Mongoose: Biblioteca para modelar datos en MongoDB, proporcionando una interfaz basada en esquemas.
TypeScript: Un superconjunto de JavaScript que incluye tipos estáticos, mejorando la calidad del código.
Axios: Utilizado para realizar solicitudes HTTP tanto en el navegador como en Node.js.
Body-parser: Middleware que permite analizar el cuerpo de las solicitudes HTTP.
Prettier: Herramienta que garantiza que el código mantenga un estilo consistente en todo el proyecto.
Dotenv: Para gestionar variables de entorno dentro de los archivos .env.

# Funcionalidades
La página es completamente interactiva, con un diseño visual intuitivo que permite a los usuarios explorar diferentes recetas navideñas. El código está organizado de manera modular y utiliza variables de entorno para facilitar la configuración y despliegue. La plataforma es escalable y cuenta con una arquitectura que soporta funciones asincrónicas para mejorar el rendimiento.

# Comandos Utilizados en el Backend
.Instalación de dependencias básicas:
npm install express mongoose sequelize pg pg-hstore body-parser
Estas dependencias son fundamentales para la construcción de la API, conexión a bases de datos, y manejo de solicitudes HTTP.
.Instalación de herramientas para TypeScript:
npm install -D typescript ts-node-dev @types/node @types/express @types/body-parser @types/sequelize
Estas herramientas permiten que trabajemos de manera eficiente con TypeScript en el backend.
.Inicialización del proyecto TypeScript:
npx tsc --init
Este comando crea el archivo de configuración de TypeScript para ajustar el proyecto a las necesidades específicas del entorno de desarrollo.
.Configuración de desarrollo:
"dev": "ts-node-dev --respawn --transpile-only src/server.ts"
Un script para ejecutar el servidor en desarrollo y asegurarnos de que cualquier cambio en el código sea reflejado rápidamente.

# Comandos Utilizados en el Frontend
.Creación del proyecto con React y TypeScript:
npx create-react-app frontend --template typescript
Este comando configura un nuevo proyecto React con soporte para TypeScript.
.Instalación de dependencias comunes:
npm install @testing-library/react react-router-dom @mui/material @emotion/react @emotion/styled axios
Estas librerías son esenciales para pruebas, enrutamiento, diseño de la interfaz y manejo de solicitudes HTTP.
.Configuración de herramientas de desarrollo:
npm install -D eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks
Herramientas de análisis y formateo de código para mantener la calidad y consistencia en el proyecto.
.Instalación de dependencias para CORS y gestión de variables de entorno:
npm install express mongoose cors dotenv
Estas dependencias permiten la configuración del servidor y la manipulación de variables sensibles.
.Creación de archivo .gitignore:
npx create-gitignore node
Genera un archivo .gitignore para asegurar que archivos no deseados no sean subidos al repositorio.

# Comandos Generales Utilizados
A lo largo del proyecto, también hemos utilizado algunos comandos útiles para el desarrollo y despliegue de la aplicación, como:
npm run build: Construye el proyecto para producción.
npm start: Inicia el servidor en producción.
npm run dev: Inicia el servidor en modo de desarrollo.

Este proyecto ha sido desarrollado con el objetivo de crear una página funcional y eficiente, que ofrezca a los usuarios una experiencia agradable al interactuar con el contenido. Las tecnologías empleadas garantizan una estructura sólida tanto en el frontend como en el backend

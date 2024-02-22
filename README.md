## Sprint 4. REST API.

# Entrega 4.1 Node REST Service

---

Objetivos:

Aprender a implementar un servidor con Express.js para la API REST.

Descripción:

En esta entrega crearemos un servidor utilizando Express.js, para proporcionar servicio al API REST de la lista de tareas (TODO-LIST), aplicando la arquitectura hexagonal. Implementaremos las funcionalidades siguientes:

. Añadir una tarea a la lista: Implementaremos una ruta y un controlador para permitir a los usuarios añadir nuevas tareas a su lista.

. Marcar una tarea como completada: Crearemos una ruta y un controlador para permitir a los usuarios marcar una tarea como completada.

. Eliminar una tarea de la lista: Implementaremos una funcionalidad para eliminar tareas de la lista utilizando una ruta y un controlador adecuados.

. Mostrar la lista de tareas: Crearemos una ruta y un controlador para obtener y mostrar la lista completa de tareas a los usuarios.

- Nivel 1

Documenta y adjunta las comprobaciones con una plataforma como Postman o Insomnia a tu proyecto.

---

Comandos:

1. Instalación

Para clonar el repositorio e instalar las dependencias necesarias, usa los siguientes comandos:

```sh
git clone https://github.com/stephanyhoy/Entrega-4.1-Node-REST-Service
cd Entrega-4.1-Node-REST-Service
npm install
```

2. Para transpilar el proyecto

Transpila el código TypeScript en JavaScript en la carpeta ./dist
usando el siguiente comando:

```sh
npm run build
```

3. Para inciar el servidor Express.js, usa el siguiente comando:

```sh
npm run start
```

4. Para ejecutar tests:

```sh
npm run test
```

Las pruebas realizadas en Insomnia están en formato json en este repositorio.

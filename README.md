## ACTIVIDAD: DOMINIO DE PETICIONES HTTP CON FETCH Y JS

OBJETIVO: Implementar los 5 verbos principales de una API 
RESTful usando JSONPlaceholder.

URL BASE: https://jsonplaceholder.typicode.com/posts


# TAREA 1: LEER DATOS (GET)

1. Crea una función que haga un fetch a la URL BASE.
2. Imprime en consola la lista de los primeros 10 posts.
3. Tip: Usa la sintaxis async/await para mayor claridad.


# TAREA 2: CREAR UN RECURSO (POST)

1. Configura el fetch con un objeto de opciones.
2. Define el 'method' como 'POST'.
3. Agrega un 'body' con un objeto JSON (title, body, userId).
4. No olvides los headers: { 'Content-type': 'application/json' }.
5. Verifica que el servidor te devuelva el objeto con un ID (normalmente 101).


# TAREA 3: ACTUALIZACIÓN TOTAL VS PARCIAL (PUT y PATCH)

1. PUT: Envía un objeto completo a /posts/1. Observa cómo 
   reemplaza los datos.
2. PATCH: Envía solo el atributo { "title": "Nuevo Título" } 
   a /posts/1. Observa cómo solo cambia ese campo.


# TAREA 4: ELIMINAR (DELETE)

1. Realiza una petición con el método 'DELETE' a /posts/1.
2. Verifica que el status de la respuesta sea 200 (éxito).


# RETO TÉCNICO:
Implementa un bloque try/catch para manejar errores de red 
en cada una de tus funciones.

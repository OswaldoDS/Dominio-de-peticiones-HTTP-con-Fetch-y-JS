//Cargando la configuración del archivo .env
require("dotenv").config();

//Referenciamos la variable de entorno .env
const BASE_URL = process.env.API_URL;

//Asignando un id
const id = 12;

//Tarea 1
//GET ---> Leer datos
async function leerPosts() {
  try {
    const respuesta = await fetch(`${BASE_URL}/${id}`);
    if (!respuesta.ok) throw new Error("Error al obtener datos");
    const datos = await respuesta.json();
    console.log("Tarea 1 - GET: Registros", datos);
  } catch (error) {
    console.error("Fallo en GET: ", error.message);
  }
}

//Tarea 2
//Post ---> Crear recursos
async function crearPost() {
  //Creando el nuevo recurso
  const nuevoPost = {
    title: "Proyecto de ingeniería",
    body: "Implementación de arquitectua RESTful",
    userId: 1,
  };

  //Creando la respuesta
  const respuesta = await fetch(BASE_URL, {
    method: "POST", //Indica el tipo de petición puede ser GET/POST/PUT/PATCH/DELETE
    body: JSON.stringify(nuevoPost), //Para mandar los datos al servidor
    headers: { "Content-type": "application/json; charset=UTF-8" }, // Le dice al servidor que tipo de datos se están enviando
  });

  const datos = await respuesta.json();
  console.log("Tarea 2 - POST: Recurso creado: ", datos);
  // console.log(Object.keys(datos)); //Para visualizar las keys que genera
  // console.log(Object.values(datos)); //Para visualizar los valores de las keys

  //El orden de las propiedades son title -> body -> userId -> id (lo asigna el servidor siendo el Id único)
}

//Función de ejecución del flujo
async function ejecutarPractica() {
  console.log("Ejecutando...");
  await leerPosts();
  await crearPost();
}

ejecutarPractica();

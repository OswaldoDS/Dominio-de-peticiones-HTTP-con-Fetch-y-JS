//Cargando la configuración del archivo .env
require("dotenv").config();

//Referenciamos la variable de entorno .env
const BASE_URL = process.env.API_URL;

//Tarea 1
//GET ---> Leer datos
async function leerPosts() {
  try {
    const respuesta = await fetch(BASE_URL);
    if (!respuesta.ok) throw new Error("Error al obtener datos");
    const datos = await respuesta.json();
    console.log("Tarea 1 - GET: Registros", datos);
  } catch (error) {
    console.error("Fallo en GET: ", error.message);
  }
}

async function ejecutarPractica() {
  console.log("Ejecutando...");
  await leerPosts();
}

ejecutarPractica();

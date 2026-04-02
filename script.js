//Cargando la configuración del archivo .env
require("dotenv").config();

//Referenciamos la variable de entorno .env
const BASE_URL = process.env.API_URL;

//Tarea 1
//GET ---> Leer datos
async function leerPosts(id) {
  try {
    const respuesta = await fetch(`${BASE_URL}/${id}`);

    console.log(respuesta.ok); // true status -> entre 200–299; false status -> error (404, 500, etc.)
    console.log(respuesta.status);
    console.log(respuesta.statusText); // "OK", "Not Found"

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
  try {
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

    // El orden de las propiedades son:
    // title -> body -> userId -> id (lo asigna el servidor siendo el Id único)
  } catch (error) {
    console.error("Fallo en GET: ", error.message);
  }
}

//Tarea 3
//PUT ---> Actualización total
async function actualizarPost(id) {
  try {
    //Creando la respuesta
    const respuesta = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        //Para mandar los datos al servidor
        id: id,
        title: "Título totalmente actualizado",
        body: "Contenido nuevo",
        userId: 1,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const datos = await respuesta.json();
    console.log("Tarea 3 - PUT: ", datos);
  } catch (error) {
    console.error("Error en PUT: ", error.message);
  }
}

//Tarea 3.2
//PATCH ---> Actualización parcial
async function parcialPost(id) {
  try {
    //Creando la respuesta
    const respuesta = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        //Para mandar los datos al servido
        id: 4,
        title: "Título parcialmente actualizado",
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const datos = await respuesta.json();
    console.log("Tarea 3.2 - PATCH: ", datos);
  } catch (error) {
    console.error("Error en PATCH: ", error.message);
  }
}

//Tarea 4
//DELETE ---> Eliminar
async function eliminarPost(id) {
  const respuesta = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (respuesta.status == 200) {
    console.log(`Tarea 4 - DELETE: Post ${id} eliminado con éxito`);
  }
}

//Función de ejecución del flujo
async function ejecutarPractica() {
  console.log("Ejecutando...");
  await leerPosts(12);
  await crearPost();
  await actualizarPost(1);
  await parcialPost(1);
  await eliminarPost(1);
}

ejecutarPractica();

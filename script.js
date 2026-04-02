//Cargando la configuración del archivo .env
require("dotenv").config();

//Referenciamos la variable de entorno .env
const BASE_URL = process.env.URL_API;

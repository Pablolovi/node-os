//Equerimos los módulos creados para obtener la información

const osModule = require('./osModule.js'); //Importamos el archivo osModule.js para obtener la información del sistema
const networkModule = require('./networkModule.js'); //Importamos el archivo networkModule.js para obtener la información de la red

//Llamamos a las funciones de los módulos para mostrar la información
osModule.getOSInfo();
networkModule.getNetworkInfo();
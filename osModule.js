const os = require('os');

//Obtener y mostrar la información del sistema operativo de forma directa
function getOSInfo() {
    console.log("Nombre del sistema operativo:" + os.platform());
    console.log("Tipo:" + os.type());
    console.log("Versión:" + os.version());
    console.log("Arquitectura:" + os.arch());
    console.log("Número de CPUs:" + os.cpus().length);

    //Convertir la memoria de bytes a MB y mostrarla
    console.log("Memoria total:" + (os.totalmem() / (1024 * 1024)).toFixed(2) + "MB");
    console.log("Memoria libre:" + (os.freemem() / (1024 * 1024)).toFixed(2) + "MB");
}

module.exports = {getOSInfo}; //Exportamos la función
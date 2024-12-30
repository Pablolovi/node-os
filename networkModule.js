const os = require('os'); // Usamos el módulo 'Os' para obtener la información de las interfaces de red

//Obtener y mostrar la información de las interfaces de red
function getNetworkInfo() {
    const interFaces = os.networkInterfaces(); //Obtenemos las interfaces de red

    //Recorremos las interfaces y mostramos la información
    for (let iface in interFaces) {
        console.log(`Interfaz: ${iface}`); //Nombre de la interfaz

        interFaces[iface].forEach(info => {
            console.log(`familia: ${info.family}`);
            console.log(`Dirección: ${info.address}`);
            console.log(`Interno: ${info.internal}`);
        });
    }
}

module.exports = {getNetworkInfo}; //Exportamos la función
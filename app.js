const argv = require('./config/yargs').argv;
const geocode = require('./geocode/geocode');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {

    try {
        let coords = await geocode.getLugarLatLng(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng)

        return `El clima en: ${coords.direccion} es de ${temp}ºC`;

    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));

// geocode.getLugarLatLng(argv.direccion)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

// clima.getClima(7.119349, -73.1227416)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));
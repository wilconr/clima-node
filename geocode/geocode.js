const axios = require('axios');

// console.log(argv.direccion);

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyAjfGLKqt7Aucb900RQF4hTeGJhsHeqnAA`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad: ${direccion}`);
    }
    // console.log(JSON.stringify(resp.data, undefined, 2));
    // console.log(resp.status);
    let location = resp.data.results[0];
    let coords = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}

module.exports = {
    getLugarLatLng
}
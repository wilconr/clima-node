const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ce869b542e12d42c2c7a65ade6e8fa5a`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}
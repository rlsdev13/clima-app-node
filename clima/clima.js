const axios = require('axios');

const getClima = async (lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3141281c1f8397159b2b7015a95f7430&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}
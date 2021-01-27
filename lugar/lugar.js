const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodeUrl = encodeURI(dir);
    //console.log(encodeUrl);


    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: {
            q: encodeUrl,
            APPID: '3141281c1f8397159b2b7015a95f7430'
        },
        timeout: 1000
        /*,
        headers: {
            'X-Custom-Header': 'foobar'
        }*/
    });

    const response = await instance.get()
        .catch(error => {
            return error.response.status;
        });

    const data = response.data;
    const direccion = `${data.name},${data.sys.country}`;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    return {
        direccion,
        lat,
        lon
    }

    /*if (response === 404) {
        throw new Error(`No hay resultados para ${dir}`);
    }*/


}

module.exports = {
    getLugarLatLng
};
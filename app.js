const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/*lugar.getLugarLatLng(argv.direccion)
    .then(console.log);

clima.getClima(18.8333, -98).then(console.log);
//console.log(argv.direccion);*/

const getInfo = async (direccion) => {

    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coord.lat, coord.lon);

        return `El clima de ${direccion} es de ${temperatura}°C`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }



    //First try
    /*lugar.getLugarLatLng(direccion)
        .then(resp => {
            return clima.getClima(resp.lat, resp.lon);
        })
        .then(clm => {
            console.log(`El clima de ${direccion} es de ${clm}`);
        })
        .catch(err => console.log(`No se pudo determinar el clima de ${direccion}`)) ;
    */
}

getInfo(argv.direccion).then(console.log);
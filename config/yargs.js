const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            type: 'string',
            desc: 'Descripción de la ciudad',
            require: true
        }

    })
    .help('h')
    .argv;

module.exports = {
    argv
}
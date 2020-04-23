let argumentos = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: false,
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multpiplicar', argumentos)
    .command('crear', 'Crea un archivo de la tabla de multiplicar', argumentos)
    .help()
    .argv;

module.exports = {
    argv
}
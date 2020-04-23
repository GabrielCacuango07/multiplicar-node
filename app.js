const argv = require('./config/yargs').argv
const colors = require('colors');



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        console.log('crear');
        //recibe promesa
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo ${archivo.green} creado`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
}
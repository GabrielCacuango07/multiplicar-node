// este es un objeto 
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log("==========".green);
    console.log(`tabla de ${base}`.green);
    console.log("=========".green);
    for (let i = 1; i <= limite; i++) {
        let res = base * i
        console.log(`${base} * ${i} = ${res}`);
    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(` el valor de ${base} no es un numero `);
            return
        }
        for (let i = 1; i <= limite; i++) {
            let res = base * i
            data += `${base} * ${i} = ${res}\n`;
        }


        fs.writeFile(`./tables/tabla-${base} - al ${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`table-${base}-al ${limite}.txt`.green)

            console.log(`The table of ${data} -al ${limite} has been created!`);
        });
    });
}

module.exports = {
    // nombre: crear archivo
    crearArchivo,
    listarTabla
}
// for in le os indeces ou chaves de objetos

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

const frutas = ['banana', 'melao', 'uva'];

for (let indice in frutas) {
    console.log(frutas[indice]);
}


const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Henrique',
    altura: 1.86,
    peso: 100
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
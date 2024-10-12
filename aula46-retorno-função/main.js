// const soma = (a, b) => {
//     return a + b;
// }

// console.log(soma(2, 5));

// document.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'pink';   
// })

const criaPesoa = (nome, sobrenome, idade) => {
    return {nome, sobrenome, idade};
}

const p1 = criaPesoa('Matheus', 'Clara', 1);
console.log(p1.nome);

const falaFrase = (comeco) => {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const olaMundo = falaFrase('Olá');

console.log(olaMundo('Mundo'));


const criarMultiplicador = multiplicador => {
   return (n) => {
        return n * multiplicador
    }
}

const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);
const Quadriplica = criarMultiplicador(4);


console.log(duplica(2));
console.log(triplica(2));
console.log(Quadriplica(2));
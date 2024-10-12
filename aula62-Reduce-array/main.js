const n = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];

const total = n.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    return acumulador;
});

console.log(total);

const p = [
    {nome: 'Matheus', idade: 62},
    {nome: 'Maiara', idade: 23},
    {nome: 'Ana Clara', idade: 55},
    {nome: 'Marcia', idade: 19},
    {nome: 'Vinicius', idade: 72},
    {nome: 'Arthur', idade: 47}
];

const pMaisVelha = p.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(pMaisVelha);
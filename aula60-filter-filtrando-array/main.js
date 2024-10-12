// retorne os numeros maiores que 10
const n = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];

const n10 = n.filter( valor => valor > 10); // essa função é a mesma coisa que (valor) => {return valor > 10};
console.log(n10);

// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo o nome termina com A

const p = [
    {nome: 'Matheus', idade: 62},
    {nome: 'Maiara', idade: 23},
    {nome: 'Ana Clara', idade: 55},
    {nome: 'Marcia', idade: 19},
    {nome: 'Vinicius', idade: 32},
    {nome: 'Arthur', idade: 47}
];

const p1 = p.filter(obj => obj.nome.length >= 7);
console.log(p1); 

const p2 = p.filter(obj => obj.idade > 50);
console.log(p2);

const p3 = p.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a')); // primeira função passou tudo para letra minuscula para ser conferido pela segunda função que filta os nomes que tem o ultimo indece A.
console.log(p3);
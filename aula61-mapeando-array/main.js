//dobre os valores
const n = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];

const nDobro = n.map(valor => valor * 2);
console.log(nDobro);

const p = [
    {nome: 'Matheus', idade: 62},
    {nome: 'Maiara', idade: 23},
    {nome: 'Ana Clara', idade: 55},
    {nome: 'Marcia', idade: 19},
    {nome: 'Vinicius', idade: 32},
    {nome: 'Arthur', idade: 47}
];

const nomes = p.map(obj => obj.nome);

console.log(nomes);


const idades = p.map(obj => ({idade: obj.idade}));

console.log(idades);

const idObj = p.map((obj, indice) => {
    const newobj = { ...obj}
    newobj.id = (indice + 1) * 1000;
    return newobj
});

console.log(idObj);
 console.log(p);

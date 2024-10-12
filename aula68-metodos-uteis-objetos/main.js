const produto = {nome: 'Produto', preco: 1.8};
const caneca = {
    ...produto,
    material: 'porcelana'
};

caneca.nome = 'PC';

console.log(caneca);
console.log(produto);
console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}

const produto2 = {nome: 'Mercadoria', preco: 3.5};
Object.defineProperty(produto2, 'nome', {
    writable: false,
    configurable: false,
})
console.log(Object.getOwnPropertyDescriptor(produto2, 'nome'));

produto2.nome = 'Outra coisa'
console.log(produto2);
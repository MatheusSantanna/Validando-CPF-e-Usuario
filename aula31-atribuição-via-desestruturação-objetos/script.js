const pessoa ={
    nome: 'Matheus',
    sobrenome: 'Henrique',
    idade: 30,
    endereco: {
        rua: 'Coronel lafayette cruz',
        numero: 140
    }
};

const { nome: name = 'Flavio'/*declarando  uma variavel para o valor do objeto (nome)*/, sobrenome, idade, endereco: {rua, numero} } = pessoa;
console.log(name, sobrenome, rua, numero);
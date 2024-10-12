const nome = ['Matheus', 'Alana', 'Clara', 'Maiara'];

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

for ( let i in nome) {
    console.log(nome[i])
}

for (let valor of nome) {
    console.log(valor);
}

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
});


const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Henrique'
};

for (let key in pessoa) {
    console.log(pessoa[key]);
}
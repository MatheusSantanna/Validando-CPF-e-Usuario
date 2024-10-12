const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Henrique',
};

const chave = 'nome';
console.log(pessoa[chave]);


const pessoa1 = new Object();
pessoa1.nome = 'Maiara'
pessoa1.sobrenome = 'Machado';
pessoa1.idade = 27;
pessoa1.falarNome = function() {
    return (`${this.nome} esta falando seu nome.`);    
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

for(let chave in pessoa1) {
    console.log(pessoa1[chave])
}

pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());


function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Matheus', 'Henrique');
console.log(p1.nomeCompleto);

function Pessoa(nome , sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome
    
    Object.freeze(this);
}
// new cria um objeto vaziop {} ira pegar a palavra this e atrelar ao nome da constante

const p2 = new Pessoa('Matheus', 'Henrique');
console.log(p2);
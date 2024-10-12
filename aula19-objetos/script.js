
// função factory = uma função criadora 


function criaPessoa(nome, idade, altura){
    return{ nome, idade, altura };
}

const pessoa1 = criaPessoa('Matheus', 27, 1.80);

console.log(pessoa1); // pode usar a notação ponto para poder pegar somente um parametro.


const pessoa2 = {
    nome: 'Matheus',
    sobrenome: 'Santanna',
    idade: 27,

    fala (){
        console.log(`A minha idade é ${this.idade} `); // a função this consegue acessar parametros do escopo global fora de funçoes.
    },
    incrementaIdade(){
        this.idade++;
    }
}

pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();



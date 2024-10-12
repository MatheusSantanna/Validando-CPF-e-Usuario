

const a2 = function(n){// função normal
    return n ** 0.5;
}

const a1 = (n) => {
    return n ** 0.5;// arrow function
}

const a = n => n ** 0.5; // arrow function

console.log(a(9), a1(25), a2(16));

// function soma(x,y){
//     const resultado = x + y
//     return resultado
// }
// const novaVar = soma(10, 37) // armazenando a função em uma vareavel fora do escopo

// console.log(novaVar);

function criaPessoa(nome, idade, altura){
    return{ nome, idade, altura };
}

const pessoa1 = criaPessoa('Matheus', 27, 1.80);

console.log(pessoa1); // pode usar a notação ponto para poder pegar somente um parametro.

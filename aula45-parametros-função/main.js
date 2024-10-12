function funcao () {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7);


function soma ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

soma({nome: 'Matheus', sobrenome: 'Otavio', idade: 27})

function soma1 ([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade);
}

soma1( ['Matheus',  'Otavio',  27]);

const conta = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero; 
        if(operador === '/') acumulador /= numero; 
    }
    
    console.log(acumulador);
};

conta('+', 1, 20, 30, 40 ,50);


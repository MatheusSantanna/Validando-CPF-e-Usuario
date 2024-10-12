const retornaFuncao = (nome) => {
    
    return () => {
        return nome;
    };
}

const funcao = retornaFuncao('Matheus');
const funcao2 = retornaFuncao('Ana Clara');

console.dir(funcao);
console.dir(funcao2);

// Closures é a habilidade de uma função de acessar o seu escopo lexico.
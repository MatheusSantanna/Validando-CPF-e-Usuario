let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

// valores primitivos sao copiados sendo assim quando alterados no meio do codigo nao fazem diferença se atribuidos a outra variavel.
//(string, number, boolean, undefined, null)

// valores referencia sao linkados(apontam pro mesmo lugar na memoria) a varial sendo assim qualquer alterção pode alterar todo o codigo.
//(array, object, function)

const c = {
    nome: 'Matheus',
    sobrenome: 'Henrique'
};

const d = c;

c.nome = 'Maiara';

console.log(d);

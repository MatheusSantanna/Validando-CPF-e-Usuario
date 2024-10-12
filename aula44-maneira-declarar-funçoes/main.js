function falaOI () {
    console.log('OI');
};

const oi = () => {console.log('Clara')};


falaOI();


function executaFuncao(funcao) {
    console.log('cheguei aqui')
    oi();
}

executaFuncao(oi);


const objeto = {
    criaPessoa: (nome, sobrenome, idade) => {
        return nome + sobrenome + idade
    }
}
console.log(objeto.criaPessoa('Matheus ', 'Henrique ', 27));
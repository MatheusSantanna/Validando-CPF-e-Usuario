const falar = {
    falar(){
        console.log(`${this.nome} esta falando`);
    }
};

const comer = {
    comer(){
        console.log(`${this.nome} esta comendo`);
    }
};

const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo`);
    }
};


const pessoaPrototype = Object.assign({}, falar, comer, beber);
        
  
const criaPessoa = (nome, sobrenome) => {

    return  Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
};

const p1 = criaPessoa('Matheus', 'Henrique');
console.log(p1);
p1.falar();
p1.beber();
p1.comer();


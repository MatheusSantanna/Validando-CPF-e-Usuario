const  _velocidade = Symbol('velocidade');

class Carro{
    constructor (nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Peugeot');

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}

c1.velocidade = 99;

console.log(c1.velocidade);


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }

    falar(){
        console.log(`${this.nome} esta falando.`)
    }

    comer() {
        console.log(`${this.nome} esta comendo.`)
    }

    beber() {
        console.log(`${this.nome} esta bebendo.`)
    }
}

const p1 = new Pessoa('Matheus', 'Henrique');
p1.nomeCompleto = 'Maiara Machado'
console.log(p1.nomeCompleto);
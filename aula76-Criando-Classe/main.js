class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
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
const p2 = new Pessoa('Marcia', 'Machado');
const p3 = new Pessoa('Ana', 'Clara');
const p4 = new Pessoa('Maiara', 'Machado');

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
p1.falar();
p2.falar();
p3.falar();
p4.falar();
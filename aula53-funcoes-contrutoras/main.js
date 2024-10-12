function Pessoa(nome, sobrenome) {
    const ID = 123456;

    const metodoInterno = () => {
        // exemplo de metodos privados
    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um metodo');
    }
}

const p1 = new Pessoa('Matheus', 'Henrique');
const p2 = new Pessoa('Maiara', 'Machado');
const p3 = new Pessoa('Ana', 'Clara');

p1.metodo();




// factory function -  funçao fabrica
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome, 
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor);
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}`
        },
        peso,
        altura,
        // getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Ana', 'Clara', 4.20, 0.60);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.imc);
p1.nomeCompleto = 'Maiara Machado da Silva'
console.log(p1.nomeCompleto);



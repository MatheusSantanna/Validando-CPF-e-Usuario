const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

const objC = {
    chaveC: 'C'
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto =  function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}
Produto.prototype.aumento =  function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Celular', 7000);

const p2 = {
    nome: 'Computador',
    preco: 10000
}
 Object.setPrototypeOf(p2, Produto.prototype); // funçao para utilizar novamente o prototype molde

 p2.desconto(50);

console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 74
    }
});
p3.aumento(100);

console.log(p3);
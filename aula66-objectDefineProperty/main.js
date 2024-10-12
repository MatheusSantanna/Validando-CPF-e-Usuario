function Produto(nome, preco, estoque) {
    
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, //  mostra a chave
    value: estoque, // o valor da chave
    writable: true, //  pode alterar o valor ou  nao ?
    configurable: true, // pode apagar a chave ou editar ? se esta ação estiver como tru pode ser reinscrito o codigo novamente com o writable com valor diferente que ira funcionar
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, //  mostra a chave
      value: nome, // o valor da chave
      writable: true, //  pode alterar o valor ou  nao ?
      configurable: true,
    },
    preco: {
      enumerable: true, //  mostra a chave
      value: preco, // o valor da chave
      writable: true, //  pode alterar o valor ou  nao ?
      configurable: true,
    },
  });
}

const p1 = new Produto("Camiseta", 20, 5);
console.log(Object.keys(p1));
console.log(p1);

for (let chave in p1) {
  console.log(chave);
}

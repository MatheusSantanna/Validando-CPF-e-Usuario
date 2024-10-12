function Produto(nome, preco, estoque) {
    
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque
  Object.defineProperty(this, "estoque", {
    enumerable: true, //  mostra a chave
    configurable: true, 
    get: function(){
        return  estoquePrivado;
    },
    set: function(valor) {
        if (typeof valor !== 'number') {
            throw new TypeError('Valor invalido')
        }

        estoquePrivado = valor;
    }
  });
}

// const criaProduto = (nome) => {
//     return {
//         get nome(){
//             return nome;
//         },
//         set nome(valor){
//             nome = valor;
//         }
//     };
// }

  const p1 = new Produto("Camiseta", 20, 5);
  p1.estoque = 'Matheus';

  console.log(p1.estoque);

// const p2 = criaProduto('Camiseta');
// p2.nome = 'QUalquer coisa'
// console.log(p2.nome);
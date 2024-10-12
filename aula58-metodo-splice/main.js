const nomes = ['Matheus', 'Maiara', 'eduardo', 'gabriel', ' Ricardo'];

// nomes.splice('indice', delete, elementos, elementos,); explicação de como usar splice
// indice: em qual indice quer começar a funçao
// delete: se precisar deletar indicar a quantidade que vai ser removido apos a escolha do indice
// elementos: para adicionar como a função push

// pop
const removidos = nomes.splice(-1, 1);

// shift
const removidos1 = nomes.splice(0, 1);

//push
const adicionados = nomes.splice(nomes.length, 0, 'Ana Clara', 'Marcia', 'Zé');

// unshift

const adicionados1 = nomes.splice(0, 0, 'Arthur')



console.log(nomes, removidos, removidos1);


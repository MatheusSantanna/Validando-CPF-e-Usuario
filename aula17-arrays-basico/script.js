const nomes = ['Matheus', 'Maiara', 'Theo'];

delete nomes[1]; // exclui permanentemente o elemento do array
console.log(nomes[1]);

nomes.shift(); // remove o elemento do incio do array
const removido = nomes.pop(); // remove o elemento final do array
console.log(nomes);
console.log(removido);


nomes.unshift('Vinicius');//adiciona um elemento no começo do array;
nomes.unshift('flavio');

nomes[0] = 'Theo'; // altera o elemento do array;
nomes[3] = 'Clara'; // adicionando um novo elemento no array;

console.log(nomes[0]);
console.log(nomes[3]);

nomes.push('Marcia');// adicionando novos elementos ao final do array
nomes.push('Arthur');



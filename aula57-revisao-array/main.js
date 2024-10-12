
const nomes = new Array('Matheus', 'Maiara', 'Ana Clara')
nomes[2] = 'Ana';
delete nomes[2];

console.log(nomes);
//---------------
const nomes2 = ['Matheus', 'Maiara', 'Ana Clara'];

nomes2[2] = 'Ana';
nomes2.push('Clara');

console.log(nomes2);
// --------------
const nomes3 = ['Matheus', 'Maiara', 'Ana Clara'];
const novo = [...nomes3];

const removidoFinal = novo.pop(); // removi um elemento do final do array
novo.push('Entrei'); // adicionei um elemento ao final do array
const removidoInicio = novo.shift(); // // removi um elemento do começo do array e alterei os indeces do array
novo.push('Entre de novo'); // adicionei um elemento ao final do array
console.log(nomes3); // array inicial e que nao sera alterado
console.log(novo); // espelhamento do array, que sera alterado
console.log(nomes.length); // revelando quantos elementos eu tenho dentro do array
console.log(removidoFinal); // mostrando array que foi armazenado na vareavel depois de retiralo com a função pop()
console.log(removidoInicio); // mostrando array que foi armazenado na vareavel depois de retiralo com a função shift()
console.log(novo, removidoFinal, removidoInicio, nomes3); // revelando todos os arrays
// --------------
const nomes4 = ['flavio', 'zé', 'marcia', 'arthur', 'vini'];
const novo2 = nomes4.slice(1, 4); // fatiei o array e armazenei na variavel novo somente os que indiquei atravez da condição numerica dos indices

console.log(novo2);
// --------------------
const nome = 'Matheus Henrique Santanna da Rosa';
const nome1 = nome.split(' ');// pegando uma string e convertendo para um array com elementos deparados.
console.log(nome1);
//-------------------
const nome2 = ['Matheus', 'Arthur', 'Maiara'];
const nome3 = nome2.join(' ');// convertendo o array criado para um elemento unico com a função join() -  dentro dos parentes pode escolher o separador que quer utilizar - ex: virgula, espaço, barra, etc
console.log(nome3);







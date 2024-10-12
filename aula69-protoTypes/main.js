/*javascript é baseasdo em prototipos para passar prorpriedades e metodos de um objeto para o outro

Definição de prototipo
Prototipo é o termoi usado para se referir ao que foi criado pela primeira vez,
servindo de modelo ou molde para gfuturas produçoes

Todos os obejtos tem uma referencia interna para um prototipo (pronto)
que vem da propriedade protitype da funçao construtora que foi usada para
cria-lo. Quando tentamos acessar um membro no proprio objeto e depois a cadeia
de prototipos é usada ate o topo (null) até encontrar (ou não) tal membro.
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'original', this.nome + ' ' + this.sobrenome;
}

 Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
 };

const pessoa1 = new Pessoa('Matheus', 'Henrique ');
const pessoa2 = new Pessoa('Maiara', 'Machado ');
const data = new Date();

console.dir(pessoa1);
console.dir(pessoa2, pessoa2.estouAqui);
console.dir(data);

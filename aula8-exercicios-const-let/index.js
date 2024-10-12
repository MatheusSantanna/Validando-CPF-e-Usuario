const nome = 'Théo';
const sobrenome = 'Santanna';
const idade = 1;
const peso = 4.0;
const altura = 0.90;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2026 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} ano, pesa ${peso}kg`);
console.log(`Tem ${altura} de comprimento e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);


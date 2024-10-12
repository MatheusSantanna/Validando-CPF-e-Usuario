


const nome = prompt('digite seu nome');
document.body.innerHTML += `Seu nome é ${nome}<b />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <b />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <b />`;
document.body.innerHTML += `Qual o primeiro indice da letra a no seu nome: ${nome.indexOf('a')} <b />`;
document.body.innerHTML += `Qual o ultimo indice da letra a no seu nome: ${nome.lastIndexOf('a')} <b />`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são ${nome.slice(6, 8)} <b />`;
document.body.innerHTML += `As palavras do seu nome são ${nome} <b />`;
document.body.innerHTML += `Seu nome com letra maiusculas: ${nome.toUpperCase()} <b />`;
document.body.innerHTML += `Seu nome com letra minusculas: ${nome.toLowerCase()} <b />`;




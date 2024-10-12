// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(tresHoras + umDia);

// const data = new Date(2024, 6, 8, 21, 35, 40);
// const data = new Date('2024-06-08 21:40:59');
// const data = new Date('2024-06-08 21:40:59');
// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('MS', data.getMilliseconds());
// console.log('Dia da semana', data.getDay());
// console.log(data.toString());
// console.log(Date.now());
function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data) {
   const dia = zeroEsquerda(data.getDate());
   const mes = zeroEsquerda(data.getMonth() + 1);
   const ano = zeroEsquerda(data.getFullYear());
   const hora = zeroEsquerda(data.getHours());
   const min = zeroEsquerda(data.getMinutes());
   const seg = zeroEsquerda(data.getSeconds());
   const diaSemana = data.getDay();
   return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}  ${diaSemana}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
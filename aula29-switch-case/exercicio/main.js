// const container = document.querySelector('.container h1');

// const data = new Date();

// container.innerHTML = criaData(data);

// function imprimiDataTexto(diaSemana) {

//     let diaSemanaTexto;

//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo'
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda-feira'
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça-feira'
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-feira'
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-feira'
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-feira'
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sabado'
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = '';
//     } 
// };

// function imprimeMesTexto(mes) {

//     let mesTexto;

//     switch(mes) {
//         case 0:
//             mesTexto = 'Janeiro';
//             return mesTexto;
//         case 1:
//                 mesTexto = 'Feveiro';
//                 return mesTexto;
//         case 2:
//             mesTexto = 'Março';
//             return mesTexto;
//         case 3:
//             mesTexto = 'Abril';
//             return mesTexto;
//         case 4:
//             mesTexto = 'Maio';
//             return mesTexto;
//         case 5:
//             mesTexto = 'Junho';
//             return mesTexto;
//         case 6:
//             mesTexto = 'Julho';
//             return mesTexto;
//         case 7:
//             mesTexto = 'Agosto';
//             return mesTexto;
//         case 9:
//             mesTexto = 'Setembro';
//             return mesTexto;
//         case 9:
//             mesTexto = 'Outubro';
//             return mesTexto;
//         case 10:
//             mesTexto = 'Novembro';
//             return mesTexto;
//         case 11:
//             mesTexto = 'Dezembro';
//             return mesTexto;    
//     }
// };


// function criaData (data) {
//     const diaSemana = data.getDay();
//     const mes = data.getMonth();
    
//     const diaSemanaTexto = imprimiDataTexto(diaSemana);
//     const mesTexto = imprimeMesTexto(mes);
//     return `${diaSemanaTexto}, ${diaSemana} de ${mesTexto} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`

// }


// const container = document.querySelector('.container h1');
// const data = new Date();
// container.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'}); 

const container = document.querySelector('.container h1');

const data = new Date();

container.innerHTML = criaData(data);

function imprimiDataTexto (diaSemana) {
    const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
    return dias[diaSemana]
};

function imprimeMesTexto(mes) {
      const meses = ['Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return meses[mes]; 
};

function criaData (data) {
    const diaSemana = data.getDay();
    const mes = data.getMonth();
    
    const diaSemanaTexto = imprimiDataTexto(diaSemana);
    const mesTexto = imprimeMesTexto(mes);
    return `${diaSemanaTexto}, ${diaSemana} de ${mesTexto} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
};
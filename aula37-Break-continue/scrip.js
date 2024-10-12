const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let numero of numeros) {
//     if(numero === 2 || numero === 5) {
//         console.log('pulei o numero 2 e 5')
//         continue; // ela continua a estrutura de repetição pulando o numero da condição escrita (se a condição é 2 ela continua a repitição a partir do 3)
//     }

//     if ( numero === 7) {
//         console.log('Aqui pulei da barca');
//         break;
//     }

//     console.log(numero);
// }

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];
    if(numero === 2 || numero === 5) {
        console.log('pulei o numero 2 e 5');
        i++;
        continue; // ela continua a estrutura de repetição pulando o numero da condição escrita (se a condição é 2 ela continua a repitição a partir do 3)
    }

    if ( numero === 7) {
        console.log('Aqui pulei da barca');
        break;// sai do laço de repitição
    }

    i++;

    console.log(numero);
}

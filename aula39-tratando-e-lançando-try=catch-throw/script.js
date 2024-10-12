// try {
//     console.log(naoExiste);
// } catch (e) {
//     console.log('Nao existe');
// }

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisao ser numeros');
    }

    return x + y ;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));

} catch (error) {
    console.log('Algo errado');
}


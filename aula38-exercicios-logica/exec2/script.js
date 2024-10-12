function ePaisagem (largura, altura) {
    if (largura > altura) {
        return 'modo paisagem ' +  true;
    } else {
        return 'nao paisagem ' + false;
    }
}
//******************** */
console.log(ePaisagem(1200,500))


function eImagem (largura, altura) {
    return largura > altura;
}

console.log(eImagem(1200, 500))
// *********************
const ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem2(1200, 1900))
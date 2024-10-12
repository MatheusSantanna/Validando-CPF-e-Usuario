const pontuacaoUsuario = 999;

// if (pontuacaoUsuario >= 1000){
//     console.log('Usuario VIP');
// } else {
//     console.log('Usuario normal');
// }

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = 'pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
// a operaçao ternaria (?) usamos para a afirmação verdadeira e a (:) para negação 

function checaUsuario (pontos) {
    const nivelUsuario = pontos >= 1000 ? 'Usuario VIP' : 'Usuario normal';
    console.log(nivelUsuario);
}
checaUsuario(999);
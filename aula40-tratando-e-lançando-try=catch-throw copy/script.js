// instanceOf verifica se a variavel é uma estancia Da funçao deseja- neste caso a funçao Date = data é uma variavel da funçao Date?


function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('esperando instancia de Date');
    }

  

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {

    });
}
try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch (error) {
    console.log(error);
} finally {
    console.log('tenha um bom dia');
}

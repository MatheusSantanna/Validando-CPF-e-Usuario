function mostraHoras () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hours12: false
    }); 
}

const timer = setInterval( () => {
    console.log(mostraHoras()); // função que proporciona um timer 
}, 1000);


setTimeout(() => {
    clearInterval(timer); // função para parar o timer
}, 10000);

setTimeout( () => {
    console.log('Ola mundo');
}, 5000)
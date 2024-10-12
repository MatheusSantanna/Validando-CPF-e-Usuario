const terminei = () => {

    const criaHoraSegundos = (segundos) => {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const cronometro = document.querySelector('.cronometro');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    
    let segundos = 0;
    let timer;
    
    function cronometrar() {
        timer = setInterval( () => {
            segundos++;
            cronometro.textContent = criaHoraSegundos(segundos);
        }, 1000)
        
    };
    document.addEventListener('click', (e) => {
        const el = e.target;
    
        if(el.classList.contains('iniciar')) {
            clearInterval(timer);
            cronometrar();
            cronometro.classList.remove('pausado');
        }
    
        if(el.classList.contains('pausar')) {
            clearInterval(timer);
            cronometro.classList.add('pausado');
        }
    
        if(el.classList.contains('zerar')){
            clearInterval(timer);
            segundos = 0;
            cronometro.classList.remove('pausado');
            cronometro.textContent = '00:00:00';
        }
    });
}
terminei();

    


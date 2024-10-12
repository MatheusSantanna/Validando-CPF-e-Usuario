((idade, peso, altura) => {
    
    const sobreNome = "Henrique";
    const falaOi = (nome) => {
        return nome + ' ' + sobreNome;
    }

    const falaNome = () => {
        console.log(falaOi('Matheus'));
    }

    falaNome();
    console.log(idade, peso, altura)

})(27, 100, 1.86);



/*
operadores logicos
&& = AND = E
|| = OR = ou
! = NOT = NÃO - reverte o valor que for - exemplo: se true recebe o nao (!) ele vira false - !true = false

*/
function login (usario, senha){
    const usario1 = 'Matheus';
    const senha1 = '12345';
    const vaiLoga = usario === usario1 && senha === senha1;
    if(vaiLoga === true){
        console.log('login realizado');
    }else{
        console.log('Senha ou usuario incorreto');
    }
}


function saiDeCasa2 (tempo, dinheiro){
    if(tempo || dinheiro === true){
        console.log('sai de casa');
    }else{
        console.log('fica em casa');
    }
}


login('Maiara', '12345');
saiDeCasa2(true, false);
function darBomDia (horas){
    if(horas >= 0 && horas < 12 ){
        console.log('Bom dia');
}else if(horas >= 12 && horas <= 17){
    console.log('Boa tarde');
}else if(horas >= 18 && horas <= 23){
    console.log('Boa noite');
}else{
    console.log('Ola tudo bem?')
}

};

darBomDia(10);
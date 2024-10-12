class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // metodo de instancia funciona somente para os novos objetos criado atraves da classe
    ligar() {
        if(this.ligado) {
            console.log(`${this.tv} ja ligado`);
            return;
        }
        
   }
   // metodo de instancia funciona somente para os novos objetos criado atraves da classe
   aumentarVolume() {
        this.volume += 10; 
    }
    // metodo de instancia funciona somente para os novos objetos criado atraves da classe
    baixarVolume() {
        this.volume -= 10;
    }
    // metodo estatico funciona para a classe em si alterando tudo que tem na classe
    static trocaPilha() {
        console.log('cheguei aqui')
    }
    
}

const controle = new ControleRemoto('Sansung');
ControleRemoto.trocaPilha();
console.log(controle);
   

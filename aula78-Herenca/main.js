class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} ja ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} ja desligado`);
            return;
        }
        this.ligado = false;
    }
}


class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi, bateria) {
        super(nome);
        this.temWifi = temWifi;
        this.bateria = bateria;
    }

    ligar() {
        if(this.bateria >= 30) {
            this.ligado = true;
            console.log(`${this.nome} Ja ligado`);
            return;
        }      
    }
    
}

const s1 = new Smartphone('Iphone', 'Cinza', '15');

const t1 = new Tablet('Ipad', true, 30);
t1.ligar();
t1.ligar();
console.log(t1);



class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
    }); 
}

isSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
}

geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
}

 static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for(let string of cpfSemDigitos) {
        total += reverso * Number(string);
        reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
}

valida() {
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
    this.geraNovoCpf();

    return this.novoCPF === this.cpfLimpo;
};    

}

// const validacpf = new ValidaCPF('019.819.680-67');
 
//  if(validacpf.valida()) {
//     console.log('CPF valido');
//  } else {
//     console.log('CPF invalido');
//  }
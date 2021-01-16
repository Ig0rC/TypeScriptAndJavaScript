function ValidaCPF (cpf){
    this.nome = 'Igor';
    Object.defineProperty(this, 'limpaCPF', {
        enumerable: true,
        get: () => {
            return cpf.replace(/\D+/g, '');
        }
    });
}



ValidaCPF.prototype.valida = function () {
    if(typeof this.limpaCPF === 'undefined') return false;
    if(this.limpaCPF.length !== 11) return false;
    if(this.isSequencia()) return false;
    const parcialCPF = this.limpaCPF.slice(0, -2);

    const digitoOne = this.criaDigito(parcialCPF);
    const digitotwo = this.criaDigito(parcialCPF + digitoOne)

    const novoCPF = parcialCPF + digitoOne + digitotwo;

    if(novoCPF !== this.limpaCPF) return false;
    return true;
}

ValidaCPF.prototype.criaDigito = function (parcialCPF) {
    const arrayCPF = Array.from(parcialCPF);

    let regressivo = arrayCPF.length + 1;
    const calc = arrayCPF.reduce((ac, val) =>{
        ac += (regressivo * (Number(val)) )
        regressivo--;
        return ac;
    }, 0);
    
    const digito = 11 - (calc % 11);
    
    return digito > 9 ? '0' : String(digito);
}


ValidaCPF.prototype.isSequencia = function () {

    const sequencia = this.limpaCPF[0].repeat(this.limpaCPF.length);
    return sequencia === this.limpaCPF;
}

const cpf = new ValidaCPF('454.222.840-05');

if(cpf.valida()){
    console.log('CPF válido');
} else {
    console.log('CPF inválido')
}
let cpf = '705.484.450-52';
const clearCPF = cpf.replace(/\D+/g, '');
arrayCpf = Array.from(clearCPF);

let cont = 11;
const calcOne = arrayCpf.reduce((acumulador, el, index) => {
    let tt = 0;
    if(index < 9) tt = --cont;
    return acumulador += (Number(el) * tt);
}, 0);

cont = 12;
const calcTwo = arrayCpf.reduce((ac, el, index) => {
        let tt = 0;
        if(index < 10) tt = --cont;
        return ac += (Number(el) * (tt));
    }, 0);


function ValidationCPF(cpf, position) {
    let privateVF = 0;
    this.cpf = cpf;
    this.position = position;
    Object.defineProperty(this, 'CF', {
        enumerable: true,
        configurable: false,
        set: (valor) => {
            const tt = 11 - (valor % 11);
            const validation = Number(this.cpf[this.position]) === tt;
            privateVF = validation;
        },
        get: () => {
            return privateVF;
        }
    });

}

const firstValidation = new ValidationCPF(clearCPF, 9);
const secondValidation = new ValidationCPF(clearCPF, 10);
firstValidation.CF = calcOne;
secondValidation.CF = calcTwo;


if(firstValidation && secondValidation){
    console.log('CPF Válido');
}
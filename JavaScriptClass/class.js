class Pessoa {
    //se eu quiser passa parametros tenho que criar constructor, exemplo:
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome; 
    };

    falar () {
        console.log(`${this.nome} esta falando.`)
    };

    comer () {
        console.log(`${this.nome} esta comendo.`)
    };

    beber () {
        console.log(`${this.nome} esta bebendo.`)
    };
}

function Pessoa2 (nome, sobrenome ){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome}, está falando.`)
}

const p1 = new Pessoa('luiz', 'Miranda');
const p2 = new Pessoa2('Igor', 'Miranda');

console.log(p1)
console.log(p2)

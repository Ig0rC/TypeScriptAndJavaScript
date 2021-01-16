//Super Class

class DispositivoEletronico {
    constructor (nome) {
        this.nome = nome;
        this.ligado = false;
    };

    ligar () {
        if(this.ligado) {
            console.log('LIGADO')
            return;
        };
        this.ligado = true;
    };

    desligar () {
        if(!this.ligado) {
            console.log('DESLIGADO')
            return;
        };
        this.ligado = false;
    };

}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Iphone', 'Black', 'S10');

console.log(s1)

// const _velocidade = Symbol('Velocidade');

// class Carro {
//     constructor(nome){
//         this.nome = nome;
//         this[_velocidade] = 0;
//     };


//     get velocidade () {
//        return this[_velocidade];
//     }

//     set velocidade (veloc){
//         if(typeof veloc !== 'number') return console.log('valor inválido');
//         if(veloc > 100 || veloc <= 0) return console.log('Limit');
//         this[_velocidade] = veloc;
//     }
//     acelerar () {
//         if(this[_velocidade] >= 100) return console.log('limite')     
//         this[_velocidade] += 1;
//     }
    
//     freiar () {
//         if(this[_velocidade] <= 0) return;
//         this[_velocidade]--;
//     }
    
// }

// const carOne = new Carro('Fusca');

// // for(let i = 0; i < 200; i++){
// //     carOne.acelerar();
// // };


// carOne.velocidade = 99
// console.log(carOne.velocidade);


// class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome,
//         this.sobrenome = sobrenome;
//     }

//     get nomeCompleto(){
//         return `${this.nome} ${this.sobrenome}`
//     }

//     set nomeCompleto(valor){
//         valor = valor.split(' ');
//         this.nome = valor.shift();
//         this.sobrenome = valor.join(' ');
    
//     }
// }

// const p1 = new Pessoa('Luiz', 'Miranda');

// p1.nomeCompleto = 'Igor Cardoso Silva';
// console.log(p1.nomeCompleto);
// console.log(p1.sobrenome);


/*
    JavaScript é baseado em protótipos para passar propriedades e
    métodos de um objeto para outro.

    Defenição de protótipo: 
    O protótipo é o termo usado para se referiri ao que foi criado
    pela primeira vez, servindo de modelo ou molde para fulturas produções

    Todos os objetos tem uma referência interna para um protótipo
    (__proto__) que vem da propriedade prototype da função construtora
    que foi usada para criá-lo. Quando tentamos acessa um membro de 
    um objeto, primeiro o motor do JS vai tentar encontrar este membro
    no próprio objeto e depois a cadeia de protótipos é usada até o topo
    (null) até encontrar (ou não) tal membro.
*/ 

// function Pessoa (name, surname){
//     this.name = name;
//     this.surname = surname;
// }

// Pessoa.prototype.ok = function () {
//     return 'ok'
// }


// const personOne = new Pessoa('Igor', 'C.');


//Herança de objeto: 

// const ObjA = {
//     chaveA: 'A',
// }

// const ObjB= {
//     chaveB: 'B',
// }

// const objC = new Object();
// objC.chaveC = 'C';


// Object.setPrototypeOf(ObjB, ObjA);
// Object.setPrototypeOf(objC, ObjB);


function Products (name, price){
    this.name = name;
    this.price = price;
}

Products.prototype.desconto = function(p){
    this.price = this.price - ((this.price *p) / 100);
};

Products.prototype.aumenta = function(p){
    this.price = this.price + ((this.price *p) / 100);
};

const productOne = new Products('Camiseta', 50);

productOne.desconto(20);
console.log(productOne)
const productTwo = {
    name: 'Caneca',
    price: 20
}

Object.setPrototypeOf(productTwo, Products.prototype);
productTwo.aumenta(10);
console.log(productTwo);


const wtf = Object.create(Products.prototype, {
    price: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },  
    name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Eu'
    }
});
// p3.price = 113
wtf.aumenta(10);
console.log('ok', wtf)
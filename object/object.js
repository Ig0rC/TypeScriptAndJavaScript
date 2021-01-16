// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// }


/* 
    Formas de chamar objeto
*/

// console.log('chave de ponto')
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// //or
// console.log('chave de cochete');
// console.log(pessoa['nome']);
// console.log(pessoa['sobrenome']);
// //or
// console.log('chave de cochete e váriavel');
// const key = 'nome';
// console.log(pessoa[key]);



/*
    Usando construtor object
*/

const pessoaOne = new Object(); // Constructor;
pessoaOne.nome = 'Igor';
pessoaOne.sobrenome = 'Cardoso';


const pessoaTwo = {
    nome: 'Jao',
    sobrenome: '4lane'
}

console.log('pessoaOne', pessoaOne ,'PessoaTwo', pessoaTwo);

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}
// const nome = 'nome';
// delete pessoa.nome;
// delete pessoa['nome'];
// delete pessoa[nome];
// console.log(pessoa)

// const sla = new Object();
// sla.sobrenome = 'Cardoso'
// sla.nome = 'Igor',
// sla.age = '12',
// sla.fale = function () {
//     const nome = this.nome;
//     return (`Meu nome é ${nome}, minha idade é ${this.q}`)
// }
// sla.dtNasc = function () {
//     const data = new Date();
//     return data.getFullYear() - this.age;
// }



// console.log(sla.fale());



/* Constructor object */

// const nameList = new Array();

// function Person(name, surname){
//     this.name = name;
//     this.surname = surname;


//     Object.freeze(this);

// }
// const $name = 'Igor';
// const $surname = 'Cardoso';

// const personOne = new Person($name, $surname);
// Object.freeze(personOne);
// console.log('Variável com construtor');
// console.log(personOne)


// console.log('Tentando atribuir com construtor');
// personOne.name = 'Jao'
// console.log(personOne);

// personOne.name = $name;
// personOne.surname = $surname
// nameList.push({ name: personOne.name, surname : personOne.surname });

// console.log(nameList)





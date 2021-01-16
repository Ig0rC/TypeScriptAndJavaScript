// arguments q ue sustenta todos os argumentos enviado por parameters;
// só funciona somente com funções criada com 'function fc'

function fc (a, b, c){
    let total = 0;
    for (let argument of arguments){
        total += argument
    }

    console.log(total, a, b, c);
}

fc( 1, 2, 3, 4, 5, 6, 9); // argument

/*
    Quando não enviamos argument para o váriavel , porém ela esperando
    como contorna para não obter erro
*/

console.log('error sum')
function erroSum(a, b){
    console.log(a + b);
}

erroSum(2);

console.log('corrigindo sum')
function sum(a, b){
    b = b || 0;
    console.log(a + b);
}

sum(2);

console.log('methods mais moderno de correção ')
function sumModern(a, b = 2, c = 2){
    console.log(a + b + c);
}

sumModern(2, undefined, 10);


/*
    destruturação
*/

console.log('Object Destructuring')

function funcaoObjeto ({ nome, sobrenome, idade }){
    console.log(nome, sobrenome, idade)
}

let obj = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 21
};

funcaoObjeto(obj);

console.log('Array Destructuring')

function fucArray ([ valueOne, valueTwo, valueThree ]){
    console.log(valueOne, valueTwo, valueThree);
}

const arr = ['Igor Cardoso', 'da Silva', 30];

fucArray(arr);


/*
    rest operator
*/

const calc = function (operator, acumulador, ...numbers){
    console.log(operator, acumulador, ...numbers);

    for(let number of numbers){
        if (operator === '+') acumulador += number;
        if (operator === '-') acumulador -= number;
        if (operator === '/') acumulador /= number;
        if (operator === '*') acumulador *= number;
    }

    console.log(acumulador)
}

calc('+', 1, 20, 30, 40, 50);

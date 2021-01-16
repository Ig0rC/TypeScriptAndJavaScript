// Declaração de função( function hoisting );

/*
 Não importa onde você chamar a função no JavaScript, o enginer sempre
 vai elevar a função ao topo.
*/
 
helloWorld.call();

function helloWorld(){
    console.log('Hello World');
}

/*

 First-Class objects (Objetos de primeira Classe);
 Function Expression

 isso que dizer que uma variável recebe uma function com data,
 exemplo:
*/

const souUmDado = function (){
    console.log('Sou um dado.');
}


function executaFuncao(func){
    func();
}

executaFuncao(souUmDado);


/*
    Arrow Function
*/
console.log('Arrow Function');
const functionArrow = () => {
    console.log('sou uma function');
};

functionArrow();




/*
    Dentro de um object
*/
console.log('');
console.log('Object');
const object = {
    falar: function (test){
        console.log(`Function dentro de um Object ${test}`);
    },
    gritar () {
        console.log('ALLLLLLLLLLLLLLLL')
    }
}


object.falar('Teste')
object.gritar();
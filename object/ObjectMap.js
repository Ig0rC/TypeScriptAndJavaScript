// const pessoas = [
//     { id: 3, nome: 'Luiz'},
//     { id: 2, nome: 'Maria'},
//     { id: 1, nome: 'Igor'},
// ];


// const novasPessoas = {};

// for (const {id, nome} of pessoas){
//     novasPessoas[id] = { id, nome }
// };

// console.log(novasPessoas);

// const novasPessoas = new Map();

// for (const pessoa of pessoas){
//     const { id } = pessoa;
//     novasPessoas.set(id, { ... pessoa});
// };

// console.log(novasPessoas)



// // novasPessoas.delete(2)

// for(const pessoas of novasPessoas.keys()) {
//     console.log(pessoas);
// }

/*
    Usando o objeto Map
*/

// const myMap = new Map();

// let keyString = 'Uma string',
//     keyObj = {},
//     keyFunc = function () {};

// // Configurando Valores
// myMap.set(keyString, "valor asasociado com 'um string'");
// myMap.set(keyObj, "valor associado com keyObj");
// myMap.set(keyFunc, "valor associado com keyFunc");


// console.log(myMap.size)

// ;


// console.log(myMap.get(keyString), myMap.get(keyObj) ,myMap.get(keyFunc))

// console.log(myMap.get("uma string"))


/*
    Usando NaN como Map keys
*/


// const myMap = new Map();
// myMap.set(NaN, "not a number");

// console.log(myMap.get(NaN))

// let otherNaN = Number("foo");
// console.log(myMap.get(otherNaN)); // "not a number"



/*
Iterando Maps com for..of
 */

const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "um");
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}
const numbers = [1, 2, 3, 4, 5];
let [ numberOne, numberTwo,  , numberFour ] = numbers; // destructuring
console.log(numberOne, numberTwo, numberFour);

let a = 'A'; //b
let b = 'B'; //c
let c = 'C'; //a

//assignment
const letras = [b, c, a];

[a, b, c] = letras;
console.log(a, b, c);

// rest operator

[ numberOne, numberTwo, ...rest] = numbers; // destructuring
console.log(numberOne, numberTwo, rest);

//spread operator
const [...spread] = numbers;
console.log(spread)
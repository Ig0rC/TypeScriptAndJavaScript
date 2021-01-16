//Filter, map e Reduce.


// Retorne os números maiores que 10
// const number = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const filterArray = number.filter( el =>  el > 10);

// console.log(filterArray);





/*
    maior do que 5 letraas
    maior do que 50 anos
    retorne as pessoas cujo nome termina com A
*/
// const pessoa = [
//     { nome: 'Luiz',     idade: 62}, 
//     { nome: 'Maria',    idade: 23},
//     { nome: 'Icaro',    idade: 15},
//     { nome: 'Eduardo',  idade: 55},
//     { nome: 'Letícia',  idade: 19},
//     { nome: 'Rosana',   idade: 23},
//     { nome: 'Marly',    idade: 52},
//     { nome: 'feia',     idade: 10}
// ]


// const pessoaComNomeGrande = pessoa.filter((valor) => {
//     return ( 
//         valor.nome.length > 5 
//             || 
//         valor.idade < 50 
//             || 
//         valor.nome .toLowerCase().endsWith('a')
//     );
// });

// console.log(pessoaComNomeGrande);



// const number = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numberTwo = number.map(function(valor, indice, array){
//     return valor * 2
// });

// console.log(numberTwo);


// const pessoa = [
//     { nome: 'Luiz',     idade: 62}, 
//     { nome: 'Maria',    idade: 23},
//     { nome: 'Icaro',    idade: 15},
//     { nome: 'Eduardo',  idade: 55},
//     { nome: 'Letícia',  idade: 19},
//     { nome: 'Rosana',   idade: 23},
//     { nome: 'Marly',    idade: 52},
//     { nome: 'feia',     idade: 10}
// ]


// const returnPessoa = pessoa.map(valor => valor.nome);

// const age = pessoa.map(values => {
//     delete values.nome;
//     return values;
// });

// const ageOther = pessoa.map(values => ({ idade: values.idade}));

// const id = pessoa.map((values, index) => {
//     const copy = {...values};
//     copy.id = ++index;
//     return copy;
// })
// console.log(pessoa)




// const total = number.reduce(function(acumulador, valor, indice, array){
//     acumulador += valor;
//     return acumulador;
// }, 0); valor inicial acumulador

// const pares = number.reduce(function(acumulador, valor, indice, array){
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);


// const dobro = number.reduce(function(acumulador, valor, indice, array){
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []); 



// const pessoa = [
//     { nome: 'Luiz',     idade: 62}, 
//     { nome: 'Maria',    idade: 23},
//     { nome: 'Icaro',    idade: 15},
//     { nome: 'Eduardo',  idade: 55},
//     { nome: 'Letícia',  idade: 19},
//     { nome: 'Rosana',   idade: 23},
//     { nome: 'Marly',    idade: 52},
//     { nome: 'feia',     idade: 10}
// ]



// const maisVelha = pessoa.reduce(function(acumulador, valor){
//     return acumulador.idade > valor.idade ? acumulador : valor;
// }); 



// console.log(maisVelha); 


/*
  Retorne a soma do dobros de todos os pares
  filtrar pares
  dobrar os valores;
  reduzir (somar tudo);
*/

const number = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = number
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac += valor);

console.log(numerosPares);
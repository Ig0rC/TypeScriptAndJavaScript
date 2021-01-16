/*
    Return value
    function end
*/  

function sum(a, b){
    return a + b;
}


//

function createMulti(multi){
    return function (n){
        return n * multi
    }
};

const duplica = createMulti(2);
const triplica = createMulti(3);
const quadriplica = createMulti(4);

console.log(duplica(3));
console.log(duplica(2));
console.log(duplica(10));

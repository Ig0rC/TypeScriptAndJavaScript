/*
    Object.defineProperty() => Mudar apenas um attributes do construtor;

*/


function Product(name, price, stock) {
    Object.defineProperty(this, 'stock', {
        enumerable : true,  // Mostrar a Chave ?
        value : stock,  // valor 
        writable: false, // permissão alteração
        configurable: true // pode reconfigurar a chave ?
    });
    Object.defineProperties(this, {
        name: {
            enumerable : true,  // Mostrar a Chave ?
            value : name,  // valor 
            writable: false, // permissão alteração
            configurable: true // pode reconfigurar a chave ?
        },
        price: {
            enumerable : true,  // Mostrar a Chave ?
            value : price,  // valor 
            writable: false, // permissão alteração
            configurable: true // pode reconfigurar a chave ?
        },
    })
}


const productOne = new Product('Blusa', 20, 30);

//Writable 

productOne.stock = 20000;
console.log(productOne)

//configurable 

delete productOne.stock;
console.log(productOne);

//enumerable

console.log(Object.keys(productOne));

for(let chave in productOne){
    console.log(chave)
}

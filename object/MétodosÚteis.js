/*

 COPIAR OUTROS OBJETOS

*/



let product = { name: 'Sorvente', price: 20};
let productOther = {
    ...product,
    material: 'Ferro'
};

product.name = 'Feijao'

console.log(productOther)
console.log(product)



 product = { name: 'Sorvente', price: 20};
 productOther = Object.assign({}, product, {material : 'feijao'})
product.name = 'Feijao'

console.log(productOther)
console.log(product)


 product = { name: 'Sorvente', price: 20};
 productOther = { 
        name: product.name, 
        price: product.price, 
        material: 'ferro'
};

console.log(productOther)
console.log(product)

/*

 Buscar key do object

*/
 
 product = { name: 'Sorvente', price: 20};
 productOther = { 
        name: product.name, 
        price: product.price, 
        material: 'ferro'
};

console.log(Object.keys(productOther))

/*

 Buscar obter o próprio descritor de propriedade

*/

Object.defineProperty(product, 'name', {
    writable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(product, 'name'))


/*

 Buscar obter o valor do objeto

*/


console.log(Object.values(productOther))

/*

 Buscar entries, valor e key

*/

for (let [key, values] of Object.entries(productOther)){
    console.log(key, values);
}
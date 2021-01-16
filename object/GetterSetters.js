function Product(name, price, stock) {
    this.name = name;
    this.price = price;

    let estoquePrivado = stock;
    Object.defineProperty(this, 'stock', {
        enumerable : true,  // Mostrar a Chave ?
        configurable: true,
        get: function () {
            return estoquePrivado;
        }, // chamar ?
        set: function(valor){
           if(typeof valor !== 'number'){
            console.log('bad value');
               return;
           } 
           estoquePrivado = valor;
        }
    });
}

// const productOne = new Product('Camiseta', 20, 3);
// productOne.stock = '500';
// console.log(productOne.stock)


// Factory Function

function createProduct(name) {
    return{
        get nome (){
            return name
        },
        set nome (values) {
            // values = values.replace('Cardoso', '');
            name = values;
        }
    }
}

const productOne = createProduct('Camiseta');
productOne.nome = 'Igor Cardoso';
const mostrar = productOne.nome;
console.log(mostrar);
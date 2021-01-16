function Produto(name, price){
    this.name = name;
    this.price = price;
}

Produto.prototype.aumento = function(quantia){
    this.price += quantia;
}

Produto.prototype.desconto = function(quantia){
    this.price += quantia;
}

function Camiseta(name, price, cor){
    Produto.call(this, name, price);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);

Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
    this.price = this.price + ( this.price * (percentual / 100))
}

const gen = new Produto('Gen', 10)
const camiseta = new Camiseta('Regata', 7.5, 'Preta');

camiseta.aumento(10);

// console.log(camiseta, gen)


function Caneca (name, price, material, stock){
    Produto.call(this, name, price);
    this.material = material;

    Object.defineProperty(this, 'stock',{
        enumerable: true,
        configurable: false,
        get () {
            return stock
        },
        set (value) {
            stock = value;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Camiseta;


const can = new Caneca('Bude', 100, 'Carne', 10);

can.stock = 300
console.log(can)


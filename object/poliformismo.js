// SuperClass 
function Conta (agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if(valor > this.saldo) {
        return console.log(`Saldo insuficiente R$${this.saldo}`);
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c? ${this.agencia}/${this.conta}`)
    console.log(`Saldo: R$${this.saldo.toFixed(2)}`)

}

const contaOne = new Conta(11, 22, 10);

function CurrentCount (agencia, conta, saldo, limit){
    Conta.call(this, agencia, conta, saldo);
    this.limit = limit;
}

CurrentCount.prototype = Object.create(Conta.prototype);
CurrentCount.prototype.contructor = CurrentCount;


CurrentCount.prototype.sacar = function (valor) {
    if(valor > (this.saldo + this.limit)){
        return console.log(`Saldo insuficiente R${this.saldo}`);
    }
    this.saldo -=  valor;
    this.verSaldo();
}

const cc = new CurrentCount(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);


function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

console.log()

CP.prototype = Object.create(Conta.prototype);
CP.prototype.contructor = CP;


const CPB = new CP(200, 150, 20);
CPB.sacar(30);
CPB.sacar(15)
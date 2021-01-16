const falar = {
    falar(){
        console.log(`${this.nome} está falando'`);
    },
};


const comer = {
    comer () {
        console.log(`${this.nome} está comendo`)
    },
};

const beber = {
    beber (){
        console.log(`${this.nome} está bebendo`);
    },
};

//Copiando as variáveis => Composição Mixagem ;;
const pessoaPrototype = Object.assign({} , falar, comer, beber);
//other copy Spread Operator;
// const pessoaPrototype = {...falar, ...comer, ...beber};


//Function Construtora 

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome}
    });
}

const p1 = criaPessoa('Maria', 'Clara');
const personTwo = criaPessoa('Marly', 'Ribeiro');





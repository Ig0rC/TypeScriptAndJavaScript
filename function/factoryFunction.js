function createPerson (name, surname, height, weight){
    return{
        name, 
        surname,
        get nameComplet () {
            return `${this.name} ${this.surname}`
        }, 
        specification (){
            return `Altura: ${height} and Peso: ${weight}`
        },
        set alterName(value){
            return this.name = value;
        },
        imc (){
            const calc = weight * (height ** 2);
            return calc.toFixed(2);
        }


    }
}


const test = createPerson('Igor', 'Cardoso', 1.80, 100);
test.alterName = `Marly`
console.log(test.imc());
console.log(test.name, test.surname);
console.log(test.nameComplet);
console.log(test.specification());

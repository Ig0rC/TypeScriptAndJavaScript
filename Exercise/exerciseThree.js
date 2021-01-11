function fizzBuzz (number){

        const Fizz = number % 3 === 0;
        const Buzz = number % 5 === 0;
        if(typeof number !== 'number') preview('diferente',number);
        if(Fizz === true && Buzz === true) preview(number, 'fizzBuzz');
        if(Fizz === true)  preview(number, 'Fizz');
        if(Buzz === true)  preview(number, 'Fizz'); 
}   

const preview = (i,number) => console.log(i, number)

for(let i = 0; i < 100 ; i++){
    fizzBuzz(i);
}




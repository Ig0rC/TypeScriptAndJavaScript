// closures quando tenho acessos a dados do pai ou mae;

function returnFunction (){
    const name = 'Luiz' // === closures;
    return function (){
        return name;
    }
}

const func = returnFunction();


console.log(func());
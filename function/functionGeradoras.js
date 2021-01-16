function* geradora1(){
    yield 'Valor 1';
    yield 'Valor 2 ';
}

function* geradora2(){
    yield 0;
    yield 2;
}
function* geradora3(){
    yield* geradora2();
    yield 3;
    yield 4;
}


const g3 = geradora3();
for (let valor of g3){
    console.log(valor)
}

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
const min = 1;
const max = 50;

function random (min, max) {
    let r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = 10;


while (rand !== 10){
    rand = random(min, max);
    console.log(rand)
}


do {
    console.log(rand)
} while(rand !== 10)
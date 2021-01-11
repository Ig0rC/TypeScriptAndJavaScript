function mostraHora(){
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


const timer = setInterval(() => {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
},  4000);

setTimeout(function() {
    console.log('Olá Mundo');
}, 5000);
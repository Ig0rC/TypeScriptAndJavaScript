function rand(max, min){
    return Math.floor(Math.random() * (max - min ) + min);
}



function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      if(typeof msg !== 'string') reject(false);
  
      setTimeout(() => {
        resolve(msg);
        }, tempo) 
    });
  }



aguarde('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return aguarde('Brasil', rand(1,3))
    })
    .then(resposta => {
        console.log(resposta);
        return aguarde('Eua', rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return aguarde('Alemanha', rand(1,3))
    })
    .then(resposta => console.log(resposta))
    .catch(e => {
        console.log(e);
    });



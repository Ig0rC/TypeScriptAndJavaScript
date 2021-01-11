(() => {

    function createHourFromSecond(seconds){
        const date = new Date(seconds  * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false, 
            timeZone: 'UTC'
        });
    }
    console.log(createHourFromSecond(10))
    const watch = document.querySelector('.Relogio');

    let cont = 0;
    let timer;

    document.addEventListener('click', (e)=> {
        const el = e.target;
        
        if(el.classList.contains('zerar')){
            watch.style.color = 'black';
            setTimeout(() =>{
                clearInterval(timer);
            });
            watch.innerHTML = createHourFromSecond(0);
            cont = 0;
        }

        if(el.classList.contains('Iniciar')){
            timer = setInterval(function() {
                watch.style.color = 'black';
                cont++;
                watch.innerHTML = createHourFromSecond(cont);
            }, 1000);
        }

        if(el.classList.contains('Pausar')){
            watch.style.color = 'red';
            setTimeout(() =>{
                clearInterval(timer);
            })
        }
    });

 


  
})();

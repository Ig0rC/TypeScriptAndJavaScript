(() =>{
    function Calculadora (){
        this.display = document.querySelector('.display');
        this.iniciar = () => {
            this.capturaClique();
            this.keypress();
        };


        this.keypress = () => {
            document.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.total();
                }
            });
        };
        this.capturaClique = () => {
            document.addEventListener('click', event =>{
            const el = event.target;

            if(el.classList.contains('btn-num')) this.addNumberDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.total();
            });
        };


        this.clear = el => this.display.value = '';
        this.addNumberDisplay = el => {
            this.display.value += el;
            this.display.focus();
        };
        this.del = () => this.display.value = this.display.value.slice(0, -1);
        this.total = () => this.display.value = eval(this.display.value);
   
    }



    const calc = new Calculadora();

    calc.iniciar();
})();




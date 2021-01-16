// function calc (){
//     return {
//         // Attributes
//         display: document.querySelector('.display'),
//         body: document.querySelector('body'),




//         inicieCalc(){
//             this.clickButtons();
//             this.pressEnter();
//             this.pressEnterBody();
//         },

//         pressEnterBody() {
//             this.body.addEventListener('keyup' ,(e) => {
//                 if(e.keyCode === 13){
//                     console.log(e.keyCode);
//                     this.total();
//                 }

//             })
//         },

//         pressEnter (){
//             this.display.addEventListener('keyup', (e) => {
//                 console.log(e.keyCode)
//                 if(e.keyCode === 13){
//                     console.log(e.keyCode);
//                     this.total();
//                 }

//             })
//         },

//         insertDisplay (el) {
//             this.display.value += el;
//         },

//         delDisplay (){
//             this.display.slice
//         },
        
//         clearDisplay (){
//             this.display.value = '';
//         },

//         delDisplay () {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         total (){
//             let total = this.display.value;
//             try {
//                 total = eval(total);
//                 console.log(0.5 > 0)

//                 if(!total && total < 0){
//                     console.log('entrou')
//                     alert('Conta inválida');
//                     return
//                 };
//                 this.display.value = String(total);
//             } catch (error) {
//                 console.log('aqui o')
//                 alert('Conta inválida');
//                 return
//             }
//         },

//         //Methods
//         clickButtons (){
//             document.addEventListener('click', (e) => {

//             const el = e.target;
    
      
//             if(el.classList.contains('btn-num')){
//                 const value = el.innerText;
//                 this.insertDisplay(value);
//             };
            
//             if(el.classList.contains('btn-clear')){
//                 this.clearDisplay();
//             };

//             if(el.classList.contains('btn-del')){
//                 this.delDisplay();
//             };

//             if(el.classList.contains('btn-eq')){
//                 this.total();
//             }
//             });
//         }
//     };
// }



// const porra = calc();

// porra.inicieCalc();
// (() =>{
//     function Calc () {
       
//         const insertDisplay = (value) => {
//             console.log(value)
//             this.display.value += value 
//         };

//         const clear = () => {
//             this.display.value = '';
//         };

//         const del = () => {
//             this.display.value = this.display.value.slice(0, -1);
//         }

//         const tt = () => {
//             const total = eval(this.display.value);
//             this.display.value = total;
//         }

//         document.addEventListener('keyup', (e) =>{
//             if(e.keyCode === 13){
//                 tt();
//             }
//         })



//         document.addEventListener('click', (e) => {
//             const el = e.target;
//             if(el.classList.contains('btn-num')){
//                 const value = el.innerText;
//                 insertDisplay(value);
//             };

//             if(el.classList.contains('btn-clear')){
//                 clear();
//             };

//             if(el.classList.contains('btn-del')){
//                 del();
//             };

//             if(el.classList.contains('btn-eq')){
//                 tt();
//             };
//         });



//         this.display = document.querySelector('.display');
        
//     }

//     const pessoa = new Calc();

    
// })();
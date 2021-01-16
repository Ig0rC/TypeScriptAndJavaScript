/*
    Função recursiva, é que ela mesmo chama ela mesmo KK
*/


function recursiva(max){
  if(max >= 10) return;
  max++;
  console.log(max);
  recursiva(max);
}


recursiva(-10);
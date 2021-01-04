const arrayData = [];
const list = document.getElementById(`lista`);
const $name = document.getElementById(`name`);
const surname = document.querySelector(`#surname`);
const wight = document.querySelector(`#wight`);
const height = document.getElementById(`height`);


const insertHTML = () => {
    arrayData.map(data => {
        list.innerHTML += `<p>${data.name, data.surname, data.wight, data.height} </p>`
    });
}

const createPerson = function(name, surname, wight, height){
    arrayData.push({name, surname, wight, height})
    return insertHTML();
}



function recebeEventoForm(){
    return createPerson($name.value, surname.value, wight.value, height.value);
}












const button = document.querySelector('.btn-add-tarefa');
const inputTarefa = document.querySelector('.input-tarefa');
const ul = document.querySelector('.Tarefas');


function createLi(){
    const li = document.createElement('li');
    return li;
}
//buscando a keypress
inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        getText();
    }
})

function createClearBtn (li){
    li.innerHTML += ' ';
    const btnClear = document.createElement('button');
    btnClear.innerText = 'Apagar';
    btnClear.setAttribute('class', 'apagar');
    btnClear.setAttribute('title', 'apagar esta tarefas');
    li.appendChild(btnClear);
    // btnClear.classList.add('Apagar');
}

function createTask(text){
   const li = createLi();
   li.innerHTML = text;
   ul.appendChild(li);
   clearInput();
   createClearBtn(li);
   saveTask();
}


function getText(){
    if(!inputTarefa.value) return;
    createTask(inputTarefa.value);
}

button.addEventListener('click', function(e){
    getText();
});


document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')){
        //pegando o pai pra remover
        el.parentElement.remove();
        saveTask();
    }
});


function clearInput () {
    inputTarefa.value = '';
    inputTarefa.focus();
};

function saveTask() {
    const lis = ul.querySelectorAll('li');
    const listTask = [];

    for (let tasks of lis){
        let taskText = tasks.innerText;
        // remover os espaço da minha array
        taskText = taskText.replace('Apagar', '').trim(); 
        listTask.push(taskText)
    }
    const tarefasJSON = JSON.stringify(listTask);
    localStorage.setItem('tarefas', tarefasJSON);
}

function addTaskSave (){
    const tasks = 
        JSON.parse(localStorage.getItem('tarefas'));

    for(let task of tasks){
        createTask(task);
    }

}

addTaskSave();
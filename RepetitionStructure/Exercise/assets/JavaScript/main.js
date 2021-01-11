(() => {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    container.appendChild(div);

    const elements = [
        {tag: 'p', text: 'gol 1'},
        {tag: 'div', text: 'Frase 2'},
        {tag: 'footer', text: 'Frase 3'},
        {tag: 'section', text: 'Frase 4'}
    ];
    function createTags (tags, text){
        const element = document.createElement(tags);
        div.appendChild(element)
        element.innerText = `${text}`;
    }

    for(let i = 0; i < elements.length; i++){
        let { tag, text } = elements[i]
        createTags(tag, text);
    };

})();



// outros methods
/*
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriad);
*/
(() => {

    //Selecionado paragraphs
    const divParagraphs
        = document.querySelector('.paragraphs');
    const allParagraphs
        = divParagraphs.querySelectorAll('p');
    
    //selecionando a cor do body
    const stylesBody 
        = getComputedStyle(document.body);

    const backgroundColorBody
        = stylesBody.backgroundColor;
    
    
    for(let values of allParagraphs){
        values.style.backgroundColor = backgroundColorBody;
        values.style.color = 'white';
        values.style.fontWeight = '600'
    }
    
    
})();
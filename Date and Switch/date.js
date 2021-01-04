(() => {
    const date = new Date;
    const formated = DateFormatting(date)
    console.log(formated)

    function InsertionZeroLeft (number) {
        return number >= 10 ? number : `${ '0' + number }`
    };
    
    function optionWeekDay(number){
        let weekDay;
        switch(number){
            case 0: 
                weekDay = 'Domingo';
                break;
            case 1:
                weekDay = 'Segunda-Feira';
                break;
            case 2:
                weekDay = 'Terça-Feira';
                break;
            case 3:
                weekDay = 'Quarta-Feira';
                break;
            case 4:
                weekDay = 'Quinta-Feira';
                break;
            case 5:
                weekDay = 'Sexta-Feira';
                break;
            case 6:
                weekDay = 'Sábado';
                break;
            default: 
                weekDay = 'Default';
        }
        return weekDay;
    }
    function DateFormatting (date){
        const day = InsertionZeroLeft(date.getDate());
        const month = InsertionZeroLeft(date.getMonth() + 1);
        const year = InsertionZeroLeft(date.getFullYear());
        const hour = InsertionZeroLeft(date.getHours());
        const minutes = InsertionZeroLeft(date.getMinutes());
        const seconds = InsertionZeroLeft(date.getSeconds());
        const weekDay = optionWeekDay(date.getDay());

            return `Data: ${day}/${month}/${year} Horário: ${hour}:${minutes}:${seconds} Dia da Semana: ${weekDay}`
    } 
    

})();




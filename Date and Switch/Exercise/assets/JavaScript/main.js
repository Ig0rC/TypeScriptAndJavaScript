(() => {
    const date = new Date();
    const h1 = document.querySelector('.container h1');

    ; (() => {
        const day = InsertionZeroLeft(date.getDate());
        const month = getNameOfMonths(date.getMonth() + 1);
        const year = InsertionZeroLeft(date.getFullYear());
        const hour = InsertionZeroLeft(date.getHours());
        const minutes = InsertionZeroLeft(date.getMinutes());
        const seconds = InsertionZeroLeft(date.getSeconds());
        const weekDay = optionWeekDay(date.getDay());
        return h1.innerHTML = `${weekDay} - ${month} ${day}, ${year} - ${hour}:${minutes}:${seconds}`
    })(date);

    function InsertionZeroLeft(number) {
        return number >= 10 ? number : `${'0' + number}`
    };

    function getNameOfMonths(month) {
        switch (month) {
            case 1:
                return 'January'
            case 2:
                return 'February'
            case 3:
                return 'March'
            case 4:
                return 'April'
            case 5:
                return 'May'
            case 6:
                return 'May'
            case 7:
                return 'June'
            case 7:
                return 'July'
            case 8:
                return 'August'
            case 9:
                return 'September'
            case 10:
                return 'October'
            case 11:
                return 'November'
            case 12:
                return 'December'
        }
    }

    function optionWeekDay(number) {
        let weekDay;
        switch (number) {
            case 0:
                weekDay = 'Sunday';
                break;
            case 1:
                weekDay = 'Monday';
                break;
            case 2:
                weekDay = 'Tuesday';
                break;
            case 3:
                weekDay = 'Wednesday';
                break;
            case 4:
                weekDay = 'Thursday';
                break;
            case 5:
                weekDay = 'Friday';
                break;
            case 6:
                weekDay = 'Saturday';
                break;
            default:
                weekDay = 'Default';
        }
        return weekDay;
    }

})();

// ;(() =>{
//     const date = new Date();
//     const h1 = document.querySelector('.container h1');
//     const data = date.toLocaleDateString('pt-BR', {
//         dateStyle: "full",
//         timeStyle: "full"
//     });
//     h1.innerHTML =  `${data} and `
// })();
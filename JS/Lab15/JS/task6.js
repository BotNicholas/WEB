//let entered = new Date();

function findMonth(){
    // let entered = document.getElementById("entered_date").style.color = "Red";
    // let entered = document.querySelector('input[type="date"]').style.color = "Red";
    let entered = document.querySelector('input[type="date"]');
    let date = new Date(entered.value);
    let month = "";
    // alert(date.getMonth());
    switch(date.getMonth()){
        case 0:
            month = "Январь";
            break;
        case 1:
            month = "Февраль";
            break;
        case 2:
            month = "Март";
            break;
        case 3:
            month = "Апрель";
            break;
        case 4:
            month = "Май";
            break;
        case 5:
            month = "Июнь";
            break;
        case 6:
            month = "Июль";
            break;
        case 7:
            month = "Август";
            break;
        case 8:
            month = "Сентябрь";
            break;
        case 9:
            month = "Октябрь";
            break;
        case 10:
            month = "Ноябрь";
            break;
        case 11:
            month = "Декабрь";
            break;
        default:
            month = "Unknown!";                                                                                                                                                                                            
    }

    // alert(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()} was ${month}`);
    document.querySelector('#answer-area').innerHTML = `Это ${month}!`;
    document.querySelector('#answer-area').style.visibility = "visible";
    //alert(document.querySelector('#answer-area').outerHTML);
}

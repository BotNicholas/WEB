function splitItNow(){
    let telephoneNumber = (tel.value).split(' ');

    if(telephoneNumber[0] ?? telephoneNumber[1]){
        document.querySelector("tr:nth-child(3) td:nth-child(2)").innerHTML = telephoneNumber[0];
        document.querySelector("tr:nth-child(4) td:nth-child(2)").innerHTML = telephoneNumber[1];
    }
}
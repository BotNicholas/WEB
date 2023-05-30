function findZeros(){
    for(let number of document.querySelectorAll("td")){
        // alert(number.textContent());
        //alert(number.innerHTML);
        if(number.innerHTML == "0"){
            number.style.backgroundColor = "Red";
        }
    }
}
document.getElementById("adduserbtn").addEventListener("click", ()=>{
    if(document.getElementById("uname").value != "" && document.getElementById("usurname").value != ""){
        document.getElementById("alias").insertAdjacentHTML("beforeend", "<tr>"+
                                                                        `<td>${document.getElementById("uname").value}</td>`+
                                                                        `<td>${document.getElementById("usurname").value}</td>`+
                                                                     "</tr>");
        document.getElementById("uname").value = "";
        document.getElementById("usurname").value = "";
    }
});


document.getElementById("alias").addEventListener("click", (event)=>{
    //alert(event.target);
    //alert(event.target.tagName);
    if(event.target.tagName == "TD"){
        //alert(event.target.cellIndex);    -индекс ячейки таблицы

        let newValue;
        if(event.target.cellIndex == 0){
            newValue = prompt("Введите новое имя:", "");
        } else if(event.target.cellIndex == 1){
            newValue = prompt("Введите новую фамилию:", "");
        }

        if(newValue != ""){
            event.target.innerHTML = newValue;
        }
    }
});
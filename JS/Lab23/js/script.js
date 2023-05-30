document.forms.main.onsubmit = ()=>{
   //alert("submited");
   if(RegExp(/\d+/).exec(document.forms.main.name.value) != null){
        document.forms.main.name.classList.add("bad");
        document.getElementById("bad_name").hidden = false;
        return false;
    }
    //let enteredD = window.open("", "entered_data");
    let enteredD = window.open("about:blank", "entered_data", `popup=yes,width=600,height=500,left=${+window.innerWidth/2 - 300},top=${+window.innerHeight/2 - 300}`);

    enteredD.onload = ()=>enteredD.alert("Привет!");

    enteredD.document.body.style.fontSize = "15pt";
    enteredD.document.body.style.lineHeight = "30px";

    enteredD.document.body.innerHTML = `<h1>Вы ввели следующие данные:</h1>`+
                                        `<hr>`+
                                        `<b>Ваше имя: </b> ${window.document.forms.main.name.value}<br>`+
                                        `<b>Язык прграммирования: </b> ${selectedPL()}<br>`+
                                        `<b>Дополнительная информация: </b> ${window.document.forms.main.addition.value == ""? "Не введено..." : window.document.forms.main.addition.value}<br>`+
                                        `<b>Секретное слово: </b> ${window.document.forms.main.secretWord.value}<br>`+
                                        `<button style="margin-top: 10px;" type="button" onclick="window.close()">Ok</button>`;
                                        // ${enteredD.close()}
    //   or
    //   enteredD.document.write("some texxt...");
    
}; 



document.forms.main.name.addEventListener("blur", ()=>{
    if(RegExp(/\d+/).exec(document.forms.main.name.value) != null){
        document.forms.main.name.classList.add("bad");
        document.getElementById("bad_name").hidden = false;
   } else{
    document.forms.main.name.classList.remove("bad");
    document.getElementById("bad_name").hidden = true;
   }
});

document.forms.main.clear.onclick = ()=>{
    document.forms.main.name.classList.remove("bad");
    document.getElementById("bad_name").hidden = true;
   };


function selectedPL(){
    for(let l of document.forms.main.pl){
        if(l.checked){
            switch(l.value){
                case "cpp":
                    return "C++";
                case "php":
                    return "PHP";
                case "python":
                    return "Python";
            };
        }
    }
    
}
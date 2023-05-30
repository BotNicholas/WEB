document.forms.convertor.currencies.addEventListener("change", ()=>{
    let curr= document.querySelectorAll(".number");

    if(document.forms.convertor.currencies.value == "eur"){
        document.getElementById("currency").innerHTML = "<h2>Euro</h2>";
        fromEur(curr);
    } else if(document.forms.convertor.currencies.value == "mdl"){
        document.getElementById("currency").innerHTML = "<h2>Leu moldavenesc</h2>";
        fromMdl(curr);
    } else {
        document.getElementById("currency").innerHTML = "<h2>Dolar S.U.A.</h2>";
        fromUsd(curr);
    }
});

document.forms.convertor.ok.addEventListener("click", ()=>{
    if(+document.forms.convertor.amount.value < 0){
        document.forms.convertor.amount.classList.add("incorrect");
    } else{
        document.forms.convertor.amount.classList.remove("incorrect");

        let curr= document.querySelectorAll(".number");

        switch(document.forms.convertor.currencies.value){
            case "eur":
                fromEur(curr);
                //document.querySelector(".converted:")
                break;
            case "mdl":
                fromMdl(curr);
                break;
            case "usd":
                fromUsd(curr);
                break;
        }
    }
});


function fromEur(curr){
    curr[0].innerHTML = Math.round((+document.forms.convertor.amount.value * 19.62)*100)/100;
    curr[1].innerHTML = Math.round((+document.forms.convertor.amount.value)*100)/100;                
    curr[2].innerHTML = Math.round((+document.forms.convertor.amount.value * 1.09)*100)/100;
}

function fromMdl(curr){
    curr[0].innerHTML = Math.round((+document.forms.convertor.amount.value)*100)/100;
    curr[1].innerHTML = Math.round((+document.forms.convertor.amount.value / 19.62)*100)/100;                
    curr[2].innerHTML = Math.round((+document.forms.convertor.amount.value / 17.92)*100)/100;    
}

function fromUsd(curr){
    curr[0].innerHTML = Math.round((+document.forms.convertor.amount.value * 17.92)*100)/100;
    curr[1].innerHTML = Math.round((+document.forms.convertor.amount.value / 1.09)*100)/100;                
    curr[2].innerHTML = Math.round((+document.forms.convertor.amount.value)*100)/100;        
}
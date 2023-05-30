let now = new Date();

// alert(now);

//year filling
for(let i=1900; i<=now.getFullYear(); i++){    
    //alert(i);
    document.getElementById("year"). prepend(new Option(i, i));
}

document.getElementById("year").value = now.getFullYear();

//months filling
for(let i=1; i<=12; i++){    
    //alert(i);
    document.getElementById("month"). prepend(new Option(i, i));
}

document.getElementById("month").value = now.getMonth()+1;

document.getElementById("year").addEventListener("change", ()=>{
    fillDays();
});

document.getElementById("month").addEventListener("change", ()=>{
    fillDays();
});


function fillDays(){

    document.getElementById("day").innerHTML = "";

    
    //До августа четные - 30 дней, нечетные 31

    //Високосный или не високосный
    if((+document.getElementById("year").value%4 == 0) &&  (+document.getElementById("month").value == 2)){
        for(let i=1; i<=29; i++){            
            document.getElementById("day"). prepend(new Option(i, i));
        }        
    } else if(+document.getElementById("month").value == 2){
        for(let i=1; i<=28; i++){    
            document.getElementById("day"). prepend(new Option(i, i));
        }
    } else if((+document.getElementById("month").value%2 == 0) && (+document.getElementById("month").value != 2) && (+document.getElementById("month").value < 8)){
        for(let i=1; i<=30; i++){    
            document.getElementById("day"). prepend(new Option(i, i));
        }
    } else if (+document.getElementById("month").value <8){
        for(let i=1; i<=31; i++){    
            document.getElementById("day"). prepend(new Option(i, i));
        }
    }else if((+document.getElementById("month").value%2 == 0) && (+document.getElementById("month").value != 2) && (+document.getElementById("month").value >= 8)){
        for(let i=1; i<=31; i++){    
            document.getElementById("day"). prepend(new Option(i, i));
        }
    } else if (+document.getElementById("month").value >= 8){
        for(let i=1; i<=30; i++){    
            document.getElementById("day"). prepend(new Option(i, i));
        }
    }
}


//filling days
fillDays();

document.getElementById("day").value = now.getDate();
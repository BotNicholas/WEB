// alert(document.forms[0].querySelector(".favoriteadd").classList.contains("unfavorite"));

for(let form of document.forms){
    if(form.name == "Item"){    
        form.querySelector(".favoriteadd").addEventListener("click", (event)=>{
            //alert("hello from " + form.outerHTML);
            if(event.target.classList.contains("unfavorite")){
                //alert("it is unfavirite");
                event.target.classList.remove("unfavorite");
                event.target.classList.add("favorite");
                event.target.innerHTML = "★";
            } else{
                //alert("It is favorite");
                event.target.classList.remove("favorite");
                event.target.classList.add("unfavorite");
                event.target.innerHTML = "☆";
            }
        });
    }
}

for(let form of document.forms){
    if(form.name == "Item")
        form.elements.add.addEventListener("click", ()=>{
            countItems();
            countAmount();
            countPrice();
        });
}

function countItems(){
    let items = 0;
    for(let form of document.forms){
        if(form.name == "Item"){
            if(+form.elements.amount.value > 0){
                items++;
            }
        }
    }

    //alert(items);
    document.forms.cart.querySelector("#total_items span").innerHTML = items;
}

function countAmount(){
    let am = 0;
    for(let form of document.forms){
        if(form.name == "Item"){
            if(+form.elements.amount.value > 0){
                am+=(+form.elements.amount.value);
            }
        }
    }

    //alert(am);
    document.forms.cart.querySelector("#total_units span").innerHTML = am;
}

function countPrice(){
    let price = 0;
    for(let form of document.forms){
        if(form.name == "Item"){
            if(+form.elements.amount.value > 0){
                for(let i=0; i<+form.elements.amount.value; i++)
                        price+=(+form.querySelector(".price").innerHTML);
            }
        }
    }

    // alert(price);
    document.forms.cart.querySelector("#total_price span").innerHTML = (Math.round(price*100))/100;
}
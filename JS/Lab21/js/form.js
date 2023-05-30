//hidden = true/false
//validityState = true/false

// alert(document.forms.registration.innerHTML);
document.forms.registration.elements.name.addEventListener("blur", ()=>{
    //alert(document.forms.registration.name.value.length);
    if(document.forms.registration.elements.name.value.length == 0){
        document.getElementById("nameError").hidden = false;
        document.getElementById("nameError").innerHTML = "Введите ваше имя!";
        document.forms.registration.elements.name.valid = false;
    } else{
        document.getElementById("nameError").hidden = true;
        document.getElementById("nameError").innerHTML = "";        
        document.forms.registration.elements.name.valid = true;
    }
});

document.forms.registration.elements.email.addEventListener("blur", ()=>{
    //alert(event.target.value);
    //alert(document.forms.registration.email.value);
    //alert(document.forms.registration.email.checkValidity());
    if(!document.forms.registration.elements.email.checkValidity()){
        document.getElementById("emailError").hidden = false;
        document.getElementById("emailError").innerHTML = "Вы ввели некорректный e-mail!";
        document.forms.registration.elements.email.valid = false;
    } else{
        document.getElementById("emailError").hidden = true;
        document.getElementById("emailError").innerHTML = "";
        document.forms.registration.elements.email.valid = true;
    }
});

document.forms.registration.elements.password.addEventListener("blur", ()=>{
    if(!( (document.forms.registration.elements.password.value.length >=4) && (document.forms.registration.elements.password.value.length <= 8) )){
        document.getElementById("passwordError").hidden = false;
        document.getElementById("passwordError").innerHTML = "Пароль должен содержать от 4 до 8 символов!";
        document.forms.registration.elements.password.valid = false;
    } else{
        document.getElementById("passwordError").hidden = true;
        document.getElementById("passwordError").innerHTML = "";
        document.forms.registration.elements.password.valid = true;
    }
});

document.forms.registration.elements.confirmP.addEventListener("blur", ()=>{
    if(document.forms.registration.elements.confirmP.value != document.forms.registration.password.value){
        document.getElementById("confirmPError").hidden = false;
        document.getElementById("confirmPError").innerHTML = "Пароли не совпадают!";
        document.forms.registration.elements.confirmP.valid = false;
    } else{
        document.getElementById("confirmPError").hidden = true;
        document.getElementById("confirmPError").innerHTML = "";
        document.forms.registration.elements.confirmP.valid = true;
    }
});

document.forms.registration.elements.hobby.addEventListener("change", ()=>{
    
    //alert(document.forms.registration.hobby.elements.swimming);
    
    if(!document.forms.registration.elements.hobby.elements.swimming.checked){
        if(!document.forms.registration.elements.hobby.elements.reading.checked){
            if(!document.forms.registration.elements.hobby.elements.nothing.checked){
                document.forms.registration.elements.hobby.valid = false;
                document.getElementById("hobbyError").hidden = false;
                document.getElementById("hobbyError").innerHTML = "Выберите как минимум один вариант!";
                return;

            } else{
                document.forms.registration.elements.hobby.valid = true;
            }
        } else{
            document.forms.registration.elements.hobby.valid = true;
        }
    } else{
        document.forms.registration.elements.hobby.valid = true;
    }
    document.getElementById("hobbyError").hidden = true;
    document.getElementById("hobbyError").innerHTML = "";
    
});


document.forms.registration.elements.birthday.addEventListener("blur", ()=>{
    
    //alert(document.forms.registration.elements.birthday.checkValidity());

    if(document.forms.registration.elements.birthday.checkValidity()){
        let dateParts = document.forms.registration.elements.birthday.value.split("/");
        
        // for(let param of dateParts){
        //     alert(param);
        // }

        if((+dateParts[0] <= 31 && +dateParts[0]>=1) && (+dateParts[1] <= 12 && +dateParts[1]>=1) && (+dateParts[2] <= 2222 && +dateParts[2]>=1900)){
            document.getElementById("birthdayError").hidden = true;
            document.getElementById("birthdayError").innerHTML = "";
            document.forms.registration.elements.birthday.valid = true;
            return;
        } else{
            document.getElementById("birthdayError").hidden = false;
            document.getElementById("birthdayError").innerHTML = "Такой даты не существует!";
            document.forms.registration.elements.birthday.valid = false;
        }
    }else{
        document.getElementById("birthdayError").hidden = false;
        document.getElementById("birthdayError").innerHTML = "Введите дату рождения в формате: 01/01/2000!";
        document.forms.registration.elements.birthday.valid = false;
    }

    
});



document.forms.registration.elements.country.addEventListener("blur", ()=>{
    if(document.forms.registration.elements.country.value == ""){
        document.getElementById("countryError").hidden = false;
        document.getElementById("countryError").innerHTML = "Выберите страну!";
        document.forms.registration.elements.country.valid = false;   
    } else{
        document.getElementById("countryError").hidden = true;
        document.getElementById("countryError").innerHTML = "";
        document.forms.registration.elements.country.valid = true;
    }
});



document.forms.registration.elements.rassilka.addEventListener("change", (event)=>{
    
    // alert(document.forms.registration.rassilka.elements.yes.checked);
    // alert(document.forms.registration.rassilka.elements.sure.checked);
    // alert(document.forms.registration.rassilka.elements.great.checked);

    if(event.target.tagName == "INPUT"){
        document.getElementById("rassilkaError").hidden = true;
        document.getElementById("rassilkaError").innerHTML = "";
        document.forms.registration.elements.rassilka.valid = true;
    } else{
        document.forms.registration.elements.rassilka.valid = false;
        document.getElementById("rassilkaError").hidden = false;
        document.getElementById("rassilkaError").innerHTML = "Выберите один вариант!";
    }
    
});





//запрет отправки формы
// document.forms.registration.onsubmit = ()=>false;

document.forms.registration.elements.send.addEventListener("click", ()=>{
    
    //alert(document.forms.registration.elements.name.valid  + " " +  document.forms.registration.elements.email.valid  + " " +  document.forms.registration.elements.password.valid  + " " +  document.forms.registration.elements.confirmP.valid  + " " +  document.forms.registration.elements.hobby.valid  + " " +  document.forms.registration.elements.birthday.valid  + " " +  document.forms.registration.elements.country.valid + " " + document.forms.registration.elements.rassilka.valid);

    let flag = true;

    if(document.forms.registration.elements.name.valid == false || document.forms.registration.elements.name.valid == undefined){
        document.getElementById("nameError").hidden = false;
        document.getElementById("nameError").innerHTML = "Введите ваше имя!";
        flag = false;
    }

    if(document.forms.registration.elements.email.valid == false || document.forms.registration.elements.email.valid == undefined){
        document.getElementById("emailError").hidden = false;
        document.getElementById("emailError").innerHTML = "Вы ввели некорректный e-mail!";
        flag = false;
    }

    if(document.forms.registration.elements.password.valid == false || document.forms.registration.elements.password.valid == undefined){
        document.getElementById("passwordError").hidden = false;
        document.getElementById("passwordError").innerHTML = "Пароль должен содержать от 4 до 8 символов!";
        flag = false;
    }

    if(document.forms.registration.elements.confirmP.valid == false || document.forms.registration.elements.confirmP.valid == undefined){
        document.getElementById("confirmPError").hidden = false;
        document.getElementById("confirmPError").innerHTML = "Пароли не совпадают!";
        flag = false;s
    }

    if(document.forms.registration.elements.hobby.valid == false || document.forms.registration.elements.hobby.valid == undefined){
        document.getElementById("hobbyError").hidden = false;
        document.getElementById("hobbyError").innerHTML = "Выберите как минимум один вариант!";
        flag = false;
    }

    if(document.forms.registration.elements.birthday.valid == false || document.forms.registration.elements.birthday.valid == undefined){
        document.getElementById("birthdayError").hidden = false;
        document.getElementById("birthdayError").innerHTML = "Такой даты не существует!";
        flag = false;
    }

    if(document.forms.registration.elements.country.valid == false || document.forms.registration.elements.country.valid == undefined){
        document.getElementById("countryError").hidden = false;
        document.getElementById("countryError").innerHTML = "Выберите страну!";
        flag = false;
    }

    if(document.forms.registration.elements.rassilka.valid == false || document.forms.registration.elements.rassilka.valid == undefined){
        document.getElementById("rassilkaError").hidden = false;
        document.getElementById("rassilkaError").innerHTML = "Выберите как один вариант!";
        flag = false;
    }




    if(flag){
        //alert("submited");
        document.forms.registration.onsubmit = ()=>true;
    } else{
        //alert("unsubmited");
        document.forms.registration.onsubmit = ()=>false;
    }

    
});




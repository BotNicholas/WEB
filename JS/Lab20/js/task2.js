//Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов. 
//Сколько символов должно быть в инпуте, указывается в свойстве data-length. Если вбито правильное количество, то 
//граница инпута становится зеленой, если неправильное - красной. 


document.getElementById("answer").querySelectorAll("input[type=text]").forEach((inp)=>{
    inp.addEventListener("blur", ()=>{
        //alert(inp.dataset.length);
        if(inp.value.length != 0)
        if(inp.value.length <= inp.dataset.length){
            inp.style.border = "1px solid Green";
        } else {
            inp.style.border = "1px solid Red";
        } else {
            inp.style.border = "1px solid Grey";
        }
    })
});
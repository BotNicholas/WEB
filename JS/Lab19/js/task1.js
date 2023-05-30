document.getElementById("squarebtn").addEventListener("click", (event)=>{
    //alert(document.getElementById("num").checkValidity());
    if(document.getElementById("num").checkValidity()){
        alert(Math.pow(+document.getElementById("num").value, 2));
    }
});

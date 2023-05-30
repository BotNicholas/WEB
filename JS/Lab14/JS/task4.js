function Calc(){
    //document.getElementById('electricity').style.display = 'none';
    alert("Итого к оплате: " + (Number(electricity.value) + Number(warm.value) + Number(gaz.value) + Number(internet.value) + Number(telephone.value)) + " MDL...");
}

function Close(){
    alert("Всё! Закрылось)");
}
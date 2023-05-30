document.getElementById("addbtn").addEventListener("click", ()=>{
    // let elements = prompt("Введите элементы массива (через пробел)", "").trim().split(/\s+/);
    let elements = prompt("Введите элементы массива (через запятую)", "").trim().split(",");

    for(let element of elements){   
        //alert(element);
        document.querySelector("ul li:last-child").insertAdjacentHTML("afterend", `<li>${element}</li>`);
    }
});
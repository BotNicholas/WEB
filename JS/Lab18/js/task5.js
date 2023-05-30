document.getElementById("addbtn").addEventListener("click", ()=>{
    // let elements = prompt("Введите элементы через пробел...", "").trim().split(/\s+/);
    // let elements = prompt("Введите элементы через запятую...", "").trim().split(",");
    let elements = prompt("Введите элементы через точку с запятй...", "").trim().split(";");

    let DIV = document.createElement("div");

    DIV.style.fontWeight = "bold";
    DIV.style.padding = "20px";
    DIV.style.borderRadius = "10px";
    DIV.style.backgroundColor =  "rgba(161, 247, 165, 0.85)";
    DIV.style.width = "max-content";
    DIV.style.margin = "auto";
    DIV.style.marginTop = "50px";
    DIV.style.border = "1px dashed Green";

    for(let element of elements){
        DIV.insertAdjacentHTML("beforeend", `<p>${element}</p>`);
    }

    document.body.insertAdjacentElement("beforeend", DIV);

});
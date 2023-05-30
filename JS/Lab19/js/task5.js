    //"Статичная" версия (с кнопкой)
// document.getElementById("createbtn").addEventListener("click", ()=>{
//     let table = document.createElement("table");

//     table.insertAdjacentHTML("beforeend", "<tbody></tbody>");

//     for(let i=0; i<+document.getElementById("n").value; i++){
//         table.querySelector("tbody").insertAdjacentHTML("beforeend", "<tr></tr>")
        
//         for(let j=0; j<+document.getElementById("m").value; j++){
//             table.querySelector("tr:last-child").insertAdjacentHTML("beforeend", `<td>${Math.round(Math.random()*100)}</td>`);
//         }
//     }

//     document.getElementById("answer").insertAdjacentElement("beforeend", table);
        
// });


    //Динамическая версия
document.getElementById("n").addEventListener("input", ()=>{

    document.getElementById("newTable").innerHTML = "";

    let table = document.createElement("table");

    table.insertAdjacentHTML("beforeend", "<tbody></tbody>");

    for(let i=0; i<+document.getElementById("n").value; i++){
        table.querySelector("tbody").insertAdjacentHTML("beforeend", "<tr></tr>")
        
        for(let j=0; j<+document.getElementById("m").value; j++){
            table.querySelector("tr:last-child").insertAdjacentHTML("beforeend", `<td>${Math.round(Math.random()*100)}</td>`);
        }
    }

    document.getElementById("newTable").insertAdjacentElement("beforeend", table);
        
});


document.getElementById("m").addEventListener("input", ()=>{

    document.getElementById("newTable").innerHTML = "";

    let table = document.createElement("table");

    table.insertAdjacentHTML("beforeend", "<tbody></tbody>");

    for(let i=0; i<+document.getElementById("n").value; i++){
        table.querySelector("tbody").insertAdjacentHTML("beforeend", "<tr></tr>")
        
        for(let j=0; j<+document.getElementById("m").value; j++){
            table.querySelector("tr:last-child").insertAdjacentHTML("beforeend", `<td>${Math.round(Math.random()*100)}</td>`);
        }
    }

    document.getElementById("newTable").insertAdjacentElement("beforeend", table);
        
});
document.getElementById("btnaddclause").addEventListener("click", ()=>{
    document.querySelector("ol li:last-child").insertAdjacentHTML("afterend", "<li>пункт</li>");
});
numbers.addEventListener("click", (event) => {
    if(event.target.tagName == "LI"){
        event.target.innerHTML = Number(event.target.innerHTML)+1;
    }
});
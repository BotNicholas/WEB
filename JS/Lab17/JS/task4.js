document.querySelector(".answer_field").addEventListener("click", (event) => {
    //alert(event.target.tagName);

    if(event.target.tagName == "P"){
        event.target.style.fontStyle = "italic";
    }

});

let count = 1;

counter.addEventListener("click", () => {
    let paragraphs = document.querySelectorAll(".answer_field p");

    for(let p of paragraphs){        
        let number = document.createElement("span");
        number.innerHTML = `Paragraph №${count++}`;
        number.style.color = "DarkRed";
        number.style.fontWeight = "Bold";
        //number.style.display = "inline";
        //p.style.display = "inline";
        p.before(number);
        // p.prepend(number);

        //p.insertAdjacentHTML("afterend", "<br>");
    }
});
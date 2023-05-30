//Даны абзацы с числами. По клику на абзац в нем должен появиться квадрат числа, которое он содержит, но только по первому клику.

document.getElementById("answer").querySelectorAll("p").forEach((p) => {
    let clickCount=0;
    let number;
    p.addEventListener("click", ()=>{
        if(clickCount == 0){
            number = +p.innerHTML;
            p.innerHTML = `${p.innerHTML}<sup>2</sup> = ${Math.pow(+p.innerHTML, 2)}`;
            clickCount++;
        } else {
            p.innerHTML = number;
            clickCount--;
        }
    })});
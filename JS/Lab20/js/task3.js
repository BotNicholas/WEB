//Даны дивы. По первому нажатию на каждый див он красится красным фоном, по второму красится обратно и так далее каждый клик происходит чередование фона. 
//Сделайте так, чтобы было две функции: одна красит в красный цвет, другая - в зеленый, и они сменяли друг друга через removeEventListener. 

document.getElementById("answer").querySelectorAll("div").forEach((div)=>{
    div.addEventListener("click", paintRed);
});

//function paintRed(div){
    function paintRed(){
    this.style.backgroundColor = "Red";
    this.removeEventListener("click", paintRed);//так как eventListener не происходит сразу же, мы можем удалить старый eventListener, который красил div в красный цвет и добавить новый, который бы красил его в зеленый. Та же самая логика и для зеленого EventListener-a...
    this.addEventListener("click", paintGreen);
}

//function paintGreen(div){
    
function paintGreen(){
    this.style.backgroundColor = "lime";
    this.removeEventListener("click", paintGreen);
    this.addEventListener("click", paintRed);
}

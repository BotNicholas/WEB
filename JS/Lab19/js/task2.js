document.getElementById("swapbtn").addEventListener("click", (event)=>{
    let temp = document.getElementById("value1").value;
    document.getElementById("value1").value = document.getElementById("value2").value;
    document.getElementById("value2").value = temp;
});
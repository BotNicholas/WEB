    //I-st variant

// document.getElementById("colorchange").addEventListener("change", (event)=>{
//     document.getElementById("p1").style.color = document.getElementById("colorchange").value;
// });


    //II-nd variant

// let c = 0;
// let interval;

// document.getElementById("colorchange").addEventListener("click", (event)=>{
//     interval = setInterval(()=>{
//         document.getElementById("p1").style.color = document.getElementById("colorchange").value;
//         //document.getElementById("p1").insertAdjacentHTML("beforeend", c = c+10);
//     }, 10);
// });

// document.getElementById("colorchange").addEventListener("blur", ()=> clearInterval(interval));//чтобы останавливать "таймер" при потери фокуса



    //III-rd variant
document.getElementById("colorchange").addEventListener("input", (event)=>{
        document.getElementById("p1").style.color = document.getElementById("colorchange").value;
});
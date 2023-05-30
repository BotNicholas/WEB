let element = document.getElementById("addbtn").addEventListener("click", ()=>{
    document.querySelector("input[type=text]:last-of-type").insertAdjacentHTML("afterend", "<br><input type='text' placeholder='Enter here somathing...'>");
});
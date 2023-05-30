//table.addActionListener("click", ()=>alert("You've just selected me!"));


//table.onclick = () => alert("You've just clicked me!");
// table.addEventListener("click", (event) => alert(`You've just selected me!\nThe event is ${event.target} tag name is ${event.target.tagName}`));
table.addEventListener("click", (event) => event.target.innerHTML = prompt("Set new value to the cell: ", event.target.innerHTML));
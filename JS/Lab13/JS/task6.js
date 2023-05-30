function rgb(red=0, green=0, blue=0){
    return `rgb(${red},${green},${blue})`;
}

let red = +prompt("Enter number for RED color", 0);
let green = +prompt("Enter number for GREEN color", 0);
let blue = +prompt("Enter number for BLUE color", 0);

alert(rgb());//default
alert(rgb(23, 100, 134));

alert(rgb(red, green, blue));//with user input
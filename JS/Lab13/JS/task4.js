function calc(number, square, cube){
    return square(number) + cube(number);
}

function kvadrat(number){
    return number*number;
}

function kub(number){
    return number*number*number;
}


let number = +prompt("Enter a number", 0);

//alert(calc(2, kvadrat(), kub())); //will not work, because sending as parameters fonctions results
alert(`calc function (with function declaration) result for ${number} (${kvadrat(number)} + ${kub(number)}) = ${calc(number, kvadrat, kub)}`);
//*
alert(`calc function (with function expression) result for ${number} (${kvadrat(number)} + ${kub(number)}) = ${calc(number, function(number){return number*number;}, function(number){return number*number*number;})}`);
alert(`calc function (with row function) result for ${number}  (${kvadrat(number)} + ${kub(number)}) = ${calc(number, number=>number*number, number=>number*number*number)}`);
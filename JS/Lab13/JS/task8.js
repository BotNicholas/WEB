let mul = (n, m)=>n*m;
let dev = (n, m)=>n/m;
let plus = (n,m)=>n+m;
let minus = (n,m)=>n-m;



function operation(n, m, o){
    return o(n, m);
}


let n = +prompt("n = ", 0);
let m = +prompt("m = ", 1);

// //alert(`operation(5, 6, mul) = ${operation(5, 6, mul)}`);
// alert(`5 * 6 = ${operation(5, 6, mul)}`); //here we do not send mul functions result but it's code. Try alert(mul), and you will see that returned value is mul funtion's code)
// alert(`5 / 6 = ${operation(5, 6, dev)}`);
// alert(`5 + 6 = ${operation(5, 6, plus)}`);
// alert(`5 - 6 = ${operation(5, 6, minus)}`);

//The same, but with user variables
alert(`${n} * ${m} = ${operation(n, m, mul)}`); //here we do not send mul functions result but it's code. Try alert(mul), and you will see that returned value is mul funtion's code)
alert(`${n} / ${m} = ${operation(n, m, dev)}`);
alert(`${n} + ${m} = ${operation(n, m, plus)}`);
alert(`${n} - ${m} = ${operation(n, m, minus)}`);
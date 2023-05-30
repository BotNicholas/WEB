function words(n=0){
    if(n>=10 && n<=19){
        alert(n + " товаров");
        return;
    }

    let letters = [...String(n)];

    if(letters[letters.length-1] == 0 || (letters[letters.length-1] >=5 && letters[letters.length-1] <= 9)){
        alert(n + " товаров");
        return;
    } else if(letters[letters.length-1] == 1){
        alert(n + " товар");
        return;
    } else if(letters[letters.length-1]>=2 && letters[letters.length-1] <=4){
        alert(n + " товара");
        return;
    }
}





// for(let i=0; i<=101; i++){
//     words(i);
// }

alert("Warning! Default function value!!!");
words();

let n = +prompt("How many goods do you have?", 0);

for(let i=0; i<=n; i++){
    words(i);
}
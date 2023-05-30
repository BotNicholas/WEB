function repeat(str="", n=2){
    if(n==1)
        return str;
    else if(n==0)
        return "";
    else
        return str+repeat(str, n-1);
}

//or like this...
// function repeat(str="", n=2){
//     let cstr = str;
//     for(let i=1; i<n; i++){
//         str+=cstr;
//     }
    
//     if(n==0) return "";
//     else return str;
// }

let str = prompt("Enter something:", "");
let n = +prompt("How many times to repeat?", 1);

alert(repeat(str, n));
    //for(let i=0; i<=10; i++)
    //  alert(repeat("Repeat", i));
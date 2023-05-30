let number;

do{
    number = +prompt("Введите четырехзначное число:", "0000");
}while(number<1000 || number>9999);


number = encrypt(number);


function encrypt(number){

    let enNumber=0;

    for(let i=0; i<4; i++){
        //alert(`Math.trunc(number/(Math.pow(10, i))) = ${Math.trunc(number/(Math.pow(10, i)))}`);
        //alert(`Math.trunc(number/(Math.pow(10, i)))%10 = ${Math.trunc(number/(Math.pow(10, i)))%10}`);
        //alert(`(Math.trunc(number/(Math.pow(10, i)))%10)*Math.pow(10, i) = ${(Math.trunc(number/(Math.pow(10, i)))%10)*Math.pow(10, i)}`);
        enNumber += ((( Math.trunc( number/(Math.pow(10, i)) ) %10 ) +7 ) %10 )   * Math.pow(10, i);
    }

    //alert(enNumber);
    
    return enNumber;
}

alert(number);
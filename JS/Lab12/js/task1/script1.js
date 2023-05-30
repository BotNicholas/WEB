let birhtday = prompt("When were you born?\nExample: 22.08.2004", "");
let birthdayAttr = birhtday.split(".");
let day = +birthdayAttr[0];
let month = +birthdayAttr[1];
let year = +birthdayAttr[2];
let goroscope;
//alert(`day = ${day}; month = ${month}; year = ${year}`)

switch(month){
    case 1:
        if(day >= 1 && day <= 19)
            goroscope = "COZEROG";
        else if(day >= 20 && day <= 31)
            goroscope = "VODOLEI";
        break;
    case 2:
        if(day >= 1 && day <= 18)
            goroscope = "VODOLEI";
        else if(day >= 19 && day <= 28)
            goroscope = "RIBI";
        break;
    case 3:
        if(day >= 1 && day <= 20)
            goroscope = "RIBI";
        else if(day >= 21 && day <= 31)
            goroscope = "OVEN";
        break;
    case 4:
        if(day >= 1 && day <= 20)
            goroscope = "OVEN";
        else if(day >= 21 && day <= 30)
            goroscope = "TELETS";
        break;
    case 5:
        if(day >= 1 && day <= 20)
            goroscope = "TELETS";
        else if(day >= 21 && day <= 31)
            goroscope = "BLIZNETSI";
        break;
    case 6:
        if(day >= 1 && day <= 20)
            goroscope = "BLIZNETSI";
        else if(day >= 21 && day <= 30)
            goroscope = "RAK";
        break;
    case 7:
        if(day >= 1 && day <= 22)
            goroscope = "RAK";
        else if(day >= 23 && day <= 31)
            goroscope = "LEV";
        break;
    case 8:
        if(day >= 1 && day <= 22)
            goroscope = "LEV";
        else if(day >= 23 && day <= 31)
            goroscope = "DEVA";
        break;
    case 9:
        if(day >= 1 && day <= 22)
            goroscope = "DEVA";
        else if(day >= 23 && day <= 30)
            goroscope = "VESI";
        break;
    case 10:
        if(day >= 1 && day <= 22)
            goroscope = "VESI";
        else if(day >= 23 && day <= 31)
            goroscope = "SCORPION";
        break;
    case 11:
        if(day >= 1 && day <= 21)
            goroscope = "SCORPION";
        else if(day >= 22 && day <= 30)
            goroscope = "STRELETS";
        break;
    case 12:
        if(day >= 1 && day <= 21)
            goroscope = "STRELETS";
        else if(day >= 22 && day <= 31)
            goroscope = "COZEROG";
        break;
    default:
        goroscope = "UNKNOWN!";
}

let zodiak;

switch(year % 12){
    case 0:
        zodiak = "MONKEY";
        break;
    case 1:
        zodiak = "ROOSTER";
        break;
    case 2:
        zodiak = "DOG";
        break;
    case 3:
        zodiak = "PIG";
        break;
    case 4:
        zodiak = "RAT";
        break;
    case 5:
        zodiak = "BULL";
        break;
    case 6:
        zodiak = "TIGER";
        break;
    case 7:
        zodiak = "RABBIT";
        break;
    case 8:
        zodiak = "DRAGON";
        break;
    case 9:
        zodiak = "SHARK";
        break;
    case 10:
        zodiak = "HORSE";
        break;
    case 11:
        zodiak = "GOAT";
        break;
    default:
        zodiak = "UNKNOWN!";
        break;                                                                                                                                                                                                          
}

alert(`Your goroscope is ${goroscope} and vest zodiak sign is ${zodiak}`)


/*
Cozerog: 22.12 - 19.01
Vodolei: 20.01 - 18.02
Ribi: 19.02 - 20.03
Oven: 21.03 - 19.04
Telets: 21.04 - 20.05
Bliznetsi: 21.05 - 20.6
Rak: 21.6 - 22.7
Lev: 23.7 - 22.8
Deva: 23.8 - 22.9
Vesi: 23.9 - 22.10
Scorpion: 23.10 - 21.11
Strelets: 22.11 - 21.12
*/

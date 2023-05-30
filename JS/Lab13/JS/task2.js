let hello2 = function(name = "гость"){
    alert(`Привет, ${name}`);
};

let name = prompt("Как тебя зовут?", "");

hello2();
//hello2("Василий");
hello2(name);
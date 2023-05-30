let dictionary = new  Map();

dictionary.set("абсолютный", "совершенный");
dictionary.set("бизнес", "дело");
dictionary.set("вариант", "разновидность");
dictionary.set("габариты", "размеры");
dictionary.set("дайвер", "ныряльщик");

function showLast(){
    let lastSinonims;

    lastSinonims = Array.from(dictionary)[dictionary.size-1];

    //or...
    // for(let entry of dictionary.entries())
    //     lastSinonims = entry;
    
        answer.innerHTML = `<span class="numberMurkup">Последняя строка синонимов:</span><br>• ${lastSinonims[0]} = ${lastSinonims[1]}`;
        answer.style.visibility = "visible";
}

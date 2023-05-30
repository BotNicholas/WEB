function findWords(){
    let wordsArray = text.value.replaceAll('.', "");
    wordsArray = wordsArray.replaceAll(',', "");
    wordsArray = wordsArray.replaceAll(':', "");
    wordsArray = wordsArray.replaceAll(';', "");
    wordsArray = wordsArray.replaceAll('!', "");
    wordsArray = wordsArray.replaceAll('?', "");
    wordsArray = wordsArray.replaceAll('-', "");
    wordsArray = wordsArray.toLowerCase().trim().split(/\s+/);
    //alert(wordsArray);

    let wordsMap = new Map();

    for(let word of wordsArray){
        if(! wordsMap.has(word)){
            wordsMap.set(word, 1);
        } else{
            wordsMap.set(word, wordsMap.get(word)+1);
        }
        
    }

    // for(let e of wordsMap.entries()){
    //     alert(e);
    // }

    answer.style.visibility = "visible";

    answer.innerHTML = `Всего <span class="numberMurkup">${wordsMap.size}</span> различных слов, из которых:<br>`;

    for(let entry of wordsMap.entries()){
        answer.innerHTML += `- слово <span class="numberMurkup">${entry[0]}</span> встретилось <span class="numberMurkup">${entry[1]}</span> раз;<br>`;
    }


}



//  Hello world! World:      I... I love you and programming )!
function reverse(){
    let words = text.value.split(/\s+/);
    let newText = "";

    //alert(words);
        
    for(let word of words){
        newText += [...word].reverse().join('') + " ";// [...word] == alert(Array.from(word));
    }

    //alert(newText);
    text.value = newText;
}
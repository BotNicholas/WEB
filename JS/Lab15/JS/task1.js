let obj = {
    js: 'test',
    jq: 'hello',
    css: 'world'
}

function getKeys(){
    document.getElementById("answer-area").style.visibility = "visible";

    let k = "";

    for(let key of Object.keys(obj)){
        k += `${key}<br>`;
    }

    // document.getElementById("answer-area").innerHTML = Object.keys(obj);
    document.getElementById("answer-area").innerHTML = k;
}

function getValues(){
    document.getElementById("answer-area").style.visibility = "visible";

    let v = "";

    for(let value of Object.values(obj)){
        v+=`${value}<br>`;
    }

    document.getElementById("answer-area").innerHTML = v;
}

function getEntries(){
    document.getElementById("answer-area").style.visibility = "visible";

    let e = "";

    for(let entry of Object.entries(obj)){
        e+=`${entry[0]}-->${entry[1]}<br>`;
    }

    document.getElementById("answer-area").innerHTML = e;
}
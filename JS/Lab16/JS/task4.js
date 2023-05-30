let city1 = {};

city1.name = "ГородN";
city1.population = 10e6; //==10000000

city2 = {
    name:"ГородM",
    population:1e6//==1000000
}


city1.getName = function(){
    return this.name;
}

city2.getName = function(){
    return this.name;
}



city1.exportStr = function(){
    return `name=${this.name}\npopulation=${this.population}\n`;
}

city2.exportStr = function(){
    return `name=${this.name}\npopulation=${this.population}\n`;
}


function execute(){
    //alert(`${city1.getName()} ${city2.getName()}`);
    // alert(`${city1.exportStr()}`);
    // alert(`${city2.exportStr()}`);

    answer.style.visibility = "visible";
    answer.innerHTML = `<pre>${city1.exportStr()}</pre>`;
    answer.innerHTML += `<pre>${city2.exportStr()}</pre>`;
}
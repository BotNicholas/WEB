
function execute(){
    let workersMap = new Map();

    // for(let element of document.getElementById("workers-salaryes").getElementsByTagName("td")){
    //     //workersMap.
    // }

    for(let element of document.querySelector("#workers-salaryes").getElementsByTagName("tr")){
        //workersMap.
        let line = new Array();
        for(let element1 of element.querySelectorAll("td"))
            line[line.length] = element1.innerHTML;
        
        if(line.length == 2)
            workersMap.set(line[0], line[1]);
    }

    //Проверка
    // for(let element of workersMap.entries())
    //     alert(element);
        
    let avgsalary = avgs(workersMap);

    //alert(avgsalary);
    let averageSalaryWorker = workersMap.entries().next().value;

    for(let worker of workersMap.entries())
        if(Math.abs(+worker[1] - avgsalary) < Math.abs(+averageSalaryWorker[1] - avgsalary))
            averageSalaryWorker = worker;

    //alert(averageSalaryWorker);

    let salaryes =  Array.from(workersMap.entries());
    //alert(salaryes);
    salaryes.sort((a, b) => a[1]-b[1]); // -n == b > a, 0 == b==a, +n == b<a
    //alert(salaryes);

    //alert(`${salaryes[salaryes.length-1]} \t ${salaryes[salaryes.length-2]}`);
    
    document.getElementById("answer-area").style.visibility = "visible";
    document.getElementById("answer-area").innerHTML = `<p>Worker with the closest average salary:<br>${averageSalaryWorker}</p><p>Two last workers with maximal salaries:<br>${salaryes[salaryes.length-1]}<br>${salaryes[salaryes.length-2]}</p>`;
    // alert(document.getElementById("answer-area").outerHTML);

}

function avgs(workersMap){
    let sum = 0;
    for(let salary of workersMap.values()){
        sum += +salary;
    }
        

    return +sum/+workersMap.size;
}
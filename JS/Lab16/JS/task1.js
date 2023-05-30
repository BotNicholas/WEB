function findNumbers(){
    let numbersArray = numbers.value.trim().split(/\s+/);
    //alert(numbersArray);

    let numbersMap = new Map();

    for(let n of numbersArray){
        //alert(n);
        if(! numbersMap.has(n)){
            numbersMap.set(n, 1);
        } else{
            numbersMap.set(n, numbersMap.get(n)+1);
        }
        
        //alert(`${n} -> ${numbersMap.get(n)} entries`);
    }
    //Можно было и не испольщовать Map, а воспользоваться set-ом, из-за его свойства "уникальности лбъектов". 
    //Однако в моем примере, мне важен учет числа вхождания кождого числа по отдельности, поэтому я использовал именно Map, а не Set...

    answer.style.visibility = "visible";

    answer.innerHTML = `Всего <span class="numberMurkup">${numbersMap.size}</span> различных чисел, из которых:<br>`;

    // for(let entry of numbersMap.entries()){
    //     alert(`${entry[0]} entried ${entry[1]} times`);
    // }

    for(let entry of numbersMap.entries()){
        answer.innerHTML += `- число <span class="numberMurkup">${entry[0]}</span> встретилось <span class="numberMurkup">${entry[1]}</span> раз;<br>`;
    }


}
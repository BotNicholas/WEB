function avg(...numbers){
    let sum=0;

    for (let number of numbers){
        sum+=number;
    }

    return sum/numbers.length;
}

alert(`AVG for numbers: 1, 2, 3 = ${avg(1, 2, 3)}`);
alert(`AVG for numbers: 1 = ${avg(1)}`);
alert(`AVG for numbers: 1, 2 = ${avg(1, 2)}`);
alert(`AVG for numbers: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 = ${avg(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`);
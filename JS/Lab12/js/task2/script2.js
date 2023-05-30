let numbers = [];
let ae = 0;
let n = 10;

returningPoint:
for(let i=2; i<=n; i++){
    
    for(let j=2; j<i; j++){
        if(i % j == 0) 
            continue returningPoint;
    }
    
    numbers[ae++] = i;
}

alert(`Simple numbers are: ${numbers}`);
let A = [4, -8, 7, -6, 0, -7, 5];
let B = [];

function execute(){
    // B = A.filter((n)=>n<0);
    for(let i=0; i<A.length; i++){
        B[i] = A[i];
    }
    

    B.sort((a, b) =>{
                        if(a<0 && b<0)
                            return Math.abs(a)-Math.abs(b);
                        else
                            return a-b;
                    });

    //alert(A);
    //alert(B);

    document.getElementById("answer-area").style.visibility = "visible";
    document.getElementById("answer-area").innerHTML = `A = {${A}}<br>B = {${B}}`;
}
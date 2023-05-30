function calculateFunction(){

    perimetr.value = Perimetr();
    area.value = Area();
    triangle_type.value = TriangleType();
    // if(Perimetr() == (-1))
    //     perimetr.value = "Unknown!";
    // else
    //     perimetr.value = Perimetr();

    // if(Area() == (-1))
    //     area.value = "Unknown!";
    // else
    //     area.value = Math.round(Area()*100)/100; //rounding till 0.01


    // perimetr.value = 0;
    // area.value = 0;
    // triangle_type.value = 0;
}

function Perimetr(){    
    if(isExists()){
        return +a.value + +b.value + +c.value;
    }

    return "Unknown!";
}

function Area(){
    if(isExists()){
        let p = +Perimetr()/2;
        //return Math.sqrt(p * (p - Number(a.value)) * (p - Number(b.value)) * (p - Number(c.value)));
        let A = +Math.sqrt(p * (p - Number(a.value)) * (p - Number(b.value)) * (p - Number(c.value)));
        return Math.round(A*100)/100;
    }

    return "Unknown!";
}

function TriangleType(){
    if(isExists()){
        if((a.value == b.value)&&(a.value != c.value) && (b.value != c.value))
            return "Isosceles";
        else if((a.value == b.value) && (a.value == c.value) && (b.value == c.value))
            return "Equilateral";
        else if(Math.pow(+c.value, 2) > (Math.pow(a.value, 2) + Math.pow(b.value, 2)))
            return "Obtuse";
        else if(Math.pow(+c.value, 2) == (Math.pow(a.value, 2) + Math.pow(b.value, 2)))
            return "Rectangular";
        else if(Math.pow(+c.value, 2) < (Math.pow(a.value, 2) + Math.pow(b.value, 2)))
            return "Acute";
    }
    return "Unknown!";
}

function isExists(){

    if(a.value == 0 || b.value == 0 || c.value == 0)
        return false;
    
    if((+a.value + +b.value) <= +c.value)
        return false;

    if((+b.value + +c.value) <= +a.value)
        return false;

    if((+c.value + +a.value) <= +b.value)
        return false;

    return true;
}
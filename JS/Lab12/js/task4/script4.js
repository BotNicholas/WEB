// const product1 = 2.98;
// const product2 = 4.50;
// const product3 = 9.98;
// const product4 = 4.49;
// const product5 = 6.87;

let productNumber = +prompt("Input product's number (from 1 to 5, 0 - to exit)", "");
if(productNumber!=0){
    let soldNumber = +prompt("Input sold products number", "0");
    let productPrice;

    switch(productNumber){
        case 1:
            productPrice = 2.98;
            break;
        case 2:
            productPrice = 4.50;
            break;
        case 3:
            productPrice = 9.98;
            break;
        case 4:
            productPrice = 4.49;
            break;
        case 5:
            productPrice = 6.87;
            break;
        default: 
            productPrice = 0;
            break;              
    }

    alert(`Product price: ${productPrice}\nTotal sold products price: ${productPrice*soldNumber}`);
}

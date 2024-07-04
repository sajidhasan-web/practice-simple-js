/* first 100 ----> 100
 *  second 100 --->90
 *  above 200 --->70
 */


function totalDiscountedPrice(quantity){

    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

     if(quantity<=100){
        let total = first100Price * quantity
        return total
     }
     else if(quantity<=200){
        const first100Total = first100Price * 100
        const remainingQuantity = quantity -100
        const remainingTotal = remainingQuantity * second100Price; 
        const total = first100Total + remainingTotal
        return total
     }
     else{
        const first100Total = 100 * first100Price
        const second100Total = 100 * second100Price
        const remainingQuantity = quantity - 200
        const remainingTotal = remainingQuantity * above200Price
        const total = first100Total + second100Total + remainingTotal; 
        return total
     }
}

let totalPrice = totalDiscountedPrice(201)
console.log('Total Discounted Price:', totalPrice)
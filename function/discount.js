/* first 100 ----> 100
 *  above 100 below 200 --->90
 *  above 200 --->70
 */

function totalDiscountedAmount(quantity) {
  if (quantity <= 100) {
    let total = quantity * 100;
    return total;
  } else if (quantity <= 200) {
    let total = quantity * 90;
    return total
  }
  else{
    let total = quantity * 70;
    return total
  }
}

let totalPrice = totalDiscountedAmount(201);

console.log("Total discounted Price:", totalPrice);

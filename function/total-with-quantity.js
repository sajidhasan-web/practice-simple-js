let products = [
  { name: "shampoo", price: 100, quantity: 5 },
  { name: "t-shirt", price: 100, quantity: 5 },
  { name: "pant", price: 400, quantity: 1 },
  { name: "shoe", price: 900, quantity: 1 },
];

function getShoppingTotal(products) {
  let total = 0;
  for (let product of products) {
    //  let ProductWithQuantity = product.price * product.quantity
    total = total + /*ProductWithQuantity*/ product.price * product.quantity;
  }
  return total;
}

let totalCost = getShoppingTotal(products);
console.log("ajke khos abe:", totalCost);

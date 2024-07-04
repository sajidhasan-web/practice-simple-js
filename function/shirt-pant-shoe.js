function shirtPantShoe(shirtQuantity, pantQuantity, ShoeQuantity) {
  const shirtPrice = 500;
  const pantPrice = 300;
  const shoePrice = 900;

  let shirtTotalPrice = shirtPrice * shirtQuantity;
  let pantTotalPrice = pantPrice * pantQuantity;
  let shoeTotalPrice = shoePrice * ShoeQuantity;

  let total = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
  return total;
}

let totalAmount = shirtPantShoe(1,1,0)

console.log("Total Price:", totalAmount);

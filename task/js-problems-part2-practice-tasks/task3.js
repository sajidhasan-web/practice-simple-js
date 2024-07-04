/* Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required. 
*/

function calculateElectronicsBudget(laptopQ, tabletQ, mobileQ){
    const laptopPrice = 35000 
    const tabletPrice = 15000 
    const mobilePrice = 20000

   let laptopTotal = laptopPrice * laptopQ 
   let tabletTotal = tabletPrice * tabletQ 
   let mobileTotal = mobilePrice * mobileQ 

   let total = laptopTotal + tabletTotal + mobileTotal
   
   return total
}
console.log('Total:',calculateElectronicsBudget(1,1,3),'tk')



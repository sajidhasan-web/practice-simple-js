/* write a function to give me the sum of all numbers 
in an array */

function sumOfNumbers(Numbers) {
  let sum = 0;
//   for (const number of Numbers) {
//     console.log(number);
//     sum = sum + number;
//   }
//   return sum;
for(i=0 ; i< Numbers.length; i++){
   console.log(Numbers[i]);
    sum = sum + Numbers[i];
 }
 return sum;
}
const numbs = [20, 30, 40, 50, 60, 70]
const sum = sumOfNumbers(numbs);
console.log("Sum of Numbers is", sum);

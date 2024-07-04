// const goribs = ["elon", "bill", "mark", "owaren"];

// let reversed = goribs.reverse();
// console.log(reversed);
// let reversed = [];
// const numbers = [34, 5, 55, 532, 54, 25, 52, 52];

// for (const num of numbers) {

//   reversed.unshift(num);
// }
// console.log(reversed);

let rev = [];
const numbers = [34, 5, 55, 532, 54, 25, 52, 52];

for (i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  rev.unshift(num);
  
}
console.log(rev);

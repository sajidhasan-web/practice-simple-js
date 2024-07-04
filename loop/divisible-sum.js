/* let sum = 0;

for (i = 10; i <= 50; i++) {
  if (i % 3 === 0) {
    // console.log(i);
    sum = sum + i;
  }
}
console.log("sum:", sum);  */

let i = 10;
let sum = 0;

while (i <= 50) {
  i++;
  if (i % 3 === 0) {
    // console.log(i);
    sum = sum + i;
  }
}
console.log("totalSum:", sum);

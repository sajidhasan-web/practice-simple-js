let num = 51;
let sum = 0;

while (num <= 85) {
  if (num % 2 !== 1) {
    sum = sum + num;
  }
  num++;
}
console.log("sum of the even number between 51 to 85:", sum)

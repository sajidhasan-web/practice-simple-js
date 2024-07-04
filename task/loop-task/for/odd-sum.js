let sum = 0;

for (let num = 91; num <= 129; num++) {
  if (num % 2 !== 0) {
    console.log(num);
    sum = sum + num;
  }
}
console.log("sum of the all odd number between  91 to 129:", sum);

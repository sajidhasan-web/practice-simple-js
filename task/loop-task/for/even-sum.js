let sum = 0;

for (let num = 51; num <= 85; num++) {
  if (num % 2 !== 1) {
    // console.log(num);
    sum = sum + num;
  }
}
console.log("sum number of all the even number between 51 to 85", sum)

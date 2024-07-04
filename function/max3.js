function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log("jim is the ultimate boss");
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    console.log("kim is the boss");
    return num2;
  } else {
    console.log("tim is the real boss");
    return num3;
  }
}

let jim = 45;
let kim = 75;
let tim = 67;
let max = maxOfThree(jim, kim, tim);
console.log(max);



// const max = Math.max(2,26,2,4,31,3,53,3,35,3,5,)
// console.log(max);


function onlyEvenNumbers(Numbers) {
  let even = [];
  for (let number of Numbers) {
    if (number % 2 === 0) {
      console.log(number);
      even.push(number);
    }
  }
  return even;
}

// let numbers = [20, 33, 67, 86, 90, 31, 36]
// let numbs = onlyEvenNumbers(numbers)
// console.log("Even numbers are:",numbs)

function sumOfEvenNumbers(Numbers) {
  let sum = 0;
  for (let number of Numbers) {
    
    if (number % 2 === 0) {
        console.log(number);
      sum = sum + number;
    }
  }
  return sum;

}

let numbs = [5, 65, 35, 41, 74, 42, 24, 4, 50, 15];
let number = sumOfEvenNumbers(numbs);
console.log("Sum of only the even numbers is:", number)

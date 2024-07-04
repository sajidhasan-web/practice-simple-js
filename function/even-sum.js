
function evenAvg(numbers) {
  let evens = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      evens.push(number);
    }
  }
  let sum = 0;
  for (let even of evens) {
    sum = sum + even;
  }
  let count = evens.length;
//   console.log(sum, count);
  let average = sum / count;
  return average;
}

// let numbers = [10, 13, 18, 21, 24, 25, 28];
// let avg = evenAvg(numbers);
// console.log("average of sum numbers:", avg);

// let marks = [70, 80, 50, 60, 33, 67, 54, 45, 80];
// console.log("avg of even marks:", evenAvg(marks));




  

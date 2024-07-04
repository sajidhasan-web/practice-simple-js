function make_avg(Number) {
  let sum = 0;
  let avg = 0;
  for (let number of Number) {
    console.log(number)
    sum = sum + number;
    avg= sum/ Number.length
  }
  return avg
}

let numbers = [5, 7, 2, 4, 9, 6, 8];
let numbs = make_avg(numbers);
console.log("Avg of numbers:", numbs);

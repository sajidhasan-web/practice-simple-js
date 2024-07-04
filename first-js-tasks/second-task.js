// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.------------ {****.toFixed(2)*****}----------------

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var totalNumber = mathematics + biology + chemistry + physics + bangla;
console.log(totalNumber);
averageNumber = totalNumber / 5;
console.log(averageNumber.toFixed(2));

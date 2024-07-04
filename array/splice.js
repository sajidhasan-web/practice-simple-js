/*let fruits = ["aam", "jam", "kola", "angur", "dragon", "peara"];

let spliceFruits = fruits.splice(2, 2, 'tometo', 'orrage');
console.log(fruits);
console.log(spliceFruits);*/


let colors = ['red', 'green', 'blue', 'yellow'];

// Remove 'blue' from the array
let removedColor = colors.splice(2, 1);
console.log(colors); // Output: ['red', 'green', 'yellow']
console.log(removedColor); // Output: ['blue']

// Replace 'green' with 'orange'
colors.splice(1, 1, 'orange');
console.log(colors); // Output: ['red', 'orange', 'yellow']

// Add 'purple' and 'pink' starting from index 2
colors.splice(2, 0, 'purple', 'pink');
console.log(colors); // Output: ['red', 'orange', 'purple', 'pink', 'yellow']


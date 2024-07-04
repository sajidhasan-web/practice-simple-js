const colors = ["red", "blue", "green", "yellow", "orange"];

let reversed = [];

for (let i = 0; i < colors.length; i++) {
  let color = colors[i];
  reversed.unshift(color);
}
console.log(reversed);

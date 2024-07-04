/* Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed']; */

function findSmallestName(arr) {
  let smallestName = arr[0];
  let smallest = "";

  for (let name of arr) {
    if (name.length > smallestName.length) {
      smallest = name;
    }
  }
  return smallest;
}

const names = findSmallestName(["rahim", "robin", "rafi", "ron", "rashed"]);

console.log(names);

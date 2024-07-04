function findLowestNumber(arr) {
  let LowestNumber = arr[0];
  let lowNum = 0;
  for (let num of arr){
    if(num > LowestNumber){
      lowNum = num
    }
  }
  return lowNum;
}

const heights2 = findLowestNumber([167, 190, 120, 165, 137]);
console.log(heights2);

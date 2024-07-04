function count_zero(Number) {
    let zeros = ""
  for(i= 0; i<Number.length; i++){
    console.log(Number[i])
    if(Number[i] === 0 || Number[i]=== 1){
        console.log(Number)
    }
  }
  return Number
}

let binaryCode = "10110111001";
let code = count_zero(binaryCode);
console.log(code)


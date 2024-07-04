function oddEven(Number){
    
  if(Number%2 ===0){
    let result = Number *2;
    console.log('this is an even number:',result)
  } else{
    let result = Number / 2;
    console.log('this is an odd number:',result)
  }
}

let number = oddEven(11)
function cubeNumber(number) {
   if(typeof number !== 'number'){
     return 'Please provide a number....'
   }
    cube = number ** 3;
    return cube;
  }

console.log(cubeNumber(3));



function countHowManyTimes(numbers, find){
    let storeSame = [];
    for(let number of numbers){
       if(number === find){
        // console.log(number)
        storeSame.push(number)
       }
    }
    console.log(storeSame);
    let count = 0;
    for(let number of storeSame){
         count = storeSame.length
    }
    console.log(count)
}

let numbers =  [5,6,11,12,98,5]
let find = 5;
countHowManyTimes(numbers,find)

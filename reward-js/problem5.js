function canPay(changeArray, totalDue){
    if(changeArray.length == 0){
        return "the array is an empty array"
    }
    else{
        let sum = 0;

    for(i=0; i< changeArray.length; i++){
         let element = changeArray[i]
         sum += element
    }
    if(sum >= totalDue){
        return true
    }else{
        return false
    }
    }
    
}

console.log(canPay([1,2,5],10))
console.log(canPay([1,5,5],10))
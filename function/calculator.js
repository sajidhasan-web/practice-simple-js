function add(num1, num2){
    let result = num1 + num2
    return result
}

function subtraction(num1,num2){
    let result = num1 - num2
    return result 
}

function multiply(num1,num2){
    let result = num1* num2 
    return result 
}

function divide(num1, num2){
    let result = num1 / num2
    return result
}

function calculate(a, b, operation){
        if(operation === "+"){
            let result = add(a,b)
            return result
        }
        else if(operation === "-"){
            let result = subtraction(a,b)
            return result
        }
        else if(operation === "*"){
            let result = multiply(a,b)
            return result 
        }
        else if(operation === "/"){
            let result = divide(a,b)
            return result 
        }
        else{
            return "The operation is not allowed"
        }
}

       let calc = calculate(10,2,"*")
        console.log("result:",calc)

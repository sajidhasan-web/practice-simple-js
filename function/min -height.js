let height = [35,51,32,65,54,15,74,43]
let minNum = height[0]
function minHeight(numbers){
    for(let num of numbers){
        if (minNum > num){
            minNum = num
        }
    }
    return minNum
}

let min = minHeight(height)

console.log("the smallest number:",min)
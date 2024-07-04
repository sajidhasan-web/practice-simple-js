function randomNum10To20(number){
    const randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    return randomNumber
}

console.log(randomNum10To20())
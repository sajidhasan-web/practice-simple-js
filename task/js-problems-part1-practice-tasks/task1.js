// celsi to fahren

function celsiusToFahrenheit(celsius) {
  let fahrenheit = celsius * 9/5 + 32
  return fahrenheit;
}

// let celsi = 100;
// console.log(celsiusToFahrenheit(celsi));


// fahren to celsi

function fahrenheitToCelsius(fahrenheit){
    let celsius = fahrenheit - 32 
      let result = celsius * 5/9 
    return result
}

console.log(fahrenheitToCelsius(212))
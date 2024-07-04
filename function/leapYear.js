function isLeapYear(year) {
  if (year % 4 === 0) {
    // console.log("leapYear");
    return true;
  } else {
    // console.log("leapYear");
    return false;
  }
}

let leap = isLeapYear(2028);

// console.log(leap);

function isLeapYear2 (year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true
    }
    else if(year % 400 === 0){
        return true
    }
    else{
        return false
    }
}
let leap2 = isLeapYear2(1900);
let leap3 = isLeapYear2(2100);
let leap4 = isLeapYear2(2400);
let leap5 = isLeapYear2(2050);

console.log(leap2);
console.log(leap3);
console.log(leap4);
console.log(leap5);



function evenSizedString(str) {
  let sized = str.length;
  console.log(str, sized);
  if (sized % 2 === 0) {
    console.log("Even Sized");
    return true;
  } else {
    console.log("Odd Sized");
    return false;
  }
}

// let Str1 = evenSizedString("Dhaka");
// let Str2 = evenSizedString("bangladesh");
// console.log(Str2);

function doubleOrTriple(num, doDouble) {
  if (doDouble === true) {
    let result = num * 2;
    return result;
  } else {
    let result = num * 3;
    return result;
  }
}

// let result = doubleOrTriple(5, true);
// let result2 = doubleOrTriple(5, false);
// console.log(result2);



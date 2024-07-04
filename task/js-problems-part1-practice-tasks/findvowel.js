function vowelCount(str) {
    let count = 0;
    const vowels = ["a" , "e", "i", "o", "u"];
  
    for (let letter of str.toLowerCase()) {
      if (vowels.includes(letter)) {
        count++;
      }
    }
    return count;
  }
  
  console.log(vowelCount("Write a function to count the number of vowels in a string.")); // 


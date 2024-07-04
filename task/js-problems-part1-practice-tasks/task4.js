/* Write a function to find the longest word in a given string.
-----------------------------------------------------------------
sample-input: I am learning Programming to become a programmer
------------------------------------------------------------------------
sample-output: Programming
*/

function longestWord(str){
    let bigestWord = '' 
   let words = str.split(' ')
   bigestWord = words[0]
   for(let word of words){
       if(word.length > bigestWord.length){
         bigestWord = word
       }
   }
   return bigestWord
}

console.log(longestWord('I am learning Programming to become a programmer'))
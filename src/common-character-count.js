const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  if (s1 === '' || s2 === '') {
   return 0
  }
  else {
   let sum1 = 0;
    let sum2 = 0
    let res = 0
    s1= s1.split('').sort().join('')
    s2 = s2.split('').sort().join('')
 
 
 function count(letter, word) {
 let sum = 0
 
   for (let i = 0; i < word.length; i++) {
   if (letter == word[i])
    sum = sum +1
   }
   return sum
 }
   
    for (let i = 0; i < s1.length; i++) {
     if (s1[i] == s1[i -1]) {
       continue
     }
      else {
         if(count(s1[i], s1) < count(s1[i], s2)) {
           res = res + count(s1[i], s1)
         }
        else {
          res = res + count(s1[i], s2)
        }
      }
    }
    return res
  }
  }

module.exports = {
  getCommonCharacterCount
};

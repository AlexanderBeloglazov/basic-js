const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

 function encodeLine(str) {
  let res = ''

function count(letter, position) {
  let sum = 1
  for (let i = position; i < str.length; i++) {
 if (str[i+1] == letter) {
   sum = sum +1
 }  
    else {
      break
    }
  }
  return sum
}
 

  for (let i = 0; i < str.length; i++) {
    if(count(str[i], i) == 1) {
      res = res + str[i]
   
    }
    else {
      res = res +count(str[i], i) + str[i]
     i = i+ count(str[i], i) -1
    }
 }
 return res
}


module.exports = {
  encodeLine
};

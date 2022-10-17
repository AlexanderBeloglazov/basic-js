const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  const number = ['0','1','2','3','4','5','6','7','8','9'];
  const letter = ['A','B','C','D','E','F'];
  let res = n.split('-')

  let sum = 0

   for (let i = 0; i < res.length; i++) {
      if((number.includes(res[i][0]) == true || letter.includes(res[i][0]) == true) &&  (number.includes(res[i][1]) == true || letter.includes(res[i][1]) == true) ) {
        sum = sum +1
      }  
  }

  if (sum == 6) {
    return true
  }
  else {
    return false
  }
}

module.exports = {
  isMAC48Address
};

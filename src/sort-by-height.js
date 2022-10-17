const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let indexArr = []
  let newarr = []
  
for (let i = 0; i < arr.length; i++) {
 if (arr[i] == -1) {
   indexArr.push(i)
 }
  else {
    newarr.push(arr[i])
  }
}

newarr = newarr.sort(function(a, b) {
  return a - b;
})

  for (let j = 0; j < indexArr.length; j++) {
    newarr.splice(indexArr[j], 0, -1)
  }
  return newarr
}

module.exports = {
  sortByHeight
};

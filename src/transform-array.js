const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  const diskNext = '--discard-next';
  const diskPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  
    let newArr = []
    if (Array.isArray(arr) !== true) {
      throw new Error("'arr' parameter must be an instance of the Array!")
    }
    else {
      if (arr.length == 0) {
        return []
      }
      if (arr.length !== 0) {
        
        for (let i = 0; i < arr.length; i++) {
          
          if (i==0 && (arr[i] == diskPrev || arr[i] == doublePrev)) {
            continue 
          }
          if (i == arr.length -1 && (arr[i] == diskNext || arr[i] == doubleNext)) {
            continue 
          }
          
        if (arr[i] !== diskNext && arr[i] !== diskPrev && arr[i] !== doubleNext && arr[i] !== doublePrev) {
          newArr.push(arr[i])
          
        }
        if (arr[i] == diskNext) {
          i = i+1
         
        }
          if (arr[i] == diskPrev && arr[i-2] == diskNext) {
            continue
          }
          if (arr[i] == diskPrev && arr[i-2] !== diskNext) {
            newArr.pop()
          }
  
          if(arr[i] == doubleNext) {
            newArr.push(arr[i+1])
      
          }
          if (arr[i] == doublePrev && arr[i-2] !== diskNext) {
             newArr.push(newArr[newArr.length-1])
          }
      }
      }
    }
    return newArr
  }

module.exports = {
  transform
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  
  calculateDepth(arr) {
    if (!Array.isArray(arr))
    return 0;

let sum = 0;

for (let i of arr)
    sum = Math.max(sum, this.calculateDepth(i));

return 1 + sum;
  }
  
}

module.exports = {
  DepthCalculator
};

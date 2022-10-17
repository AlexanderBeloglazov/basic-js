const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

 
  if (typeof sampleActivity !== 'string' ||  isNaN(sampleActivity*1) === true || sampleActivity == '' ||  sampleActivity == ' ' || sampleActivity*1>15) {
    return false
  }

  
else {
 
 
  const k = 0.693 / HALF_LIFE_PERIOD
  const t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity*1) / k)
  if(t == 'Infinity' || isNaN(t) == true) {
    return false
  }
  return t
}

}

module.exports = {
  dateSample
};

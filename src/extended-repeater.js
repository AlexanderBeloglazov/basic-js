const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let resArr = []
  let additionSTR = []
  if (options.hasOwnProperty('repeatTimes') == false) {
    options.repeatTimes = 1
  }
    if (options.hasOwnProperty('additionRepeatTimes') == false) {
      options.additionRepeatTimes = 1
    }
  
    
  if (options.hasOwnProperty('addition') == false) {
   
    for (let i = 0; i < options.repeatTimes; i++) {
  resArr.push(str)
    }
    if (options.hasOwnProperty('separator') == false) {
      return resArr.join('+')
    }
    else {
      return resArr.join(options.separator)
    }
  }
  
    
  
  if (options.hasOwnProperty('addition') == true) {
     if (options.addition == null) {
      options.addition = 'null'
    }
    
    for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionSTR.push(options.addition)
  }
    
    if (options.hasOwnProperty('additionSeparator') == true) {
       if (options.additionSeparator == null) {
      options.additionSeparator = 'null'
    }
     
  additionSTR = additionSTR.join(options.additionSeparator)
    
    }
    if (options.hasOwnProperty('additionSeparator') == false) {
  additionSTR = additionSTR.join('|')
      
    }
  let result = str + additionSTR
  
    for (let j = 0; j < options.repeatTimes; j++) {
    resArr.push(result)
  }
  
    if (options.hasOwnProperty('separator') == true) {
  resArr = resArr.join(options.separator)
    }
    else  {
      resArr = resArr.join('+')
    }
    
  
  return resArr
  }
    
        
  }

module.exports = {
  repeater
};

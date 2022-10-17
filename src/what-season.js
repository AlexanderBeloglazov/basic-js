const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if( arguments.length == 0) {
    return 'Unable to determine the time of year!'
  }
  
    if(date.hasOwnProperty('toString')) {
      throw new Error('Invalid date!')
    }
  
    
   if( date instanceof Date == true){
    
    if(date.getMonth() == 11 || date.getMonth() <=1){
   return 'winter'
    }
     if(date.getMonth() >1 && date.getMonth() <=4){
   return 'spring'
    }
     if(date.getMonth() >4 && date.getMonth() <=7){
   return 'summer'
    }
     if(date.getMonth() > 7 && date.getMonth() <11){
   return 'autumn'
    }
   }
    else {
      throw new Error('Invalid date!')
    }
  }

module.exports = {
  getSeason
};

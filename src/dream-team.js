const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) !== true) {
    return false
  }
    else{
    
   let myarr = []
    
  function sliceWhiteSpace(word) {
    for (let j = 0; j < word.length; j++) {
      if (word[j] !== ' ') {
        return word[j]
        break
  }
  }}
  
   for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      myarr.push(sliceWhiteSpace(members[i]).toUpperCase())
    }
   }
      
    myarr = myarr.sort()
    let name = ''
  for (let j = 0; j < myarr.length; j++) {
    name = name + myarr[j]
  }
    return name
    }
  }

module.exports = {
  createDreamTeam
};

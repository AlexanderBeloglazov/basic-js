const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  if (names.length === 0) {
   return []
  }
  else {
 let res = []

 
     for (let i = 0; i < names.length; i++) {
     if (i === 0) {
       res.push(names[i])
      
     }
       else {
         if(res.includes(names[i]) == false) {
            console.log(names[i])
           res.push(names[i])
         }
         else{
          
               if (res.includes(names[i]) == true && names[i].includes('(') == false && res.includes(names[i] + '(1)') == false) {
           res.push(names[i] + '(1)')
         }
           if (names[i].includes('(1)') == true && res.includes(names[i]) == true) {
 
             res.push(names[i] + '(1)')
           }
         
          if (names[i].includes('(') == true) {
            res.push(names[i].slice(0, names[i].length-2) +'2)')
          }
         else {
           
         }
         }

       } 
   }
 return res
  }
 }

module.exports = {
  renameFiles
};

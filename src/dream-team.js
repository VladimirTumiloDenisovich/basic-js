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

function createDreamTeam(arr) {
  if (Array.isArray(arr) === false) {
    return false
  }
  let copy = [];
  let result = '';
  arr.
    forEach(element => {
      if (typeof element === 'string') {
        copy.push(element.replace(/[^A-Z']/gi, '').toUpperCase())
      }
    });
  copy.sort().forEach(element => {
    result += element[0]
  });
  if (result !== '') {
    return result
  }
}



module.exports = {
  createDreamTeam
};

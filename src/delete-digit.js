const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
  let array = [...n.toString()].map(Number);
  let moreNumber = [];

  for (let i = 0; i < array.length; i++) {
    const whileArray = [...array]
    whileArray.splice(i, 1)
    whileArray.join('').split(' ').forEach(element => {
      moreNumber.push(element)
    })
  };
  for (let i = 0; i < moreNumber.length; i++) {
    if (parseInt(moreNumber[i], 10) > maxNumber) {
      maxNumber = parseInt(moreNumber[i], 10);
    };
  };
return maxNumber;
};

module.exports = {
  deleteDigit
};

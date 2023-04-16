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

  function type(date) {
  var regex = /^\[object (\S+?)\]$/;
  var matches = Object.prototype.toString.call(date).match(regex) || [];

  return (matches[1] || 'undefined').toLowerCase();
} 
if (date === undefined) {return 'Unable to determine the time of year!'}
if (type(date) !== 'date') {throw new Error('Invalid date!')}
if (date.hasOwnProperty('toString')) {
  throw new Error('Invalid date!');
} else {}
  let testDate = date.getMonth() + 1; 

  if (testDate === 1 || testDate === 2 || testDate === 12) {
    return 'winter'
  }
  if (testDate === 3 || testDate === 4 || testDate === 5) {
    return 'spring'
  }
  if (testDate === 6 || testDate === 7 || testDate === 8) {
    return 'summer'
  }
  if (testDate === 9 || testDate === 10 || testDate === 11) {
    return 'autumn'
  }
}
module.exports = {
  getSeason
};

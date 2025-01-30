const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  array1 = s1.split('');
  array2 = s2.split('');
  let count = 0;
  for (let i = 0; i < s1.length; i += 1) {
      for (let j = 0; j < s2.length; j += 1){
        if (array1[i] === array2[j]) {
          array2.splice(j, 1);
          count += 1;
          break;
        }   
      }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};

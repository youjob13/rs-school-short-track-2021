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
function getCommonCharacterCount(/* s1, s2 */) {
  // const obj = {};
  // let res = 0;
  // let s3 = s2;
  // s1.split('').forEach((letter) => {
  //   if (s3.includes(letter)) {
  //     obj[letter] = 0;
  //     s3 = s3
  //       .split('')
  //       .filter((item) => {
  //         if (item === letter) {
  //           obj[letter]++;
  //         } else {
  //           return item;
  //         }
  //       })
  //       .join('');
  //     obj[letter] = Math.min(
  //       obj[letter],
  //       s1.split('').filter((item) => item === letter).length
  //     );
  //   }
  // });

  // for (const prop in obj) {
  //   res += obj[prop];
  // }

  // return res;
  throw new Error('Not implemented');
}

module.exports = getCommonCharacterCount;

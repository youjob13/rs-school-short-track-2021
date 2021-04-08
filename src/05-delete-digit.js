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
  let num = Math.min(...n.toString().split('').map(Number));
  let minIndex = n.toString().split('').indexOf(String(num));
  return +n
    .toString()
    .split('')
    .filter((elem, index) => minIndex !== index)
    .join('');
}

module.exports = deleteDigit;

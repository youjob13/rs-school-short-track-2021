/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minusOneIndexes = [];
  const sortedArr = arr
    .filter((elem, index) => {
      if (elem !== -1) {
        return elem;
      }
      minusOneIndexes.push(index);
      return null;
    })
    .sort((a, b) => a - b);

  let count = sortedArr.length;

  return arr.map((elem) => {
    if (sortedArr.includes(elem)) {
      return sortedArr[sortedArr.length - count--];
    }
    return -1;
  });
}

module.exports = sortByHeight;

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const exception = {};
  return matrix.reduce(
    (acc, numsX) => acc + numsX.reduce((accum, numY, i) => {
      if (numY === 0) {
        exception[i] = true;
      }
      if (!exception[i]) {
        return accum + numY;
      }
      return accum;
    }, 0),
    0,
  );
}

module.exports = getMatrixElementsSum;

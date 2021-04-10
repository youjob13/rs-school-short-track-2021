/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixField = {};
  const res = [];
  matrix.forEach((elem, index, arr) => {
    elem.forEach((item, i) => {
      matrixField[`${index}${i}`] = matrixField[`${index}${i}`] || 0;
      if (item) {
        if (elem.length - 1 >= i + 1) {
          matrixField[`${index}${i + 1}`] = ++matrixField[`${index}${i + 1}`] || 1;
        }
        if (arr.length - 1 >= index + 1) {
          matrixField[`${index + 1}${i}`] = ++matrixField[`${index + 1}${i}`] || 1;
        }
        if (index - 1 >= 0) {
          matrixField[`${index - 1}${i}`] = ++matrixField[`${index - 1}${i}`] || 1;
        }
        if (i - 1 >= 0) {
          matrixField[`${index}${i - 1}`] = ++matrixField[`${index}${i - 1}`] || 1;
        }
        if (i - 1 >= 0 && index - 1 >= 0) {
          matrixField[`${index - 1}${i - 1}`] = ++matrixField[`${index - 1}${i - 1}`] || 1;
        }
        if (i + 1 >= 0 && index - 1 >= 0) {
          matrixField[`${index + 1}${i - 1}`] = ++matrixField[`${index + 1}${i - 1}`] || 1;
        }
        if (i + 1 >= 0 && index + 1 >= 0) {
          matrixField[`${index + 1}${i + 1}`] = ++matrixField[`${index + 1}${i + 1}`] || 1;
        }
        if (i - 1 >= 0 && index + 1 >= 0) {
          matrixField[`${index - 1}${i + 1}`] = ++matrixField[`${index - 1}${i + 1}`] || 1;
        }
      }
    });
  });
  for (let i = 0; i < matrix.length; i++) {
    let resStr = [];
    for (let j = 0; j < matrix[i].length; j++) {
      resStr.push(matrixField[`${i}${j}`]);
    }
    res.push(resStr);
    resStr = [];
  }

  return res;
}

module.exports = minesweeper;

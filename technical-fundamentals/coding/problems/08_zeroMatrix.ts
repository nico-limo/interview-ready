// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][];

export default function zeroMatrix(matrix: Matrix) {
  const array: Array<[number, number]> = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === 0) {
        array.push([row, col]);
      }
    }
  }

  // [1,0,3]
  // [1,1,1]
  // [1,1,1]
  //
  // [0,0,0]
  // [1,0,1]
  // [1,0,1]

  array.forEach((coord) => {
    const [x, y] = coord;
    matrix[x] = Array(matrix[x].length).fill(0);

    for (let row = 0; row < matrix.length; row++) {
      matrix[row][y] = 0;
    }
  });

  return matrix;
}

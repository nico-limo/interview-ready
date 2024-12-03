// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][];

// [1,2,3]
// [4,5,6]
// [7,8,9]

// [7,4,1]
// [8,5,2]
// [9,6,3]

// 0,0 => 0,2
// 0,1 => 1,2
// 0,2 => 2,2

// 1,0 => 0,1
// 1,1 => 1,1
// 1,2 => 2,1

// 2,0 => 0.0

export default function rotateMatrix(matrix: Matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = row + 1; col < matrix.length; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }
  matrix.forEach((row) => row.reverse());
  return matrix;
}

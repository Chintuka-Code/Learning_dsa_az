const transposeMatrix = (matrix) => {
  const row = matrix.length;
  const column = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = i + 1; j < column; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  console.log(matrix);
};

transposeMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

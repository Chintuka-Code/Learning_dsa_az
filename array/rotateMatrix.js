const rotateMatrix = (matrix) => {
  const rotate = [...matrix];

  const row = matrix.length;
  const column = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      rotate[j][row - 1 - i] = matrix[i][j];
    }
  }

  console.log(rotate);
};

rotateMatrix([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);

const setMatrixZero = (matrix) => {
  const column = matrix[0].length;
  const row = matrix.length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (!matrix[i][j]) {
        setRow(matrix, i);
        setColumn(matrix, j);
      }
    }
  }
};

const setColumn = (matrix, column) => {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    matrix[i][column] = -1;
  }
};

const setRow = (matrix, row) => {
  const n = matrix[0].length;

  for (let i = 0; i < n; i++) {
    matrix[row][i] = -1;
  }
};

// ======== Another way

const setMatrixZero01 = (matrix) => {
  const column = matrix[0].length;
  const row = matrix.length;

  //   We are not using hash map here because we just need to track which row and column needs to be zero.
  const tempRow = new Array(row).fill(0);
  const tempColumn = new Array(column).fill(0);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (!matrix[i][j]) {
        tempRow[i] = 1;
        tempColumn[column] = 1;
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (tempRow[i] || tempColumn[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};

const moveZero = (arr) => {
  let firstZeroPosition;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      firstZeroPosition = i;
      break;
    }
  }

  for (let i = firstZeroPosition + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[firstZeroPosition]] = [arr[firstZeroPosition], arr[i]];

      firstZeroPosition++;
    }
  }

  return arr;
};

console.log(moveZero([1, 0, 6, 0, 4, 0, 0, 0, 34]));

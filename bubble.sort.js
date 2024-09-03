const bubbleSort = (arr) => {
  for (let i = arr.length; i > 1; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    console.log(arr);
  }

  return arr;
};

const executeTestCase = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const sortedArray = bubbleSort(arr[i]);
    console.log(sortedArray);
  }
};

executeTestCase([
  [13, 46, 24, 52, 20, 9],
  [5, 4, 3, 2, 1],
]);

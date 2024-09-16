const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      for (let j = i; j >= 1; j--) {
        if (arr[j] < arr[j - 1]) {
          [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }
      }
    }
  }

  return arr;
};

const executeTestCase = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const sortedArray = insertionSort(arr[i]);
    console.log(sortedArray);
  }
};

executeTestCase([
  [13, 4, 24, 52, 20, 9],
  [5, 4, 3, 2, 1],
]);

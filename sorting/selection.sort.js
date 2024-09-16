const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
};

const executeTestCase = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const sortedArray = selectionSort(arr[i]);
    console.log(sortedArray);
  }
};

executeTestCase([
  [13, 46, 24, 52, 20, 9],
  [5, 4, 3, 2, 1],
]);

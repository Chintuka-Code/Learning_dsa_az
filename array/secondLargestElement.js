const secondLargestElement = (arr) => {
  let max = null;
  let secondLargest = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max || !max) {
      secondLargest = max;
      max = arr[i];
    }
  }

  console.log(secondLargest);
};

secondLargestElement([2, 45, 2, 4, 2, 56, 7, 6, 4, 7]);

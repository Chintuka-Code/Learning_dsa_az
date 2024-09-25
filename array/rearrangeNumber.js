const rearrangeNumber = (arr) => {
  let nextPositivePlace = 0;
  let nextNegativePlace = 1;
  const rearrangeData = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      rearrangeData[nextPositivePlace] = arr[i];
      nextPositivePlace += 2;
    } else {
      rearrangeData[nextNegativePlace] = arr[i];
      nextNegativePlace += 2;
    }
  }

  return rearrangeData;
};

console.log(rearrangeNumber([1, 2, -3, -1, -2, -3]));

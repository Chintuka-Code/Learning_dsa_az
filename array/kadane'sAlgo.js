const kadaneAlgo = (arr) => {
  let sum = 0;
  let maxSubArraySum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > maxSubArraySum) {
      maxSubArraySum = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }
};

// Prefix sum problem
const maxSubArraySumK = (arr, k) => {
  const prefixSum = new Map();
  let sum = 0;
  let maxLength = null;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) {
      maxLength = Math.max(maxLength, i + 1);
    }

    const preSum = sum - k;

    if (prefixSum.has(preSum)) {
      const premSumValue = prefixSum.get(preSum);
      maxLength = Math.max(maxLength, i - premSumValue);
    }

    if (!prefixSum.has(preSum)) {
      prefixSum.set(sum, i);
    }
  }
};

maxSubArraySumK([2, 3, 5, 1, 1, 1, 9], 2);

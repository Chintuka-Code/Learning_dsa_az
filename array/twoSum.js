const twoSum = (arr, target) => {
  const sortedArray = arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];

    if (sum > target) {
      right--;
    }

    if (sum < target) {
      left++;
    }

    if (sum === target) {
      return {
        left: sortedArray[left],
        right: sortedArray[right],
      };
    }
  }
};

console.log(twoSum([2, 6, 5, 8, 11], 14));

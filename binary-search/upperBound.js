const upperBound = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  console.log(right);
};

upperBound([3, 5, 5, 8, 8, 15, 19], 15);

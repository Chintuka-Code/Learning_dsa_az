const lowerBound = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  console.log(right);
};

lowerBound([3, 5, 5, 8, 8, 15, 19], 15);

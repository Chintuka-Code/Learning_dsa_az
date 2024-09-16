const mergeSort = (arr) => {
  const n = arr.length;

  for (let size = 1; size < n; size *= 2) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = Math.min(left + size - 1, n - 1);
      const right = Math.min(left + 2 * size - 1, n - 1);

      console.log({ left, right, mid });
    }
  }
};

// Example usage
let arr = [38, 27, 43, 3, 9, 82, 10];
mergeSort(arr);

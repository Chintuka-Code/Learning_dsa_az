const dutchNationalFlag = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;

  while (mid <= high) {
    if (mid === 0) {
      [arr[left], arr[mid]] = [arr[mid], arr[left]];
      left++;
      mid++;
    }

    if (mid === 1) {
      mid++;
    }

    if (mid === 2) {
      [arr[right], arr[mid]] = [arr[mid], arr[right]];
      right--;
    }
  }
};

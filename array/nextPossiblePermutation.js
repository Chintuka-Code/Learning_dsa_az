const nextPossiblePermutation = (arr) => {
  let peakPoint = -1;
  const n = arr.length;

  //   Finding the peak point
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      peakPoint = i;
      break;
    }
  }

  if (peakPoint < 0) {
    return reverseArray(0, n - 1, arr);
  }

  //   Finding the largest smallest from the peak element to n-1
  for (let i = n - 1; i > peakPoint; i--) {
    if (arr[i] > arr[peakPoint]) {
      [arr[i], arr[peakPoint]] = [arr[peakPoint], arr[i]];
      break;
    }
  }

  return reverseArray(peakPoint + 1, n - 1, arr);
};

//   Reverse the array
const reverseArray = (startIndex, endIndex, arr) => {
  let i = startIndex;
  let j = endIndex;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];

    i++;
    j--;
  }

  return arr;
};

console.log(nextPossiblePermutation([2, 1, 5, 4, 3, 0, 0]));

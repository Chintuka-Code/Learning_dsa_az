const missingNumber = (arr) => {
  const n = arr[arr.length - 1];
  const totalSum = (n * (n + 1)) / 2;
  let arraySum = 0;

  for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
  }

  return totalSum - arraySum;
};

console.log(missingNumber([1, 2, 4, 5]));

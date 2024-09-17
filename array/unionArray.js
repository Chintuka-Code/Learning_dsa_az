const unionArr = (arr1, arr2) => {
  let leftIndex = 0;
  let rightIndex = 0;
  const union = [];

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] < arr2[rightIndex]) {
      if (union[union.length - 1] !== arr1[leftIndex]) {
        union.push(arr1[leftIndex]);
      }
      leftIndex++;
    }

    if (arr2[rightIndex] < arr1[leftIndex]) {
      if (union[union.length - 1] !== arr2[rightIndex]) {
        union.push(arr2[rightIndex]);
      }
      rightIndex++;
    }

    if (arr1[leftIndex] === arr2[rightIndex]) {
      union.push(arr1[leftIndex]);

      leftIndex++;
      rightIndex++;
    }
  }

  while (leftIndex < arr1.length) {
    // If any elements left in arr1
    if (union[union.length - 1] !== arr1[leftIndex])
      union.push(arr1[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < arr2.length) {
    // If any elements left in arr2
    if (union[union.length - 1] !== arr2[rightIndex])
      union.push(arr2[rightIndex]);
    rightIndex++;
  }

  return union;
};

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [2, 3, 4, 4, 5, 11, 12];

console.log(unionArr(arr1, arr2));

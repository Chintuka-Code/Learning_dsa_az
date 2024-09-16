const removeDuplicate = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i]) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

// const removeDuplicate = (arr) => {
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
// };

console.log(removeDuplicate([1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7]));

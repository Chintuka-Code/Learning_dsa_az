const rotateLeft = (arr) => {
  const temp = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }

  arr.push(temp);
  return arr;
};

console.log(rotateLeft([1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7]));

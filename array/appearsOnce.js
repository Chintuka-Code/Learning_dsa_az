const appearsOnce = (arr) => {
  let xor = 0;

  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }

  return xor;
};

console.log(appearsOnce([2, 2, 1, 1, 4]));

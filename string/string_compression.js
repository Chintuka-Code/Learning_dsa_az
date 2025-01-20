const stringCompression = (arr) => {
  let currentChar = arr[0];
  let idx = 0;
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    if (element === currentChar) {
      count++;
      continue;
    }
    arr[idx] = currentChar;
    if (count > 1) {
      arr[idx + 1] = count;
      idx = idx + 2;
    } else {
      idx = idx + 1;
    }
    currentChar = element;
    count = 1;
  }
  arr[idx] = currentChar;
  if (count > 1) {
    arr[idx + 1] = count;
  }

  return arr;
};

console.log(stringCompression(["a", "a", "b", "c"]));

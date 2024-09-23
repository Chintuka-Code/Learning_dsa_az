const majorityElement = (arr) => {
  let count = 0;
  let element = null;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      count = 1;
      element = arr[i];
    }

    if (element === arr[i]) {
      count++;
    } else {
      count--;
    }
  }

  return element;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

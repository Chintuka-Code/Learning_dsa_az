const rotateByDPlace = (arr, place) => {
  const temp = [];

  for (let i = 0; i < place; i++) {
    temp.push(arr[i]);
  }

  for (let i = place; i < arr.length; i++) {
    arr[i - place] = arr[i];
  }

  const lastPlace = arr.length - place;
  for (let i = 0; i < temp.length; i++) {
    arr[lastPlace + i] = temp[i];
  }

  return arr;
};

console.log(rotateByDPlace([1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7], 1));

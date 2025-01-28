const findFirstOccurrence = (str, subStr) => {
  let j = 0;
  let i = 0;
  let idx = null;

  while (i <= str.length) {
    if (j === subStr.length) {
      idx = i - subStr.length;
      break;
    }

    if (str[i] === subStr[j]) {
      i++;
      j++;
    } else if (j > 0) {
      j = 0;
    } else {
      i++;
    }
  }

  return idx;
};

console.log(findFirstOccurrence("sabutsbutsub", "sub"));

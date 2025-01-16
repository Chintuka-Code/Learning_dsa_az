const countAndSay = (num) => {
  let outPutString = "1";
  let i = 1;
  while (i < num) {
    outPutString = processString(outPutString);
    i++;
  }
  return outPutString;
};

// Another way using recursion
const countAndSay02 = (num) => {
  if (num === 1) {
    return "1";
  }
  const say = countAndSay02(num - 1);
  const outPutString = processString(say);
  return outPutString;
};

const processString = (outPutString) => {
  let j = 0;
  let newString = "";

  while (j < outPutString.length) {
    let currentChar = outPutString[j];
    let i = j;
    let count = 0;

    while (outPutString[i] === currentChar) {
      i++;
      count++;
    }

    const str = `${count}${currentChar}`;
    newString += str;
    j = i;
  }

  return newString;
};

console.log(countAndSay02(5));

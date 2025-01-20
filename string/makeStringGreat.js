const makeStringGreat = (str) => {
  let outPutString = str[0];

  for (let i = 1; i < str.length; i++) {
    const aciValue = getAsciValue(str[i]);
    const lastOutputChar = outPutString[outPutString.length - 1] || "";
    const asciValueLastOutputChar = getAsciValue(lastOutputChar);
    if (
      asciValueLastOutputChar === aciValue + 32 ||
      asciValueLastOutputChar === aciValue - 32
    ) {
      outPutString = outPutString.slice(0, -1);
    } else {
      outPutString += str[i];
    }
  }

  return outPutString;
};

const getAsciValue = (char) => {
  return char.charCodeAt(0);
};

console.log(makeStringGreat("EeEeetcode"));

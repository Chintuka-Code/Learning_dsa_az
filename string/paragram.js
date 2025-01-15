const getAsciValue = (alphabet) => {
  return alphabet.charCodeAt(0);
};

const paragram = (sentence) => {
  const availableAlphabet = new Array(26).fill(-1);
  let alphabetCount = 26;

  for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    const index = getAsciValue(element) - getAsciValue("a");

    if (availableAlphabet[index] < 0) {
      availableAlphabet[index] = 1;
      alphabetCount--;
    }
  }

  return alphabetCount === 0;
};

console.log(paragram("abc"));

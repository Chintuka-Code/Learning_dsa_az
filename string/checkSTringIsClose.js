const checkStringIsClose = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const str1Freq = new Map();
  const str2Freq = new Map();

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (str1Freq.has(char)) {
      const freq = str1Freq.get(char);
      str1Freq.set(char, freq + 1);
    } else {
      str1Freq.set(char, 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!str1Freq.has(char)) return false;

    if (str2Freq.has(char)) {
      const freq = str2Freq.get(char);
      str2Freq.set(char, freq + 1);
    } else {
      str2Freq.set(char, 1);
    }
  }

  const sortedFreq1 = [...str1Freq.values()].sort((a, b) => a - b);
  const sortedFreq2 = [...str2Freq.values()].sort((a, b) => a - b);

  return sortedFreq1.toString() === sortedFreq2.toString();
};

console.log(checkStringIsClose("aabb", "abba"));

const repeatedSubstring = (str) => {
  const n = str.length;
  for (let i = 0; i < n / 2; i++) {
    if (n % i === 0) {
      const times = n / i;
      const subStr = str.slice(0, i);
      let tempStr = "";
      while (times > 0) {
        tempStr += subStr;
        times--;
      }

      if (tempStr === str) {
        return true;
      }
    }
  }

  return false;
};

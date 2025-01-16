const numberToRoman = (num) => {
  const romanFormat = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);

  let romanNumber = "";

  for (const [key, value] of romanFormat) {
    if (key === 0) {
      break;
    }

    const times = Math.floor(num / key);
    num = num % key;

    if (times > 0) {
      for (let i = 0; i < times; i++) {
        romanNumber += value;
      }
    }
  }

  return romanNumber;
};

console.log(numberToRoman(456));

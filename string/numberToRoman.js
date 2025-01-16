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

  let reminder = num;
  let romanNumber = "";

  while (reminder !== 0) {
    const divisor = findMinDivisor(reminder, romanFormat);
    const times = Math.floor(reminder / divisor);
    reminder = reminder % divisor;

    for (let i = 0; i < times; i++) {
      romanNumber += romanFormat.get(divisor);
    }
  }

  return romanNumber;
};

const findMinDivisor = (number, record) => {
  for (const [key] of record) {
    if (key <= number) {
      return key;
    }
  }
};

console.log(numberToRoman(456));

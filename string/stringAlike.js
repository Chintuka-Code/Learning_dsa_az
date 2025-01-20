const checkStringAlike = (str) => {
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let left = 0;
  let right = 0;
  const mid = str.length / 2;

  for (let i = 0; i < mid; i++) {
    const element = str[i];
    if (set.has(element)) {
      left++;
    }
  }

  for (let i = mid; i < str.length; i++) {
    const element = str[i];
    if (set.has(element)) {
      right++;
    }
  }

  return left === right;
};

console.log(checkStringAlike("book"));

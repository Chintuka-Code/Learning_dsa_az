const longestConsecutive = (arr) => {
  let maxConsecutive = 1;

  const hashMap = new Set();

  for (let i = 0; i < arr.length; i++) {
    hashMap.add(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    let smallestPossible = arr[i] - 1;
    let nextPossible = arr[i] + 1;
    let maxSequence = 1;

    /**
     * check here , is there is smallest number exist in this sequence, if so then not start the  count
     * Also check, arr[i] have sequence.
     */

    while (!hashMap.has(smallestPossible) && hashMap.has(nextPossible)) {
      maxSequence++;
      nextPossible += 1;
    }

    maxConsecutive = Math.max(maxConsecutive, maxSequence);
  }

  return maxConsecutive;
};

console.log(longestConsecutive([3, 2, 4, 7, 6]));

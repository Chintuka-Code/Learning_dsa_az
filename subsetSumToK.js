function subsetSum(index, target, arr, current = []) {
  if (target === 0) {
    console.log(current);
    return true;
  }

  if (index < 0) return false;

  const include = subsetSum(index - 1, target - arr[index], arr, [
    arr[index],
    ...current,
  ]);

  const exclude = subsetSum(index - 1, target, arr, current);
  return include || exclude;
}

subsetSum(3, 4, [2, 3, 1, 1]);

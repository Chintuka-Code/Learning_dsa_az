const solve = (str, idx, part, currentStr, result) => {
  if (str.length > 12) return;

  if (idx >= str.length && part === 4) {
    const currentIp = currentStr.substring(0, currentStr.length - 1);
    result.push(currentIp);
    return;
  }

  if (part >= 4) return;

  for (let len = 1; len <= 3; len++) {
    if (idx + len > str.length) break;

    const segment = str.slice(idx, idx + len);

    if ((segment.length > 1 && segment[0] === "0") || parseInt(segment) > 255) {
      continue;
    }
    solve(str, idx + len, part + 1, currentStr + segment + ".", result);
  }
};

const restoreIp = (str) => {
  const result = [];
  solve(str, 0, 0, "", result);
  console.log("Result is", result);
  return result;
};

restoreIp("25525511135");

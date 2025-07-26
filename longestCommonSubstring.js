const longestCommonSubstring = (s1, s2) => {
  let maxLen = 0;

  const recurse = (i, j, count) => {
    if (i === 0 || j === 0) return count;

    let currentCount = count;
    if (s1[i - 1] === s2[j - 1]) {
      currentCount = recurse(i - 1, j - 1, count + 1);
      maxLen = Math.max(maxLen, currentCount);
    }

    recurse(i - 1, j, 0);
    recurse(i, j - 1, 0);

    return currentCount;
  };

  recurse(s1.length, s2.length, 0);
  return maxLen;
};

// With Dp
const longestCommonSubstringDp = (str1, str2) => {
  const n = str1.length;
  const m = str2.length;
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  let maxLen = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        maxLen = Math.max(maxLen, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }

  return maxLen;
};

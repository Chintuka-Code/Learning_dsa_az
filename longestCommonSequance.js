const lcs = (index1, index2, dp) => {
  if (index1 === 0 || index2 === 0) return 0;

  if (dp[index1][index2] !== -1) return dp[index1][index2];

  // If characters match, move both indices (include case)
  if (str1[index1 - 1] === str2[index2 - 1]) {
    dp[index1][index2] = 1 + lcs(index1 - 1, index2 - 1, dp);
    return dp[index1][index2];
  }

  // If characters don't match, explore both possibilities:
  // move one index at a time to find the maximum length
  dp[index1][index2] = Math.max(
    lcs(index1 - 1, index2, dp),
    lcs(index1, index2 - 1, dp)
  );
  return dp[index1][index2];
};

const longestCommonSubsequence = (str1, str2) => {
  const n = str1.length;
  const m = str2.length;
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));

  return lcs(n, m, dp);
};

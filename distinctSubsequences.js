const distinctSubSequence = (i, j, dp) => {
  if (i < 0) return 0;
  if (j < 0) return 1;

  if (dp[i][j] !== undefined) return dp[i][j];

  if (s[i] === t[j]) {
    dp[i][j] =
      distinctSubSequence(i - 1, j - 1, dp) + distinctSubSequence(i - 1, j, dp);
  } else {
    dp[i][j] = distinctSubSequence(i - 1, j, dp);
  }
  return dp[i][j];
};

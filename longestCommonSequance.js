const str1 = "abc";
const str2 = "bca";

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

const longestCommonSubsequence = () => {
  const n = str1.length;
  const m = str2.length;
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));
  const length = lcs(n, m, dp);

  printLCS(str1, str2, dp);
  return length;
};

const printLCS = (str1, str2, dp) => {
  let i = str1.length;
  let j = str2.length;

  let lcsStr = "";

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcsStr = str1[i - 1] + lcsStr; // prepend char
      i--;
      j--;
      // Compare value to diagonals, and move diagonally and decrement smaller index
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  console.log("Longest Common Subsequence:", lcsStr);
};

console.log(longestCommonSubsequence()); // Output: 2

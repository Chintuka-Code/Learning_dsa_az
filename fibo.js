function fibo(n, data) {
  if (n <= 1) {
    data[n] = n;
    return n;
  }

  if (data[n] !== -1) {
    return data[n];
  }

  const series = fibo(n - 1, data) + fibo(n - 2, data);
  data[n] = series;
  return series;
}

const arr = new Array(11).fill(-1);
const output = fibo(10, arr);
console.log(output);
console.log(arr);

function fiboTabulation(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

function spaceFiboTabulation(n) {
  let prev1 = 0;
  let prev2 = 1;

  for (let i = 2; i <= n; i++) {
    const curr = prev1 + prev2;
    prev1 = prev2;
    prev2 = curr;
  }

  return prev2;
}

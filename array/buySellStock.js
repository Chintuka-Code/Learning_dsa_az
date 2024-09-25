const buySellStock = (arr) => {
  let buyingDay = arr[0];
  let totalProfit = 0;

  for (let sellDay = 1; sellDay < arr.length; sellDay++) {
    const profit = arr[sellDay] - buyingDay;
    totalProfit = Math.max(profit, totalProfit);
    buyingDay = Math.min(arr[sellDay], buyingDay);
  }

  return totalProfit;
};

console.log(buySellStock([7, 6, 4, 3, 1]));

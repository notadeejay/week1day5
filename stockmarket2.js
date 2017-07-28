function maxProfit(arr) {
  var profit = 0;

  arr.reduce(function(prev, item){
    var max = Math.max(item - prev, 0);

    max > profit ? profit = max : null;

    if (max === 0) {
      return item;
    } else {
      return prev;
    }
  });

  if (profit === 0) {
    return -1;
  }
  return profit;
}
console.log(maxProfit([45, 24, 20, 80]));
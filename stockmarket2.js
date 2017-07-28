function maxProfit(arr) {
  var profit = 0; //initialize a starting point for the count

  arr.reduce(function(prev, item){
    var max = Math.max(item - prev, 0);

    max > profit ? profit = max : null;

    if (max === 0) {
      return item;
    } else {
      return prev;
    }
  });

  //use reduce to apply the math.max to each item in the array from left to right
  //if the max is bigger than the profit, than profit now = max and son on
  //if max is 0 return whatever item you are one
  // else return the previous item

  if (profit === 0) {
    return -1;
  }
  //if there is no profit, show -1
  //else return dat $$$$$$

  return profit;
}
console.log(maxProfit([45, 24, 20, 80]));
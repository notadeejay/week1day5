var moneySpent = process.argv.slice(2);

function returnNumberOfBottles (moneySpent) {
  var bottlesPurchased = moneySpent / 2
  var maxBottles = (bottlesPurchased * 4 - 5)

  console.log("If you spend $" + moneySpent + " you will be able to redeem " + maxBottles + " bottles");
}

returnNumberOfBottles(moneySpent);
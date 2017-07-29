var moneySpent = process.argv.slice(2);

function returnNumberOfBottles (moneySpent) {
  var bottlesPurchased = moneySpent / 2;
  var maxBottles = (bottlesPurchased * 4 - 5);
  var fromCaps = Math.floor(maxBottles * .25);
  var fromBottles = Math.floor(maxBottles * .50);

  console.log("If you spend $" + moneySpent + " you will be able to redeem " + Math.floor(maxBottles) +
    " bottles. " + fromBottles + " bottles will be redeemed by bottles and " + fromCaps + " will be redeemed from caps.");
}

returnNumberOfBottles(moneySpent);
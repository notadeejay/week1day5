var assert = require("chai").assert;
var check = require("./luhn");

describe("Validate card", function() {
  it("should return true when the number is a number", function() {
    var num = 1234567890;
    var result = check(num);
    assert.isTrue(result);
  });

  it("should return false if number contains letters", function() {
    var num = "12093hmflwiwhrne2093";
    assert.isFalse(check(num));
  });

  it("should return true if number contains dashes", function() {
    var numdash = 4520-3400-3455-6018;
    assert.isTrue(check(numdash));
  });

  it("should return false if it contains no numbers", function() {
    var phrase = "this is not a number"
    assert.isFalse(check(phrase));
  });
});
const Calculator = require("../../app/Calculator");
const { expect } = require("chai");

describe("add()", function () {
  it("should return the sum of all parameters", function () {
    expect(Calculator.add(1, -2, 3, 4, 0)).to.be.equal(6);
  });

  it("should throw an error if there are no parameters provided", function () {
    let callWithError = () => Calculator.add();
    expect(callWithError).to.throw(`There are no parameters to summarize`);
  });

  it('should throw an error if some parameter is not of type "Number"', function () {
    let callWithError = () => Calculator.add(1, 2, "3");
    expect(callWithError).to.throw(
      `Some parameter is not of type "Number" or is "not-a-number"`
    );
  });

  it('should throw an error if some parameter is "not-a-number"', function () {
    let callWithError = () => Calculator.add(1, NaN, 3);
    expect(callWithError).to.throw(
      `Some parameter is not of type "Number" or is "not-a-number"`
    );
  });
});

const Calculator = require("../../app/Calculator");
const { expect } = require("chai");

describe("multiply()", function () {
  it("should return the product of all parameters", function () {
    expect(Calculator.multiply(1, -2, 3)).to.be.equal(-6);
  });

  it("should throw an error if there are no parameters provided", function () {
    let callWithError = () => Calculator.multiply();
    expect(callWithError).to.throw(`There are no parameters to multiply`);
  });

  it('should throw an error if some parameter is not of type "Number"', function () {
    let callWithError = () => Calculator.multiply(1, 2, null);
    expect(callWithError).to.throw(
      `Some parameter is not of type "Number" or is "not-a-number"`
    );
  });

  it('should throw an error if some parameter is "not-a-number"', function () {
    let callWithError = () => Calculator.multiply(0, NaN);
    expect(callWithError).to.throw(
      `Some parameter is not of type "Number" or is "not-a-number"`
    );
  });
});

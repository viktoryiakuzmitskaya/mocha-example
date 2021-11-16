class Calculator {
  static add(...parameters) {
    if (parameters.length === 0) {
      throw new Error(`There are no parameters to summarize`);
    } else if (
      parameters.some(
        (parameter) => typeof parameter !== "number" || Number.isNaN(parameter)
      )
    ) {
      throw new Error(
        `Some parameter is not of type "Number" or is "not-a-number"`
      );
    } else {
      return parameters.reduce(
        (currentSumOfParameters, nextParameter) =>
          currentSumOfParameters + nextParameter,
        0
      );
    }
  }

  static multiply(...parameters) {
    if (parameters.length === 0) {
      throw new Error(`There are no parameters to multiply`);
    } else if (
      parameters.some(
        (parameter) => typeof parameter !== "number" || Number.isNaN(parameter)
      )
    ) {
      throw new Error(
        `Some parameter is not of type "Number" or is "not-a-number"`
      );
    } else {
      return parameters.reduce(
        (currentProductOfParameters, nextParameter) =>
          currentProductOfParameters * nextParameter,
        1
      );
    }
  }
}

module.exports = Calculator;

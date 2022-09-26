const Calculator = require("../src/calculator");

describe("Calculator", () => {
    const calculator = new Calculator();

    test("performs basic operations", () => {
        expect(calculator.add(5, 15)).toBe(20);
        expect(calculator.subtract(22, 6)).toBe(16);
        expect(calculator.multiply(10, 10)).toBe(100);
        expect(calculator.divide(8, 2)).toBe(4);
    })
})
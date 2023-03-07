const Calculator = require("./task3");

describe("Calculator", () => {
    test("adding 5 to 5 equals 10", () => {
        expect(Calculator.add(5,5)).toBe(10);
    })

    test("substracting 2 from 3 equals 1", () => {
        expect(Calculator.substract(3,2)).toBe(1);
    })

    test("multiply 5 to 5 equals 25", () => {
        expect(Calculator.multiply(5,5)).toBe(25);
    })

    test("dividing 4 by 2 equals 2", () => {
        expect(Calculator.divide(4,2)).toBe(2);
    })
})
import { stringCalculator } from "./stringCalculator";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(stringCalculator("1")).toBe(1);
  });

  test("should return the sum of two numbers", () => {
    expect(stringCalculator("1,2")).toBe(3);
  });

  test("should return the sum of multiple numbers", () => {
    expect(stringCalculator("1,2,3,4,5")).toBe(15);
  });

  test("should handle new line as a delimiter", () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
  });

  test("should handle custom delimiters", () => {
    expect(stringCalculator("//;\n1;2")).toBe(3);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => stringCalculator("1,-2,3,-4")).toThrow(
      "negative numbers not allowed -2,-4"
    );
  });
});

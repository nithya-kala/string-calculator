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
});

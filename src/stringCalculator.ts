export const stringCalculator = (numbers: string): number => {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.substring(2, delimiterEnd));
    numbers = numbers.substring(delimiterEnd + 1);
  }

  const numArray = numbers.split(delimiter).map(Number);
  const negatives = numArray.filter((num) => num < 0);

  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
};

console.log(stringCalculator("1,2,3")); // Expected output: 6
console.log(stringCalculator("")); // Expected output: 0
console.log(stringCalculator("5")); // Expected output: 5
console.log(stringCalculator("//;\n1;2")); // Expected output: 3

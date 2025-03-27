export const stringCalculator = (numbers: string): number => {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.substring(2, delimiterEnd));
    numbers = numbers.substring(delimiterEnd + 1);
  }

  return numbers
    .split(delimiter)
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
};

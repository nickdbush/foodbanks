const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

export function printNumber(n: number): string {
  if (n >= numbers.length) return n.toLocaleString();
  return numbers[n];
}

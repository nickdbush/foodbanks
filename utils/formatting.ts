export function printNumber(n: number): string {
  if (n > 10) return n.toLocaleString();
  return [
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
  ][n];
}

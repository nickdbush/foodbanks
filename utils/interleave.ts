export function interleave(array: any[], x: (i: number) => any): any[] {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i]);
    if (i < array.length - 1) output.push(x(i));
  }
  return output;
}

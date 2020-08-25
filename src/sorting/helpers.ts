export function swap(arr: number[], i: number, j: number): void {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export function mergeSorted(a: number[], b: number[]): number[] {
  let i = 0,
    j = 0;
  let results: number[] = [];

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      results.push(a[i]);
      i++;
    } else {
      results.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    results.push(a[i]);
    i++;
  }

  while (j < b.length) {
    results.push(b[j]);
    j++;
  }

  return results;
}

export function pivot(
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
): number {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, swapIdx, start);

  return swapIdx;
}

export function getDigit(num: number, digit: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

export function digitCount(num: number): number {
  if (num === 0) return 1;

  return Math.floor(Math.log(Math.abs(num))) + 1;
}

export function mostDigits(arr: number[]): num {
  let digits = digitCount(arr[0]);

  arr.forEach((num) => {
    digits = Math.max(digits, digitCount(num));
  });

  return digits;
}

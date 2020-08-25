import { mostDigits, getDigit } from './helpers';

export function radixSort(arr: number[]): number[] {
  let max = mostDigits(arr);

  for (let k = 0; k < max; k++) {
    let digitBuckets: number[][] = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }

    arr = [].concat(...digitBuckets);
  }

  return arr;
}

import { mergeSorted } from './helpers';

// recursive merge sort - not in place
export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return mergeSorted(left, right);
}

// TODO: recursive merge-sort in-place

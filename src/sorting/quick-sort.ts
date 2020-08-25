import { pivot } from './helpers';

export function quickSort(
  arr: number[],
  left: number = 0,
  right: number = arr.length - 1
): void {
  if (left < right) {
    let p = pivot(arr, left, right);
    quickSort(arr, left, p - 1);
    quickSort(arr, p + 1, right);
  }
}

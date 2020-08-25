import { swap } from './helpers';

export function bubbleSort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
}

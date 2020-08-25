export function swap(arr: number[], i: number, j: number): void {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

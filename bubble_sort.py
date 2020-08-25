def bubble_sort(arr):
    # takes an array and sorts it in place
    # Time: O(n²) and Space: O(1)

    # loop over entire array from start
    # nested loop from start + 1
    # if current element > next element, swap

    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[i] > arr[j]:
                arr[j], arr[i] = arr[i], arr[j]

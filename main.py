def pivot(arr, start, end):
	# choose the first element as the pivot
	# sort the array in place such that
	# all the elements on the left are smaller
	# all the elements on the right are greater
	pivot = arr[start]
	swap = start

	for i in range(start + 1, end):
		if arr[i] < pivot:
			swap += 1
			arr[swap], arr[i] = arr[i], arr[swap]

	arr[start], arr[swap] = arr[swap], arr[start]

	return swap


arr = [3, 1, 2, 5, 6]
print(pivot(arr, 0, len(arr)))
print(arr)

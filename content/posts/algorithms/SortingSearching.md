---
title: Sorting and Searching
description: Sorting and searching are two fundamental operations in computer science. Sorting is the process of arranging items in a specific order, while searching is the process of finding a specific item in a collection of items.
date: 2022-03-15
draft: false
slug: /pensieve/algo-sorting-searching
tags:
  - DSA
  - Sorting & Searching
---
## Definition and Properties

Sorting and searching are two fundamental operations in computer science. Sorting is the process of arranging items in a specific order, while searching is the process of finding a specific item in a collection of items. The properties of sorting and searching algorithms are as follows:
- **Sorting**:
  - It arranges items in a specific order, such as numerical or lexicographical order.
  - It is used to organize data for efficient searching and retrieval.
  - It is a fundamental operation in computer science and has numerous practical applications in various fields, including database management, data analysis, and information retrieval.
- **Searching**:
  - It finds a specific item in a collection of items.
  - It is used to locate data within a dataset and is a fundamental operation in computer science.

## Applications

Sorting and searching algorithms have a wide range of applications in various fields, including:
- Database management: Sorting algorithms are used to organize data in databases, making it easier to search and retrieve information.
- Information retrieval: Searching algorithms are used to locate specific information within a dataset, such as finding a particular record in a database.
- Web search engines: Searching algorithms are used to find relevant web pages based on user queries, such as Google's PageRank algorithm.
- Operating systems: Searching algorithms are used to locate files and directories on computer systems, such as the Unix find command.
- Artificial intelligence: Sorting and searching algorithms are used in various AI applications, such as pathfinding algorithms in robotics and game playing algorithms in video games.

## Algorithms

### Bubble Sort

Bubble sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The algorithm continues to pass through the list until no swaps are needed, which indicates that the list is sorted.

```pseudocode
BubbleSort(A):
    n = A.length
    for i = 0 to n - 1:
        for j = 0 to n - i - 1:
            if A[j] > A[j + 1]:
                swap(A[j], A[j + 1])
```

### Selection Sort

Selection sort is a simple comparison-based sorting algorithm that divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted. It repeatedly selects the minimum element from the unsorted sublist and swaps it with the first element of the unsorted sublist.

```pseudocode
SelectionSort(A):
    n = A.length
    for i = 0 to n - 1:
        minIndex = i
        for j = i + 1 to n:
            if A[j] < A[minIndex]:
                minIndex = j
        swap(A[i], A[minIndex])
```

### Insertion Sort

Insertion sort is a simple comparison-based sorting algorithm that builds the final sorted list one item at a time. It iterates through the input list, removing one element at a time and inserting it into its correct position in the sorted list.

```pseudocode
InsertionSort(A):
    n = A.length
    for i = 1 to n - 1:
        key = A[i]
        j = i - 1
        while j >= 0 and A[j] > key:
            A[j + 1] = A[j]
            j = j - 1
        A[j + 1] = key
```

### Merge Sort

Merge sort is a comparison-based sorting algorithm that follows the divide-and-conquer paradigm. It divides the input list into two sublists, recursively sorts the sublists, and then merges the sorted sublists to produce the final sorted list.

```pseudocode
MergeSort(A, l, r):
    if l < r:
        m = (l + r) / 2
        MergeSort(A, l, m)
        MergeSort(A, m + 1, r)
        Merge(A, l, m, r)

Merge(A, l, m, r):
    n1 = m - l + 1
    n2 = r - m
    L = new Array(n1)
    R = new Array(n2)
    for i = 0 to n1 - 1:
        L[i] = A[l + i]
    for j = 0 to n2 - 1:
        R[j] = A[m + 1 + j]
    i = 0
    j = 0
    k = l
    while i < n1 and j < n2:
        if L[i] <= R[j]:
            A[k] = L[i]
            i = i + 1
        else:
            A[k] = R[j]
            j = j + 1
        k = k + 1
    while i < n1:
        A[k] = L[i]
        i = i + 1
        k = k + 1
    while j < n2:
        A[k] = R[j]
        j = j + 1
        k = k + 1
```

### Quick Sort

Quick sort is a comparison-based sorting algorithm that follows the divide-and-conquer paradigm. It selects a pivot element from the input list, partitions the list into two sublists, and recursively sorts the sublists. The pivot element is then placed in its correct position in the sorted list.

```pseudocode
QuickSort(A, low, high):
    if low < high:
        pi = Partition(A, low, high)
        QuickSort(A, low, pi - 1)
        QuickSort(A, pi + 1, high)

Partition(A, low, high):
    pivot = A[high]
    i = low - 1
    for j = low to high - 1:
        if A[j] < pivot:
            i = i + 1
            swap(A[i], A[j])
    swap(A[i + 1], A[high])
    return i + 1
```

### Heap Sort

Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort the input list. It builds a max-heap from the input list, repeatedly extracts the maximum element from the heap, and places it at the end of the list.

```pseudocode
HeapSort(A):
    n = A.length
    for i = n / 2 - 1 to 0:
        Heapify(A, n, i)
    for i = n - 1 to 0:
        swap(A[0], A[i])
        Heapify(A, i, 0)

Heapify(A, n, i):
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2
    if l < n and A[l] > A[largest]:
        largest = l
    if r < n and A[r] > A[largest]:
        largest = r
    if largest != i:
        swap(A[i], A[largest])
        Heapify(A, n, largest)
```

### Radix Sort

Radix sort is a non-comparison-based sorting algorithm that sorts the input list by processing individual digits of the elements. It is often used to sort integers, and it can be implemented using counting sort as a subroutine.

```pseudocode
RadixSort(A):
    max = getMax(A)
    for exp = 1 to max:
        CountingSort(A, exp)

getMax(A):
    max = A[0]
    for i = 1 to A.length - 1:
        if A[i] > max:
            max = A[i]
    return max

CountingSort(A, exp):
    n = A.length
    output = new Array(n)
    count = new Array(10)
    for i = 0 to 9:
        count[i] = 0
    for i = 0 to n - 1:
        count[(A[i] / exp) % 10] = count[(A[i] / exp) % 10] + 1
    for i = 1 to 9:
        count[i] = count[i] + count[i - 1]
    for i = n - 1 to 0:
        output[count[(A[i] / exp) % 10] - 1] = A[i]
        count[(A[i] / exp) % 10] = count[(A[i] / exp) % 10] - 1
    for i = 0 to n - 1:
        A[i] = output[i]
```

### Linear Search

Linear search is a simple search algorithm that sequentially checks each element of the input list until it finds the target element or reaches the end of the list. It is also known as sequential search.

```pseudocode
LinearSearch(A, x):
    for i = 0 to A.length - 1:
        if A[i] == x:
            return i
    return -1
```

### Binary Search

Binary search is a search algorithm that finds the position of a target element within a sorted list. It compares the target element with the middle element of the list and eliminates half of the remaining elements based on the comparison.

```pseudocode
BinarySearch(A, x):
    low = 0
    high = A.length - 1
    while low <= high:
        mid = (low + high) / 2
        if A[mid] == x:
            return mid
        else if A[mid] < x:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

## Time and Space Complexity

The time and space complexity of sorting and searching algorithms are as follows:

| Algorithm     | Best Case  | Average Case  | Worst Case  | Space Complexity  | Stability         |
| ------------- | ---------- | ------------- | ----------- | ----------------- | ----------------- |
| Bubble Sort   | O(n)       | O(n^2)        | O(n^2)      | O(1)              | Stable            |
| Selection Sort| O(n^2)     | O(n^2)        | O(n^2)      | O(1)              | Unstable          |
| Insertion Sort| O(n)       | O(n^2)        | O(n^2)      | O(1)              | Stable            |
| Merge Sort    | O(n log n) | O(n log n)    | O(n log n)  | O(n)              | Stable            |
| Quick Sort    | O(n log n) | O(n log n)    | O(n^2)      | O(log n)          | Unstable          |
| Heap Sort     | O(n log n) | O(n log n)    | O(n log n)  | O(1)              | Unstable          |
| Radix Sort    | O(nk)      | O(nk)         | O(nk)       | O(n + k)          | Stable            |
| Linear Search | O(1)       | O(n)          | O(n)        | O(1)              | N/A               |
| Binary Search | O(1)       | O(log n)      | O(log n)    | O(1)              | N/A               |

## Conclusion

Sorting and searching are fundamental operations in computer science, and there are numerous algorithms that can be used to perform these operations efficiently. The choice of algorithm depends on the specific requirements of the application, such as the size of the input list, the distribution of the input data, and the available memory. By understanding the properties and time and space complexity of sorting and searching algorithms, developers can make informed decisions about which algorithm to use in a given context.
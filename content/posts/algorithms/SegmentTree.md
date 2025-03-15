---
title: Segment Tree
description: A tree data structure that is used to store intervals or segments. It is used in range query problems and is used in the maximum subarray sum problem.
date: 2023-01-19
draft: false
slug: /pensieve/tree/segment-tree
tags:
  - DSA
  - Trees
---

## Introduction

A **Segment Tree** is a tree data structure that is used to store intervals or segments. It is used in range query problems and is used in the maximum subarray sum problem. A segment tree is a full binary tree that is used to store the information of the intervals. Each node in the segment tree represents an interval, and the root of the segment tree represents the whole array. The leaf nodes of the segment tree represent the individual elements of the array. The segment tree is used to perform range queries and updates in logarithmic time. It is used in problems where we need to perform range queries and updates on an array.

## Properties

A segment tree has the following properties:

- It is a full binary tree.
- The height of the segment tree is `log n`, where `n` is the number of elements in the array.
- The number of nodes in the segment tree is `2 * n - 1`, where `n` is the number of elements in the array.
- The segment tree is used to store the information of the intervals of the array.
- The root of the segment tree represents the whole array, and the leaf nodes represent the individual elements of the array.

## Implementation

A segment tree can be implemented using an array or a tree data structure. The array-based implementation is more efficient and is widely used. The tree-based implementation is more intuitive and is easier to understand.

### Array-based Implementation

In the array-based implementation, the segment tree is represented using an array. The segment tree is a full binary tree, and the number of nodes in the segment tree is `2 * n - 1`, where `n` is the number of elements in the array. The root of the segment tree is at index `1`, and the left child of a node at index `i` is at index `2 * i`, and the right child of a node at index `i` is at index `2 * i + 1`. The parent of a node at index `i` is at index `i / 2`.

The segment tree is used to store the information of the intervals of the array. Each node in the segment tree represents an interval, and the root of the segment tree represents the whole array. The leaf nodes of the segment tree represent the individual elements of the array. The segment tree is used to perform range queries and updates in logarithmic time.

Below is the pseudocode for the array-based implementation of the segment tree.

```pseudocode
class SegmentTree:
    tree
    n

    buildTree(nums):
        n = length(nums)
        tree = new int[2 * n]
        for i = 0 to n-1:
            tree[n + i] = nums[i]
        for i = n-1 downto 1:
            tree[i] = tree[2 * i] + tree[2 * i + 1]

    updateTree(index, value):
        index = index + n
        tree[index] = value
        while index > 1:
            tree[index / 2] = tree[index] + tree[index ^ 1]
            index = index / 2

    queryTree(left, right):
        left = left + n
        right = right + n
        sum = 0
        while left < right:
            if left % 2 == 1:
                sum = sum + tree[left]
                left = left + 1
            if right % 2 == 1:
                right = right - 1
                sum = sum + tree[right]
            left = left / 2
            right = right / 2
        return sum
```

### Tree-based Implementation

In the tree-based implementation, the segment tree is represented using a tree data structure. Each node in the segment tree represents an interval, and the root of the segment tree represents the whole array. The leaf nodes of the segment tree represent the individual elements of the array. The segment tree is used to perform range queries and updates in logarithmic time.

Below is the pseudocode for the tree-based implementation of the segment tree.

```pseudocode
class SegmentTreeNode:
    start
    end
    sum
    left
    right

class SegmentTree:
    root

    buildTree(nums):
        return buildTreeHelper(nums, 0, length(nums)-1)

    buildTreeHelper(nums, start, end):
        if start > end:
            return null
        node = new SegmentTreeNode()
        if start == end:
            node.start = start
            node.end = end
            node.sum = nums[start]
        else:
            mid = start + (end-start)/2
            node.left = buildTreeHelper(nums, start, mid)
            node.right = buildTreeHelper(nums, mid+1, end)
            node.start = start
            node.end = end
            node.sum = node.left.sum + node.right.sum
        return node

    updateTree(index, value):
        updateTreeHelper(root, index, value)

    updateTreeHelper(node, index, value):
        if node.start == node.end:
            node.sum = value
        else:
            mid = node.start + (node.end-node.start)/2
            if index <= mid:
                updateTreeHelper(node.left, index, value)
            else:
                updateTreeHelper(node.right, index, value)
            node.sum = node.left.sum + node.right.sum

    queryTree(left, right):
        return queryTreeHelper(root, left, right)

    queryTreeHelper(node, left, right):
        if node.start == left and node.end == right:
            return node.sum
        mid = node.start + (node.end-node.start)/2
        if right <= mid:
            return queryTreeHelper(node.left, left, right)
        else if left > mid:
            return queryTreeHelper(node.right, left, right)
        else:
            return queryTreeHelper(node.left, left, mid) + queryTreeHelper(node.right, mid+1, right)
```

## Operations

A segment tree supports the following operations:

### Build

The build operation in a segment tree involves building the segment tree from the given array. The time complexity of the build operation is O(n), where `n` is the number of elements in the array. The space complexity is O(n).

Below is the pseudocode for the build operation in a segment tree.

```pseudocode
class SegmentTree:
    tree
    n

    buildTree(nums):
        n = length(nums)
        tree = new int[2 * n]
        for i = 0 to n-1:
            tree[n + i] = nums[i]
        for i = n-1 downto 1:
            tree[i] = tree[2 * i] + tree[2 * i + 1]
```

### Update

The update operation in a segment tree involves updating the value of an element in the array and then updating the segment tree accordingly. The time complexity of the update operation is O(log n), where `n` is the number of elements in the array. The space complexity is O(1).

Below is the pseudocode for the update operation in a segment tree.

```pseudocode
class SegmentTree:
    tree
    n

    updateTree(index, value):
        index = index + n
        tree[index] = value
        while index > 1:
            tree[index / 2] = tree[index] + tree[index ^ 1]
            index = index / 2
```

### Query

The query operation in a segment tree involves finding the sum of the elements in a given range of the array. The time complexity of the query operation is O(log n), where `n` is the number of elements in the array. The space complexity is O(1).

Below is the pseudocode for the query operation in a segment tree.

```pseudocode
class SegmentTree:
    tree
    n

    queryTree(left, right):
        left = left + n
        right = right + n
        sum = 0
        while left < right:
            if left % 2 == 1:
                sum = sum + tree[left]
                left = left + 1
            if right % 2 == 1:
                right = right - 1
                sum = sum + tree[right]
            left = left / 2
            right = right / 2
        return sum
```

## Applications

Segment trees are used in a wide range of applications, including:

- Finding the sum of elements in a given range of an array.
- Finding the minimum or maximum element in a given range of an array.
- Updating the value of an element in an array and then updating the segment tree accordingly.
- Finding the number of elements in a given range of an array that satisfy a given condition.
- Finding the maximum subarray sum in an array.
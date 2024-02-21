---
title: Tree Data Structures
description: Trees are a hierarchical data structure that consists of nodes connected by edges. Each node in a tree has a value and a list of child nodes.
date: 2023-01-19
draft: false
slug: /pensieve/data-structure
tags:
  - DSA
  - Trees
---

## Definition and Properties

A tree is a hierarchical data structure that consists of nodes connected by edges. Each node in a tree has a value and a list of child nodes. The properties of trees are as follows:
- **Root**: The topmost node in a tree.
- **Parent**: A node that has child nodes.
- **Child**: A node that has a parent node.
- **Leaf**: A node that has no child nodes.
- **Edge**: A connection between two nodes.
- **Path**: A sequence of nodes connected by edges.
- **Height**: The length of the longest path from the root to a leaf node.
- **Depth**: The length of the path from the root to a node.
- **Degree**: The number of child nodes a node has.
- **Subtree**: A tree that is part of a larger tree.

## Types of Trees

### Search Tree** 

**Binary Search Tree (BST)**
A binary tree in which the value of each node is greater than all the values in its left subtree and less than all the values in its right subtree.

Implementation:
```pseudocode
class Node:
    value
    left
    right

class BinarySearchTree:
    root

    insert(value):
        if root is null:
            root = new Node(value)
        else:
            insertHelper(root, value)

    insertHelper(node, value):
        if value < node.value:
            if node.left is null:
                node.left = new Node(value)
            else:
                insertHelper(node.left, value)
        else:
            if node.right is null:
                node.right = new Node(value)
            else:
                insertHelper(node.right, value)

    search(value):
        return searchHelper(root, value)

    searchHelper(node, value):
        if node is null:
            return false
        if value == node.value:
            return true
        if value < node.value:
            return searchHelper(node.left, value)
        else:
            return searchHelper(node.right, value)
```

[**AVL Tree**](/pensieve/avl-tree)
A self-balancing binary search tree in which the heights of the two child subtrees of any node differ by at most one. It is named after its inventors, Adelson-Velsky and Landis. It is a height-balanced binary search tree. 

[**B-Tree**](/pensieve/b-tree)
A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. It is commonly used in databases and file systems. A B-tree is a generalization of a binary search tree in which a node can have more than two children. It is designed to work well on secondary storage such as disks. 

[**Red-Black Tree**](/pensieve/red-black-tree)
A self-balancing binary search tree in which each node has an extra bit for representing the color of the node. The color is either red or black. It is named after its inventors, Rudolf Bayer and Edward McCreight. It is used in many libraries and applications, including the C++ Standard Library, the Linux kernel, and the Apache Cassandra database.

### Heap

**Binary Heap**
A complete binary tree in which the value of each node is greater than or equal to the values of its children. It is used to implement priority queues and is commonly used in the heap sort algorithm.

Implementation:
```pseudocode
class BinaryHeap:
    heap
    size

    insert(x):
        size++
        heap[size] = x
        i = size
        while i > 1 and heap[i] > heap[i/2]:
            swap(heap[i], heap[i/2])
            i = i/2

    extractMax():
        max = heap[1]
        heap[1] = heap[size]
        size--
        i = 1
        while 2*i <= size:
            j = 2*i
            if j+1 <= size and heap[j+1] > heap[j]:
                j++
            if heap[i] >= heap[j]:
                break
            swap(heap[i], heap[j])
            i = j
        return max
```

**Fibonacci Heap**

A heap data structure that supports the mergeable heap operations of insert, merge, and decrease key, as well as the delete and extract min operations. It is used in the Dijkstra's algorithm and the Prim's algorithm.

### Other Trees

- [**Trie**](/pensieve/trie): A tree data structure that is used to store a dynamic set of strings. It is commonly used in string matching algorithms and is used in the autocomplete feature of search engines.
- [**Suffix Tree**](https://en.wikipedia.org/wiki/Suffix_tree): A compressed trie that is used to store all the suffixes of a given string. It is used in string matching algorithms and is used in the longest common substring problem.
- [**Segment Tree**](/pensieve/segment-tree): A tree data structure that is used to store intervals or segments. It is used in range query problems and is used in the maximum subarray sum problem.

## Traversal

### Depth-First Traversal

**Preorder Traversal**
Visit the root, traverse the left subtree, and traverse the right subtree. Below is the pseudocode for the preorder traversal of a binary tree.
```pseudocode
preorder(node):
    if node is null:
        return
    visit(node)
    preorder(node.left)
    preorder(node.right)
```

**Inorder Traversal**
Traverse the left subtree, visit the root, and traverse the right subtree. Below is the pseudocode for the inorder traversal of a binary tree.
```pseudocode
inorder(node):
    if node is null:
        return
    inorder(node.left)
    visit(node)
    inorder(node.right)
```

**Postorder Traversal**
Traverse the left subtree, traverse the right subtree, and visit the root. Below is the pseudocode for the postorder traversal of a binary tree.
```pseudocode
postorder(node):
    if node is null:
        return
    postorder(node.left)
    postorder(node.right)
    visit(node)
```

### Breadth-First Traversal

**Level-Order Traversal**
Visit the nodes level by level, from left to right. Below is the pseudocode for the level-order traversal of a binary tree.
```pseudocode
levelOrder(root):
    queue = new Queue()
    queue.enqueue(root)
    while queue is not empty:
        node = queue.dequeue()
        visit(node)
        if node.left is not null:
            queue.enqueue(node.left)
        if node.right is not null:
            queue.enqueue(node.right)
```

## Applications

- **Binary Search Tree**: Used in search algorithms and in the implementation of sets and maps.
- **AVL Tree**: Used in databases and file systems for efficient search and retrieval of data.
- **B-Tree**: Used in databases and file systems for efficient search and retrieval of data.
- **Red-Black Tree**: Used in many libraries and applications, including the C++ Standard Library, the Linux kernel, and the Apache Cassandra database.
- **Binary Heap**: Used in the heap sort algorithm and in the implementation of priority queues.
- **Fibonacci Heap**: Used in the Dijkstra's algorithm and the Prim's algorithm.
- **Trie**: Used in string matching algorithms and in the autocomplete feature of search engines.
- **Suffix Tree**: Used in string matching algorithms and in the longest common substring problem.
- **Segment Tree**: Used in range query problems and in the maximum subarray sum problem.
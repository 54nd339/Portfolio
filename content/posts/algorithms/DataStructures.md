---
title: Basic Data Structures
description: A basic overview of the most common data structures, their characteristics, time complexity, use cases, and references.
date: 2023-01-19
draft: false
slug: /pensieve/data-structure
tags:
  - DSA
  - Cheatsheet
---
### Array

- **Charecteristics**:
  - Elements are stored in adjacent memory locations.
  - All elements are of the same data type.
  - Fixed size and element can be accessed randomly.
- **Time Complexity**:
  - Access: O(1)
  - Search: O(n)
  - Insertion: O(n)
  - Deletion: O(n)
- **Use Case**:
  - Storing and accessing elements with known indices.
  - Implementing vectors, matrices, and dynamic lists.
  - Efficient lookup tables and caches.
- **Reference**: [Array](https://github.com/54nd339/Data-Structures/blob/master/1array.c)

### Linked List

- **Charecteristics**:
  - Elements are stored in scattered memory locations.
  - Each element contains a data field and a reference to the next node.
  - Dynamic size and element can be accessed sequentially.
- **Time Complexity**:
  - Access: O(n)
  - Search: O(n)
  - Insertion: O(1)
  - Deletion: O(1)
- **Use Case**:
  - Implementing stacks, queues, and graphs.
  - Dynamic memory allocation and garbage collection.
  - Implementing undo functionality in applications.
- **References**:
  - [Linked List](https://github.com/54nd339/Data-Structures/blob/master/2slnklst.c)
  - [Doubly Linked List](https://github.com/54nd339/Data-Structures/blob/master/3dlnklst.c)
  - [Circular Linked List](https://github.com/54nd339/Data-Structures/blob/master/4clnklst.c)
  - [Doubly Circular Linked List](https://github.com/54nd339/Data-Structures/blob/master/5dclist.c)

### Stack

- **Charecteristics**:
  - LIFO (Last In First Out) data structure.
  - Elements are added and removed from the same end.
  - Can be implemented using arrays or linked lists.
- **Time Complexity**:
  - Access: O(n)
  - Search: O(n)
  - Insertion: O(1)
  - Deletion: O(1)
- **Use Case**:
  - Function calls and recursion.
  - Expression evaluation and syntax parsing.
  - Backtracking and memory management.
- **References**:
  - [Stack using Array](https://github.com/54nd339/Data-Structures/blob/master/6stackar.c)
  - [Stack using Linked List](https://github.com/54nd339/Data-Structures/blob/master/7stackll.c)

### Queue

- **Charecteristics**:
  - FIFO (First In First Out) data structure.
  - Elements are added from the rear and removed from the front.
  - Can be implemented using arrays or linked lists.
- **Time Complexity**:
  - Access: O(n)
  - Search: O(n)
  - Insertion: O(1)
  - Deletion: O(1)
- **Use Case**:
  - Scheduling and resource allocation.
  - Breadth-first search and level-order traversal.
  - Buffer management and print spooling.
- **References**:
  - [Queue using Array](https://github.com/54nd339/Data-Structures/blob/master/8QAR.c)
  - [Queue using Linked List](https://github.com/54nd339/Data-Structures/blob/master/9QLL.c)

### Tree

- **Charecteristics**:
  - Hierarchical data structure with a root node and child nodes.
  - Each node contains a data field and a reference to its children.
  - Can be implemented using arrays or linked lists.
- **Time Complexity**:
  - Access: O(n)
  - Search: O(log n)
  - Insertion: O(log n)
  - Deletion: O(log n)
- **Use Case**:
  - Representing hierarchical data and relationships.
  - Organizing and searching large datasets.
  - Implementing file systems and database indexing.
- **References**:
  - [Tree](https://en.wikipedia.org/wiki/Tree_(data_structure))

### Graph

- **Charecteristics**:
  - Non-linear data structure with nodes and edges.
  - Each node contains a data field and a reference to its adjacent nodes.
  - Can be implemented using adjacency matrix or adjacency list.
- **Time Complexity**:
  - Traversal: O(V + E)
  - Search: O(V + E)
  - Insertion: O(1)
  - Deletion: O(1)
- **Use Case**:
  - Representing networks and relationships.
  - Routing and shortest path algorithms.
  - Social networks and recommendation systems.
- **References**:
  - [Graph using Adjacency Matrix](https://github.com/54nd339/Algorithms/blob/master/Graph.c)
  - [Graph using Adjacency List](https://github.com/54nd339/Algorithms/blob/master/graphll.c)

### Hash Table

- **Charecteristics**:
  - Key-value pair data structure with a hash function.
  - Each key is unique and maps to a specific value.
  - Can be implemented using arrays or linked lists.
- **Time Complexity**:
  - Access: O(1)
  - Search: O(1)
  - Insertion: O(1)
  - Deletion: O(1)
- **Use Case**:
  - Storing and retrieving data with unique keys.
  - Implementing caches and symbol tables.
  - Efficient lookup and storage of key-value pairs.
- **References**:
  - [Hash Table](https://en.wikipedia.org/wiki/Hash_table)

### Heap

- **Charecteristics**:
  - Binary tree data structure with a specific ordering property.
  - Each node contains a data field and references to its children.
  - Can be implemented using arrays or linked lists.
- **Time Complexity**:
  - Access: O(n)
  - Search: O(n)
  - Insertion: O(log n)
  - Deletion: O(log n)
- **Use Case**:
  - Priority queues and scheduling algorithms.
  - Implementing heapsort and selection algorithms.
  - Memory allocation and garbage collection.
- **References**:
  - [Heap](https://github.com/54nd339/Algorithms/blob/master/Heap.c)

---
title: Huffman Coding
description: Huffman coding is a lossless data compression algorithm that is optimal in terms of the number of bits used for each symbol.
date: 2023-05-18
draft: false
slug: /pensieve/algorithms/huffman-coding
tags:
  - DSA
  - Greedy
---
## Problem Statement

Huffman coding is a lossless data compression algorithm that is optimal in terms of the number of bits used for each symbol. The algorithm was developed by David A. Huffman in 1952, and it is based on the idea of variable-length encoding. The algorithm builds a binary tree called the Huffman tree, where each leaf node represents a symbol and its frequency of occurrence. The tree is constructed in such a way that the most frequent symbols have the shortest codes, and the least frequent symbols have the longest codes.

## Pseudocode

```pseudocode
Huffman(C):
    n = |C|
    Q = C
    for i = 1 to n - 1:
        allocate a new node z
        z.left = x = Extract-Min(Q)
        z.right = y = Extract-Min(Q)
        z.freq = x.freq + y.freq
        Insert(Q, z)
    return Extract-Min(Q)
```

## Explanation

1. C is an array of n elements, each element containing a symbol and its frequency of occurrence.
2. The algorithm starts by creating a priority queue Q containing the elements of C.
3. The algorithm then iterates n - 1 times, where n is the number of elements in C.
4. In each iteration, the algorithm extracts the two nodes with the lowest frequency from Q, and creates a new node z with these two nodes as its left and right children.
5. The frequency of z is set to the sum of the frequencies of its children.
6. The new node z is then inserted back into the priority queue Q.
7. After n - 1 iterations, the algorithm returns the root of the Huffman tree, which is the last node remaining in Q.

## Proof of Correctness

The correctness of the Huffman coding algorithm can be proven using the following properties:

1. The Huffman tree is a full binary tree, meaning that each node has either 0 or 2 children.
2. The algorithm constructs the Huffman tree in such a way that the most frequent symbols have the shortest codes, and the least frequent symbols have the longest codes.
3. The algorithm constructs the Huffman tree in a greedy manner, by always choosing the two nodes with the lowest frequency to merge into a new node.

These properties ensure that the Huffman coding algorithm produces an optimal prefix-free code, where no codeword is a prefix of another codeword, and the total number of bits used to encode the symbols is minimized.

## Time Complexity

The time complexity of the Huffman coding algorithm is O(n log n), where n is the number of symbols in the input array C. This is because the algorithm iterates n - 1 times, and each iteration involves extracting and inserting nodes into the priority queue, which has a time complexity of O(log n).

## Space Complexity

The space complexity of the Huffman coding algorithm is O(n), where n is the number of symbols in the input array C. This is because the algorithm uses a priority queue to store the nodes, and the size of the priority queue is proportional to the number of symbols.
---
title: Basic Algorithms
description: A brief analysis of the time and space complexity of algorithms, and a list of basic algorithms.
date: 2023-01-19
draft: false
slug: /pensieve/algorithms
tags:
  - DSA
  - Cheatsheet
---
## Complexity Analysis

### Time Complexity

| Notation   | Name         | Example                          |
| ---------- | ------------ | -------------------------------- |
| O(1)       | Constant     | Accessing an element in an array |
| O(log n)   | Logarithmic  | Binary search                    |
| O(n)       | Linear       | Traversing an array              |
| O(n log n) | Linearithmic | Merge sort                       |
| O(n^2)     | Quadratic    | Bubble sort                      |
| O(n^3)     | Cubic        | Matrix multiplication            |
| O(2^n)     | Exponential  | Tower of Hanoi                   |
| O(n!)      | Factorial    | Permutations of a set            |

### Space Complexity

| Notation | Name        | Example                                             |
| -------- | ----------- | --------------------------------------------------- |
| O(1)     | Constant    | Accessing a specific element in an array            |
| O(log n) | Logarithmic | Binary search algorithm                             |
| O(n)     | Linear      | Linear search algorithm                             |
| O(n^2)   | Quadratic   | Bubble sort algorithm                               |
| O(2^n)   | Exponential | Generating all subsets of a set                     |
| O(n!)    | Factorial   | Brute-force solution for traveling salesman problem |

## Algorithms

### Greedy

- **Charecteristics**:
  - Makes the locally optimal choice at each stage with the hope of finding a global optimum.
  - Does not guarantee an optimal solution.
- **Use Case**:
  - [Activity Selection Problem](/pensieve/algorithms/activity-selection)
  - [Fractional Knapsack Problem](/pensieve/algorithms/fractional-knapsack)
  - Decision Tree for ID3 Algorithm
  - [Huffman Coding](/pensieve/algorithms/huffman-coding)
  - [Minimum Spanning Tree Algorithms](/pensieve/algorithms/minimum-spanning-tree) (Prim's and Kruskal's)

### Divide and Conquer

- **Charecteristics**:
  - Breaks a problem into subproblems that are similar to the original problem, recursively solves the subproblems, and then combines the solutions to the subproblems to solve the original problem.
  - The subproblems should be independent, and the same algorithm should be applicable to each subproblem.
- **Use Case**:
  - [Sorting Algorithms](/pensieve/algorithms/sorting-searching)
  - [Strassen's Matrix Multiplication](/pensieve/algorithms/strassen-matrix-multiplication)
  - [Closest Pair of Points](/pensieve/algorithms/closest-pair-of-points)
  - [Karatsuba Multiplication](/pensieve/algorithms/karatsuba-multiplication)
  - [Fast Fourier Transform](/pensieve/algorithms/fast-fourier-transform)

### Dynamic Programming

- **Charecteristics**:
  - Simplifies a problem by breaking it down into simpler subproblems in a recursive manner. Solves each of these subproblems just once and stores their solutions in a table, thereby avoiding the work of re-computing their solutions.
  - It can be achieved by either a top-down approach (memoization) or a bottom-up approach (tabulation). The bottom-up approach is usually more efficient.
- **Use Case**:
  - [Longest Common Subsequence](/pensieve/algorithms/longest-common-subsequence)
  - [0/1 Knapsack Problem](/pensieve/algorithms/01-knapsack)
  - [Matrix Chain Multiplication](/pensieve/algorithms/matrix-chain-multiplication)
  - [Path Finding Algorithm](/pensieve/algorithms/path-finding)

### Backtracking

- **Charecteristics**:
  - A general algorithm for finding all (or some) solutions to some computational problems, that incrementally builds candidates to the solutions, and abandons a candidate as soon as it determines that the candidate cannot possibly be completed to a valid solution.
  - It is a depth-first search (in contrast to a breadth-first search), because it will completely explore one branch to a possible solution before moving to another branch.
- **Use Case**:
  - [N-Queens Problem](/pensieve/algorithms/n-queens)
  - [Sudoku Solver](/pensieve/algorithms/sudoku-solver)
  - [Hamiltonian Cycle](/pensieve/algorithms/hamiltonian-cycle)
  - [Graph Coloring](/pensieve/algorithms/graph-coloring)
---
title: Matrix Chain Multiplication
description: It is an algorithm that finds the most efficient way to multiply a sequence of matrices by finding the optimal positions to split the sequence of matrices.
date: 2022-05-18
draft: false
slug: /pensieve/algorithms/matrix-chain-multiplication
tags:
  - DSA
  - DP
  - Matrix Multiplication
---
## Problem Statement

Given a sequence of matrices, the goal is to find the most efficient way to multiply these matrices. The problem is not actually to perform the multiplications, but merely to decide in which order to perform the multiplications.

## Pseudocode

```pseudocode
MatrixChainOrder(p, n):
    for i = 1 to n:
        m[i, i] = 0
    for l = 2 to n:
        for i = 1 to n - l + 1:
            j = i + l - 1
            m[i, j] = ∞
            for k = i to j - 1:
                q = m[i, k] + m[k + 1, j] + p[i - 1] * p[k] * p[j]
                if q < m[i, j]:
                    m[i, j] = q
                    s[i, j] = k
    return m and s
```

## Explanation

The problem can be solved using dynamic programming. The problem can be broken down into smaller subproblems. The subproblems can be solved and the results can be used to solve the larger problem. The problem can be solved using a bottom-up approach.

The `MatrixChainOrder` function takes two parameters, `p` and `n`. The `p` parameter is an array of integers that represent the dimensions of the matrices. The `n` parameter is the number of matrices. The function returns two matrices, `m` and `s`. The `m` matrix stores the minimum number of scalar multiplications needed to multiply the matrices. The `s` matrix stores the optimal positions to split the sequence of matrices.

The function initializes the `m` matrix with zeros. The function then iterates over the length of the sequence of matrices. For each length, the function iterates over the starting index of the sequence of matrices. The function then iterates over the possible positions to split the sequence of matrices. The function calculates the minimum number of scalar multiplications needed to multiply the matrices and stores the result in the `m` matrix. The function also stores the optimal positions to split the sequence of matrices in the `s` matrix.

The function returns the `m` and `s` matrices.

## Complexity Analysis

The time complexity of the `MatrixChainOrder` function is O(n^3), where n is the number of matrices. The space complexity of the `MatrixChainOrder` function is O(n^2). 

## Proof of Correctness

The correctness of the `MatrixChainOrder` function can be proved using induction. 

The base case is when the length of the sequence of matrices is 1. In this case, the minimum number of scalar multiplications needed to multiply the matrices is 0. The `m` matrix is initialized with zeros, which is the correct result.

The inductive step is when the length of the sequence of matrices is greater than 1. The function iterates over the length of the sequence of matrices and calculates the minimum number of scalar multiplications needed to multiply the matrices. The function stores the result in the `m` matrix. The function also stores the optimal positions to split the sequence of matrices in the `s` matrix. The function returns the `m` and `s` matrices, which are the correct results.
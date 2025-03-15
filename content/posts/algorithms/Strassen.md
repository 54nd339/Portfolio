---
title: Strassen's Matrix Multiplication
description: Strassen's algorithm is an algorithm for matrix multiplication. It is faster than the standard matrix multiplication algorithm and is useful in practice for large matrices.
date: 2022-06-17
draft: false
slug: /pensieve/algorithms/strassen-matrix-multiplication
tags:
  - DSA
  - Matrix Multiplication
---
## Problem Statement

Given two square matrices `A` and `B` of size `n x n`, we need to multiply them to get a resultant matrix `C` of size `n x n`. We have to solve this under the constraint that the time complexity of the algorithm should be less than the standard matrix multiplication algorithm which is `O(n^3)`.

## Pseudocode

```pseudocode
function strassen(A, B):
    n = A.rows
    if n == 1:
        return A * B
    else:
        A11, A12, A21, A22 = A.split()
        B11, B12, B21, B22 = B.split()
        S1 = B12 - B22
        S2 = A11 + A12
        S3 = A21 + A22
        S4 = B21 - B11
        S5 = A11 + A22
        S6 = B11 + B22
        S7 = A12 - A22
        S8 = B21 + B22
        S9 = A11 - A21
        S10 = B11 + B12
        P1 = strassen(A11, S1)
        P2 = strassen(S2, B22)
        P3 = strassen(S3, B11)
        P4 = strassen(A22, S4)
        P5 = strassen(S5, S6)
        P6 = strassen(S7, S8)
        P7 = strassen(S9, S10)
        C11 = P5 + P4 - P2 + P6
        C12 = P1 + P2
        C21 = P3 + P4
        C22 = P5 + P1 - P3 - P7
        return C11, C12, C21, C22
```

## Explanation

Strassen's algorithm is a divide and conquer algorithm that divides the input matrices into smaller sub-matrices and performs the multiplication in a recursive manner. The algorithm is based on the following observations:

1. **Divide**: Divide the input matrices `A` and `B` into four sub-matrices of size `n/2 x n/2`.
2. **Conquer**: Recursively multiply the sub-matrices obtained in the previous step.
3. **Combine**: Combine the results of the sub-matrices to obtain the final result.

The algorithm uses seven recursive calls to multiply the sub-matrices and combines the results using a set of addition and subtraction operations. The time complexity of the algorithm is `O(n^log7)` which is approximately `O(n^2.81)`.

## Proof of Correctness

The base case is when `n = 1`, in which case the algorithm returns the product of the input matrices.
For `n > 1`, the algorithm divides the input matrices into sub-matrices and recursively multiplies them.
The correctness of the algorithm can be proved by induction on the size of the input matrices.
The induction hypothesis is that the algorithm correctly multiplies two matrices of size `n x n`. The induction step is to show that the algorithm correctly multiplies two matrices of size `2n x 2n` using the results of the smaller sub-matrices.
This can be proved using the properties of matrix multiplication and the correctness of the recursive calls.
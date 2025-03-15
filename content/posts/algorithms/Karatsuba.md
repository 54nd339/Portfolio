---
title: Karatsuba's Algorithm
description: Karatsuba's algorithm is an algorithm for fast multiplication of large numbers. It reduces the multiplication of two n-digit numbers to at most three multiplications of n/2-digit numbers in general.
date: 2022-06-17
draft: false
slug: /pensieve/algorithms/karatsuba-multiplication
tags:
  - DSA
  - Math
---
## Problem Statement

Given two n-digit numbers, the goal is to multiply them using Karatsuba's algorithm, which reduces the multiplication of two n-digit numbers to at most three multiplications of n/2-digit numbers in general.

## Pseudocode

```pseudocode
Karatsuba(x, y):
    if x < 10 or y < 10:
        return x * y
    n = max(|x|, |y|)
    m = n / 2
    a = x / 10^m
    b = x % 10^m
    c = y / 10^m
    d = y % 10^m
    ac = Karatsuba(a, c)
    bd = Karatsuba(b, d)
    ad_bc = Karatsuba(a + b, c + d) - ac - bd
    return ac * 10^(2 * m) + ad_bc * 10^m + bd
```

## Explanation

1. The algorithm starts by checking if either of the input numbers is less than 10, in which case it simply returns the product of the two numbers.
2. If both numbers are greater than or equal to 10, the algorithm calculates the number of digits in the larger of the two numbers, and then calculates the middle index m of the number of digits.
3. The algorithm then splits the input numbers into two parts, a and b for x, and c and d for y, such that $x = a * 10^m + b$ and $y = c * 10^m + d$.
4. The algorithm then recursively calculates the products ac, bd, and ad_bc using the Karatsuba algorithm, and then combines these products to obtain the final result.

## Space and Time Complexity

1. The time complexity of the Karatsuba algorithm is O($n^{log{_2}3}$), which is approximately O($n^{1.585}$), where n is the number of digits in the input numbers. This is because the algorithm makes three recursive calls on numbers with half the number of digits, and then combines the results using simple arithmetic operations.
2. The space complexity of the Karatsuba algorithm is O(log n), as it makes three recursive calls on numbers with half the number of digits, which results in a call stack of depth log n.
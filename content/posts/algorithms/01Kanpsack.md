---
title: 0/1 Knapsack Problem
description: The 0/1 knapsack problem is a classic combinatorial problem that requires selecting a subset of items with maximum value while keeping the total weight within a given limit. The problem is to find the maximum value that can be obtained by selecting a subset of items with a total weight less than or equal to the given limit.
date: 2022-03-16
draft: false
slug: /pensieve/algo-01-knapsack
tags:
  - DSA
  - DP
---
## Problem Statement

Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible. It derives its name from the problem faced by someone who is constrained by a fixed-size knapsack and must fill it with the most valuable items. The problem often arises in resource allocation where the decision maker has to decide which items to include in a limited-capacity "knapsack" to maximize the total value of the items included. The 0/1 knapsack problem restricts the number of each item to zero or one.

## Pseudocode

Below is the pseudocode for the iterative approach to solve the problem.

```pseudocode
function knapsack_01(weights, values, W):
    n = length(weights)
    dp = array of size (n+1) x (W+1)
    for i = 0 to n:
        for w = 0 to W:
            if i == 0 or w == 0:
                dp[i][w] = 0
            else if weights[i-1] <= w:
                dp[i][w] = max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w])
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][W]
```

Below is the pseudocode for the recursive approach to solve the problem.

```pseudocode
function knapsack_01(weights, values, W):
    n = length(weights)
    memo = array of size (n+1) x (W+1) filled with -1
    return knapsack_01_memoization(weights, values, W, n, memo)

function knapsack_01_memoization(weights, values, W, i, memo):
    if i == 0 or W == 0:
        return 0
    if memo[i][W] != -1:
        return memo[i][W]
    if weights[i-1] <= W:
        memo[i][W] = max(values[i-1] + knapsack_01_memoization(weights, values, W-weights[i-1], i-1, memo), knapsack_01_memoization(weights, values, W, i-1, memo))
    else:
        memo[i][W] = knapsack_01_memoization(weights, values, W, i-1, memo)
    return memo[i][W]
```

## Explanation

The 0/1 knapsack problem can be solved using dynamic programming. The approaches use a 2D array `dp` to store the maximum value that can be obtained with a given weight limit `w` and a given number of items `i`. The base case is when the number of items is 0 or the weight limit is 0, in which case the maximum value is 0. We then fill in the 2D array `dp` using the following logic:

- If the weight of the current item is less than or equal to the weight limit, then the maximum value that can be obtained with the current item is the maximum of the value of the current item plus the maximum value that can be obtained with the remaining weight and one less item, and the maximum value that can be obtained with the same weight and one less item.
- If the weight of the current item is greater than the weight limit, then the maximum value that can be obtained with the current item is the maximum value that can be obtained with the same weight and one less item.

The recursive approach uses memoization to store the results of subproblems to avoid redundant calculations. It checks if the result for a given `i` and `W` is already calculated and stored in the memoization array. If not, it calculates the result and stores it in the memoization array. This helps avoid redundant calculations and improves the time complexity of the solution. The recursive approach is more intuitive and easier to understand, but the iterative approach is more efficient and faster. Both approaches have a time complexity of O(n*W), where `n` is the number of items and `W` is the weight limit. The space complexity is O(n*W) for the iterative approach and O(n*W) for the recursive approach due to the memoization array.
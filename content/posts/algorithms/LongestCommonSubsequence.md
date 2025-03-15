---
title: Longest Common Subsequence
description: Longest Common Subsequence (LCS) is a classic dynamic programming problem. It is a subsequence of two strings that is common to both strings and is not necessarily contiguous. The problem is to find the length of the longest common subsequence of two strings.
date: 2022-03-16
draft: false
slug: /pensieve/algorithms/longest-common-subsequence
tags:
  - DSA
  - DP
---
## Problem Statement

Given two strings `s1` and `s2`, find the length of the longest common subsequence (LCS) of the two strings. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

## Pseudocode

Below is the pseudocode for the iterative and recursive approach to solve the problem. Tabulation is used to solve the problem iteratively, and memoization is used to solve the problem recursively.

```pseudocode
function lcs_tabulation(s1, s2):
    n = length(s1)
    m = length(s2)
    dp = array of size (n+1) x (m+1)
    for i = 0 to n:
        for j = 0 to m:
            if i == 0 or j == 0:
                dp[i][j] = 0
            else if s1[i-1] == s2[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[n][m]
```

```pseudocode
function lcs_memoization(s1, s2, i, j, memo):
    if i == 0 or j == 0:
        return 0
    if memo[i][j] != -1:
        return memo[i][j]
    if s1[i-1] == s2[j-1]:
        memo[i][j] = 1 + lcs_memoization(s1, s2, i-1, j-1, memo)
    else:
        memo[i][j] = max(lcs_memoization(s1, s2, i-1, j, memo), lcs_memoization(s1, s2, i, j-1, memo))
    return memo[i][j]

function lcs(s1, s2):
    n = length(s1)
    m = length(s2)
    memo = array of size (n+1) x (m+1) filled with -1
    return lcs_memoization(s1, s2, n, m, memo)
```

## Explanation

The provided pseudocode presents two approaches to solve the Longest Common Subsequence (LCS) problem: tabulation (iterative approach) and memoization (recursive approach).

### Tabulation (Iterative Approach)
The `lcs_tabulation` function utilizes dynamic programming to build a table `dp` where `dp[i][j]` represents the length of the LCS of the substrings `s1[0...i-1]` and `s2[0...j-1]`. It iterates through each character of both strings and fills in the table based on the following conditions:

If either string is empty (`i == 0` or `j == 0`), the LCS length is 0.
If the characters at the current positions match (`s1[i-1] == s2[j-1]`), it increments the LCS length by 1 compared to the LCS of the substrings without these characters (`dp[i-1][j-1]`).
If the characters don't match, it considers the LCS length without one character from either string, taking the maximum of the LCS length obtained from either removing a character from `s1` or from `s2`.
Finally, it returns `dp[n][m]`, where `n` and `m` are the lengths of `s1` and `s2`, respectively, representing the length of the LCS of the entire strings.

Memoization (Recursive Approach)
The `lcs_memoization` function implements a recursive approach with memoization. It recursively calculates the LCS length for substrings of `s1` and `s2`, utilizing memoization to store intermediate results to avoid redundant computations.

If either string is empty (`i == 0` or `j == 0`), the LCS length is 0.
If the LCS length for the current positions (`s1[i-1]` and `s2[j-1]`) is not computed before, it calculates it recursively. If the characters match, it increments the LCS length by 1; otherwise, it explores both possibilities of excluding a character from either string and selects the maximum length.
It returns the computed LCS length for the current positions.
The `lcs` function initializes the memoization table and calls the `lcs_memoization` function with the lengths of s1 and s2.

## Proof of Correctness

The tabulation approach is correct because it builds the table `dp` iteratively, considering all possible combinations of substrings of `s1` and `s2` and filling in the table based on the conditions mentioned in the explanation. The final value `dp[n][m]` represents the length of the LCS of the entire strings `s1` and `s2`.

The memoization approach is correct because it recursively calculates the LCS length for substrings of `s1` and `s2`, utilizing memoization to store intermediate results. It ensures that the LCS length for each substring is computed only once and is reused when needed.

## Space & Time Complexity

The time complexity of both the tabulation and memoization approaches is O(n*m), where n and m are the lengths of the input strings `s1` and `s2`, respectively. This is because both approaches consider all possible combinations of substrings of `s1` and `s2` and fill in the table or memoization table based on the conditions mentioned in the explanation.

The space complexity of the tabulation approach is O(n*m), where n and m are the lengths of the input strings `s1` and `s2`, respectively. This is because it uses a 2D array  of size (n+1) x (m+1) to store the LCS lengths of all possible combinations of substrings of `s1` and `s2`.
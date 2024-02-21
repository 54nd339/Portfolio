---
title: N Queens Problem
description: The N Queens problem is a classic combinatorial problem that requires placing N chess queens on an N×N chessboard so that no two queens threaten each other. Thus, a solution requires that no two queens share the same row, column, or diagonal.
date: 2022-03-16
draft: false
slug: /pensieve/algo-n-queens
tags:
  - DSA
  - Backtracking
---
## Problem Statement

The N Queens problem is a classic combinatorial problem that requires placing N chess queens on an N×N chessboard so that no two queens threaten each other. Thus, a solution requires that no two queens share the same row, column, or diagonal. The problem is to find all possible arrangements of N queens on an N×N chessboard such that no two queens threaten each other. The problem is named after the game of chess, where a queen can move horizontally, vertically, or diagonally. The N Queens problem is a well-known example of a constraint satisfaction problem and is often used to illustrate the concept of backtracking algorithms.

## Algorithm

The N Queens problem can be solved using a backtracking algorithm. The basic idea is to place queens on the chessboard one by one, and backtrack if the current configuration is not valid. The algorithm works as follows:

1. Start with an empty chessboard.
2. Place a queen in the first row and column.
3. If the current configuration is valid, move to the next row and place a queen in the next column.
4. If the current configuration is not valid, backtrack to the previous row and try placing the queen in the next column.
5. Repeat steps 3 and 4 until all queens are placed on the chessboard.
6. If all queens are placed on the chessboard, print the current configuration as a solution.

The backtracking algorithm can be implemented using a recursive function that takes the current row as a parameter and tries to place a queen in each column of the current row. If a valid configuration is found, the function moves to the next row and repeats the process. If no valid configuration is found, the function backtracks to the previous row and tries a different column.

## Pseudocode

```pseudocode
N-Queens(n):
  board = empty n×n chessboard
  solve(board, 0, n)

solve(board, row, n):
    if row == n:
        print board
        return
    for col = 0 to n-1:
        if isSafe(board, row, col, n):
        board[row][col] = 1
        solve(board, row+1, n)
        board[row][col] = 0

isSafe(board, row, col, n):
    for i = 0 to row-1:
        if board[i][col] == 1:
            return false
    for i = row, j = col; i >= 0 and j >= 0; i--, j--:
        if board[i][j] == 1:
            return false
    for i = row, j = col; i >= 0 and j < n; i--, j++:
        if board[i][j] == 1:
            return false
    return true
```

## Explanation

The N Queens problem can be solved using a backtracking algorithm that tries to place queens on the chessboard one by one. The algorithm uses a recursive function to explore all possible configurations of queens on the chessboard. The function takes the current row as a parameter and tries to place a queen in each column of the current row. If a valid configuration is found, the function moves to the next row and repeats the process. If no valid configuration is found, the function backtracks to the previous row and tries a different column. The algorithm uses a helper function to check if a given position is safe for placing a queen. The helper function checks if there is a queen in the same column, the same row, or the same diagonal as the given position.

## Proof of Correctness

The correctness of the N Queens algorithm can be proved by induction. The base case is when N = 1, in which case the algorithm trivially places a queen on the chessboard. The inductive step is to assume that the algorithm correctly solves the N-1 Queens problem and show that it correctly solves the N Queens problem. The algorithm works by placing queens on the chessboard one by one and backtracking if the current configuration is not valid. Since the algorithm explores all possible configurations of queens on the chessboard, it is guaranteed to find all valid solutions to the N Queens problem.

## Complexity Analysis

The time complexity of the N Queens algorithm is O(N!), where N is the size of the chessboard. This is because the algorithm explores all possible configurations of queens on the chessboard, and there are N choices for placing the queen in the first row, N-1 choices for placing the queen in the second row, and so on. The space complexity of the algorithm is O(N^2) to store the chessboard.
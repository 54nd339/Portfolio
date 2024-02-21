---
title: Sudoku Solver
description: The Sudoku Solver is a classic combinatorial problem that requires solving a partially filled 9×9 grid so that every row, column, and each of the nine 3×3 subgrids contain all of the digits from 1 to 9.
date: 2022-03-16
draft: false
slug: /pensieve/algo-sudoku-solver
tags:
  - DSA
  - Backtracking
---
## Problem Statement

The Sudoku Solver is a classic combinatorial problem that requires solving a partially filled 9×9 grid so that every row, column, and each of the nine 3×3 subgrids contain all of the digits from 1 to 9. The problem is to find a solution to the Sudoku puzzle, which is a well-known example of a constraint satisfaction problem and is often used to illustrate the concept of backtracking algorithms.

## Algorithm

The Sudoku Solver can be solved using a backtracking algorithm. The basic idea is to place digits in the empty cells of the Sudoku grid one by one, and backtrack if the current configuration is not valid. The algorithm works as follows:

1. Find an empty cell in the Sudoku grid.
2. Try placing a digit from 1 to 9 in the empty cell.
3. If the current configuration is valid, move to the next empty cell and repeat the process.
4. If the current configuration is not valid, backtrack to the previous empty cell and try a different digit.
5. Repeat steps 1 to 4 until all cells are filled with valid digits.
6. If all cells are filled with valid digits, print the current configuration as a solution.

## Pseudocode

```pseudocode
SudokuSolver(grid):
    if solveSudoku(grid):
        print grid
    else:
        print "No solution exists"

solveSudoku(grid):
    for row = 0 to 8:
        for col = 0 to 8:
            if grid[row][col] == 0:
                for digit = 1 to 9:
                    if isSafe(grid, row, col, digit):
                        grid[row][col] = digit
                        if solveSudoku(grid):
                            return true
                        grid[row][col] = 0
                return false
    return true

isSafe(grid, row, col, digit):
    return !usedInRow(grid, row, digit) && !usedInCol(grid, col, digit) && !usedInBox(grid, row-row%3, col-col%3, digit)

usedInRow(grid, row, digit):
    for col = 0 to 8:
        if grid[row][col] == digit:
            return true
    return false

usedInCol(grid, col, digit):
    for row = 0 to 8:
        if grid[row][col] == digit:
            return true
    return false

usedInBox(grid, boxStartRow, boxStartCol, digit):
    for row = 0 to 2:
        for col = 0 to 2:
            if grid[row+boxStartRow][col+boxStartCol] == digit:
                return true
    return false
```

## Explanation

The Sudoku Solver can be solved using a backtracking algorithm that tries to place digits in the empty cells of the Sudoku grid one by one. The algorithm uses a recursive function to explore all possible configurations of digits in the Sudoku grid. The function takes the current row and column as parameters and tries to place a digit from 1 to 9 in the current cell. If a valid configuration is found, the function moves to the next empty cell and repeats the process. If no valid configuration is found, the function backtracks to the previous empty cell and tries a different digit. The algorithm uses helper functions to check if a given digit is safe to place in a given position. The helper functions check if the digit is already used in the same row, the same column, or the same 3×3 subgrid as the given position. If a valid configuration is found for all cells, the algorithm prints the current configuration as a solution. If no valid configuration is found for all cells, the algorithm prints "No solution exists".

## Complexity Analysis

The time complexity of the Sudoku Solver is $O(9^(n^2))$, where n is the size of the Sudoku grid (9 in the case of a standard `9×9` Sudoku grid). This is because there are 9 choices for each empty cell in the grid, and the algorithm explores all possible configurations of digits in the grid. The space complexity of the algorithm is $O(n^2)$ to store the Sudoku grid. The Sudoku Solver is a classic example of a backtracking algorithm and is often used to illustrate the concept of constraint satisfaction problems. 
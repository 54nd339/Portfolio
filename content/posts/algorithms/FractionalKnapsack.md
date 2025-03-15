---
title: Fractional Knapsack
description: The fractional knapsack problem is a combinatorial optimization problem in which the goal is to fill a container with fractional amounts of different materials chosen to maximize the value of the selected materials.
date: 2022-03-16
draft: false
slug: /pensieve/algorithms/fractional-knapsack
tags:
  - DSA
  - Greedy
---
## Problem Statement

You are given a set of items, each with a weight and a value. You are also given a knapsack with a maximum weight capacity. The goal is to fill the knapsack with a combination of items that maximizes the total value of the selected items, while not exceeding the maximum weight capacity of the knapsack.

## Pseudocode

```pseudocode
FractionalKnapsack(items, capacity):
    n = |items|
    for i = 1 to n:
        items[i].ratio = items[i].value / items[i].weight
    sort items in decreasing order of ratio
    totalValue = 0
    for i = 1 to n:
        if capacity == 0:
            return totalValue
        a = min(items[i].weight, capacity)
        totalValue = totalValue + a * items[i].ratio
        items[i].weight = items[i].weight - a
        capacity = capacity - a
    return totalValue
```

## Explanation

1. The algorithm starts by calculating the ratio of value to weight for each item, and then sorts the items in decreasing order of this ratio.
2. The algorithm then iterates through the sorted items, adding the maximum possible amount of each item to the knapsack, until the knapsack is full.
3. The total value of the selected items is then returned as the result.

## Proof of Correctness

The correctness of the fractional knapsack algorithm can be proven using the following properties:

1. The algorithm selects items in decreasing order of their value-to-weight ratio, which ensures that the most valuable items are selected first.
2. The algorithm adds the maximum possible amount of each item to the knapsack, which ensures that the knapsack is filled with the most valuable combination of items.

These properties ensure that the fractional knapsack algorithm produces an optimal solution, where the total value of the selected items is maximized without exceeding the maximum weight capacity of the knapsack.

## Time Complexity

The time complexity of the fractional knapsack algorithm is O(n log n), where n is the number of items. This is because the algorithm sorts the items in decreasing order of their value-to-weight ratio, which has a time complexity of O(n log n).

## Space Complexity

The space complexity of the fractional knapsack algorithm is O(1), as it only uses a constant amount of additional space to store the ratio of value to weight for each item.
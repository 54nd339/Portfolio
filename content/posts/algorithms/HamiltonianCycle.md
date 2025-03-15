---
title: Hamiltonian Cycle
description: The Hamiltonian cycle problem is to find if there exists a tour that visits every city exactly once. A Hamiltonian cycle (or Hamiltonian circuit) is a Hamiltonian path that is a cycle.
date: 2022-03-16
draft: false
slug: /pensieve/algorithms/hamiltonian-cycle
tags:
  - DSA
  - Graph
  - Backtracking
---
## Problem Statement

The Hamiltonian cycle problem is to find if there exists a tour that visits every city exactly once. A Hamiltonian cycle (or Hamiltonian circuit) is a Hamiltonian path that is a cycle. The problem is similar to the Travelling Salesman Problem (TSP), but the Hamiltonian cycle problem is to find if there exists a tour that visits every city exactly once, without the need to return to the starting city.

## Algorithm

The Hamiltonian cycle problem can be solved using backtracking. The idea is to start from the first vertex and explore all other vertices using the depth-first search (DFS) algorithm. If we find a path that visits every vertex exactly once and ends at the starting vertex, then we have found a Hamiltonian cycle.

The algorithm can be implemented using the following pseudocode:

```pseudocode
function HamiltonianCycle(graph):
    n = graph.numberOfVertices
    path = new Array(n)
    for i from 0 to n-1:
        path[i] = -1
    path[0] = 0
    if HamiltonianCycleUtil(graph, path, 1) is false:
        print("No Hamiltonian cycle exists")
    else:
        print("Hamiltonian cycle exists")
        print(path)

function HamiltonianCycleUtil(graph, path, pos):
    n = graph.numberOfVertices
    if pos == n:
        if graph.isEdge(path[pos-1], path[0]) is true:
            return true
        else:
            return false
    for v from 1 to n-1:
        if isSafe(v, graph, path, pos) is true:
            path[pos] = v
            if HamiltonianCycleUtil(graph, path, pos+1) is true:
                return true
            path[pos] = -1
    return false

function isSafe(v, graph, path, pos):
    n = graph.numberOfVertices
    if graph.isEdge(path[pos-1], v) is false:
        return false
    for i from 0 to pos-1:
        if path[i] == v:
            return false
    return true
```

## Explanation

The HamiltonianCycle algorithm uses backtracking to explore all possible paths in the graph. It starts from the first vertex and explores all other vertices using the depth-first search (DFS) algorithm. If it finds a path that visits every vertex exactly once and ends at the starting vertex, then it has found a Hamiltonian cycle. The HamiltonianCycleUtil function checks if a vertex `v` can be added to the `path` array at position `pos` by checking if there is an edge between the last vertex in the `path` array and `v` and if `v` has not already been visited. If it finds a Hamiltonian cycle, it returns true; otherwise, it returns false.

## Space and Time Complexity

The time complexity of the Hamiltonian cycle algorithm is O(n!), where n is the number of vertices in the graph. The space complexity is O(n), where n is the number of vertices in the graph. The algorithm uses backtracking to explore all possible paths in the graph, so the time complexity is O(n!) because there are n! possible permutations of the vertices in the graph. The space complexity is O(n) because the algorithm uses an array of size n to store the path. The algorithm uses depth-first search (DFS) to explore all possible paths in the graph, so the time complexity is O(n!) and the space complexity is O(n).
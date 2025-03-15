---
title: Graph Coloring
description: The Graph Coloring problem is a classic combinatorial problem that requires assigning colors to the vertices of a graph so that no two adjacent vertices have the same color. The problem is to find a valid coloring of the graph with the minimum number of colors.
date: 2022-03-16
draft: false
slug: /pensieve/algorithms/graph-coloring
tags:
  - DSA
  - Backtracking
---
## Problem Statement

The Graph Coloring problem is a classic combinatorial problem that requires assigning colors to the vertices of a graph so that no two adjacent vertices have the same color. The problem is to find a valid coloring of the graph with the minimum number of colors. The problem is named after the game of coloring maps, where adjacent regions are required to have different colors. The Graph Coloring problem is a well-known example of a constraint satisfaction problem and is often used to illustrate the concept of backtracking algorithms.

## Algorithm

The Graph Coloring problem can be solved using a backtracking algorithm. The basic idea is to assign colors to the vertices of the graph one by one, and backtrack if the current configuration is not valid. The algorithm works as follows:

1. Start with an empty coloring of the graph.
2. Pick a vertex and assign it a color.
3. If the current configuration is valid, move to the next vertex and repeat the process.
4. If the current configuration is not valid, backtrack to the previous vertex and try a different color.
5. Repeat steps 2 to 4 until all vertices are colored.
6. If all vertices are colored, print the current coloring as a solution.

## Pseudocode

```pseudocode
GraphColoring(graph):
    colors = array of size |V| initialized with 0
    if solve(graph, colors, 0):
        print colors
    else:
        print "No solution exists"

solve(graph, colors, v):
    if v == |V|:
        return true
    for color = 1 to maxDegree(graph)+1:
        if isSafe(graph, colors, v, color):
            colors[v] = color
            if solve(graph, colors, v+1):
                return true
            colors[v] = 0
    return false

isSafe(graph, colors, v, color):
    for u in graph.adj[v]:
        if colors[u] == color:
            return false
    return true

maxDegree(graph):
    maxDegree = 0
    for v in graph.V:
        maxDegree = max(maxDegree, |graph.adj[v]|)
    return maxDegree
```

## Explanation

The Graph Coloring problem can be solved using a backtracking algorithm that tries to assign colors to the vertices of the graph one by one. The algorithm uses a recursive function to explore all possible colorings of the graph. The function takes the current vertex as a parameter and tries to assign a color to the vertex. If a valid coloring is found, the function moves to the next vertex and repeats the process. If no valid coloring is found, the function backtracks to the previous vertex and tries a different color. The algorithm uses a helper function to check if a given color is safe for a given vertex. The helper function checks if there is a vertex with the same color in the adjacency list of the given vertex. The algorithm also uses a helper function to find the maximum degree of the graph, which is used to limit the number of colors that need to be tried. The algorithm prints the current coloring as a solution if all vertices are colored with valid colors. If no valid coloring is found, the algorithm prints "No solution exists".

## Complexity Analysis

The time complexity of the Graph Coloring algorithm is O(m^V), where m is the maximum degree of the graph and V is the number of vertices. The space complexity of the algorithm is O(V), where V is the number of vertices. The algorithm uses a recursive function to explore all possible colorings of the graph, and the maximum depth of the recursion is V. The algorithm also uses an array of size V to store the colors of the vertices.
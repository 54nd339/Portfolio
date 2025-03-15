---
title: Minimum Spanning Tree
description: A minimum spanning tree (MST) is a subset of the edges of a connected, edge-weighted graph that connects all the vertices together, without any cycles, and with the minimum possible total edge weight.
date: 2023-05-19
draft: false
slug: /pensieve/algorithms/minimum-spanning-tree
tags:
  - DSA
  - Greedy
---
## Definition and Properties

A minimum spanning tree (MST) is a subset of the edges of a connected, edge-weighted graph that connects all the vertices together, without any cycles, and with the minimum possible total edge weight. The minimum spanning tree of a graph is unique if the graph is connected and the edge weights are distinct.

The properties of a minimum spanning tree are as follows:
- It is a spanning tree, which means it connects all the vertices of the graph.
- It is acyclic, which means it contains no cycles.
- It has the minimum possible total edge weight among all the spanning trees of the graph.

## Applications

Minimum spanning trees have a wide range of applications in various fields, including:
- Network design: MSTs can be used to design efficient and cost-effective communication networks, such as telephone networks, computer networks, and transportation networks.
- Circuit design: MSTs can be used to design printed circuit boards, where the goal is to minimize the total length of the wires connecting the components.
- Clustering: MSTs can be used to cluster data points in machine learning and data mining applications, where the goal is to group similar data points together.

## Kruskal's Algorithm

Let `G` be a connected, weighted graph and let `V` be the set of vertices and `E` be the set of edges of `G`. Kruskal's algorithm is a greedy algorithm that finds a minimum spanning tree for `G` by repeatedly adding the next lightest edge that does not produce a cycle in the current set of chosen edges. The algorithm works as follows:
1. Sort the edges of `G` in non-decreasing order of weight.
2. Initialize an empty set `T` to represent the minimum spanning tree.
3. For each edge `(u, v)` in `G`, in non-decreasing order of weight:
   - If adding `(u, v)` to `T` does not produce a cycle, add `(u, v)` to `T`.
4. Return `T`.

```pseudocode
KruskalMST(G):
    T = ∅
    for each vertex v in G:
        MakeSet(v)
    sort the edges of G in non-decreasing order of weight
    for each edge (u, v) in G, in non-decreasing order of weight:
        if FindSet(u) ≠ FindSet(v):
            T = T ∪ {(u, v)}
            Union(u, v)
    return T
```

## Prim's Algorithm

Let `G` be a connected, weighted graph and let `V` be the set of vertices and `E` be the set of edges of `G`. Prim's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. This means it finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized. The algorithm operates by building this tree one vertex at a time, from an arbitrary starting vertex, at each step adding the cheapest possible connection from the tree to another vertex. The algorithm works as follows:
1. Initialize an empty set `T` to represent the minimum spanning tree.
2. Initialize an array `key` to store the minimum weight of an edge connecting each vertex to the current set of chosen vertices, and an array `parent` to store the parent of each vertex in the minimum spanning tree.
3. Initialize `key[u]` to `∞` and `parent[u]` to `NIL` for each vertex `u` in `G`.
4. Choose an arbitrary vertex `r` as the root of the minimum spanning tree and set `key[r]` to `0`.
5. While `T` does not contain all the vertices of `G`:
   - Choose a vertex `u` not in `T` with the minimum value of `key[u]`.
   - Add the edge `(u, parent[u])` to `T`.
   - Update `key[v]` and `parent[v]` for each vertex `v` adjacent to `u` if `v` is not in `T` and the weight of the edge `(u, v)` is less than `key[v]`.
6. Return `T`.

```pseudocode
PrimMST(G, r):
    for each vertex u in G:
        key[u] = ∞
        parent[u] = NIL
    key[r] = 0
    Q = G
    while Q ≠ ∅:
        u = Extract-Min(Q)
        for each vertex v adjacent to u:
            if v is in Q and weight(u, v) < key[v]:
                parent[v] = u
                key[v] = weight(u, v)
    return parent
```

## Time and Space Complexity

The time and space complexity of the minimum spanning tree algorithms are as follows:

| Algorithm     | Time Complexity | Space Complexity |
| ------------- | --------------- | ---------------- |
| Kruskal's     | O(E log V)      | O(V)             |
| Prim's        | O(V^2)          | O(V)             |

Where:
- $V$ is the number of vertices in the graph.
- $E$ is the number of edges in the graph.

Kruskal's algorithm is generally preferred when the graph is sparse, i.e., when the number of edges is much less than the number of vertices. Prim's algorithm is generally preferred when the graph is dense, i.e., when the number of edges is close to the number of vertices.

## Example

### Kruskal's demonstration:
![Kruskal's Algorithm](https://upload.wikimedia.org/wikipedia/commons/b/bb/KruskalDemo.gif)

### Prim's demonstration:
![Prim's Algorithm](https://upload.wikimedia.org/wikipedia/commons/9/9b/PrimAlgDemo.gif)

## Conclusion

A minimum spanning tree is a fundamental concept in graph theory and has numerous practical applications. The algorithms for finding the minimum spanning tree are essential tools for solving optimization problems in various domains, and understanding their time and space complexity is crucial for selecting the most appropriate algorithm for a given graph.

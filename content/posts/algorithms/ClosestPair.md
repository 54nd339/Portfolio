---
title: Closest Pair of Points
description: A divide and conquer algorithm to find the closest pair of points in a set of points in the plane.
date: 2022-03-16
draft: false
slug: /pensieve/algo-closest-pair-of-points
tags:
  - DSA
  - Divide and Conquer
---
## Problem Statement

Given a set of points in the plane, the closest pair of points problem is to find the two points that are closest to each other. The distance between two points $p_1 = (x_1, y_1)$ and $p_2 = (x_2, y_2)$ is given by the Euclidean distance formula:

$$
d(p_1, p_2) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

## Algorithm

The closest pair of points problem can be solved using a divide and conquer algorithm. The algorithm is as follows:

1. Sort the points according to their x-coordinates.
2. Divide the set of points into two equal-sized subsets by a vertical line that passes through the median x-coordinate.
3. Recursively find the closest pair of points in each subset.
4. Let $d$ be the minimum of the two smallest distances found in the recursive calls.
5. Find the closest pair of points such that one point lies in the left subset and the other lies in the right subset, and the distance between them is less than $d$.

The time complexity of the algorithm is $O(n \log n)$, where $n$ is the number of points in the set.

## Pseudocode

```pseudocode
function closestPair(P)
    if |P| <= 3
        return bruteForceClosestPair(P)
    else
        Q = P[:|P|/2]
        R = P[|P|/2:]
        (p1, q1) = closestPair(Q)
        (p2, q2) = closestPair(R)
        d = min(distance(p1, q1), distance(p2, q2))
        (p3, q3) = closestSplitPair(P, d)
        if distance(p3, q3) < d
            return (p3, q3)
        else if distance(p1, q1) < distance(p2, q2)
            return (p1, q1)
        else
            return (p2, q2)

function closestSplitPair(P, d)
    x_bar = P[|P|/2].x
    S = [p for p in P if x_bar - d <= p.x <= x_bar + d]
    S.sort(key=lambda p: p.y)
    best = d
    for i = 0 to |S| - 2
        for j = i + 1 to min(i + 7, |S| - 1)
            best = min(best, distance(S[i], S[j]))
    return best
```

## Explanation

The `closestPair` function is the main function that finds the closest pair of points in the set $P$. If the number of points in the set is less than or equal to 3, the function returns the result of the brute-force algorithm `bruteForceClosestPair`. Otherwise, it divides the set into two equal-sized subsets $Q$ and $R$, and recursively finds the closest pair of points in each subset. It then finds the closest pair of points such that one point lies in the left subset and the other lies in the right subset, and the distance between them is less than $d$.

## Proof of Correctness

The correctness of the closest pair of points algorithm can be proved using the following properties:

1. If the closest pair of points lies entirely in one of the subsets, the algorithm will correctly find the closest pair of points in that subset.
2. If the closest pair of points lies in both subsets, the algorithm will correctly find the closest pair of points such that one point lies in the left subset and the other lies in the right subset, and the distance between them is less than $d$.
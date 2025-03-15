---
title: Activity Selection
description: Activity Selection is a combinatorial optimization problem concerning the selection of non-conflicting activities to perform within a given time frame, given a set of activities each marked by a start time and finish time.
date: 2022-03-16
draft: false
slug: /pensieve/algorithms/activity-selection
tags:
  - DSA
  - Greedy
---
## Problem Statement

Assume there exist $n$ activities with each of them being represented by a start time $s_{i}$ and finish time $f_{i}$. Two activities $i$ and $j$ are said to be non-conflicting if $s_{i} \geq f_{j}$ or $s_{j} \geq f_{i}$. The activity selection problem consists in finding the maximal solution set $(S)$ of non-conflicting activities, or more precisely there must exist no solution set $S'$ such that $|S'| \gt |S|$ in the case that multiple maximal solutions have equal sizes.

## Pseudocode

```pseudocode
Greedy-Iterative-Activity-Selector(A, s, f): 

  Sort A by finish times stored in f
  S = {A[1]} 
  k = 1
  n = A.length
  
  for i = 2 to n:
      if s[i] ≥ f[k]: 
          S = S U {A[i]}
          k = i
  
  return S
```

## Explanation

1. A is an array containing the activities. s and f are arrays containing the start times and end times of the activities in A respectively. Note that these arrays are indexed starting from 1 up to the length of the corresponding array.
2. Sort A in increasing order of finish times. This operation can be done in O(n log n) time.
3. Creates a set S to store the selected activities, and initialises it with the activity A[1] that has the earliest finish time.
4. Creates a variable k that keeps track of the index of the last selected activity.
5. Start iterating from the second element of that array A up to its last element.
6. If the start time s[i] of the ith activity (A[i]) is greater or equal to the finish time f[k] of the last selected activity (A[k]), then A[i] is compatible to the selected activities in the set S, and thus it can be added to S.
7. The index of the last selected activity is updated to the just added activity A[i].

## Proof of Correctness

Let $S = \{1,2,\ldots,n\}$ be the set of activities ordered by finish time. Assume that $A \subseteq S$ is an optimal solution, also ordered by finish time; and that the index of the first activity in $A$ is $k \neq 1$, i.e., this optimal solution does not start with the greedy choice. We will show that $B = (A \setminus \{k\}) \cup \{1\}$, which begins with the greedy choice (activity 1), is another optimal solution. Since $f_1 \leq f_k$, and the activities in $A$ are disjoint by definition, the activities in $B$ are also disjoint. Since $B$ has the same number of activities as $A$, that is, $|A| = |B|$, $B$ is also optimal.

Once the greedy choice is made, the problem reduces to finding an optimal solution for the subproblem. If $A$ is an optimal solution to the original problem $S$ containing the greedy choice, then $A' = A \setminus \{1\}$ is an optimal solution to the activity-selection problem $S' = \{i \in S : s_i \geq f_1\}$.

Why? If this were not the case, pick a solution $B'$ to $S'$ with more activities than $A'$ containing the greedy choice for $S'$. Then, adding 1 to $B'$ would yield a feasible solution $B$ to $S$ with more activities than $A$, contradicting the optimality.

## Space and Time Complexity

The time complexity of the Greedy-Iterative-Activity-Selector algorithm is $O(n \log n)$, where $n$ is the number of activities. This is because the algorithm sorts the activities by their finish times, which takes $O(n \log n)$ time. The for loop iterates through the activities once, which takes $O(n)$ time. Thus, the total time complexity is $O(n \log n) + O(n) = O(n \log n)$.

The space complexity of the Greedy-Iterative-Activity-Selector algorithm is $O(n)$, where $n$ is the number of activities. This is because the algorithm uses a set $S$ to store the selected activities, which can contain at most $n$ activities. Thus, the space complexity is $O(n)$.
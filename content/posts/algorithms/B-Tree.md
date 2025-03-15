---
title: B Tree
description: A B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.
date: 2023-04-13
draft: false
slug: /pensieve/tree/b-tree
tags:
  - DSA
  - Trees
---

## Introduction

A B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. It is named after its inventors, Bayer and McCreight, and is a generalization of a binary search tree in which a node can have more than two children. B-trees are commonly used in databases and file systems due to their ability to handle large amounts of data efficiently.

## Properties

A B-tree has the following properties:

- All leaves are at the same level.
- A B-tree of order `m` satisfies the following properties:
  - Every node has at most `m` children.
  - Every node (except the root) has at least `m/2` children.
  - The root has at least two children if it is not a leaf node.
  - A non-leaf node with `k` children contains `k-1` keys.
  - All keys in a node are sorted in ascending order.
  - The keys in the `i`-th child are greater than the `i-1`-th key in the node and less than the `i`-th key in the node.

```pseudocode
class Node:
    keys
    children
    is_leaf

function search(root, key):
    if root is null:
        return false
    i = 0
    while i < root.keys.length and key > root.keys[i]:
        i = i + 1
    if i < root.keys.length and key == root.keys[i]:
        return true
    if root.is_leaf:
        return false
    return search(root.children[i], key)
```

## Operations

A B-tree supports the following operations:

### Insertion

The insertion operation in a B-tree involves finding the leaf node where the key should be inserted and then inserting the key into the node. If the node is full after the insertion, it is split into two nodes, and the median key is moved up to the parent node. This process is repeated recursively until the root node is reached. The time complexity of the insertion operation is O(log n), where `n` is the number of keys in the B-tree. The space complexity is O(1).

Below is the pseudocode for the insertion operation in a B-tree.

```pseudocode
function insert(root, key):
    if root is null:
        create a new node with the key
        return the new node
    if the root is a leaf node:
        insert the key into the node
        if the node is full:
            split the node
    else:
        find the child of the root to which the key belongs
        root.child = insert(root.child, key)
        if the child is full:
            split the child
    return root
```

### Deletion

The deletion operation in a B-tree involves finding the node containing the key to be deleted and then deleting the key from the node. If the node becomes less than half full after the deletion, it is rebalanced by borrowing or merging with a sibling node. This process is repeated recursively until the root node is reached. The time complexity of the deletion operation is O(log n), where `n` is the number of keys in the B-tree. The space complexity is O(1).

Below is the pseudocode for the deletion operation in a B-tree.

```pseudocode
function delete(root, key):
    if root is null:
        return
    find the child of the root to which the key belongs
    if the child is a leaf node:
        delete the key from the node
        if the node is less than half full:
            borrow or merge with a sibling
    else:
        if the child has only `m/2` keys:
            adjust the child
        delete(root.child, key)
```

## Applications

B-trees are commonly used in databases and file systems due to their ability to handle large amounts of data efficiently. They are used to store and index data in a way that allows for fast searches, sequential access, insertions, and deletions. B-trees are also used in other applications such as routers, filesystems, and databases.
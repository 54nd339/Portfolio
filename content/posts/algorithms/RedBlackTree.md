---
title: Red-Black Tree
description: A red-black tree is a self-balancing binary search tree where each node has an extra bit for color, either red or black. 
date: 2023-01-19
draft: false
slug: /pensieve/red-black-tree
tags:
  - DSA
  - Trees
---

## Introduction

A red-black tree is a self-balancing binary search tree where each node has an extra bit for color, either red or black. It is named after its inventors, Rudolf Bayer and Edward McCreight. Red-black trees are used in many libraries and applications due to their ability to handle large amounts of data efficiently. They are also used to implement other data structures such as sets and maps. It is used in the C++ STL (Standard Template Library) to implement the `std::set` and `std::map` classes, the Linux kernel for process scheduling, the Java `TreeMap` class, and the Apache Cassandra database for storing data.

## Properties

A red-black tree has the following properties:

- Every node is either red or black.
- The root is black.
- Every leaf (NIL) is black.
- If a node is red, then both its children are black.
- Every simple path from a node to a descendant leaf contains the same number of black nodes.

```pseudocode
class Node:
    key
    left
    right
    parent
    color

function left_rotate(T, x):
    y = x.right
    x.right = y.left
    if y.left != T.nil:
        y.left.parent = x
    y.parent = x.parent
    if x.parent == T.nil:
        T.root = y
    else if x == x.parent.left:
        x.parent.left = y
    else:
        x.parent.right = y
    y.left = x
    x.parent = y

function right_rotate(T, y):
    x = y.left
    y.left = x.right
    if x.right != T.nil:
        x.right.parent = y
    x.parent = y.parent
    if y.parent == T.nil:
        T.root = x
    else if y == y.parent.left:
        y.parent.left = x
    else:
        y.parent.right = x
    x.right = y
    y.parent = x
```

## Operations

A red-black tree supports the following operations:

### Insertion

The insertion operation in a red-black tree involves finding the leaf node where the key should be inserted and then inserting the key into the node. If the node is red after the insertion, the tree is rebalanced using the following cases:

1. The uncle of the node is red.
2. The uncle of the node is black and the node is a right child.
3. The uncle of the node is black and the node is a left child.

The time complexity of the insertion operation is O(log n), where `n` is the number of nodes in the tree. The space complexity is O(1).

Below is the pseudocode for the insertion operation in a red-black tree.

```pseudocode
function insert(T, z):
    y = T.nil
    x = T.root
    while x != T.nil:
        y = x
        if z.key < x.key:
            x = x.left
        else:
            x = x.right
    z.parent = y
    if y == T.nil:
        T.root = z
    else if z.key < y.key:
        y.left = z
    else:
        y.right = z
    z.left = T.nil
    z.right = T.nil
    z.color = RED
    insert_fixup(T, z)

function insert_fixup(T, z):
    while z.parent.color == RED:
        if z.parent == z.parent.parent.left:
            y = z.parent.parent.right
            if y.color == RED:
                z.parent.color = BLACK
                y.color = BLACK
                z.parent.parent.color = RED
                z = z.parent.parent
            else:
                if z == z.parent.right:
                    z = z.parent
                    left_rotate(T, z)
                z.parent.color = BLACK
                z.parent.parent.color = RED
                right_rotate(T, z.parent.parent)
        else:
            y = z.parent.parent.left
            if y.color == RED:
                z.parent.color = BLACK
                y.color = BLACK
                z.parent.parent.color = RED
                z = z.parent.parent
            else:
                if z == z.parent.left:
                    z = z.parent
                    right_rotate(T, z)
                z.parent.color = BLACK
                z.parent.parent.color = RED
                left_rotate(T, z.parent.parent)
    T.root.color = BLACK
```

### Deletion

The deletion operation in a red-black tree involves finding the node containing the key to be deleted and then deleting the key from the node. If the node becomes less than half full after the deletion, it is rebalanced using the following cases:

1. The sibling of the node is red.
2. The sibling of the node is black and both its children are black.
3. The sibling of the node is black and its left child is red and its right child is black.
4. The sibling of the node is black and its right child is red.

The time complexity of the deletion operation is O(log n), where `n` is the number of nodes in the tree. The space complexity is O(1).

Below is the pseudocode for the deletion operation in a red-black tree.

```pseudocode
function delete(T, z):
    y = z
    y_original_color = y.color
    if z.left == T.nil:
        x = z.right
        transplant(T, z, z.right)
    else if z.right == T.nil:
        x = z.left
        transplant(T, z, z.left)
    else:
        y = get_min_value_node(z.right)
        y_original_color = y.color
        x = y.right
        if y.parent == z:
            x.parent = y
        else:
            transplant(T, y, y.right)
            y.right = z.right
            y.right.parent = y
        transplant(T, z, y)
        y.left = z.left
        y.left.parent = y
        y.color = z.color
    if y_original_color == BLACK:
        delete_fixup(T, x)

function delete_fixup(T, x):
    while x != T.root and x.color == BLACK:
        if x == x.parent.left:
            w = x.parent.right
            if w.color == RED:
                w.color = BLACK
                x.parent.color = RED
                left_rotate(T, x.parent)
                w = x.parent.right
            if w.left.color == BLACK and w.right.color == BLACK:
                w.color = RED
                x = x.parent
            else:
                if w.right.color == BLACK:
                    w.left.color = BLACK
                    w.color = RED
                    right_rotate(T, w)
                    w = x.parent.right
                w.color = x.parent.color
                x.parent.color = BLACK
                w.right.color = BLACK
                left_rotate(T, x.parent)
                x = T.root
        else:
            w = x.parent.left
            if w.color == RED:
                w.color = BLACK
                x.parent.color = RED
                right_rotate(T, x.parent)
                w = x.parent.left
            if w.right.color == BLACK and w.left.color == BLACK:
                w.color = RED
                x = x.parent
            else:
                if w.left.color == BLACK:
                    w.right.color = BLACK
                    w.color = RED
                    left_rotate(T, w)
                    w = x.parent.left
                w.color = x.parent.color
                x.parent.color = BLACK
                w.left.color = BLACK
                right_rotate(T, x.parent)
                x = T.root
    x.color = BLACK
```
---
title: AVL Tree
description: An AVL tree is a self-balancing binary search tree where the difference between the heights of the left and right subtrees of any node is at most 1.
date: 2023-04-13
draft: false
slug: /pensieve/tree/avl-tree
tags:
  - DSA
  - Trees
---
## Introduction

An AVL tree is a self-balancing binary search tree where the difference between the heights of the left and right subtrees of any node is at most 1. It is named after its inventors, Adelson-Velsky and Landis. AVL trees are the first data structure to be described as a self-balancing binary search tree. They are also one of the most commonly used self-balancing binary search trees.

## Properties

An AVL tree has the following properties:

- The height of an AVL tree is always O(log n), where n is the number of nodes in the tree.
- The heights of the left and right subtrees of any node differ by at most 1.
- The left and right subtrees of any node are also AVL trees.

```pseudocode
class Node:
    key
    left
    right
    height

function height(node):
    if node is null:
        return 0
    return node.height

function get_balance(node):
    if node is null:
        return 0
    return height(node.left) - height(node.right)

function right_rotate(y):
    x = y.left
    T2 = x.right
    x.right = y
    y.left = T2
    y.height = 1 + max(height(y.left), height(y.right))
    x.height = 1 + max(height(x.left), height(x.right))
    return x

function left_rotate(x):
    y = x.right
    T2 = y.left
    y.left = x
    x.right = T2
    x.height = 1 + max(height(x.left), height(x.right))
    y.height = 1 + max(height(y.left), height(y.right))
    return y

function get_min_value_node(node):
    current = node
    while current.left is not null:
        current = current.left
    return current
```

## Operations

The following operations can be performed on an AVL tree:

### Insertion

Insert a new node with a given key into the AVL tree while maintaining the AVL property. The insertion operation is similar to the insertion operation in a binary search tree, but we also need to update the height and balance factor of the nodes and perform rotations if necessary to maintain the AVL property. The insertion operation has a time complexity of O(log n), where n is the number of nodes in the tree. The space complexity is O(log n) due to the recursive nature of the operation. The pseudocode for the insertion operation is as follows:

```pseudocode
function insert(root, key):
    if root is null:
        return Node(key)
    if key < root.key:
        root.left = insert(root.left, key)
    else if key > root.key:
        root.right = insert(root.right, key)
    else:
        return root
  
    root.height = 1 + max(height(root.left), height(root.right))
    balance = get_balance(root)
  
    if balance > 1 and key < root.left.key:
        return right_rotate(root)
    if balance < -1 and key > root.right.key:
        return left_rotate(root)
    if balance > 1 and key > root.left.key:
        root.left = left_rotate(root.left)
        return right_rotate(root)
    if balance < -1 and key < root.right.key:
        root.right = right_rotate(root.right)
        return left_rotate(root)
    return root
```

### Deletion

Delete a node with a given key from the AVL tree while maintaining the AVL property. The deletion operation is similar to the deletion operation in a binary search tree, but we also need to update the height and balance factor of the nodes and perform rotations if necessary to maintain the AVL property. The deletion operation has a time complexity of O(log n), where n is the number of nodes in the tree. The space complexity is O(log n) due to the recursive nature of the operation. The pseudocode for the deletion operation is as follows:

```pseudocode
function delete(root, key):
    if root is null:
        return root
    if key < root.key:
        root.left = delete(root.left, key)
    else if key > root.key:
        root.right = delete(root.right, key)
    else:
        if root.left is null or root.right is null:
            temp = root.left if root.left is not null else root.right
            if temp is null:
                temp = root
                root = null
            else:
                root = temp
        else:
            temp = get_min_value_node(root.right)
            root.key = temp.key
            root.right = delete(root.right, temp.key)
    if root is null:
        return root
  
    root.height = 1 + max(height(root.left), height(root.right))
    balance = get_balance(root)
  
    if balance > 1 and get_balance(root.left) >= 0:
        return right_rotate(root)
    if balance < -1 and get_balance(root.right) <= 0:
        return left_rotate(root)
    if balance > 1 and get_balance(root.left) < 0:
        root.left = left_rotate(root.left)
        return right_rotate(root)
    if balance < -1 and get_balance(root.right) > 0:
        root.right = right_rotate(root.right)
        return left_rotate(root)
    return root
```

### Search

Search for a node with a given key in the AVL tree. The search operation has a time complexity of O(log n), where n is the number of nodes in the tree. The space complexity is O(log n) due to the recursive nature of the operation. The pseudocode for the search operation is as follows:

```pseudocode
function search(root, key):
    if root is null or root.key == key:
        return root
    if key < root.key:
        return search(root.left, key)
    return search(root.right, key)
```

## Applications

AVL trees are used in various applications where efficient searching, insertion, and deletion operations are required. Some of the common applications of AVL trees include:

- Database indexing: AVL trees are used to index data in databases to speed up search operations.
- Compiler implementations: AVL trees are used in compiler implementations to store symbol tables efficiently.
- File systems: AVL trees are used in file systems to maintain directory structures and file metadata.
- Network routers: AVL trees are used in network routers to store routing tables for efficient packet forwarding.

AVL trees are also used in various other applications where efficient search, insertion, and deletion operations are required.

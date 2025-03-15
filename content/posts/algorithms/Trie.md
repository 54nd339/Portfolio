---
title: Trie
description: A trie is a tree data structure that is used to store a dynamic set of strings. It is used to perform efficient string operations such as prefix search, string search, and string insertion.
date: 2023-01-19
draft: false
slug: /pensieve/tree/trie
tags:
  - DSA
  - Trees
---

## Introduction

A **Trie** is a tree data structure that is used to store a dynamic set of strings. It is used to perform efficient string operations such as prefix search, string search, and string insertion. A trie is also known as a digital tree, radix tree, or prefix tree. It is a type of search tree that is used to store a set of strings. A trie is a tree data structure that is used to store a dynamic set of strings. It is used to perform efficient string operations such as prefix search, string search, and string insertion. A trie is also known as a digital tree, radix tree, or prefix tree. It is a type of search tree that is used to store a set of strings. A trie is a tree data structure that is used to store a dynamic set of strings. It is used to perform efficient string operations such as prefix search, string search, and string insertion. A trie is also known as a digital tree, radix tree, or prefix tree. It is a type of search tree that is used to store a set of strings.

## Properties

A trie has the following properties:

- It is a tree data structure that is used to store a dynamic set of strings.
- It is used to perform efficient string operations such as prefix search, string search, and string insertion.
- It is also known as a digital tree, radix tree, or prefix tree.
- It is a type of search tree that is used to store a set of strings.

## Implementation

A trie can be implemented using an array or a tree data structure. The array-based implementation is more efficient and is widely used. The tree-based implementation is more intuitive and is easier to understand.

### Array-based Implementation

In the array-based implementation, the trie is represented using an array. The trie is a tree data structure that is used to store a dynamic set of strings. It is used to perform efficient string operations such as prefix search, string search, and string insertion. The trie is also known as a digital tree, radix tree, or prefix tree. It is a type of search tree that is used to store a set of strings.

The array-based implementation of the trie is more efficient and is widely used. The trie is represented using an array, and the nodes of the trie are stored in the array. Each node in the trie represents a character, and the children of a node are stored in an array. The root of the trie is at index `0`, and the children of a node at index `i` are stored in the array from index `i * 26 + 1` to index `i * 26 + 26`. The children of a node are stored in the array from index `i * 26 + 1` to index `i * 26 + 26`, where `i` is the index of the node in the trie.

Below is the pseudocode for the array-based implementation of the trie.

```pseudocode
class Trie:
    root
    size

    class Node:
        children
        isEndOfWord

    constructor():
        root = new Node()
        size = 0

    insert(word):
        node = root
        for char in word:
            index = char - 'a'
            if node.children[index] is null:
                node.children[index] = new Node()
            node = node.children[index]
        node.isEndOfWord = true
        size++

    search(word):
        node = root
        for char in word:
            index = char - 'a'
            if node.children[index] is null:
                return false
            node = node.children[index]
        return node.isEndOfWord

    startsWith(prefix):
        node = root
        for char in prefix:
            index = char - 'a'
            if node.children[index] is null:
                return false
            node = node.children[index]
        return true
```

### Tree-based Implementation

In the tree-based implementation, the trie is represented using a tree data structure. The trie is a tree data structure that is used to store a dynamic set of strings. It is used to perform efficient string operations such as prefix search, string search, and string insertion. The trie is also known as a digital tree, radix tree, or prefix tree. It is a type of search tree that is used to store a set of strings.

The tree-based implementation of the trie is more intuitive and is easier to understand. The trie is represented using a tree data structure, and the nodes of the trie are stored in the tree. Each node in the trie represents a character, and the children of a node are stored in a list. The root of the trie is at the top of the tree, and the children of a node are stored in a list. The children of a node are stored in a list, where each element in the list represents a child of the node.

Below is the pseudocode for the tree-based implementation of the trie.

```pseudocode
class Trie:
    root
    size

    class Node:
        children
        isEndOfWord

    constructor():
        root = new Node()
        size = 0

    insert(word):
        node = root
        for char in word:
            if char not in node.children:
                node.children[char] = new Node()
            node = node.children[char]
        node.isEndOfWord = true
        size++

    search(word):
        node = root
        for char in word:
            if char not in node.children:
                return false
            node = node.children[char]
        return node.isEndOfWord

    startsWith(prefix):
        node = root
        for char in prefix:
            if char not in node.children:
                return false
            node = node.children[char]
        return true
```

## Operations

A trie supports the following operations:

### Insertion

The insertion operation in a trie involves inserting a word into the trie. The word is inserted into the trie by traversing the trie from the root to the leaf node. If the node for a character in the word does not exist, a new node is created and added to the trie. If the node for a character in the word exists, the traversal continues to the next node. The time complexity of the insertion operation is O(m), where m is the length of the word. The space complexity is O(m).

Below is the pseudocode for the insertion operation in a trie.

```pseudocode
insert(word):
    node = root
    for char in word:
        if char not in node.children:
            node.children[char] = new Node()
        node = node.children[char]
    node.isEndOfWord = true
```

### Search

The search operation in a trie involves searching for a word in the trie. The word is searched for in the trie by traversing the trie from the root to the leaf node. If the node for a character in the word does not exist, the word is not in the trie. If the node for a character in the word exists, the traversal continues to the next node. The time complexity of the search operation is O(m), where m is the length of the word. The space complexity is O(1).

Below is the pseudocode for the search operation in a trie.

```pseudocode
search(word):
    node = root
    for char in word:
        if char not in node.children:
            return false
        node = node.children[char]
    return node.isEndOfWord
```

### Prefix Search

The prefix search operation in a trie involves searching for words in the trie that have a given prefix. The words with the given prefix are searched for in the trie by traversing the trie from the root to the leaf node. If the node for a character in the prefix does not exist, there are no words with the given prefix in the trie. If the node for a character in the prefix exists, the traversal continues to the next node. The time complexity of the prefix search operation is O(m), where m is the length of the prefix. The space complexity is O(1).

Below is the pseudocode for the prefix search operation in a trie.

```pseudocode
startsWith(prefix):
    node = root
    for char in prefix:
        if char not in node.children:
            return false
        node = node.children[char]
    return true
```

## Applications

A trie is used in the following applications:

- Autocomplete
- Spell checking
- IP routing
- Text compression
- Prefix matching
- Dictionary
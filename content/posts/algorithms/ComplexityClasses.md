---
title: Complexity Classes
description: Complexity Classes are a set of classes that categorize problems based on their computational complexity.
date: 2023-01-19
draft: false
slug: /pensieve/complexity-classes
tags:
  - DSA
  - Cheatsheet
---

## Introduction

Complexity Classes are a set of classes that categorize problems based on their computational complexity. The main goal of complexity classes is to classify problems based on the amount of computational resources required to solve them. Complexity classes provide a framework for understanding the inherent difficulty of problems and the relationship between different types of problems.

![Complexity Classes](https://media.geeksforgeeks.org/wp-content/uploads/20230828103956/complexity-classes.png)

## Types of Complexity Classes

### P

The class P contains all decision problems that can be solved in polynomial time by a deterministic Turing machine. A decision problem is a problem with a yes/no answer, and a deterministic Turing machine is a theoretical model of computation that can simulate any algorithm. The class P is the most important complexity class and contains many practical problems that can be solved efficiently.

### NP

The class NP contains all decision problems for which a given solution can be verified in polynomial time by a deterministic Turing machine. A decision problem is in NP if there is a polynomial-time algorithm to verify the correctness of a given solution. The class NP is the most famous complexity class and contains many important problems in computer science and mathematics.

### NP-Complete

A decision problem is NP-Complete if it is in NP and every problem in NP can be reduced to it in polynomial time. NP-Complete problems are the hardest problems in NP and are believed to be inherently difficult to solve. The class NP-Complete contains many important problems in computer science and mathematics, and the study of NP-Complete problems has led to many breakthroughs in theoretical computer science.

### NP-Hard

A decision problem is NP-Hard if every problem in NP can be reduced to it in polynomial time. NP-Hard problems are at least as hard as the hardest problems in NP and are believed to be inherently difficult to solve. The class NP-Hard contains many important problems in computer science and mathematics, and the study of NP-Hard problems has led to many breakthroughs in theoretical computer science.

## Complexity Relationships

### P vs NP

The most famous open problem in computer science is whether P equals NP. This problem asks whether every problem that can be verified in polynomial time can also be solved in polynomial time. If P equals NP, then every problem in NP can be solved efficiently, and many important problems in computer science and mathematics can be solved efficiently. If P does not equal NP, then there are problems in NP that are inherently difficult to solve, and many important problems in computer science and mathematics are inherently difficult to solve.

### NP-Complete vs NP-Hard

The relationship between NP-Complete and NP-Hard problems is that every NP-Complete problem is NP-Hard, but not every NP-Hard problem is NP-Complete. This means that NP-Complete problems are the hardest problems in NP, and every problem in NP can be reduced to an NP-Complete problem in polynomial time. NP-Hard problems are at least as hard as the hardest problems in NP, and every problem in NP can be reduced to an NP-Hard problem in polynomial time.
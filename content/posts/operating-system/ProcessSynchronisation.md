---
title: Process Synchronisation
description: Process Synchronisation is the process of coordinating the execution of processes to ensure that they do not interfere with each other and that they can communicate and share resources effectively.
date: 2023-01-19
draft: false
slug: /pensieve/operating-system/process-synchronisation
tags:
  - OS
  - CS Basics
---

## Introduction

Process Synchronisation is the process of coordinating the execution of processes to ensure that they do not interfere with each other and that they can communicate and share resources effectively. It is an integral part of any operating system with the primary goal of providing a way to manage the execution of processes and ensure that they can work together to achieve a common goal. It is responsible for managing the interactions between processes, handling the communication and sharing of resources, and providing a way to control the execution of processes.

## Key Concepts

### Race Condition

Race Condition is a situation where several processes try to access and modify shared resources concurrently, leading to unpredictable and inconsistent behaviour of the system. It occurs when the outcome of the execution depends on the relative timing of the processes and is a common problem in concurrent programming.

### Critical Section

A critical section is a section of code in a program that accesses shared resources and must be executed by only one process at a time. It is a fundamental concept in process synchronisation and is used to prevent processes from interfering with each other when accessing shared resources.

## Critical Section Problem

The Critical Section Problem is a classic problem in process synchronisation that involves finding a way to ensure that processes can access shared resources without interfering with each other. It is a fundamental problem in concurrent programming and is used to illustrate the challenges of coordinating the execution of processes.

The Critical Section Problem has the following requirements:

- **Mutual Exclusion**: Only one process can execute the critical section at a time.
- **Progress**: If no process is executing the critical section and some processes want to enter the critical section, then only those processes that are not executing the remainder section should participate in the decision of which will enter the critical section next, and this selection cannot be postponed indefinitely.
- **Bounded Waiting**: There exists a bound, or limit, on the number of times that other processes are allowed to enter their critical sections after a process has made a request to enter its critical section and before that request is granted.

## Synchronization Mechanisms

Synchronization Mechanisms are used to implement process synchronisation and ensure that processes can communicate and share resources effectively.

### Locks

Locks are synchronization mechanisms used to implement mutual exclusion and ensure that only one process can execute a critical section at a time. They are used to protect shared resources from concurrent access and are implemented using atomic operations such as test-and-set and compare-and-swap.

### Semaphores

Semaphores are synchronization mechanisms used to implement process synchronisation and ensure that processes can communicate and share resources effectively. They are used to signal the occurrence of an event and are implemented using a counter and two atomic operations: wait and signal.

### Monitors

Monitors are synchronization mechanisms used to implement process synchronisation and ensure that processes can communicate and share resources effectively. They are used to encapsulate shared resources and provide a way to control access to the resources using condition variables and mutual exclusion.

## Deadlock

Deadlock is a situation where two or more processes are unable to proceed because each is waiting for the other to release a resource. It is a common problem in concurrent programming and is caused by a circular wait condition, where each process is waiting for a resource that is held by another process in the cycle.

Deadlock can be prevented using the following methods:

- **Mutual Exclusion**: Ensure that only one process can access a resource at a time.
- **Hold and Wait**: Ensure that a process must request all the resources it needs at once and cannot hold any resources while waiting for others.
- **No Preemption**: Ensure that a process cannot be forced to release a resource that it is holding.
- **Circular Wait**: Ensure that the processes request resources in a specific order to prevent circular wait conditions.

## Conclusion

Process Synchronisation is an essential part of any operating system and is used to coordinate the execution of processes to ensure that they can communicate and share resources effectively. It is responsible for managing the interactions between processes, handling the communication and sharing of resources, and providing a way to control the execution of processes. It is a fundamental concept in concurrent programming and is used to illustrate the challenges of coordinating the execution of processes.
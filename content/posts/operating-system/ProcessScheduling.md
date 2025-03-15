---
title: Process Scheduling
description: Process Scheduling is a key concept in Operating Systems which deals with the selection of processes from the ready queue and allocation of the CPU to them.
date: 2023-01-19
draft: false
slug: /pensieve/operating-system/process-scheduling
tags:
  - OS
  - CS Basics
---

## Introduction

Process Scheduling is a key concept in Operating Systems which deals with the selection of processes from the ready queue and allocation of the CPU to them. The main goal of process scheduling is to optimize the performance of the system by minimizing the response time, turnaround time, and waiting time of processes. The process scheduling algorithm is responsible for the efficient utilization of the CPU and the fair allocation of resources to processes.

## Types of Scheduling

### Preemptive Scheduling

In preemptive scheduling, the operating system can interrupt a running process and allocate the CPU to another process. The preemptive scheduling algorithm is used to handle time-sharing systems where multiple processes are running concurrently. The main advantage of preemptive scheduling is that it provides better response time and throughput. However, it requires synchronization mechanisms to handle the concurrent access to shared resources.

### Non-Preemptive Scheduling

In non-preemptive scheduling, the operating system cannot interrupt a running process until it completes its execution. The non-preemptive scheduling algorithm is used in real-time systems where the priority of processes is fixed and the system needs to guarantee the completion of critical tasks within a specified time frame. The main advantage of non-preemptive scheduling is that it provides better predictability and determinism. However, it may lead to poor response time and throughput.

## Scheduling Criteria

1. **CPU Utilization**: The percentage of time the CPU is busy executing processes.
2. **Throughput**: The number of processes completed per unit time.
3. **Turnaround Time**: The total time taken by a process to complete its execution.
4. **Waiting Time**: The total time a process spends in the ready queue waiting for the CPU.
5. **Response Time**: The total time taken by a process to get the first response from the system.

## Scheduling Algorithms

### First-Come, First-Served (FCFS)

The First-Come, First-Served (FCFS) scheduling algorithm is the simplest form of process scheduling. In FCFS scheduling, the processes are executed in the order they arrive in the ready queue. The main advantage of FCFS scheduling is that it is easy to implement and provides fair allocation of the CPU. However, it may lead to poor response time and waiting time for processes.

[**Algorithm:**](https://github.com/54nd339/Labs/blob/master/OS/lab5-7_%20CPU_Scheduling/FCFS.c)
1. Select the process at the front of the ready queue.
2. Allocate the CPU to the selected process.
3. Execute the process until it completes its execution.
4. Remove the process from the ready queue.

### Shortest Job First (SJF)

The Shortest Job First (SJF) scheduling algorithm selects the process with the shortest burst time from the ready queue. The main advantage of SJF scheduling is that it minimizes the average waiting time and turnaround time of processes. However, it may lead to starvation of long processes if there are always short processes in the ready queue.

[**Algorithm:**](https://github.com/54nd339/Labs/blob/master/OS/lab5-7_%20CPU_Scheduling/SJF.c)
1. Select the process with the shortest burst time from the ready queue.
2. Allocate the CPU to the selected process.
3. Execute the process until it completes its execution.
4. Remove the process from the ready queue.

### Shortest Remaining Time First (SRTF)

The Shortest Remaining Time First (SRTF) scheduling algorithm is a preemptive version of the SJF scheduling algorithm. In SRTF scheduling, the operating system can interrupt a running process and allocate the CPU to another process with a shorter burst time. The main advantage of SRTF scheduling is that it provides better response time and throughput. However, it requires synchronization mechanisms to handle the concurrent access to shared resources.

[**Algorithm:**](https://github.com/54nd339/Labs/blob/master/OS/lab5-7_%20CPU_Scheduling/SRTF.c)
1. Select the process with the shortest remaining burst time from the ready queue.
2. Allocate the CPU to the selected process.
3. Execute the process for a fixed time slice.
4. If a new process with a shorter remaining burst time arrives in the ready queue, preempt the running process and allocate the CPU to the new process.
5. If the running process completes its execution, remove it from the ready queue.

### Round Robin (RR)

The Round Robin (RR) scheduling algorithm allocates a fixed time slice to each process in the ready queue. If a process does not complete its execution within the time slice, it is preempted and added to the end of the ready queue. The main advantage of RR scheduling is that it provides fair allocation of the CPU and prevents starvation of long processes. However, it may lead to poor response time and throughput if the time slice is too large.

[**Algorithm:**](https://github.com/54nd339/Labs/blob/master/OS/lab5-7_%20CPU_Scheduling/RR.c)
1. Select the process at the front of the ready queue.
2. Allocate the CPU to the selected process for a fixed time slice.
3. Execute the process for the fixed time slice.
4. If the process completes its execution, remove it from the ready queue.
5. If the process does not complete its execution, add it to the end of the ready queue.

### Priority Scheduling

The Priority Scheduling algorithm selects the process with the highest priority from the ready queue. The main advantage of Priority Scheduling is that it allows the system to allocate the CPU to critical processes first. However, it may lead to starvation of low-priority processes if there are always high-priority processes in the ready queue.

[**Algorithm:**](https://github.com/54nd339/Labs/blob/master/OS/lab5-7_%20CPU_Scheduling/prioritynp.c)
1. Select the process with the highest priority from the ready queue.
2. Allocate the CPU to the selected process.
3. Execute the process until it completes its execution.
4. Remove the process from the ready queue.

### Multilevel Queue Scheduling

The Multilevel Queue Scheduling algorithm divides the ready queue into multiple priority levels and allocates a separate queue to each priority level. The main advantage of Multilevel Queue Scheduling is that it allows the system to allocate the CPU to different types of processes based on their priority. However, it may lead to poor response time and throughput if the priority levels are not properly defined.

[**Algorithm:**](https://en.wikipedia.org/wiki/Multilevel_queue)
1. Divide the ready queue into multiple priority levels.
2. Allocate a separate queue to each priority level.
3. Select the process with the highest priority from the highest priority queue.
4. Allocate the CPU to the selected process.
5. Execute the process until it completes its execution.
6. Remove the process from the ready queue.

### Multilevel Feedback Queue Scheduling

The Multilevel Feedback Queue Scheduling algorithm is an extension of the Multilevel Queue Scheduling algorithm. In Multilevel Feedback Queue Scheduling, a process can move between different priority levels based on its behavior. The main advantage of Multilevel Feedback Queue Scheduling is that it provides better response time and throughput. However, it requires synchronization mechanisms to handle the concurrent access to shared resources.

[**Algorithm:**](https://en.wikipedia.org/wiki/Multilevel_feedback_queue)
1. Divide the ready queue into multiple priority levels.
2. Allocate a separate queue to each priority level.
3. Select the process with the highest priority from the highest priority queue.
4. Allocate the CPU to the selected process.
5. Execute the process for a fixed time slice.
6. If the process does not complete its execution, move it to the next lower priority queue.
7. If the process completes its execution, remove it from the ready queue.

## Analysis

Algorithm | Advantages | Disadvantages
--- | --- | ---
FCFS | Easy to implement, Fair allocation of CPU | Poor response time, Waiting time
SJF | Minimizes waiting time, Turnaround time | Starvation of long processes
SRTF | Better response time, Throughput | Requires synchronization
RR | Fair allocation of CPU, Prevents starvation | Poor response time, Throughput
Priority | Allocates CPU to critical processes | Starvation of low-priority processes
Multilevel Queue | Allocates CPU to different types of processes | Poor response time, Throughput
Multilevel Feedback Queue | Better response time, Throughput | Requires synchronization

## Formulas

1. **Turnaround Time (TAT)**: The total time taken by a process to complete its execution.
   - TAT = Completion Time - Arrival Time
2. **Waiting Time (WT)**: The total time a process spends in the ready queue waiting for the CPU.
    - WT = Turnaround Time - Burst Time
3. **Response Time (RT)**: The total time taken by a process to get the first response from the system.
    - RT = Start Time - Arrival Time

## Conclusion

Process Scheduling is a key concept in Operating Systems which deals with the selection of processes from the ready queue and allocation of the CPU to them. The process scheduling algorithm is responsible for the efficient utilization of the CPU and the fair allocation of resources to processes. The main goal of process scheduling is to optimize the performance of the system by minimizing the response time, turnaround time, and waiting time of processes. The choice of process scheduling algorithm depends on the specific requirements of the system and the nature of the processes.
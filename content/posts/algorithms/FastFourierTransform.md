---
title: Fast Fourier Transform
description: The Fast Fourier Transform (FFT) is an algorithm to compute the Discrete Fourier Transform (DFT) and its inverse. It is widely used in signal processing, data compression, and solving partial differential equations.
date: 2022-03-16
draft: false
slug: /pensieve/algo-fast-fourier-transform
tags:
  - DSA
  - Divide and Conquer
---
## Problem Statement

The Fast Fourier Transform (FFT) is an algorithm to compute the Discrete Fourier Transform (DFT) and its inverse. It is widely used in signal processing, data compression, and solving partial differential equations. The DFT of a sequence of $N$ complex numbers $x_0, x_1, \ldots, x_{N-1}$ is defined as:

$$
X_k = \sum_{n=0}^{N-1} x_n \cdot e^{-i 2 \pi k n / N}
$$

where $k = 0, 1, \ldots, N-1$. The inverse DFT is defined as:

$$
x_n = \frac{1}{N} \sum_{k=0}^{N-1} X_k \cdot e^{i 2 \pi k n / N}
$$

The naive algorithm to compute the DFT has a time complexity of $O(N^2)$. The FFT algorithm reduces the time complexity to $O(N \log N)$.

## Algorithm

The Fast Fourier Transform algorithm can be implemented using a divide and conquer approach. The algorithm is as follows:

1. If the length of the input sequence is 1, return the sequence.
2. Split the input sequence into two equal-sized subsequences, one containing the even-indexed elements and the other containing the odd-indexed elements.
3. Recursively compute the DFT of the even-indexed subsequence and the odd-indexed subsequence.
4. Combine the DFTs of the even-indexed and odd-indexed subsequences to compute the DFT of the original sequence.

The time complexity of the algorithm is $O(N \log N)$, where $N$ is the length of the input sequence.

## Pseudocode

```pseudocode
function fft(x)
    N = length(x)
    if N = 1
        return x
    else
        X_even = fft([x[0], x[2], ..., x[N-2]])
        X_odd = fft([x[1], x[3], ..., x[N-1]])
        X = new array of length N
        for k = 0 to N/2 - 1
            t = X_even[k]
            X[k] = t + exp(-i * 2 * pi * k / N) * X_odd[k]
            X[k + N/2] = t - exp(-i * 2 * pi * k / N) * X_odd[k]
        return X
```

## Explanation

The `fft` function takes an input sequence `x` and computes its DFT using the divide and conquer approach. If the length of the input sequence is 1, the function returns the sequence as is. Otherwise, it splits the input sequence into two equal-sized subsequences: one containing the even-indexed elements and the other containing the odd-indexed elements. It then recursively computes the DFT of the even-indexed and odd-indexed subsequences. Finally, it combines the DFTs of the even-indexed and odd-indexed subsequences to compute the DFT of the original sequence.

## Proof of Correctness

The correctness of the Fast Fourier Transform algorithm can be proved using mathematical induction and the properties of the Discrete Fourier Transform. The algorithm is based on the divide and conquer approach, and the correctness of the recursive steps can be proved using induction. The base case of the induction is the DFT of a single element sequence, which is trivially correct. The correctness of the combination step can be proved using the properties of the DFT and the properties of the complex exponential function.

## Complexity Analysis

The time complexity of the Fast Fourier Transform algorithm is $O(N \log N)$, where $N$ is the length of the input sequence. This is a significant improvement over the naive algorithm, which has a time complexity of $O(N^2)$. The space complexity of the algorithm is also $O(N \log N)$, due to the recursive nature of the algorithm and the need to store intermediate results.

## Applications

The Fast Fourier Transform has a wide range of applications in signal processing, data compression, and solving partial differential equations. Some of the specific applications include:

- Audio signal processing
- Image processing
- Video compression
- Solving partial differential equations
- Cryptography
- Radar signal processing
- Medical imaging
- Seismic data analysis
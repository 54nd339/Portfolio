---
title: Two Sum
description: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
date: 2022-03-16
draft: true
slug: /pensieve/TwoSum
tags:
  - Array
  - Hash Table
---

```c++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> m;
        for (int i = 0; i < nums.size(); i++) {
            if (m.find(target - nums[i]) != m.end()) {
                return {m[target - nums[i]], i};
            }
            m[nums[i]] = i;
        }
        return {};
    }
};
```

## Explanation

We use a hash table to store the numbers we have seen so far. For each number, we check if there is another number that, if added, would sum to the target. If there is, we have found a solution and return immediately. If not, the number is added to the hash table and we continue iterating until the end of the array.
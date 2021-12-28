# algorithm
记录算法做题

## 动态规划解题步骤

1. 确定 dp 数组及其下标的含义
2. 确定递推公式
3. dp 如何初始化
4. 确定遍历顺序
5. 举例推导 dp 数组

## 回溯算法步骤

```
//backtrack的公式：
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return
    
    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```

## 递归法

1. 确定递归函数的参数和返回值
2. 确定终止条件
3. 确定单层递归的逻辑

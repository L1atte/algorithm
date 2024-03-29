// max(x * y)
// for(0 ~ length) max = Math.max(max, Math.min(cur , arr[i]) * (i-cur) )

function maxArea(height: number[]): number {
	let left = 0;
	let right = height.length - 1;
	let maxArea = 0; // 最大容积
	while (left < right) {
		// 计算出 当前的容积  与最大容积比较，取出最大的
		const currentArea = (right - left) * Math.min(height[left], height[right]);
		maxArea = Math.max(maxArea, currentArea);
		//  left 向内移动
		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}
	return maxArea;
}

// max(x * (j - i))
// min(i, j) 移动

function maxArea1(height: number[]): number {
	let start: number = 0
	let end: number = height.length - 1
	let maxArea: number = 0

	while (start <= end) {
		const curArea = Math.min(height[start], height[end]) * (end - start)
		maxArea = Math.max(maxArea, curArea)

		height[start] > height[end] ? end-- : start++
	}
	return maxArea
};

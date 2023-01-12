// 递归遍历
// 越界判断，是否为1判断
// true：面积加1
// 四周都是 false，递归结束

function maxAreaOfIsland(grid: number[][]): number {
	function getArea(x: number, y: number): number {
		if (x < 0 || x >= grid.length) return 0
		else if (y < 0 || y >= grid[0].length) return 0
		else if (grid[x][y] === 0) return 0

		grid[x][y] = 0
		const top = getArea(x, y - 1)
		const bottom = getArea(x, y + 1)
		const left = getArea(x - 1, y)
		const right = getArea(x + 1, y)

		return 1 + top + bottom + left + right
	}

	let result: number = 0
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			result = Math.max(result, getArea(i, j))
		}
	}

	return result
}

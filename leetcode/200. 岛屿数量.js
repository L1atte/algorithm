// DFS
/**
 * 遍历二维数组，遇到 1 开启搜索模式，从当前节点向左/右/上/下搜索，每次分别移动一步，如果是 1 则替换为 0
 */
/**
 * DFS 为什么要沉岛，即将 grid[i][j] = 0
 *  1.遍历遇到 1 即遇到土地，土地肯定在一个岛上，计数 +1
 *  2.如果不把与他在同一个岛的土地变成水(0)，则DFS遍历到他们时，会重复计数
 */
const numIslands = (grid) => {
	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === "1") {
				count++;
				dfs(i, j, grid);
			}
		}
	}
	return count;
};
function dfs(i, j, grid) {
	if (
		i < 0 ||
		i >= grid.length ||
		j < 0 ||
		j >= grid[0].length ||
		grid[i][j] === "0"
	) {
		return;
	}

	grid[i][j] = "0";
	dfs(i, j + 1, grid);
	dfs(i, j - 1, grid);
	dfs(i + 1, j, grid);
	dfs(i - 1, j, grid);
}


// BFS(未研究)
/**
 * 遇到 1 就计数 +1
 * 维护一个队列，遇到 1 就让它的坐标入列
 * 节点出列，并考察四个方向，如果是 1，将它转为 0，并将节点入列
 * 如果越界了或遇到 0 ，则跳过不用入列
 * 出列...入列...直到没有可以入列的节点，则当前岛屿的所有 1 都转 0 了
 */
 const numIslands = (grid) => {
  let count = 0
  let queue = []
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++
        grid[i][j] = '0' // 做标记，避免重复遍历
        queue.push([i, j])
        turnZero(queue, grid)
      }
    }
  }
  return count
}
function turnZero(queue, grid) {
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  while (queue.length) {
    const cur = queue.shift()
    for (const dir of dirs) {
      const x = cur[0] + dir[0]
      const y = cur[1] + dir[1]
      if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== '1') {
        continue
      }
      grid[x][y] = '0'
      queue.push([x, y])
    }
  }
}

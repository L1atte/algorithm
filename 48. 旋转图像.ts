// 789
// 456
// 123
// martix[0][1]
// 先水平翻转，再根据左上右下的对角线翻转
function rotate(matrix: number[][]): void {
	const xLength: number = matrix[0].length
	const yLength: number = matrix.length

	for (let i = 0; i < Math.floor(yLength / 2); i++) {
		for (let j = 0; j < xLength; j++) {
			const temp: number = matrix[i][j]
			matrix[i][j] = matrix[yLength - i - 1][j]
			matrix[yLength - i - 1][j] = temp
		}
	}

	for (let i = 0; i < yLength; i++) {
		for (let j = i; j < xLength; j++) {
			const temp: number = matrix[i][j]
			matrix[i][j] = matrix[j][i]
			matrix[j][i] = temp
		}
	}
}

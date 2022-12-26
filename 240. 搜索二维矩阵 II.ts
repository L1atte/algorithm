function searchMatrix(matrix: number[][], target: number): boolean {
	let m: number = matrix[0].length,
		n: number = matrix.length,
		i: number = 0,
		j: number = m - 1

	while (i < n && j >= 0) {
		if (matrix[i][j] > target) j--
		else if (matrix[i][j] < target) i++
		else return true
	}

	return false
}
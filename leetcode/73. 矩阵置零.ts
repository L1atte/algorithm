/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
	const xLength: number = matrix[0].length;
	const yLength: number = matrix.length;
	const collections: number[][] = [];

	for (let i = 0; i < yLength; i++) {
		for (let j = 0; j < xLength; j++) {
			if (matrix[i][j] === 0) {
				collections.push([i, j]);
			}
		}
	}

	collections.forEach(i => {
		setItemZero(matrix, i[0], i[1]);
	});
}

function setItemZero(matrix: number[][], i: number, j: number) {
	const xLength: number = matrix[0].length;
	const yLength: number = matrix.length;

	for (let x = 0; x < xLength; x++) {
		matrix[i][x] = 0;
	}

	for (let y = 0; y < yLength; y++) {
		matrix[y][j] = 0;
	}
}

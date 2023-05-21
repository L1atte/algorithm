// a[2][0] a[1][1] a[0][2] a[i][j]
// 向上 i-- j++
// a[0][1] a[1][0]
// 向下 i++ j--

function findDiagonalOrder1(mat: number[][]): number[] {
	const xLen: number = mat[0].length;
	const yLen: number = mat.length;
	const res: number[] = [];

	for (let i = 0; i < xLen + yLen + 1; i++) {
		// 向下 i++ j--
		if (i % 2 === 1) {
			let x = i < xLen ? 0 : i - xLen + 1;
			let y = i < xLen ? i : xLen - 1;
			while (x < yLen && y >= 0) {
				res.push(mat[x][y]);
				x++;
				y--;
			}
		} else {
			// 向下 i-- j++
			let x = i < yLen ? i : yLen - 1;
			let y = i < yLen ? 0 : i - yLen + 1;
			while (x >= 0 && y < xLen) {
				res.push(mat[x][y]);
				x--;
				y++;
			}
		}
	}
	return res;
}

// 999 + 1
// ( 9 + 1 ) % 10 = 0
// carry = Math.floor(( 9 + 1 ) / 10)
// ...

function plusOne(digits: number[]): number[] {
	let carry: number = 1;
	let right: number = digits.length - 1;

	while (carry !== 0) {
		if (right !== -1) {
			const item = digits[right];
			digits[right] = (item + carry) % 10;
			carry = Math.floor((item + carry) / 10);
		} else if (right === -1) {
			digits.unshift(carry);
			carry = 0;
		}
		right--;
	}
	return digits;
}

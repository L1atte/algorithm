var addStrings = function (num1, num2) {
	let result = "", // 保存最后结果
		carry = false; // 保留进位结果

	// 将字符串转换为数组
	num1 = num1.split("");
	num2 = num2.split("");

	while (num1.length || num2.length || carry) {
    // 将最后的数字进行相加，使用 ~~ 的好处是，即使返回值为 undefined 也能转换为0
		carry += ~~num1.pop() + ~~num2.pop();

    // 取加法结果的个位存入最终结果
		result = (carry % 10) + result;

    // 判断是否需要进位，true 和 false 的值在加法中会被转换为 1 和 0
		carry = carry > 9;
	}
	return result;
};

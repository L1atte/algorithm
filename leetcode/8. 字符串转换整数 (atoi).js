// parseInt(string, radix)：解析一个字符串并返回指定基数的十进制整数， radix 是2-36之间的整数，表示被解析字符串的基数。
var myAtoi = function (s) {
	const number = parseInt(s, 10);

	if (isNaN(number)) {
		return 0;
	} else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
		return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
	} else {
		return number;
	}
};

var reverseWords = function (s) {
	const arr = s.split(" ");

	const newArr = [];
	arr.forEach((e) => {
		if (e !== " ") {
			newArr.unshift(e);
		}
	});
	return newArr.join(" ");
};

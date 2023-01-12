var compareVersion = function (version1, version2) {
	const v1 = version1.split(".")
	const v2 = version2.split(".")

	const length = v1.length > v2.length ? v1.length : v2.length
	for (let i = 0; i < length; i++) {
		if (~~v1[i] > ~~v2[i]) return 1
		else if (~~v1[i] < ~~v2[i]) return -1
	}
	return 0
}

String.prototype.trim = function () {
	return this.replace(/^\s+/, "").replace(/\s+$/, "");
};

let s = " dsadas ";
console.log(s);
s = s.trim();
console.log(s);

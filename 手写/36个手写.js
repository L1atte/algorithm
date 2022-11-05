/**
 * 数据类型判断
 */
function typeOf(obj) {
	let res = Object.prototype.toString.call(obj).split(" ")
	res = res.substring(0, res.length - 1).toLowerCase()

	return res
}

/**
 * 原型链继承
 */
function Animal() {
	this.colors = ["black", "white"]
}

Animal.prototype.getColor = function () {
	return this.colors
}

function Dog() {}
Dog.prototype = new Animal()

let dog1 = new Dog()
dog1.colors.push("brown")

let dog2 = new Dog()
console.log(dog2.colors) // ['black', 'white', 'brown']

/**
 * 借助构造函数实现继承
 */
function Animal(name) {
	this.name = name
	this.getName = function () {
		return this.name
	}
}

function Dog(name) {
	Animal.call(this, name)
}

let dog = new Dog("kitty")
console.log(dog.getName)

/**
 * 组合继承
 */
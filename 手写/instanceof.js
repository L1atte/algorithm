function myInstanceof(object, constructor) {
	let cb = constructor.prototype
	let proto = Object.getPrototypeOf(object)

	while (proto) {
		if (cb === proto) return true

		proto = Object.getPrototypeOf(proto)
	}

	return false
}

function Person() {}
const student = new Person()

console.log(myInstanceof(student, Person))
console.log(myInstanceof(student, Function))
console.log(myInstanceof(student, Object))

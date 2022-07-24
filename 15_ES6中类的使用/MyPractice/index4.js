/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-30 00:17:26
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-30 00:32:07
 * @LastEditContent: 
 */
/**
 * 使用ES6写一个类，其中包括类的访问器方法，静态方法
 */
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
		this._address = '深圳市'
	}
	get address() {
		return this._address
	}
	set address(value) {
		this._address = value
	}
	running() {
		console.log(this.name, 'running');
	}
	static randomPerson() {
		const nameArr = ['Lingard', 'DeBruyne', 'zzt']
		const index = Math.floor(Math.random() * nameArr.length)
		const name = nameArr[index]
		const age = Math.floor(Math.random() * 100)
		return new Person(name, age)
	}
}

/**
 * 对以上类实现继承，包括重写实例方法和静态方法，并复用父类方法逻辑，使用super关键字的2个用法
 */
class Student extends Person {
	constructor(name, age, sno) {
		super(name, age)
		this.sno = sno
	}
	running() {
		// super.randomPerson()
		super.running()
		console.log('student', this.name, 'running');
	}
	static randomPerson() {
		return super.randomPerson()
	}
}

new Student('zzt', 18, 666).running()
console.log(Student.randomPerson())
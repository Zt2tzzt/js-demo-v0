/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-18 17:26:32
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-18 17:37:03
 * @LastEditContent:
 */
/**
 * 使用ES6写一个类，其中包括类的访问器方法吗，静态方法
 */
const names = ['abc', 'cba', 'nba']
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
	static randomPerosn() {
		const index = Math.floor(Math.random() * names.length)
		const name = names[index]
		const age = Math.floor(Math.random() * 100)
		return new Person(name, age)
	}
	static staticMethod() {
		console.log('处理逻辑1');
		console.log('处理逻辑2');
		console.log('处理逻辑3');
	}
}

/**
 * 对以上类实现继承，包括重写实例方法和静态方法，并复用父类方法逻辑，使用super关键字的两个用法
 */
class Student extends Person {
	constructor(name, age, sno) {
		super(name, age)
		this.sno = sno
	}
	running() {
		super.running()
		console.log('student', this.name, 'running');
	}
	static staticMethod() {
		super.staticMethod()
		console.log('处理逻辑4');
		console.log('处理逻辑5');
		console.log('处理逻辑6');
	}
}

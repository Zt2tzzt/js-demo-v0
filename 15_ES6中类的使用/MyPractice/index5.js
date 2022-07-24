/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-13 15:32:37
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-13 15:46:31
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
		const names = ['abc', 'cba', 'nba']
		const index = Math.floor(Math.random() * names.length)
		const name = names[index]
		const age = Math.floor(Math.random() * 100)
		return new Person(name, age)
	}
}

console.log(Person.randomPerson());

/**
 * 对以上类实现继承，包括重写实例方法和静态方法并复用父类方法逻辑，使用super关键字的2个用法
 */
class Student extends Person {
	constructor(name, age, sno) {
		// 派生类构造函数中使用this或者返回默认值之前，必须先通过super调用父类构造函数
		super(name, age)
		this.sno = sno
	}
	running() {
		super.running()
		console.log('Student', this.name, 'running');
	}
	static randomPerson() {
		const p = super.randomPerson()
		p.sno = 666
		return p
	}
}

const stu = new Student('zzt', 18, 666)
stu.running()
const s = Student.randomPerson()
console.log(s);

/*
 * @Description: file contentb
 * @Author: ZeT1an
 * @Date: 2021-12-15 09:02:44
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-15 09:19:19
 * @LastEditContent: 
 */
const names = ['abc', 'cba', 'nba']
// 使用 ES6 写一个类，其中包括类的访问器方法，静态方法
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
		this._address = '深圳市'
	}
	// 类的访问器方法
	get address() {
		return this._address
	}
	set address(value) {
		this._address = value
	}
	eating() {
		console.log(this.name, 'eating')
	}
	static randomPerson() {
		const index = Math.floor(Math.random() * names.length)
		const name = names[index]
		const age = Math.floor(Math.random() * 100)
		return new Person(name, age)
	}
	static staticMethod() {
		console.log('代码逻辑1')
		console.log('代码逻辑2')
		console.log('代码逻辑3')
	}
}

// 对以上类实现继承，包括重写实例方法和静态方法并复用父类方法逻辑，使用 super 关键字的两个用法
class Student extends Person {
	constructor(name, age, sno) {
		super(name, age)
		this.sno = sno
	}
	// 重写实例方法，其中复用父类方法逻辑
	eating() {
		super.eating()
		console.log('student', this.name, 'eating')
	}
	// 重写静态方法，其中复用父类方法的逻辑
	/* static staticMethod() {
		super.staticMethod()
		console.log('代码逻辑4')
		console.log('代码逻辑5')
		console.log('代码逻辑6')
	} */
}
// new Student('zzt', 18, '666')
Student.staticMethod()


/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-14 22:11:14
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-15 10:24:31
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
	// 访问器方法
	get address() {
		console.log('address被访问')
		return this._address
	}
	set address(value) {
		console.log(`address被设值为${value}`)
		this._address = value
	}
	running() {
		console.log(this.name, 'running')
	}
	eating() {
		console.log(this.name, 'eating')
	}
	personMethod() {
		console.log('处理逻辑1')
		console.log('处理逻辑2')
		console.log('处理逻辑3')
	}
	// 类的静态方法
	static randomPerson() {
		const index = Math.floor(Math.random() * names.length)
		const name = names[index]
		const age = Math.floor(Math.random() * 100)
		return new Person(name, age)
	}
	static staticMethod() {
		console.log('PersonStaticMethod')
	}
}

// 对以上类实现继承，包括重写实例方法和静态方法并复用父类方法逻辑，使用 super 关键字的两个用法
class Student extends Person {
	constructor(name, age, sno) {
		// super 第一种用法，派生类构造函数中使用 this 或者返回默认对象之前，必须先通过 super 调用父类构造函数
		super(name, age)
		this.sno = sno
	}
	studying() {
		console.log(this.name, 'studying')
	}
	// 重写父类方法
	running() {
		console.log('student', this.name, 'running')
	}
	personMethod() {
		// super 第二种用法
		super.personMethod()
		console.log('处理逻辑4')
		console.log('处理逻辑5')
		console.log('处理逻辑6')
	}
	// 重写静态方法
	static staticMethod() {
		super.staticMethod()
		console.log('StudentStaticMethod')
	}
}


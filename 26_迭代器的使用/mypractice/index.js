/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-21 09:44:40
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-07-07 13:47:23
 * @LastEditContent: 
 */
/**
 * 写一个简单的可迭代对象
 */
const iterableObj = {
	names: ['abc', 'cba', 'nba'],
	[Symbol.iterator]() {
		let index = 0
		return {
			next: () => {
				return index < this.names.length ? {
					done: false, value: this.names[index++]
				} : {
					done: true
				}
			},
			return: () => {
				console.log('监听到迭代器终止运行');
				return { done: true }
			}
		}
	}
}

/**
 * 封装一个可迭代的类
 */
class Classroom {
	constructor(name, address, students) {
		this.name = name
		this.address = address
		this.students = students
	}
	entry(newStudent) {
		this.students.push(newStudent)
	}
	[Symbol.iterator]() {
		let index = 0
		return {
			next: () => {
				return index < this.students.length ? {
					done: false, value: this.students[index++]
				} : {
					done: true
				}
			},
			return: () => {
				console.log('监听到迭代器终止运行');
				return { done: true }
			}
		}
	}
}

/**
 * 有哪些对象是原生可迭代对象
 * 	Array, String, Arguments, Map, Set, NodeList
 */

/**
 * 可迭代对象的应用场景有哪些
 * 	1.JS语法：可用于for...of, yield*, 解构赋值，展开语法、
 * 	2.创建对象：new Map([iterable]), new Set([iterable])
 * 	3.某些特定的方法如：Promise.all(iterable), Promise.race(iterable), Array.from(iterable)
 */

/**
 * 写一个简单的生成器函数
 */
function* foo(param1) {
	const value1 = 100 * param1
	const param2 = yield value1

	const value2 = 200 * param2
	const param3 = yield value2

	const value3 = 300 * param3
	const param4 = yield value3

	yield param4 * 400

	return '123'
}

const generator = foo(1)
console.log(generator.next()); // { done: false, value: 100 }
console.log(generator.next(2)); // { done: false, value: 400 }
console.log(generator.next(3)); // { done: false, value: 900 }
console.log(generator.next(4)); // { done: false, value: 1600 }
console.log(generator.next(5)); // { done: true, value: '123' }
console.log(generator.next(6)); // { done: true, value: udefined }

/**
 * 生成器函数和普通函数的3点区别
 * 	1.生成器函数function后面加*号
 * 	2.生成器函数可以使用关键字yield控制函数的执行流程
 * 	3.生成器函数返回一个Generator（生成器）生成器既是一个可迭代对象，又是一个迭代器
 */

/**
 * 使用生成器函数封装一个可迭代的自定义类
 */
class Classroom2 {
	constructor(name, address, students) {
		this.name = name
		this.address = address
		this.students = students
	}
	entry(newStudent) {
		this.students.push(newStudent)
	}
	*[Symbol.iterator]() {
		yield* this.students
	}
}

/**
 * 封装一个自动执行Generator函数，用来实现async，await效果
 */
function requestData(url) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(url)
		}, 1000);
	})
}
function* getData() {
	const res1 = yield requestData('zzt')
	const res2 = yield requestData(res1 + 'aaa')
	const res3 = yield requestData(res2 + 'bbb')
	console.log(res3);
}
function execGeneratorAuto(execFn) {
	const generator = execFn()
	function exec(res) {
		const { done, value } = generator.next(res)
		if (done) return value
		value.then(res => {
			exec(res)
		})
	}
	exec()
}
execGeneratorAuto(getData)

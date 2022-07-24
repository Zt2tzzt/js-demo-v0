/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-06 10:31:32
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-06 11:30:04
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
				console.log('监听到迭代器终止执行');
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
	entry(newStu) {
		this.students.push(newStu)
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
				console.log('监听到对象的迭代终止');
				return { done: true }
			}
		}
	}
}

/**
 * 有哪些对象是原生可迭代对象
 * Map, Set, String, Array, Arguments, NodeList
 */

/**
 * 可迭代对象的应用场景有哪些
 * 1.用于JS的某些特定语法，如for...of, yield*, 展开语法，结构赋值
 * 1.用于创建某些对象，如new Map([iterable]), new Set([iterable])
 * 2.用于某些特定的方法，如Array.from(iterable), Promise.race(iterable)
 */

/**
 * 写一个简单的生成器函数
 */
function* foo(param) {
	const value1 = param + 2
	const param2 = yield value1

	const value2 = param2 * 2
	const param3 = yield value2

	const value3 = param3 ** 2
	yield value3
}

const generator = foo(1)
console.log(generator.next());
console.log(generator.next(2));
console.log(generator.next(3));
console.log(generator.next());

/**
 * 生成器函数和普通函数的3点区别
 * 1.生成器函数会返回一个生成器（Generator）
 * 1.生成器函数Ffuncion后要加*号
 * 3.生成器函数通过yield关键字来控制函数的执行流程
 */

/**
 * 使用生成器函数封装一个可以迭代的自定义类
 */
class Classroom1 {
	constructor(name, address, students) {
		this.name = name
		this.address = address
		this.students = students
	}
	entry(newStu) {
		this.students.push(newStu)
	}
	*[Symbol.iterator]() {
		yield* this.students
	}
}

/**
 * 封装一个自动执行generator函数，用来实现async，await效果
 */
function requestData(url) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(url)
		}, 100);
	})
}
function* getData() {
	const res1 = yield requestData('zzt')
	const res2 = yield requestData(res1 + 'aaa')
	const res3 = yield requestData(res2 + 'bbb')
	console.log(res3);
}
function execGen(execFn) {
	const generator = execFn()
	function exec(res) {
		const { done, value } = generator.next(res)
		if (done) return
		value.then(res => {
			exec(res)
		})
	}
	exec()
}
execGen(getData)
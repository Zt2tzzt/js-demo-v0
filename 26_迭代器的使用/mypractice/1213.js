/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-13 14:44:47
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-13 15:16:33
 * @LastEditContent: 
 */
// 写一个简单的可迭代对象
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
			}
		}
	}
}

// 封装一个可迭代的类
class Classroom {
	constructor(address, name, students) {
		this.address = address
		this.name = name
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
				console.log('迭代器终止执行')
				return { done: true }
			}
		}
	}
}

/**
 * 有哪些对象是原生的可迭代对象
 * Array, Set, Map, String, Arguments, NodeList
 * 可迭代对象的应用场景有哪些
 * 1. 用于JS语法：for...of, yield*, 展开语法，解构赋值
 * 2. 用于创建一些对象：new Map([iterable]), new Set[(iterable)], new WeakMap([iterable]), new WeakSet([iterable])
 * 3. 用于一些特定方法：Promise.all(iterable), Promise.race(iterable), Array.from(iterable)
 */

// 写一个简单的生成器函数
function* foo(param1) {
	const value1 = 100 * param1
	const param2 = yield value1

	const value2 = 200 * param2
	const param3 = yield value2

	const value3 = 300 * param3
	yield value3

	return '123'
}
const generator = foo(1)
/* console.log(generator.next())
console.log(generator.next(2))
console.log(generator.next(3))
console.log(generator.next(4))
console.log(generator.next(5)) */

/**
 * 生成器函数和普通函数的3点区别
 * 1.生成器函数 function 后要加 * 号
 * 2.生成器函数可通过关键字 yield 控制函数执行流程
 * 3.生成器函数返回一个 Generator
 */

// 使用生成器函数封装一个能够迭代的自定义类
class Classromm2 {
	constructor(adddress, ndame, studdents) {
		this.adddress = adddress
		this.ndame = ndame
		this.studdents = studdents
	}
	entry(newStudnet) {
		this.studdents.push(newStudnet)
	}
	*[Symbol.iterator]() {
		yield* this.studdents
	}
}

// 封装一个自动执行 Generator 函数
function requestData(url) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(url)
		}, 1000);
	})
}
function* getData(url) {
	const res1 = yield requestData('zzt')
	const res2 = yield requestData(res1 + 'aaa')
	const res3 = yield requestData(res2 + 'bbb')
	console.log(res3)
}
function execGeneratorAuto(execFn) {
	const generator = execFn()
	function exec(res) {
		const result = generator.next(res)
		if (result.done) return result.value
		result.value.then(res => {
			exec(res)
		})
	}
	exec()
}
execGeneratorAuto(getData)

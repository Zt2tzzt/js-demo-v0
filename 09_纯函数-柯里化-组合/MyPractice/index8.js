/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-30 13:33:08
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-30 14:02:03
 * @LastEditContent: 
 */
/**
 * 纯函数定义的2点总结
 * 	1.确定的输入，一定产生确定的输出
 * 	2.在函数的执行过程中不会产生副作用
 */

/**
 * 在计算机科学中副总用的概念
 * 	指在男塾执行中，没有对对外界产生额外的影响，如改变外部参数，全局变量和外部存储
 */

/**
 * 数组的2个函数对比
 * 	slice是纯函数
 * 	splice不是纯函数
 */
const arr = [1, 2, 3, 4]
arr.slice(1)
arr.splice(1, 0, 9)

/**
 * 纯函数在社区的1点争议
 * 	在控制台输出值算不算纯函数，可以理解为纯函数，但严格意义上来说不算
 */

/**
 * 对柯里化定义的总结
 * 	给函数传入部分参数并调用它，使他返回一个函数用于处理剩余的参数
 */

/**
 * 写一个柯里化函数案例，并用箭头函数优化
 */
function foo1(x) {
	return function (y) {
		return function (z) {
			return x + y + z
		}
	}
}
const newfoo1 = x => y => z => x + y + z

/**
 * 为什么需要柯里化的2点原因
 * 	1.是函数职责单一
 * 	2.使代码逻辑复用
 */

/**
 * 柯里化单一职责原则案例
*/
function foo2(x) {
	x = x + 2
	return function (y) {
		y = y * 2
		return function (z) {
			z = z ** 2
			return x + y + z
		}
	}
}

/**
 * 柯里化逻辑服用案例
 */
const log = date => type => msg => {
	console.log(`[${date.getHours()}:${date.getMinutes()}][${type}][${msg}]`);
}
const nowLog = log(new Date)
nowLog('DEBIG')('发现一个bug')
nowLog('FEATURE')('添加了一张轮播图')

/**
 * 自动柯里化函数实现
 */
function sum(x, y, z) {
	return x + y + z
}
function autoCurring(fn) {
	return function curried(...args) {
		if (args.length >= fn.length) {
			return fn.apply(this, args)
		} else {
			return function (...args2) {
				return curried.call(this, ...args, ...args2)
			}
		}
	}
}
const curried = autoCurring(sum)
console.log(curried(10)(20)(30))
console.log(curried(10, 20)(30))
console.log(curried(10, 20, 30))

/**
 * 组合函数的定义
 * 	将函数组合起来自动依次调用
 */

/**
 * 组合函数的使用
 */
function double(x) {
	return x * 2
}
function square(x) {
	return x ** 2
}
function coposeFn(m, n) {
	return function (...args) {
		return n(m(...args))
	}
}

/**
 * 自动组合函数的使用
 */
function autoCompos(...fns) {
	const length = fns.length
	fns.forEach(fn => {
		if (typeof fn !== 'function')
			throw new TypeError('Excepted Function type')
	});
	return function (...args) {
		let index = 0
		let result = length ? fns[index].apply(this, args) : args
		while (++index < length) {
			result = fns[index].call(this, result)
		}
		return result
	}
}

const composed2 = autoCompos(double, square)
console.log(composed2(2))
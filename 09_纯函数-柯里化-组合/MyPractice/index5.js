/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-25 15:59:10
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-25 17:13:54
 * @LastEditContent: 
 */
/**
 * 纯函数定义的2点总结
 * 	1.确定的输入一定会产生确定的输出
 * 	2.执行函数的过程中，不会产生副作用
 */

/**
 * 在计算吉科学中副作用的概念
 * 	在函数执行时，不会对外界产生额外的影响，如修改外部参数，修改全局变量或者改变外部存储
 */

/**
 * 数组的2个函数的对比
 * 	slice时纯函数
 * 	splice非纯函数
 */
const arr = ['abc', 'cba', 'nba']
arr.slice(1)
arr.splice(1, 0, 'dno')

/**
 * 纯函数在社区内的争议
 * 	在控制台输出可理解为纯函数，但在严格意义上不算纯函数
 */

/**
 * 对柯里化定义的总结
 * 	给函数传入部分参数调用它，让它返回一个函数处理剩余的参数，这个过程称为柯里化
 */

/**
 * 写一个纯函数案例并用箭头函数优化
 */
function foo(x) {
	return function (y) {
		return function (z) {
			return x + y + z
		}
	}
}
const foo2 = x => y => z => x + y + z

/**
 * 为什么需要使用柯里化的2点原因
 * 	1.使函数职责单一
 * 	2.使胆码逻辑复用
 */

/**
 * 柯里化单一职责案例实现
 */
function foo3(x) {
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
	console.log(`[${date.getHours()}:${date.getMinutes()}]:[${type}][${msg}]`);
}
const nowLog = log(new Date)
nowLog('DEBUG')('检测到一个bug')
nowLog('FETURE')('添加了一张图片')

/**
 * 自动柯里化的函数实现
 */
function sum(x, y, z) {
	return x + y + z
}
function autoCurring(fn) {
	function curried(...args) {
		if (args.length >= fn.length) {
			return fn.apply(this, args)
		} else {
			return function (...args2) {
				return curried.apply(this, [...args, ...args2])
			}
		}
	}
	return curried
}
const curried = autoCurring(sum)
console.log(curried(10)(20)(30))
console.log(curried(10, 20)(30))
console.log(curried(10, 20, 30))

/**
 * 组合函数的定义
 * 	将函数组合起来，依此自动执行
 */

/**
 * 组合函数的使用
 */
function double(num) {
	return num * 2
}
function square(num) {
	return num ** 2
}
function composeFn(m, n) {
	return function (...args) {
		return n(m(...args)) //----------
	}
}
const composed = composeFn(double, square)
console.log(composed(10))

/**
 * 自动组合函数的实现
 */
function autoComposed(...fns) {
	const length = fns.length
	fns.forEach(fn => {
		if (typeof fn !== 'function')
			throw new TypeError('Expected function type')
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
const composed2 = autoComposed(double, square)
console.log( composed2(10))
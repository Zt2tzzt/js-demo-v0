/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-08 14:46:59
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-08 16:09:38
 * @LastEditContent: 
 */
/**
 * 纯函数定义的2点总结
 * 1.确定的输入，一定会产生确定的输出
 * 2.函数在执行过程中，不会产生副作用
 */

/**
 * 在计算吉科学中副作用的概念
 * 函数在执行过程中，除了函数返回值之外，还对外界产生了额外的影响，如改变了外部参数，修改了全局变量或改变了外部存储
 */

/**
 * 数组的2个函数的对比
 * slice可理解为是纯函数
 * splice不是纯函数
 */

/**
 * 纯函数在社区的1点争议
 * 	在控制台输出值可理解为纯函数，但严格意义上来说不算纯函数。
 */

/**
 * 对柯里化定义的总结
 * 给函数传入部分参数来调用它，使它返回一个函数来处理剩余参数的过程称之为柯里化
 */

/**
 * 写一个柯里化函数案例，并用箭头函数优化
 */
function foo(x) {
	return function (y) {
		return function (z) {
			return x + y + z
		}
	}
}
const foox = x => y => z => x + y + z

/**
 * 为什么需要使用柯里化的2点原因
 * 1.是函数的职责单一
 * 2.使代码逻辑复用
 */

/**
 * 柯里化单一职责原则案例
 */
function foo1(x) {
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
 * 柯里化逻辑复用案例
 */
const log = date => type => msg => {
	console.log(`[${date.getHours()}:${date.getMinutes()}]:[${type}][${msg}]`);
}
const nowLog = log(new Date)
nowLog('DEBUG')('发现一个bug')
nowLog('FEATURE')('轮播图添加了一张图片')

/**
 * 自动柯里化的函数实现
 */
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
function sum1(x, y, z) {
	return x + y + z
}
const curried = autoCurring(sum1)
console.log(curried(1, 2)(3))
console.log(curried(1, 2, 3))
console.log(curried(1)(2)(3))

/**
 * 组合函数的定义
 * 将函数组合起来，自动依次执行
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
function composeFn(n, m) {
	return function (args) {
		return m(n(args))
	}
}
const composed = composeFn(double, square)
console.log(composed(2));

/**
 * 自动组合函数的实现
 */
function autoCompose(...fns) {
	const length = fns.length
	fns.forEach(fn => {
		if (typeof fn !== 'function') throw new TypeError('Except function type')
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
const composed2 = autoCompose(double, square)
console.log(composed2(3))
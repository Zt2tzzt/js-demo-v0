/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-22 12:52:09
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-22 13:43:52
 * @LastEditContent: 
 */
/**
 * 纯函数定义的2点总结
 * 1.确定的输入，一定会产生确定的输出。
 * 2.除函数返回值，对外界没有产生额外的副作用。
 */

/**
 * 在计算机科学中，副作用的概念。
 * 副作用指在函数的执行过程中，除返回值外，对外界产生了额外的附加影响，如修改外部参数，修改全局变量，改变外部存储等
 */

/**
 * 数组的2个函数对比
 * slice是纯函数
 * splice不是纯函数
 */

/**
 * 纯函数在社区的1点争议
 * 在控制台输出值，算不算纯函数，可以理解为是纯函数，严格意义上不算。
 */

/**
 * 对柯里化定义的总结
 * 给函数传入部分参数来调用它，使他返回一个函数处理剩余的参数，这个过程称为柯里化。
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
console.log(foox(1)(2)(3));

/**
 * 为什么需要用柯里化2点
 * 1.是函数职责单一。
 * 2.使代码逻辑服用
 */

/**
 * 柯里化单一职责案例
 */
function fooq(x) {
	x = x + 2
	return function (y) {
		y = y * 2
		return function (z) {
			z = z ** 2
			return x + y + z
		}
	}
}
console.log(fooq(1)(2)(3));

/**
 * 柯里化逻辑服用案例
 */
const log = date => type => msg => {
	console.log(`[${date.getHours()}:${date.getMinutes()}][${type}][${msg}]`);
}
const nowLog = log(new Date)
nowLog('DEBUG')('发现一个bug')
nowLog('FEATURE')('轮播图中新增一张图片')

/**
 * 自动柯里化的函数实现
 */
function foow(x, y, z) {
	return x + y + z
}
function autoCurrie(fn) {
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
const foowCurried = autoCurrie(foow)
console.log(foowCurried(10, 20, 30));
console.log(foowCurried(10)(20, 30));
console.log(foowCurried(10)(20)(30));

/**
 * 组合函数的定义
 * 将函数组合起来，自动依次执行。
 */

/**
 * 组合函数的使用
 */
function double(x) {
	return x * 2
}
function sqaure(x) {
	return x ** 2
}
function compose(m, n) {
	return function (count) {
		return n(m(count))
	}
}
console.log(compose(double, sqaure));

/**
 * 自动组合函数的实现
 */
function autoCompose(...fns) {
	const length = fns.length
	fns.forEach(fn => {
		if (typeof fn !== 'function') throw new Error('Except function type')
	});

	return function (...args) {
		let i = 0
		let result = length ? fns[i].apply(this, args) : args
		while (++i < length) {
			result = fns[i].call(this, result)
		}
		return result
	}
}
const res = autoCompose(double, sqaure)(2)
console.log(res);
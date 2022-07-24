/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-25 09:50:59
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-25 10:19:57
 * @LastEditContent: 
 */
/**
 * 纯函数定义的2点总结
 * 	1.确定的输入，一定产生确定的输出
 * 	2.函数执行过程中，不会产生副作用
 */

/**
 * 在计算机科学中，副作用的概念
 * 	在函数执行过程中，除返回函数值外，还对调用函数产生了一些附加影响，如改变外部参数，改变全局变量或者外部存储
 */

/**
 * 数组的2个函数的对比
 * 	slice是纯函数
 * 	splice不是纯函数
 */
const arr1 = ['abc', 'cba', 'nba']
console.log(arr1.slice(1))
arr1.splice(1, 0, 'dno')
console.log(arr1);

/**
 * 纯函数在社区的1点争议
 * 	在控制台输出值，可以理解为纯函数，但在严格意义上来说，不是纯函数
 */

/**
 * 对柯里化的定义的总结
 * 	给函数传入部分参数来调用它，让它返回一个函数去处理剩余的参数的过程称为柯里化
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
const foo1 = x => y => z => x + y + z

/**
 * 为什么需要使用柯里化的2点原因
 * 	1.使函数值则单一
 * 	2.使代码逻辑复用
 */

/**
 * 柯里化单一职责案例
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
 * 柯里化逻辑复用案例
 */
const log = date => type => msg => {
	console.log(`[${date.getHours()}:${date.getMinutes()}]:[${type}][${msg}]`);
}
const nowLog = log(new Date())
nowLog('DEBUG')('产生了一个bug')
nowLog('FETURE')('轮播图中添加了一张图片')

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
console.log(curried(10)(20)(30));
console.log(curried(10, 20)(30));
console.log(curried(10, 20, 30));

/**
 * 组合函数的定义
 * 	将函数组合起来，自动依次执行
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
	return function (arg) {
		return n(m(arg))
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
		if (typeof fn !== 'function') throw new TypeError('Excepted function Type')
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
console.log(composed2(10))
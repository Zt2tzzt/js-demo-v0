/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-25 22:36:55
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-26 00:50:15
 * @LastEditContent: 
 */
/**
 * 纯函数定义的2点总结
 * 	1.确定的输入，一定产生确定的输出
 * 	2.在执行函数时，不会产生副作用
 */

/**
 * 在计算机科学中副作用的概念
 * 	在函数运行时，对外界产生了额外的影响，如修改了外部参数，全局变量或者外部存储
 */

/**
 * 数组第2个函数的对比
 * 	slice是纯函数
 * 	splice不是纯函数
 */
// const arr = ['abc', 'cba', 'nba']
const arr = new Array('abc', 'cba', 'nba')
console.log(arr.slice(1))
arr.splice(1, 0, 'dno')
console.log(arr);

/**
 * 纯函数在社区的争议
 * 	挡在控制台输出值时，可理解为是纯函数，但严格意义上不是纯函数
 */

/**
 * 对柯里化定义的总结
 * 	给函数传入布冯参数，让它返回一个函数处理剩余的参数，这个过程叫做柯里化
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
const newfoo = x => y => z => x + y + z

/**
 * 为什么需要用柯里化的2点原因
 * 	1.是函数职责单一
 * 	2.是代码逻辑服用
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
console.log(foo2(10)(20)(30));

/**
 * 柯里化逻辑复用案例
 */
const foo3 = date => type => msg => {
	console.log(`[${date.getHours()}:${date.getMinutes()}]:[${type}][${msg}]`);
}
const nowLog = foo3(new Date)
nowLog('DEBUG')('检测到一个bug')
nowLog('FEATURE')('添加了一张轮播图')

/**
 * 自动柯里化函数的实现
 */
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
function composefn(m, n) {
	return function (...args) {
		return n(m(...args))
	}
}
const composed = composefn(double, square)
console.log(composed(10))

/**
 * 自动组合函数的实现
 */
function autoCompose(...fns) {
	const length = fns.length
	fns.forEach(fn => {
		if (typeof fn !== 'function')
			throw new TypeError('Excepted Tunction Type')
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
console.log(composed2(6))
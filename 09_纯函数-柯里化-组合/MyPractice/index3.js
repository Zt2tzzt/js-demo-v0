/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-24 15:28:13
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-24 16:02:33
 * @LastEditContent: 
 */
/**
 * 纯函数定义的2点总结
 * 	1.确定的输出，一定会产生确定的输入
 * 	1.函数在执行过程中，不会产生副作用
 */

/**
 * 在计算机科学中副作用的定义
 * 	当执行函数的过程中，除返回函数值外，还产生了一些附加效果，如改变了全局变量，外部参数或者外部存储
 */

/**
 * 数组的2个函数的对比
 * 	slice是纯函数
 * 	splice不是纯函数
 */
const arr = ['abc', 'cba', 'nba']
console.log(arr.slice(1));
arr.splice(1, 0, 'dno')
console.log(arr);

/**
 * 纯函数在社区的1点争议
 * 	在控制台输出值算不算纯函数，可以理解为是，但严格意义上不是
 */

/**
 * 对柯里化定义的总结
 * 	给函数传入部分参数，调用它并返回一个函数用于处理剩余参数的过程称为柯里化
 */

/**
 * 写一个柯里化函数的实例，并用箭头函数优化
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
 * 为什么要使用柯里化的2点原因
 * 	1.是函数的值则单一
 * 	2.复用代码逻辑
 */

/**
 * 柯里化单一职责原则实例
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
nowLog('DEBUG')('请求数据发生错误')
nowLog('FETURE')('检测到添加了一张轮播图')

/**
 * 自动实现柯里化函数实现
 */
function sum3(x, y, z) {
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
const curried = autoCurring(sum3)
console.log(curried(10)(20)(30));
console.log(curried(10, 20)(30));
console.log(curried(10, 20, 30));

/**
 * 组合函数的定义
 * 	将函数组合起来，自动依次调用
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
		return n(m(...args))
	}
}
console.log(composeFn(double, square)(10));

/**
 * 自动组合函数的实现
 */
function autoCompose(...fns) {
	const length = fns.length
	fns.forEach(fn => {
		if (typeof fn !== 'function') throw new TypeError('Except Function type')
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
const composed = autoCompose(double, square)
console.log(composed(10));


/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-23 14:41:25
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-06-23 09:03:08
 * @LastEditContent: 
 */
/**
 * 纯函数定义的2点总结
 * 	1.确定的输入，一定会产生确定的输出
 * 	2.函数在执行过程中，不能产生副作用
 */

/**
 * 在计算机科学中，副作用的概念
 * 	表示在执行一个函数时，除了返回函数值之外，还对调用函数产生了附加影响，如修改了全局变量，修改了外部参数或者改变外部存储
 */

/**
 * 数组的两个函数的对比
 * 	slice方法是纯函数，splice方法不是纯函数
 */
const arr1 = ['abc', 'cba', 'nba']
arr1.slice(1)
arr1.splice(1, 0, 'dna')

/**
 * 社区关于纯函数的1点争议
 * 控制台输出值算不算纯函数，可以理解为是纯函数，但严格意义上不是纯函数
 */

/**
 * 柯里化的定义和总结
 * 	指传递给函数一部份参数来调用它，让它返回一个函数去处理剩余的参数，这个过程就称之为柯里化
 */

/**
 * 写一个柯里化函数的案例，并用箭头函数优化
 */
function sum1(x) {
	return function (y) {
		return function (z) {
			return x + y + z
		}
	}
}
const sum2 = x => y => z => x + y + z
console.log(sum2(10)(20)(30));

/**
 * 为什么需要用柯里化的2点原因
 * 	1.让函数的职责单一
 * 	2.复用代码的逻辑
 */

/**
 * 柯里化单一职责原则案例
 */
function handle(x) {
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
const log = date => type => message => {
	console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`);
}
const nowLog = log(new Date())
nowLog('DEBUG')('查找到轮播图的bug')
nowLog('FETURE')('新增了添加用户的权限')

/**
 * 自动实现柯里化的函数实现
 */
function sum3(x, y, z) {
	return x + y + z
}
function Mycurring(fn) {
	function curried(...args) {
		if (args.length >= fn.length) {
			return fn.apply(this, args)
		} else {
			function curried2(...args2) {
				return curried.apply(this, [...args, ...args2])
			}
			return curried2
		}
	}
	return curried
}
const currySum = Mycurring(sum3)
console.log(currySum(10, 20, 30));
console.log(currySum(10, 20)(30));
console.log(currySum(10)(20)(30));

/**
 * 组合函数的定义：将函数组合起来，自动依次调用
 */

/**
 * 组合函数的使用，
 */
function double(num) {
	return num * 2
}
function square(num) {
	return num ** 2
}
console.log(square(double(10)));
function composeFn(m, n) {
	return function (count) {
		return n(m(count))
	}
}
const newFn = composeFn(double, square)
console.log(newFn(10));

/**
 * 自动组合函数的实现
 */
function myCompose(...fns) {
	const length = fns.length
	for (let i = 0; i < length; i++) {
		if (typeof fns[i] !== 'function') {
			throw new TypeError("Expected arguments are functions")
		}
	}
	return function (...args) {
		let index = 0
		let result = length ? fns[index].apply(this, args) : args
		for (let i = 0; i < length; i++) {
			result = fns[i].call(this, result)
		}
		return result
	}
}
const newFn2 = myCompose(double, square)
console.log(newFn2(10));



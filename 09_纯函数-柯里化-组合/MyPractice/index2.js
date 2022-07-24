/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-24 10:36:55
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-24 14:01:04
 * @LastEditContent: 
 */

/**
 * 纯函数定义的2点总结
 * 	1.确定的输入一定产确定的输出
 * 	2.执行函数时，未产生副作用。
 */

/**
 * 在计算机科学中，副作用的定义
 * 	函数在执行过程中，除了返回函数值外，还对调用函数产生了附加影响，如改变全局变量，修改外部参数或者改变外部存储
 */

/**
 * 数组的2个函数对比
 * 	slice方法是纯函数，splice方法不是纯函数
 */
const arr1 = ['abc', 'cba', 'nba']
console.log(arr1.slice(1));
const arr2 = arr1.splice(1, 0, 'dna')
console.log(arr2);
console.log(arr1);

/**
 * 纯函数在社区中的1点争议
 * 	在控制台输出可理解为是纯函数，但在严格意义上不是
 */

/**
 * 对柯里化定义的总结
 * 	给函数传入一部分参数来调用它，让它返回一个函数去处理剩余参数的过程就叫柯里化
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
const foo2 = x => y => z => x + y + z
console.log(foo1(10)(20)(30));
console.log(foo2(10)(20)(30));

/**
 * 为什么需要使用柯里化的2点原因
 * 	1.使函数职责单一
 * 	2.复用代码的逻辑
 */

/**
 * 柯里化单一职责案例
 */
const foo3 = (x) => {
	x = x + 2
	return (y) => {
		y = y * 2
		return (z) => {
			z = z ** 2
			return x + y + z
		}
	}
}
console.log(foo3(1)(2)(3));
/**
 * 柯里化单逻辑职责原则案例
 */
const log = date => type => msg => console.log(`[${date.getHours()}:${date.getMinutes()}][${type}][${msg}]`);
const nowDate = log(new Date())
nowDate('DEBUG')('遇到了bug')
nowDate('FETURE')('检测到添加了轮播图')

/**
 * 自动实现柯里化
 */
function sum3(x, y, z) {
	return x + y + z
}
function sum4(x, y, z) {
	x = x + 2
	y = y * 2
	z = z ** 2
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
const currySum = autoCurring(sum4)
console.log(currySum);
console.log(currySum(10, 20, 30));
console.log(currySum(10)(20)(30));
console.log(currySum(10, 20)(30));

/**
 * 组合函数的使用
 */
function double(num) {
	return num * 2
}
function square(num) {
	return num ** 2
}
console.log(square(double(2)));
function compose(m, n) {
	return function (num) {
		return n(m(num))
	}
}
const newFn = compose(double, square)
console.log(newFn(2))

/**
 * 自动实现组合函数
 */
function autoCompose(...fns) {
	const length = fns.length
	for (let i = 0; i < length; i++) {
		if (typeof fns[i] !== 'function') {
			throw new TypeError('Except for Function Type')
		}
	}
	return function (...args) {
		let index = 0
		let result = length ? fns[0].apply(this, args) : args
		while (++index < length) {
			result = fns[index].call(this, result)
		}
		return result
	}
}

const newFn2 = autoCompose(double, square)
console.log(newFn2(2));

















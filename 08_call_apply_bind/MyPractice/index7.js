/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-03 23:17:42
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-03 23:34:14
 * @LastEditContent: 
 */
/**
 * 实现call方法
 */
Function.prototype.myCall = function (thisArg, ...args) {
	// 1.获取函数本身
	const fn = this
	// 2.将thisArg转成对象类型
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
	// 3.执行函数
	thisArg.fn = fn
	const res = thisArg.fn(...args)
	delete thisArg.fn
	// 4.返回结果
	return res
}

/**
 * 实现apply方法
 */
Function.prototype.myApply = function (thisArg, args = []) {
	const fn = this
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
	thisArg.fn = fn
	const res = thisArg.fn(...args)
	delete thisArg.fn
	return res
}

/**
 * 	实现bind方法
 */
Function.prototype.myBind = function (thisArg, ...args) {
	const fn = this
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
	return function (...args2) {
		thisArg.fn = fn
		const res = thisArg.fn(...args, ...args2)
		delete thisArg.fn
		return res
	}
}

/**
 * arguments是一个对应于传递给函数参数的类数组对象（array-like）
 */

/**
 * arguments对象与数组的异同2点：（一个特殊的属性callee指向传递给的函数本身）
 * 1.arguments有者与数组相同的一些特征，如length属性，如可以通过索引index来进行访问
 * 2.arguments对象没有数组的一些方法，如forEach, map
 */

/**
 * 将arguments对象转成数组的4种方法
 */
function foo() {
	const arr1 = Array.prototype.slice.call(arguments)
	const arr2 = [].slice.call(arguments)
	// ES6
	const arr3 = Array.from(arguments)
	const arr4 = [...arguments]
}

/**
 * 全局对象有没有arguments，分情况，有的原因
 * 1.Node有，在Node中，每一个JS文件都是作为一个模块被包裹到一个函数中并用call来执行的。
 * 2.浏览器没有
 */
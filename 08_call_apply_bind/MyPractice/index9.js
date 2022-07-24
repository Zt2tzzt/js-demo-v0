/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-26 09:37:25
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-26 10:02:14
 * @LastEditContent: 
 */
/**
 * 实现call方法
 */
Function.prototype.myCall = function (thisArg, ...args) {
	// 1.获取函数本身
	const fn = this
	// 处理this
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
	// 执行函数
	thisArg.fn = fn
	const result = thisArg.fn(...args)
	delete thisArg.fn
	// 返回值
	return result
}

/**
 * 实现apply方法
 */
Function.prototype.myApply = function (thisArg, args = []) {
	const fn = this
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
	thisArg.fn = fn
	const result = thisArg.fn(...args)
	delete thisArg.fn
	return result
}

/**
 * 实现bind方法
 */
Function.prototype.myBind = function (thisArg, ...args) {
	const fn = this
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis

	return function (...args2) {
		thisArg.fn = fn
		const result = thisArg.fn(...args, ...args2)
		delete thisArg.fn
		return result
	}
}

/**
 * arguments是一个对应于传递给函数的参数的类数组对象（array-like）对象。
 */

/**
 * arguments对象与数组的异同，2点
 * 1.有着与数组类似的一些特征，如lehgth属性，如使用索引index来访问元素。
 * 2.没有实现数组的一些方法，如map, reduce
 * 3.其中有一个属性callee指向函数本身
 */

/**
 * 将arguments对象转成数组的4种方法
 */
function foo(x, y) {
	const arr1 = Array.prototype.slice.call(arguments)
	const arr2 = [].slice.call(arguments)
	// ES6
	const arr4 = Array.from(arguments)
	const arr4 = [...arguments]
}

/**
 * 全局对象有没有arguments，分情况，
 * node有，因为在node中，每一个JS文会件作为一个模块包裹在函数中，并用call来调用
 * 浏览器中没有
 */
/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-28 08:35:55
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-28 08:53:21
 * @LastEditContent: 
 */
/**
 * 实现call方法
 */
Function.prototype.myCall = function (thisArg, ...args) {
	// 1.获取函数本身
	const fn = this
	// 2.将thisArg转成对象
	thisArg = (thisArg !== null && thisArg !== undefined ? Object(thisArg) : globalThis)
	// 3.执行函数
	thisArg.fn = fn
	const result = thisArg.fn(...args)
	delete thisArg.fn
	// 返回结果
	return result
}

/**
 * 实现apply方法
 */
Function.prototype.myApply = function (thisArg, args = []) {
	const fn = this
	thisArg = (thisArg !== null && thisArg !== undefined ? Object(thisArg) : globalThis)
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
	thisArg = (thisArg !== null && thisArg !== undefined ? Object(thisArg) : globalThis)
	return function (...args2) {
		thisArg.fn = fn
		const result = thisArg.fn(...args, ...args2)
		delete thisArg.fn
		return result
	}
}

/**
 * arguments是一个传递给函数参数的类数组对象
 */

/**
 * arguments对象与数组的异同2点
 * 	1.它有与数组相似的特性，如length属性，比如可以通过index索引来访问
 * 	2.它没有数组的某些方法，如forEach, Map
 * 	3.它有自己特有的属性callee，指向传递的函数
 */

/**
 * 将arguments对象转成数组的4种方法
 */
function foo(x, y) {
	const arr1 = Array.prototype.slice.call(arguments)
	const arr2 = [].slice.call(arguments)
	// ES6
	const arr3 = Array.from(arguments)
	const arr4 = [...arguments]
}

/**
 * 全局对象有没有arguments，分情况，有的原因
 * 	1.Node有，因为在Node中，每个JS文件会被当作一个模块，这个模块将会包裹在一个函数在用call调用
 * 	2.浏览器没有
 */

/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-30 08:35:53
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-30 08:52:52
 * @LastEditContent: 
 */
/**
 * 实现call方法
 */
Function.prototype.myCall = function (thisArg, ...args) {
	// 获取函数本身
	const fn = this
	// 将thisArg转为对象
	thisArg = (thisArg !== null) && (thisArg !== undefined) ? Object(thisArg) : globalThis
	// 执行函数
	thisArg.fn = fn
	const res = thisArg.fn(...args)
	delete thisArg.fn
	// 返回结果
	return res
}

/**
 * 实现apply方法
 */
Function.prototype.myApply = function (thisArg, args = []) {
	const fn = this
	thisArg = (thisArg !== null) && (thisArg !== undefined) ? Object(thisArg) : globalThis
	thisArg.fn = fn
	const res = thisArg.fn(...args)
	delete thisArg.fn
	return res
}

/**
 * 实现bind方法
 */
Function.prototype.myBind = function (thisArg, ...args1) {
	const fn = this
	thisArg = (thisArg !== null) && (thisArg !== undefined) ? Object(thisArg) : globalThis
	return function (...args2) {
		thisArg.fn = fn
		const res = thisArg.fn(...args1, args2)
		delete thisArg.fn
		return res
	}
}

/**
 * arguments是一个对应于传递给函数的参数的类数组对象（array-like)
 */

/**
 * arguments对象与数组的异同2点（一个特殊的属性callee，指向传递的函数
 * 	1，都有一些相同的特征，如都有length属性，都可以通过index访问其中的元素
 * 	2.没有实现数组的一些方法，如forEach，map
 */

/**
 * 将arguments对象，转成数组的4种方法
 */
function foo(x, y) {
	const arr1 = Array.prototype.slice.call(arguments)
	const arr2 = [].slice.call(arguments)
	// ES6
	const arr3 = Array.from(arguments)
	const arr4 = [...arguments]
	console.log(arr1, arr2, arr3, arr4);
	console.log(x, y);
}
foo(1, 2)

/**
 * 全局对象有没有arguments分情况
 * 	Node有，因为在Node中，每个JS文件被当作一个模块被包裹到一个函数中使用call执行
 * 	浏览器没有
 */
/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-29 09:56:24
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-29 10:25:36
 * @LastEditContent: 
 */
/**
 * 实现call方法
 */
Function.prototype.myCall = function (thisArg, ...args) {
	// 1.获取函数本身
	const fn = this
	// 2.将thisArg转成对象
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
	// 3,执行fn
	thisArg.fn = fn
	const res = thisArg.fn(...args)
	delete thisArg.fn
	return res
}

/**
 * 实现apply方法
 */
Function.prototype.myApply = function (thisArg, argArr=[]) { //-----------
	const fn = this
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
	thisArg.fn = fn
	const res = thisArg.fn(...argArr)
	delete thisArg.fn
	return res
}

/**
 * 实现bind方法
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
 * arguments对象和数组的异同2点
 * 	1.它与数组有相似的特征，如length属性，如可以使用索引来访问其中的元素
 * 	2.它没有实现数组中的某些方法，如forEach， map
 * 	3.它有属性callee。指向传递的函数
 */

/**
 * 将arguments对象转成数组的4种写法
 */
function foo(x, y) {
	const arr1 = Array.prototype.slice(arguments)
	const arr2 = [].slice.call(arguments)
	// ES6
	const arr4 = Array.from(arguments)
	const arr5 = [...arguments]
}

/**
 * 全局对象有内有arguments，分情况
 * 	Node有，因为在Node中，每个JS文件被当作一个模块包裹到一个函数，并用call调用
 * 	浏览器没有
 */
/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-31 11:24:50
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-31 11:43:49
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
	// 3.执行函数
	thisArg.fn = fn
	const res = thisArg.fn(...args)
	delete thisArg.fn
	// 4返回值
	return res
}

/**
 * 实现apply方法
 */
Function.prototype.myApply = function (thisArgm, args = []) {
	const fn = this
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
	thisArgm.fn = fn
	const res = thisArgm.fn(...args)
	delete thisArgm.fn
	return res
}

/**
 * 实现bind方法
 */
Function.prototype.myBind = function (thisArg, ...args1) {
	const fn = this
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
	return function (...args2) {
		thisArg.fn = fn
		const res = thisArg.fn(...args1, ...args2)
		delete thisArg.fn
		return res
	}
}

/**
 * arguments是一个对应于传递给函数参数的类数组对象（array-like）
 */

/**
 * arguments对象与数组的异同2点
 * 	1.都有相似的特征，如length属性，如都可以使用index索引进行访问
 * 	2.arguments没有数组的一些方法，如forEach, map
 * 	3.它有一个特殊的属性callee指向传递的函数
 */

/**
 * 将arguments对象转成数组的4种写法
 */
function bar(...args) {
	const arr1 = Array.prototype.slice.call(arguments)
	const arr2 = [].slice.call(arguments)
	// ES6
	const arr3 = Array.from(arguments)
	const arr4 = [...arguments]
	console.log(arr1, arr2, arr3, arr4);
}

/**
 * 全局对象有没有arguments，分情况
 * 	Node有，在Node中每一个JS文件都会作为一个模块被包裹到一个函数中，这个函数将会被call调用
 */
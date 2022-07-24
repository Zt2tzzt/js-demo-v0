/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-28 00:57:51
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-28 01:15:32
 * @LastEditContent: 
 */
/**
 * 实现call方法
 */
Function.prototype.myCall = function (thisArg, ...args) {
	// 1.获取到函数本身
	const fn = this
	// 2.将this转为对象
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
	// 3.执行fn
	thisArg.fn = fn
	const result = thisArg.fn(...args)
	delete thisArg.fn
	// 4.返回结果
	return result
}

/**
 * 实现apply方法
 */
Function.prototype.myApply = function (thisArg, argArr = []) {
	// 1.获取函数本身
	const fn = this
	// 2.将this转为对象
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
	// 3.执行fn
	thisArg.fn = fn
	const result = thisArg.fn(...argArr)
	delete thisArg.fn
	// 4.返回结果
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
 * arguments是一个传递给函数参数的类数组对象（array-like）
 */

/**
 * arguments对象与数组的异同2点
 * 	它与数组有一些相同的特征，如length属性，如可使用index访问元素
 * 	他没有实现数组的方法，如forEach, map
 * 	它有一个特殊的callee属性指向传递的函数
 */

/**
 * 将arguments对象转成数组的4种写法
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
 * 	Node有，因为在Node中JS文件被当做一个模块，这个模块将被包裹到一个函数中，再使用用call来调用
 * 	浏览器中没有
 */
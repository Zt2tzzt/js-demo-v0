/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-11 09:57:15
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-11 10:44:57
 * @LastEditContent:
 */
// 实现call方法
Function.prototype.myCall = function (thisArg, ...args) {
	// 1.获取函数本身
	const fn = this
	// 处理thisArg，将其转为对象类型
	thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : globalThis
	// 执行函数
	thisArg.fn = fn
	const res = thisArg.fn(...args)
	Reflect.deleteProperty(thisArg, 'fn')
	// 返回结果
	return res
}

/**
 * 实现apply方法
 */
Function.prototype.myApply = function (thisArg, args = []) {
	const fn = this
	thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : globalThis
	thisArg.fn = fn
	const res = thisArg.fn(...args)
	Reflect.deleteProperty(thisArg, 'fn')
	return res
}

/**
 * 实现bind方法
 */
Function.prototype.myBind = function (thisArg, ...args) {
	const fn = this
	thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : globalThis
	return function (...args2) {
		thisArg.fn = fn
		const res = thisArg.fn(...args, ...args2)
		Reflect.deleteProperty(thisArg, 'fn')
		return res
	}
}

/**
 * arguments是一个对应于传递给函数的参数的类数组（array-like）对象
 */

/**
 * arguments对象与数组的异同2点
 * 1.与数组有着一些相似的特征，如length属性，如都可以通索引访问
 * 2.没有实现数组的某些方法，如map，forEach
 * 3.arguments有一个特殊的属性callee，指向传递的函数本身
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
	console.log(arr1);
	console.log(arr2);
	console.log(arr3);
	console.log(arr4);
}
foo(1, 2)

/**
 * 全局对象有没有arguments、，分情况：
 * Node有，因为在Node种每一个JS文件都会当作一个模块包裹在一个函数中，通过call调用
 * 浏览器没有
 */
/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-27 23:34:16
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-06-29 15:45:23
 * @LastEditContent: 
 */
/**
 * 实现call方法
 */
Function.prototype.myCall = function (thisArg, ...args) {
	// 1.获取需要被执行的函数
	const fn = this
	// 2.thisArg转成对象类型
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
	// 3.调用需要被执行的函数
	thisArg.fn = fn
	const result = thisArg.fn(...args)
	delete thisArg.fn
	// 4.将最终的结果返回出去
	return result
}

function foo(...args) {
	console.log('foo函数被调用', this);
	console.log(args);
}

// foo.myCall(undefined)
// foo.call(undefined)

/**
 * 实现apply方法
 */
Function.prototype.myApply = function (thisArg, args = []) {
	// 1.获取需要被执行的函数
	const fn = this
	// 2/thisArg转成对象类型
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
	// 3.调用需要执行的函数
	thisArg.fn = fn
	const result = thisArg.fn(...args)
	delete thisArg.fn
	// 4.将最终的结果返回
	return result
}

// foo.myApply(null)

/**
 * 实现bind方法
 */
Function.prototype.myBind = function (thisArg, ...args) {
	// 1.获取需要执行的函数
	const fn = this
	// 2.thisArg转成对象类型
	thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis


	return function (...args2) {
		// 3.调用需要执行的函数
		thisArg.fn = fn
		const result = thisArg.fn(...args, ...args2)
		// 4.将最终的结果返回
		return result
	}
}

// const fn = foo.myBind(123, 999)
// fn(666)

/**
 * arguments是一个传递给函数参数的类数组对象（array-like）
 */

/**
 * arguments对象与数组的异同点2点
 * 	1.它拥有数组的一些特性，比如length属性，比如可以通过index索引来访问
 * 	2.但是它却没有数组的一些方法，比如forEach, map等
 * 	3.它有一个特殊的属性callee指向传递的函数
 */

/**
 * 将arguments对象转成数组的4种方法
 */
function foo2(num1, num2) {
	const arr1 = Array.prototype.slice.call(arguments)
	const arr2 = [].slice.call(arguments)
	// ES6
	const arr3 = Array.from(arguments)
	const arr4 = [...arguments]
	console.log(arr1, arr2, arr3, arr4);
}

foo2(1, 2, 3, 4)

/**
 * 全局对象有没有arguments对象
 * 	Node有，因为Node中一个JS文件会被当作一个模块，这个模块会被包裹到一个函数里面，再使用call来调用的
 * 	浏览器没有
 */
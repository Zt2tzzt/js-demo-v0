/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-17 14:38:25
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-17 15:52:07
 * @LastEditContent: 
 */
// ES6 中字面量增强的3种写法
const thename = 'zzt'; age = 18;
const obj = {
	// 属性名简写
	thename,
	// 方法名简写
	foo() { },
	// 计算属性名
	[thename + 123]: 666
}

// 数组解构
const names = ['abc', 'cba', 'nba']
// 普通结构
const [item1, item2, item3] = names
// 顺序解构
const [, , i3] = names
// 解构创建新数组
const [i1, ...newNames] = names
// 解构赋默认值
const [ix, iy, iz, is = 666] = names

// 对象解构
// 普通解构
const { thename, foo, zzt123 } = obj
// 无序解构
const { foo, zzt123, thename } = ojb
// 改属性名
const { thename: newName } = obj
// 赋默认值
const { address = '深圳市' } = obj

/**
 * var 与 let/const 的4点区别
 * 1.重复声明的区别
 * 	var 声明的标识符可以重复声明，let/const 不可以
 * 2.作用域提升的区别
 * 	var 声明的标识符会进行作用域提升，可以在声明之前进行访问，let/const 则会报错
 * 2.存放位置的区别
 * 	1.ECMA3及以下规定：每一个执行上下文都会关联一个变量环境（Variable Object，VO），源代码中变量和函数声明会作为属性添加到VO中，函数中的参数也会作为属性保存到 VO 中。
 * 	2.ECMA3以上规定：每一个执行上下文都会关联到一个变量环境（Variable Environment，VE），执行代码中变量和函数会作为环境记录（Environment Record）保存到变量环境中
 * 	V8引擎中是通过 VariableMap 中的一个 hashMap 来实现它们的存储
 * 	window 对象最早是作为 GO 对象，最新实现其实是浏览器添加的全局对象，并保留了 window 和 var 之间值的相等性
 * 4.块级作用域的区别
 * 	var 声明的标识符没有块级作用域，ES6中 let/const function, class 声明的标识符有块级作用域（兼容ES5及以下的JS引擎对函数声明做了特殊处理，允许像 var 那样提升）
 */

/**
 * ES5中产生作用域的2中情况
 * 1.全局作用域
 * 2.函数作用域
 */

/**
 * ES6 中块级作用域有哪些使用场景
 * 代码块{}, if(){}, switch(){}, for循环
 */

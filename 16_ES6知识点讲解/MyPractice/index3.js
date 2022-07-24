/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-16 20:50:22
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-16 23:15:09
 * @LastEditContent: 
 */
// ES6 中字面量增强的3种写法
const name = 'Lingz'
const age = 29
const obj = {
	// 属性的简写
	name,
	// 方法的简写
	foo() { },
	// 计算属性名
	[name + 123]: 666
}
console.log(obj);

// 数组解构
const arr = [1, 2, 3]
// 普通解构
const [item1, item2, item3] = arr
// 顺序解构
const [, , i3] = arr
// 创建新数组
const [i1, ...newArr] = arr
// 赋默认值
const [ix, iy, iz, is = 666] = arr

// 数组结构
// 普通结构
const { name, foo, lingz123 } = obj
// 按属性名解构
const { foo, lingz123, foo } = obj
// 重命名
const { name: newName } = obj
// 赋默认值
const { address = 'Menchester' } = obj

// var 与 let/const 的4点区别
/**
 * 1.重复声明的区别
 * 	用 var 声明的标识符可进行重复声明，let/const 则不行
 * 2.作用域提升的区别
 * 	用 var 生命的标识符可在声明之前进行访问，let/const 则会报错
 * 2.存储位置的区别
 * 	ECMA3及以下：每一个执行上下文都会关联到一个变量环境（variable object / VO），源代码种的变量和函数声明会作为属性添加到VO中，对于函数来说，函数的参数也会保存在VO中
 * 	ECMA3以上：每一个执行上下文都会关联到一个变量环境（variable Environment/ VE），执行函数中的变量和函数会作为环境记录（Environment Record）添加到变量环境中
 * 	在V8引擎中通过 VariableMap 中的一个 hashMap 实现它们的存储
 * 	window是早期的 GO 对象，最新的实现中其实是浏览器添加的全局变量，并且一直保留了 window 和 var 之间值的相等性
 * 4.块级作用域的区别
 * 	var 声明的标识符没有块级作用域，let/const, function, class 等声明的标识符是有块级作用域的（兼容 ES5 及以下的JS引擎对函数声明进行了特殊处理，允许像 var 那样提升）
 */

/**
 * ES5 中产生作用域的两种情况
 * 1.全局作用域
 * 2.函数作用域
 */

/**
 * ES5 中快级作用域有哪些应用场景
 * {}, if(){}, switch(){}, for循环
 */
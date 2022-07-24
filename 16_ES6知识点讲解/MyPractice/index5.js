/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-18 15:52:24
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-18 16:18:31
 * @LastEditContent: 
 */

/**
 * ES6中字面量增强的3种写法
 */
const nam = 'lingz'
const age = 18
const obj = {
	// 1.属性名简写
	nam,
	// 方法名简写
	foo() { },
	// 计算属性名
	[nam + 123]: 'aaa'
}

/**
 * 数组结构
 */
const arr = ['abc', 'cba', 'nba']
const { item1, item2, itme3 } = arr // 普通结构
const [, , i3] = arr // 顺序解构
const [i1, ...newarr] = arr // 解构创建新数组
const [ix, iy, iz, is = 666] = arr // 解构赋默认值
/**
 * 数组结构
 */
const obj2 = { name: 'zzt', age: 18, sno: 888 }
const { name, age, sno } = obj2 // 普通结构
const { age, sno, name } = obj2 //按属性名解构
const { name: newName } = obj2 // 解构并重命名
const { name, age, address = '深圳市' } = obj2 // 解构并赋默认值
// 直接解构函数参数对象
function foo({ name, age }) {
	console.log(name, age);
}

/**
 * var与let/const的区别
 * 1.重复声明的区别
 * 	var声明的标识符可以进行重复声明，let/const不行
 * 2.作用域提升的区别
 * 	var声明的标识符，在声明之前可进行访问，let/const不行
 * 3.存放位置的区别
 * 	ECMA3及以下：每一个执行上下文会关联一个变量对象（Variable Object, VO），源代码种声明的变量和函数会作为属性添加到VOL上，对于函数来说，函数的参数也会被添加到VO上
 * 	ECMA3以上：每一个执行上下文会关联一个变量环境（Variable Environment, VE)，执行函数中声明的变量和函数会作为环境记录（Environment Record）添加到其中
 * 	V8引擎使用 VariableMap 中的一个 hashMap 来保存它们
 * 	window对象是早期的GO对象，在最新实现中其实是浏览器添加的全局对象，并一直保留了window和var之间值的相等性
 * 4.快级作用域的区别
 * 	var没有会计作用域，let/const, function, class 声明的标识符有块级作用域（在兼容ES5及以下的JS引擎中会对函数的声明做特殊处理，允许像var那样提升）
 */

/**
 * ES6中产生作用域的两种情况
 * 1.全局作用域
 * 2.函数作用域
 */

/**
 * ES6中的块级作用域有哪些应用场景
 * if(){}，for循环，Switch(){}，{}
 */
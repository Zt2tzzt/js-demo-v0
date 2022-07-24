/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-19 20:58:20
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-19 22:15:37
 * @LastEditContent: 
 */
/**
 * ES6中字面量增强的3种写法
 */
const name = 'lingz'
const obj = {
	// 属性名简写
	name,
	// 方法名简写
	foo() {
		console.log('foo');
	},
	// 计算属性名
	[name + 123]: 666
}

/**
 * 数组结构
 */
const arr1 = [1, 2, 3, 4]
// 普通解构
const [ia, ib, ic, id] = arr1
// 顺序解构
const [, , , i4] = arr1
// 解构并创建新数组
const [i1, ...newArr] = arr1
// 解构并赋默认值
const [, , , , ie = 666] = arr1
/**
 * 对象解构
 */
const obj1 = { name: 'lingz', age: 29, height: 1.75, weight: 70 }
// 普通解构
const { name, age, height, weight } = obj1
// 暗属性名解构
const { age, weight } = obj1
// 解构并重命名
const { age: newAge } = obj1
// 解构并赋默认值
const { number = 14 } = obj1

/**
 * var与let/const的4点区别
 * 	1.重复声明的区别
 * 		使用var声明的标识符可进行重复声明，let/const不行
 * 	2.作用于提升的区别
 * 		使用var声明的标识符，可在声明前对他进行访问，let/const会报错
 * 	3.存放位置的区别
 * 		ECMAScript3及以下：每一个执行上下文都会关联一个变量对象（Variable Object，VO)，源代码种的变量，函数和函数的参数会作为属性添加到VO中
 * 		ECMAScript3以上：每一个执行上下文都会关联一个变量环境（Variable Environment，VE），执行代码中的变量和函数会作为环境记录（Environment Record）添加到其中
 * 		V8引擎通过VariableMap中的一个hashMap来存放它们
 * 		window对象是早期的GO对象，其实是浏览器添加的全局对象，并且一直保留了window和var之间值的相等性。
 * 	4.块级作用域的区别
 * 		用var声明的标识符没有会计作用域，let/const，function，class有块级作用域（兼容ES5及以下的JS引擎对函数做了特殊处理，允许像var那样提升）
 */

/**
 * ES5中产生作用于的2种情况
 * 	1.全局作用域
 * 	2.函数作用域
 */

/**
 * ES6中块级作用域有哪些应用场景
 * 	if(){}, switch(){}, for循环，{}
 */
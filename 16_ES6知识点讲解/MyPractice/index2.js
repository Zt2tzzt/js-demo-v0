/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-16 14:01:38
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-17 16:43:12
 * @LastEditContent: 
 */
// ES6 中字面量增强的三种写法
const name = 'zzt'
const age = 18
const obj = {
	// 属性的简写
	name,
	// 方法的简写
	foo() {
		console.log('foo');
	},
	// 计算属性名
	[name + 123]: 666
}

// 数组结构
const arr = [1, 2, 3]
// 普通解构
const [item1, item2, item3] = arr
// 顺序解构
const [, , i3] = arr
//创建新数组
const [i1, ...newArr] = arr
// 默认值
const [ix, iy, iz, is = 'aaa1'] = arr

// 对象解构
// 普通解构
const { name, age, zzt123 } = obj
// 任意顺序
const { age, zzt123, name } = obj
// 重命名
const { name: newName } = obj
// 默认值
const { name: newName = 'abaaba' } = obj

/**
 * var 与 let/const 的4点区别
 * 1.重复声明的区别
 * 	var 可以重复声明标识符，let/const 则不行
 * 2.作用域提升的区别
 * 	在 var 声明的标识符之前，访问该标识符不会报错，而在 let/const 声明的标识符之前访问该变量，算然已经创建，但是会报错
 * 3.存储位置的区别
 * 	ECMA3及以下：每一个执行上下文会关联到一个环境变量（varible Object)，源代码中变量和函数声明会作为属性保存到 VO 中，对于函数来说，参数同样也会保存到 VO 中
 * 	ECMA3以上：每一个执行上下文会关联到一个环境变量（varible Environment)，执行函数中变量和函数会作为环境记录（Environment record)保存到环境变量中
 * 	V8 引擎通过 VariableMap 中的一个 hashMap 实现对它们的存储
 * 	window 对象是早期的 GO 对象，在最新的实现中其实是浏览器添加的全局对象，并一直保留了 window 与 var 之间值的相等性
 * 4.快级作用域的区别
 * 	var 声明的标识符没有快级作用域，用 let/const, function, class 声明的标识符是有块级作用域的（在兼容 ES6 以下的JS引擎中对 function 有特殊处理，允许像 var 那样提升
 */

/**
 * var 与 let/const 的4点区别
 * 1.重复声明的区别
 * 	var 声明的标识符可进行重复声明，let/const 则不行
 * 2.作用域提升的区别
 * 	var 声明标识符之前可对标识符进行方法，let/const 则会报错
 * 3.存储位置的区别
 * 	ECMA3及以下：每一个执行上下文会关联一个变量环境（variable Object)，源代码中变量和函数会作为属性保存到 VO 上，对于函数来说，其参数也会保存到 VO 上
 * 	ECMA3以上：每一个执行上下文会关联一个变量环境（Variable Environment），执行代码中变量和函数会作为环境记录（Environment Record）保存到变量环境中
 * 	V8引擎通过 VariableMap 中的一个 hashMap 实现它们的存储
 * 	window 对象是早期的 GO 对象，在最新实现中其实是浏览器添加的全局变量，并且一直保留了 window 和 var 之间值的相等性
 * 4.快级作用域的区别
 * 	var 生命的标识符没有块级作用域，而在ES6中使用 let/const, function, class 声明的标识符是由快级作用域的（兼容ES6以下的JS引擎会对 function 进行特殊的处理，允许像 var 一样进行提升）
 */

/**
 * ES5中产生作用域的两种情况
 * 1.全局作用域
 * 2.函数作用域
 */

/**
 * ES6 中的快级作用域 {}, for循环, inf(){}, switch(){}
 */
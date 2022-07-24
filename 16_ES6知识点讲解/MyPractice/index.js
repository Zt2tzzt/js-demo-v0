/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-16 09:08:34
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-07-01 14:37:25
 * @LastEditContent: 
 */
// ES6 中字面狼增强的3种写法
const nam = 'zzt'
const age = 18
const obj = {
	// 属性的简写
	nam,
	// 方法的简写
	foo() {
		console.log(this)
	},
	// 计算属性名
	[nam + 123]: '哈哈'
}
obj.foo()

/**
 * 数组解构
 * 基本解构, 顺序解构, 解构出数组, 默认值
 */
const names = ['abc', 'cba', 'nba']
const [i1, i2, i3] = names
const [, , iz] = names
const [ix, ...newArr] = names
const [ia, ib, ic, id = 'aaa'] = names

/**
 * 对象解构:
 * 基本解构过程, 任意顺序, 重命名, 默认值
 */
const obj1 = {
	name: 'zzt',
	age: 18,
	height: 1.88
}
const { name, age, height } = obj
const { height, name, age } = obj
const { name: newName } = obj
const { address: newAddress = '广州市' } = obj
// 直接结构函数中的参数
function foo({ name, age }) {
	console.log(name, age);
}

/**
 * var 与 let/const 的4点区别
 * 1.重复声明的区别: 用 var 声明的变量可以进行重复声明, let/const 则不行
 * 2.作用域提升的区别: 用 var 声明的变量会进行作用于提升, let/const 则不会
 * 	用 var 声明的变量, 在声明之前访问不会报错, let/const 在声明之前虽然已经创建, 但访问会报错
 * 3.存放位置的区别: 
 * 	ECMA3及以下: 每一个执行上下文会被关联到一个变量对象（variable object, VO）, 在源代码中的变量和函数声明会被作为属性添加到VO中，对于函数来说，参数也会被添加到 VO 中
 * 	ECMA3以上：每一个执行上下文会关联到一个变量环境（Variable Enviroment，VE），在执行代码中变量和函数的声明会作为环境记录（Environment Record），添加到变量环境中。
 * 	V8 引擎通过 variableMap 的一个 hashmap 来实现它们的存储
 * 	Window 对象是早期的 GO 对象，在最新的实现中其实是浏览器添加的全局对象，并且一直保留了 window 和 var 之间值的相等性
 * 4.块级作用域的区别：
 * 	用 var 声明的标识符，没有快级作用域。用 let/const, function, class 声明的标识符是有块级作用域的 （兼容 ES6 以下的JS引擎，会对函数声明进行特殊处理，允许像 var 那样提升）
 */

/**
 * ES5 中产生 作用域的两种情况
 * 1.全局作用域
 * 2.函数作用域
 */

/**
 * ES6 中的块级作用域应用场景举例
 * for循环，if(){}, switch, 代码块{}
 */


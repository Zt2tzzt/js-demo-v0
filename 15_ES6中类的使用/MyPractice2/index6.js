/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-22 16:07:39
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-12 15:14:34
 * @LastEditContent: 
 */
/**
 * 创建类继承内酯类
 */
class MyArray extends Array {
	firstItem() {
		return this[0]
	}
	lastItem() {
		return this[this.length - 1]
	}
}
const arr = new MyArray(1, 2, 3)
console.log(arr.firstItem());
console.log(arr.lastItem());

/**
 * JS中实现混入的效果
 */
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
}
function mixinRunner(BaseClass) {
	return class extends BaseClass {
		running() {
			console.log(this.name, 'running');
		}
	}
}

/**
 * 多态的概念，传统的面向对象中多态的3个前提
 * 	1.多态指为不同的数据类型实体提供想听的接口，或者使用单一的符号来表示不同的数据类型
 * 	2.对不同的数据类型执行同一操作时，表现出的行为（形态）不一致时，也被称为多态
 * 3个前提
 * 	1.必须有继承
 * 	2.必须有重写（子类方法重写父类方法）
 * 	3.必须有父类引用指向子类对象。
 */

/**
 * ES6中字面量增强的3种写法（ES6）
 */
const nam = 'lingz'
const obj = {
	// 属性名简写
	nam,
	// 方法名简写
	foo() { },
	// 计算属性名
	[nam + 123]: 666
}

/**
 * 数组解构和对象解构
 */
const arr1 = [1, 2, 3]
// 普通结构
const [i1, i2, i3] = arr1
// 顺序解构
const [, , i] = arr1
// 解构并创建新数组
const [ia, ...newArr] = arr1
// 解构并赋默认值
const [ix, iy, iz, is = 666] = arr1
//对象解构-----------
const obj1 = { name: 'lingz', age: 29, height: 175 }
// 普通结构
const { name, age, height } = obj1
// 暗属性名解构
const { age, height, name } = obj1
// 解构并重命名
const { name: newName } = obj1
// 解构并赋默认值
const { age = 18 } = obj1

/**
 * var与let/const的4点区别
 * 1.重复声明的区别
 * 	var声明的标识符可以重复声明，let/const不可以
 * 2.作用于提升的区别
 * 	var声明的标识符有在声明之前可进行访问，let/const则会报错
 * 3.存放位置的区别
 * 	ECMA5及以下：每一个执行文本会关联一个变量对象（Variable Object，VO），源代码中的变量和函数包括函数的参数会作为属性添加到VO中
 * 	ECMA5以上：每一个执行文本会关联一个变量环境（Variable Environment，VE），执行代码中的变量和函数会作为环境记录（Environment Record）添加到其中
 * 	V8引擎通过VariableMap中的一个hashMap来保存它们
 * 	window对象是早期的GO对象，在最新实现中其实是浏览器添加的全局对象，并一直保留了window和var之间值得相等性
 * 4.块级作用域的区别
 * 	var声明的标识符没有块级作用域，let/const, class, function等声明的标识符有块级作用域，（兼容ES5及以下的JS引擎对函数做了特殊处理，允许像var那样提升）
 */

/**
 * ES5中产生块级作用域的2中情况
 * 	1.全局作用域
 * 	2.函数作用域
 */

/**
 * ES6中块级作用域有哪些应用场景
 * if(){}, switch(){}, for循环, 代码块{}
 */

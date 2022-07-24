/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-30 10:46:14
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-30 13:29:16
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
const a = new MyArray(1, 2, 3)
console.log(a.firstItem(), a.lastItem())

/**
 * JS中实现混入的效果
 */
function mixinRunner(BaseClass) {
	return class extends BaseClass {
		running() {
			console.log(this.name, 'running');
		}
	}
}
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
}
Person = mixinRunner(Person)
const p = new Person('zzt', 18)
p.running()

/**
 * 多态的概念，传统的面向对象多态的3个前提
 * 	多态指为不同的数据类型实体提供统一的接口，或使用单一的符号来表示不同的数据类型
 * 	对不同的数据类型进行同一操作，表现出来的行为（形态）不一样也成为多态
 * 
 * 	1.必须有继承
 * 	2.必须有重写（子类重写父类方法）
 * 	3.必须有父类引用指向子类对象
 */

/**
 * ES6中字面量增强的3种写法
 */
const name = 'jlinz'
const obj = {
	// 属性名简写
	name,
	// 方法名简写
	foo() {
		console.log('Hello');
	},
	// 计算属性名
	[name + 123]: 666
}

/**
 * 数组解构和对象解构
 */
const arr = [1, 2, 3]
// 普通结构
const [i1, i2, i3] = arr
//顺序解构
const [, i,] = arr
// 解构并创建数组
const [ia, ...newArr] = arr
// 解构并赋默认值
const [ix, iy, iz, is = 666] = arr

const info = { name: 'zzt', age: 28, number: 14, team: 'unity' }
// 普通解构
const { naem, age, number, team } = info
// 按照属性名解构
const { age, team } = info
// 解构并重命名
const { tema: newTeam } = info
// 解构并赋默认值
const { friend = 'rice' } = info

/**
 * var与let/const的区别
 * 	1.重复声明的区别
 * 		var声明的变量名可被重复声明，let/const则不行
 * 	2.作用域提升的区别
 * 		var声明的变量存在作用提升，可在声明前进行访问，而let/const声明的变量，在声明之前虽然已经创建，但访问会报错。
 * 	3.存放位置的区别
 * 		ECMA3及以下：每一个执行上下文会关联一个变量对象VO，源代码中的变量，函数声明和函数的参数会作为属性添加到VO上
 * 		ECMA3以上：每一个执行上下文会关联一个变量环境（Variable Environment，VE），在执行代码中的变量，函数的声明会作为环境记录（Environment Records）保存到VE中
 * 		V8中使用VariableMap中的一个hashMap来保存他们
 * 		window对象是早期的GO对象，在最新的浏览器实现中作为一个全局对象，并且一直保留了window和var值的相等性
 * 	4.块级作用域的区别
 * 		var声明的变量没有块级作用域，let/const，function class声明的标识符有块级作用域（兼容ES5一下的JS引擎会对函数声明进行特殊处理，允许像var那样提升
 * 		
 */

/**
 * ES5中产生作用域的2种情况
 * 	全局作用域
 * 	函数作用域
 */

/**
 * ES6中的块级作用域有哪些应用场景
 * if() {}, switdh() {}, {}, for循环
 */
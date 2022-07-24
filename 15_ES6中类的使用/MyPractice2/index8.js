/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-14 19:10:55
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-15 10:57:51
 * @LastEditContent: 
 */
/**
 * 创建类集成内置类
 */
class MyArray extends Array {
	firstItem() {
		return this[0]
	}
	lastItem() {
		return this[this.length - 1]
	}
}
const myArr = new MyArray(1, 2, 3)
console.log(myArr.firstItem());
console.log(myArr.lastItem());

/**
 * JS中实现混入的效果(在JS中，类只能有一个父类，单继承)
 */
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	running() {
		console.log(this.name, 'running');
	}
}
class Student extends Person {
	constructor(name, age, sno) {
		super(name, age)
		this.sno = sno
	}
}
function mixinEater(BaseClass) {
	return class extends BaseClass {
		eating() {
			console.log(this.name, 'eating');
		}
	}
}

/**
 * 多态的概念，传统的面向对象多态的3个前提
 * 1.指为不同数据类型的实体提供统一的接口，或者适用单一的符号表示不同的数据类型称为多态
 * 2.对不同的数据类型进行同一操作时，如表现出不同的行为（形态）称为多态
 * 3个前提
 * 1.必须有继承
 * 2.必须有重写（子类重写父类方法。）
 * 3.必须有父类引用指向子类对象。
 */

/**
 * ES6中字面量增强的3种写法
 */
const msg = 'zzt'
const obj = {
	// 属性名简写
	msg,
	// 方法名简写
	foo() {
		console.log(this);
	},
	// 计算属性名
	[msg + 123]: 666
}

/**
 * 数组结构和对象结构
 */
// 数组
const arr = [1, 2, 3, 4]
// 1.普通解构
const [i1, i2, i3, i4] = arr
// 2.顺序解构
const [, , i,] = arr
// 3.解构并创建新数组
const [...newArr, i4] = arr
// 4.解构并赋默认值
const [, , , , i5 = 5] = arr

// 对象
const objx = { name: 'lingz', age: 18, number: 14 }
// 1.普通解构
const { name, age, number } = objx
// 2.暗属性名解构
const { number, age } = objx
// 3.解构并重命名
const { name: newName } = objx
// 4.解构并赋默认值
const { team = 'West Ham' } = objx
// 直接解构函数中的参数
function foo({ name, age }) {
	console.log(name, age);
}

/**
 * var与let/const的区别，4点
 * 1.重复声明的区别
 * 	var定义的变量可以重复声明，let/const不可以
 * 2.作用域提升的区别
 * 	var定义的变量可在定义之前对它进行访问，而let/const不行
 * 3.存放位置的区别
 * 	ECMA5以下：每一个执行上下文会关联一个变量对象（varibal Object), 源代码中变量，函数和函数的参数会作为属性添加到VO
 * 	ECMA55之后，每一个执行上下文会关联一个变量环境（Variable Enviroment）在执行代码中的变量和函数会作为环境记录（Environment Record）添加到其中
 * 	v8使用VariableMap中的一个HashMap实现他们的存储
 * 	window对象是早期的GO对象，在最新的实现中其实是浏览器添加的全局对象，并且一直保留了window和var之间值的相等性
 * 4.块级作用域的区别
 * 	var声明的变量没有快级作用域，而let/const，class, function, 声明的标识符有块级作用域（兼容ES6以下的JS引擎，会对函数声明进行特殊处理，允许像var那样提升）
 */

/**
 * ES5中产生作用域的2种情况
 * 1.全局作用域
 * 2.函数作用域
 */

/**
 * 使用ES5实现4个按钮监听点击的案例
 */

/**
 * ES6中块级作用域有哪些应用场景
 * if() {}, switch() {}, for循环，{}
 */

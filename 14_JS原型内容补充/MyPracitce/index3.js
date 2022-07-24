/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-20 08:31:21
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-20 08:56:33
 * @LastEditContent:
 */
/**
 * 属性描述符的分类
 * 数据描述符：
 * 	configurable, enumerable, writable, value
 * 存取（访问）描述符
 * 	configurable, enumerable, get, set
 * 各配置项的意义和默认值
 * 	1.configurable：表示是否可以使用delete删除该属性，是否可以修改属性的特性，是否可以修改为访问属性描述符
 * 		默认值：直接定义时，true，通过属性描述符定义：false
 * 	2.enumerable：表示是否可以通过for...in/Object.keys等方法返回值
 * 		默认值：直接定义时，true，通过属性描述符定义：false
 * 	3.writable：表示是否可以修改属性值
 * 		默认值：直接定义时，true，通过属性描述符定义：false
 * 	4.value：表示属性值，访问该属性时返回的值
 * 		默认值：undefined
 * 	5.get：获取属性时会执行的函数，默认值为undefined
 * 	6.set：设置属性时会执行的函数，默认值为undefined
 */

/**
 * Object对象的5种方法
 */
/* Object.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptors()
Object.preventExtensions()
Object.seal() // 不允许配置，新增或删除属性，相当于执行了prevnetExtensions方法后，将属性configurable: false
Object.freeze() // 实际是调用seal方法后，将属性writable: false
Object.prototype.isPrototypeOf()
Object.prototype.hasOwnProperty() */
//for...in/in
//instanceof

/**
 * 函数被new操作符调用执行的5步操作
 * 	1.在内存中创建一个对象
 * 	2.将函数的显式原型赋值给该对象的隐式原型
 * 	3.将函数内部的this指向该对象
 * 	4.运行函数内部代码
 * 	4.如函数未返回非空对象，则返回该对象
 */

/**
 * 使用ES5写一个构造函数，并且实现寄生组合式继承
 */
function inheritFunction(SubClass, SuperClass) {
	SubClass.prototype = Object.create(SuperClass.prototype)
	Object.defineProperty(SubClass.prototype, 'constructor', {
		configurable: true,
		enumerable: false,
		writable: true,
		value: SubClass
	})
}
function Person(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.running = function () {
	console.log(this.name, 'running');
}
function Student(name, age, sno) {
	Person.call(this, name, age)
	this.sno = sno
}
inheritFunction(Student, Person)
Student.prototype.studying = function () {
	console.log(this.name, 'studying');
}

/**
 * 对象的原型继承办法的3种写法
 */
const obj = { name: 'lingz', age: 29 }
// 第一种写啊
const info1 = Object.create(obj)
// 第二种写法
function createObject1(o) {
	const newObj = {}
	Object.setPrototypeOf(newObj, o)
	return newObj
}
const info2 = createObject1(obj)
// 第三种写法
function createObject2(o) {
	function Fn() { }
	Fn.prototype = o
	return new Fn
}
const info3 = createObject2(obj)
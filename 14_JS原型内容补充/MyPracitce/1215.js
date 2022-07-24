/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-15 20:36:05
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-15 21:18:08
 * @LastEditContent:
 */
// 属性描述符的分类，各配置项的意义和默认值
/**
 * 数据属性描述符：
 * 	configurable, enumerable, writable, value
 * 存储（访问）属性描述符：
 * 	configurable, enumerable, get, set
 * 1.configurable: 表示属性是否可以被运算符 delete 删除，是否可以修改属性的特性，是否可以将属性描述符修改为存储属性描述符
 * 	默认值：直接定义：true, 属性描述符定义：false
 * 2.enumerable: 表示属性是否可以通过 for...in 或者 Object.keys() 返回该属性
 * 	默认值：直接定义：true, 属性描述符定义：false
 * 3.writable：表示属性是否可以被修改值
 * 	默认值：直接定义：true, 属性描述符定义：false
 * 4.value：表示属性的值，读取属性时会返回该值
 * 	默认值：undefined
 */

// Object 的5种方法，和4种方法的补充
/* Object.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptors()
Object.preventExtensions()
Object.seal() // 实际上相当于调用了 preventExtensions 并且将现有属性 configurable: false
Object.freeze() // 实际上相当于调用 seal 并且将现有属性 writable: false
Object.prototype.hasOwnProperty()
Object.prototype.isPrototypeOf() // 查找对象是否在指定对象原型链上 */
// in / for...in
// instanceof

/**
 * 函数被 new 操作符调用执行的 5 步操作
 * 1.在内存中创建一个对象
 * 2.将构造函数的 prototype 赋值给该对象的 [[prototype]]
 * 3.将构造函数内的 this 指向该对象
 * 4.运行构造函数内的代码
 * 5.如构造函数未返回非空对象，则返回该对象
 */

// 使用 ES5 写一个构造函数，并实现寄生组合式继承
function Person(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.running = function () {
	console.log(this.name + 'running')
}

function inheritClass(SubClass, SuperClass) {
	SubClass.prototype = Object.create(SuperClass.prototype)
	Object.defineProperty(SubClass.prototype, 'constructor', {
		configurable: true,
		enumerable: false,
		writable: true,
		value: SubClass
	})
}

function Student(name, age, sno) {
	Person.call(this, name, age)
	this.sno = sno
}
inheritClass(Student, Person)
Student.prototype.studying = function () {
	console.log(this.name + 'studying')
}

// 对象的原型链继承办法
var obj = { name: 'zzt', age: 18 }
// 第一种写法
var info = Object.create(obj)
// 第二种写法
function createObj1(o) {
	var newObj = {}
	Object.setPrototypeOf(newObj, o)
	return newObj
}
var info2 = createObj1(obj)
// 第三种写法
function createObj2(o) {
	function Fn() { }
	Fn.prototype = o
	return new Fn()
}
var info3 = createObj2(obj)

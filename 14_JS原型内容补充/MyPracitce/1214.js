/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-14 23:24:22
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-06-27 09:05:14
 * @LastEditContent: 
 */
/**
 * 属性描述符的分类,各配置项的意义和默认值
 * 数据属性描述符:
 * 	configurable, enumerable, writable, value
 * 存储属性描述符：
 * 	configurable, enumerable, get, set
 * 1. configurable: 表示属性是否能通过 delete 运算符删除，能否可以修改它的特性，能否被改为存储属性描述符
 * 	默认值：直接定义，true, 通过属性描述符定义：false
 * 2.enumerable: 表示属性能否通过 for...in / Object.keys() 返回该属性
 * 	默认值：直接定义，true, 通过属性描述符定义：false
 * 3.writable: 表示属性值是否可被修改
 * 	默认值：直接定义，true, 通过属性描述符定义：false
 * 4.value: 表示属性的值
 * 	默认值：undefined
 * get: 获取属性时会执行的函数，默认为 undefined
 * set: 设置属性时会执行的函数，默认为 undefined
 */

// Object 对象的5种方法，和4种相关方法补充
Object.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptors()
Object.preventExtensions()
Object.seal() // 实际相当于调用 preventExtensions 后，将属性 configurable: false
Object.freeze() // 相当于调用 seal 后，将属性 writable: false
Object.prototype.hasOwnProperty()
// for...in / in
// instanceof
Object.prototype.isPrototypeOf()

/**
 * 函数被 new 操作符调用，执行的5步操作
 * 1.在内存中创建一个对象。
 * 2.将构造函数的 prototype 赋值给该对象的[[prototype]]
 * 3.将构造函数的 this 指向该对象
 * 4.运行构造函数内的代码
 * 5.如果构造函数内没有非空的返回值，则返回该函数
 */

// 使用 ES5 写一个构造函数，并实现寄生组合式继承
function Person(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.eating = function () {
	console.log(this.name + 'eating')
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
inheritPrototype(Student, Person)
Student.prototype.studying = function () {
	console.log(this.name + 'studying')
}

// 对象的原型链继承办法 setPrototypeOf, Object.create(), 早期道格拉斯的写法
var obj = { name: 'zzt', age: 18 }
// 第一种方法
var info1 = Object.create(obj) // 创建一个info对象，info对象的隐式原型指向obj对象
// 第二种写法
function createObj1(o) {
	var newObj = {}
	Object.setPrototypeOf(newObj, o)
	return newObj
}
var info2 = createObj1(obj)
// 第三种写法
function cerateObj2(o) {
	function Fn() { }
	Fn.prototype = o
	return new Fn()
}
var info3 = cerateObj2(obj)


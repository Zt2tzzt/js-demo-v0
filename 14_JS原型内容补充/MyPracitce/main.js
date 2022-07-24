/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-14 14:06:14
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-14 17:52:15
 * @LastEditContent: 
 */
/**
 * 属性描述符的分类，各配置项的意义和默认值
 * 	数据属性描述符：
 * 		configurable, enumerable, writable, value
 * 	存储（访问）属性描述符
 * 		configurable, enumerable, get, set
 * 	1.configurable: 用于表示属性是否可以被 delete 操作符删除, 是否可以被修改它的特性, 或者是否可以配置为存储属性描述符,
 * 		直接定义, 默认值为 true, 通过属性描述符定义, 默认值为 false
 * 	2.enumerable: 用于表示对象属性是否可以通过 for...in, Object.keys() 返回该属性
 * 		直接定义, 默认值为 true, 通过属性描述符定义, 默认值为 false
 * 	3.writable: 用于表示对象属性是否可以被重新设置值
 * 		直接定义, 默认值为 true, 通过属性描述符定义, 默认值为 false
 * 	4.value: 用于表示属性的值
 * 		默认值: undefined
 */

// Object 对象的5种方法和4种相关方法补充
/* Object.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptors()
Object.preventExtensions()
Object.seal() // 实际上等同于调用 preventExtensions, 并将对象属性 configurable: false
Object.freeze() // 实际上相当于调用 seal 方法, 并将对象属性 writable: false
Object.prototype.hasOwnProperty()
// for...in / in
// instanceof
Object.prototype.isPrototypeOf() */

/**
 * 函数被 new 运算符调用执行的5步操作
 * 	1.在内存中创建一个对象
 * 	2.该对象的[[prototype]]被赋值为构造函数的prototype
 * 	3.构造函数种的this指向创建出来的对象
 * 	4.运行构造函数中的代码
 * 	5.如果构造函数未返回非空对象,则返回创建出来的对象
 */

// 使用 ES5 写一个构造函数.
function Person(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.eating = function () {
	console.log(this.name + '在吃东西')
}
Person.prototype.running = function () {
	console.log(this.name + '在跑步')
}

function inheritPrototype(SubType, SuperType) {
	SubType.prototype = Object.create(SuperType.prototype)
	Object.defineProperty(SubType.prototype, 'constructor', {
		configurable: true,
		enumerable: false,
		writable: true,
		value: SubType
	})
}

function Student(name, age, sno) {
	Person.call(this, name, age)
	this.sno = sno
}
inheritPrototype(Student, Person)
Student.prototype.studying = function () {
	console.log(this.name + '在学习')
}

// 对象的原型继承方法的3种写法
var obj = { name: 'zzt', age: 18 }
// 第一种写法
var info1 = Object.create(obj)
// 第二种写法
function createObject1(o) {
	var newObj = {}
	Object.setPrototypeOf(newObj, o)
	return newObj
}
var info2 = createObject1(obj)
// 第三种写法
function createObject2(o) {
	function fn() { }
	fn.prototype = 0
	return new fn()
}
var info3 = createObject2(obj)
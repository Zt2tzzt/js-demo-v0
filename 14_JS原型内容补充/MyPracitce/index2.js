/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-18 11:26:06
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-18 14:47:38
 * @LastEditContent:
 */
/**
 * 属性描述符的分类，各配置项的意义和默认值
 * 数据属性描述符：
 * 	configurable, enumerable, writable, value
 * 存取（访问）属性描述符：
 * 	configurable, enumerable, get, set
 * 1.configurable: 表示属性是否可以被 delete 删除，是否可以修改属性的特性，是否可以改为存取属性描述符
 * 2.enumerable：表示属性是否可以通过 for...in / Object.keys 等方法返回值
 * 3.writable：表示属性是否可以修改值
 * 4.value：表示属性的值，访问该属性时，返回该值
 * 5.get: 监听属性值的访问
 * 6.set：监听属性值的修改
 */

/**
 * Object对象的5种方法，和4种相关方法的补充
 */
/* Object.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptors()
Object.preventExtensions()
Object.seal() // 封闭一个对象，相当于调用了 prevnetExtensions 方法，并将属性 configurable: false
Object.freeze() // 冻结一个对象，相当于调用了 seal 方法，并将对象属性 writable: false
Object.prototype.isPrototypeOf()
Object.prototype.hasOwnProperty() */
// for...in / in
// instanceof

/**
 * 函数被new操作符调用，执行的5个步骤
 * 1.在内存中创建一个对象
 * 2.将函数的显式原型赋值给该对象的隐式原型。
 * 3.将函数内部的this指向该对象
 * 4.运行函数内部的代码
 * 5.若函数未返回非空对象，则返回该对象
 */

/**
 * 使用ES5写一个构造函数，并实现寄生组合式继承
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
	console.log(this.name + 'running');
}
function Studnet(name, age, sno) {
	Person.call(this, name, age)
	this.sno = sno
}
inheritFunction(Studnet, Person)
Studnet.prototype.studying = function () {
	console.log(this.name + 'studying');
}
new Studnet('zzt', 18, 666).studying()

/**
 * 对象的原型继承办法3种
 */
const obj = { name: 'zzt', age: 18 }
// 1.第一种
const info = Object.create(obj)
// 第二种
function createObject(o) {
	const newObj = {}
	Object.setPrototypeOf(newObj, o)
	return newObj
}
const info2 = createObject(obj)
// 第三种写法, 早期道格拉斯写法
function createObject2(o) {
	function Fn() { }
	Fn.prototype = 0
	return new Fn
}
const info3 = createObject2(obj)

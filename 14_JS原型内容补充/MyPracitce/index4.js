/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-28 22:11:48
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-28 23:38:58
 * @LastEditContent: 
 */
/**
 * 属性描述符的分类，各配置项的意义和默认值
 * 	数据属性描述符
 * 		configurable, enumerable, value, writable
 * 	存取（访问）属性描述符
 * 		configurable, enumerable, get, set
 * configurable:
 * 	用来表示属性是否可被delete删除，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符
 * 	默认值：直接定义：true，用属性描述符定义：false
 * enumerable:
 * 	表示属性是否可被for...in/Object.keys返回该属性
 * 	默认值：直接定义：true，用属性描述符定义：false
 * value:
 * 	表示属性的值，当读取该属性时，返回该值
 * 	默认值：undefined
 * writable:
 * 	表示属性是否可被修改
 * 	默认值：直接声明：true，用属性描述符声明：false
 * get：
 * 	获取属性时会执行的函数，默认为undefined
 * set：
 * 	设置属性时会执行的函数，默认为undefined
 * 	
 */

/**
 * Object的5种方法和4种4种相关方法的补充
 */
/* Object.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptors()
Object.preventExtensions() // 是一个对象不能添加新属性
Object.seal() // 实际相当于调用了preventExtension方法，并将configutable: false
Object.freeze() // 实际上相当于调用了seal方法，并将writable: false
Object.prototype.isPrototypeOf()
Object.prototype.hasOwnProperty() */
// for...in/in
// instanceof

/**
 * 函数被new运算符调用时执行的5个步骤
 * 	1.在内存中新建一个新对象
 * 	2.将函数的显式原型赋值给对象的隐式原型
 * 	3.将函数内部的this会指向创建出来的新对象
 * 	4.执行函数的内部代码
 * 	5.如函数未返回非空对象，则返回该对象
 */

/**
 * 使用ES5写一个函数，并实现寄生组合式函数
 */
function Person(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.running = function () {
	console.log(this.name + 'running');
}

function inheritPrototype(SubClass, SuperClass) {
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
var stu = new Student('zzt', 18, 666)
stu.running()

/**
 * 对象的原型链继承写法3种
 */
// 第一种
var obj = { name: 'jlinz', age: 28 }
var info = Object.create(obj)
// 第二种
function createObj1(o) {
	var newObj = {}
	Object.setPrototypeOf(newObj, o)
	return newObj
}
// 第3种
function createObj2(o) {
	function Fn() { }
	Fn.prototype = o
	return new Fn
}
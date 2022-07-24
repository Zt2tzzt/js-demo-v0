/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-12 15:41:53
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-12 17:54:15
 * @LastEditContent: 
 */

/**
 * 属性描述符的分类，各配置项的意义和默认值
 * 数据属性描述符
 * configurable: 表示属性能否被delete删除，是否可以修改它的特性，能否转成存取属性描述符
 * 默认值：直接定义：true，通过属性描述符定义：false
 * enumerable: 表示属性是否可以通过for...in/Object.keys()返回该属性。
 * 默认值：直接定义：true，通过属性描述符定义：false
 * writable: 表示属性的值是否可以被修改
 * 默认值：直接定义：true，通过属性描述符定义：false
 * value: 表示属性被访问时，返回的值
 * 默认值：undefined
 * 存取属性描述符
 * configurable: 同上
 * enumerable: 同上
 * get: 获取属性时，会执行的函数，默认值为undefined
 * set: 设置属性时，会执行的函数，默认值为undefined
 */

/**
 * Object对象的5种方法，和4种相关方法的补充
 */
const objx = { name: 'zzt', age: 18 }
Object.getOwnPropertyDescriptors(obj)
Object.getOwnPropertyDescriptor(objx, 'name')
Object.preventExtensions(objx) // 使一个对象不能添加新属性
Object.seal(objx) // 相当于调用了preventExtensions方法，并将属性configurable: false
Object.freeze(objx) // 相当于调用了seal()方法，并将属性writable: false
// for...in / instanceof
// Object.prototype.hasOwnProperty()
// Object.prototype.isPrototypeOf() // 用于检测某个对象是否出现在某个实例对象的原型链上

/**
 * 函数被new操作符调用时，执行的5步操作
 * 1.在内存中创建一个对象
 * 2.将函数的显式原型prototype赋值给对象的隐式原型
 * 3.将函数的this指向创建出来的新对象
 * 4.执行函数体内部代码
 * 5.如未返回非空对象，则返回该对象
 */

/**
 * 使用ES5写一个构造函数，并实现寄生组合式继承
 */
function Person(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.running = function () {
	console.log(this.name + 'running');
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

var stu = new Student('zzt', 18, 666)
stu.running()

/**
 * 对象的原项链继承办法，3种写法
 */
var obj = { name: 'zzt', age: 18 }
var info = Object.create(obj)

function createObj(o) {
	var newObj = {}
	Object.setPrototypeOf(newObj, o)
	return newObj
}
var info2 = createObj(obj)

function createObj2(o) {
	function Foo() { }
	Foo.prototype = o
	return new Foo
}
var info3 = createObj2(obj)

/**
 * 理解原型继承的关系图
 */
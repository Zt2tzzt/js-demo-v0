/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-14 10:24:06
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-22 13:59:14
 * @LastEditContent: 
 */
/**
 * 属性描述符的分类
 * 数据属性描述符
 * 	configurable, enumerable, value, writble
 * 存储（访问）属性描述符
 * 	configurable, enumerable, get, set
 * 
 * 	configurable: 表示属性是否可以通过 delete 删除属性，是否可以修改它的特性，或者是否可以将它修改为存储属性描述符
 * 		直接定义，默认值为 true，通过属性描述符定义：默认值为 false
 * 	enumerable: 表示属性是否可以通过 for...in, 或者 Object.keys() 返回该属性
 * 		直接定义，默认值为 true，通过属性描述符定义，默认值为 false
 * 	writable: 表示是否可以修改属性的值
 * 		直接定义：默认值为 true, 通过属性描述符定义，默认值为 false
 * 	value: 属性的 value 值，读取属性时会返回该值
 * 		默认值为 undefined
 * 	get: 获取属性时会执行的函数，默认为 undefined
 * 	set: 设置属性时会执行的函数，默认为 undefined
 */

// Object 对象的5中方法，和4种相关方法的补充
// Object.getOwnPropertyDescriptor(obj, [prop]) // 获取指定对象属性的属性描述符
// Object.getOwnPropertyDescriptors(obj)	// 获取指定对象的全部属性的属性描述符
// Object.preventExtensions(obj) // 使一个对象不能添加新属性
// Object.seal(obj) // 不允许配置和删除属性，实际是调用 preventExtensions，并且将现有属性的 configurable: false
// Object.freeze(obj) // 实际上是调用了 seal, 并且将现有属性的 writable: false
// Object.prototype.hasOwnProperty([prop])
// // in / for...in 运算符
// // instanceof 运算符
// Object.prototype.isPrototypeOf([obj]) // 用于检测某个对象是否出现在某个实例对象的原型链上

/**
 * 函数被 new 运算符调用执行的5步操作
 * 1.在内存中创建一个新对象
 * 2.这个对象内部的[[prototype]]属性会被赋值为该构造函数的 prototype 属性
 * 3.构造函数内部的 this 会指向创建出来的新对象
 * 4.执行函数的内部代码
 * 5.如果构造函数没有返回非空对象，则返回创建出来的新对象
 */

// 使用 ES5 写一个构造函数，使用寄生组合式继承
function Person(name, age, friends) {
	this.name = name
	this.age = age
	this.friends = friends
}
Person.prototype.eating = function () {
	console.log(this.name + '在吃东西')
}
Person.prototype.running = function () {
	console.log(this.name + '在跑步')
}

function inheritPrototype(subType, SuperType) {
	subType.prototype = Object.create(SuperType.prototype)
	Object.defineProperty(subType.prototype, 'constructor', {
		configurable: true,
		enumerable: false,
		writable: true,
		value: subType
	})
}

function Student(name, age, friends, sno, score) {
	Person.call(this, name, age, friends)
	this.sno = sno
	this.score = score
}
inheritPrototype(Student, Person)
Student.prototype.studying = function () {
	console.log('studying')
}



var p1 = new Person('zzt', 18, ['lilei'])
var p2 = new Person('Lingard', 18, ['Rice'])
p1.eating()
p2.eating()

let value1 = 111
const value2 = 222

// 对象的原型链继承
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
// 第三种写法，道格拉斯的写法
function createObject2(o) {
	function fn() { }
	fn.prototype = 0
	var newObj = new fn()
	return newObj
}
var info3 = createObject2(obj)

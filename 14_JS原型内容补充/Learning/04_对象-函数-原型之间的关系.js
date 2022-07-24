/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-27 15:28:19
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-27 15:48:35
 * @LastEditContent: 
 */
var obj = {
  name: 'zzt'
}

console.log(obj.__proto__)

// 对象里是有一个__proto__对象的: 隐式原型对象

// Foo 是一个函数, 那么它会有一个显示原型对象: Foo.prototype
// Foo.prototype = { constructor: Foo }

// Foo 是一个对象, 那么它会有一个隐士原型对象: Foo.__proto__
// Foo.__proto__来自哪里?
// Foo.__proto__ = Function.prototype
// Function.prototype = { constructor: Function }

// var Foo = new Function()
function Foo() {}

console.log(Foo.prototype === Foo.__proto__)
console.log(Foo.prototype.constructor)
console.log(Foo.__proto__.constructor)

var foo1 = new Foo()
var obj1 = new Object()

console.log(Object.getOwnPropertyDescriptors(Function.__proto__))

/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 20:50:19
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 20:58:48
 * @LastEditContent: 
 */
// 我们每个对象中都有一个[[prototype]], 这个属性可以称之为对象的原型(隐式原型)
var obj = {name: 'zzt'} // [[prototype]]
var info = {} // [[prototype]]

// 1.解释原型的概念和看一下原型
// 早期ECMA是没有规范如何去查看[[prototype]]

// 浏览器给对象提供了一个属性, 可以让我们查看一下这个原型对象
// __proto__
// console.log(obj.__proto__) // {}
// console.log(info.__proto__) // {}

// var obj = { name: 'zzt', __proto__: {} }

// ES5之后提供的Object.getPrototypeOf
console.log(Object.getPrototypeOf(obj))

// 2.原型有什么用呢?
// 当我们从一个对象中获取某一个属性时, 它就会触发[[get]]操作
// 1.在当前对象中去查找对应的属性,如果找到就直接使用
// 2.如果没有找到,那么会沿着它的原型去查找
// obj.age = 18
obj.__proto__.age = 18
console.log(obj.__proto__)
console.log(obj.age)
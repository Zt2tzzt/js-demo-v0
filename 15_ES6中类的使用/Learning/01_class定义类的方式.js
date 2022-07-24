/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-28 15:40:48
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-28 15:48:05
 * @LastEditContent: 
 */
// 类的声明
class Person {

}
// babel
var Animal = class {}

// 研究一下类的特性
console.log(Person.prototype)
console.log(Person.prototype.__proto__)
console.log(Person.prototype.constructor)
console.log(typeof Person)

var p = new Person()
console.log(p.__proto__ === Person.prototype)
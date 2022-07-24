/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-23 15:10:44
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-23 15:18:17
 * @LastEditContent: 
 */
/* var obj1 = {} // 创建了一个对象
var obj2 = new Object() // 创建了一个对象

function Person() {
} */

// var p = new Person()

var obj = {
  name: 'zzt',
  age: 18
}

var obj2 = {
  address: '北京市'
}
// obj.__proto__ = obj2

/* Object.prototype
console.log(obj.__proto__)
console.log(Object.prototype)
console.log(obj.__proto__ === Object.prototype) */

console.log(Object.prototype)
console.log(Object.prototype.constructor)
console.log(Object.prototype.__proto__)

console.log(Object.getOwnPropertyDescriptors(Object.prototype))
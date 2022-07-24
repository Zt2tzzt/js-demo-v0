/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-23 15:03:54
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-23 15:06:15
 * @LastEditContent: 
 */
var obj = {
  name: 'zzt',
  age: 18
}

// [[get]] 操作
// 1.在当前的对象中查找属性.
// 2.如果没有找到, 这个时候会去原型链对象上查找

obj.__proto__ = {}

// 原型链
obj.__proto__.__proto__ = {}

obj.__proto__.__proto__.__proto__ = {
  address: '上海市'
}

console.log(obj.address)
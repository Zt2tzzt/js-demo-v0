/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-12 13:54:52
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-12 14:00:30
 * @LastEditContent:
 */
const obj = { name: 'obj1' }
// 1.WeakMap 和 Map 的区别
const mymap = new Map()
mymap.set(obj, 'aaa')

const myweakmap = new WeakMap()
myweakmap.set(obj, 'aaa')

// 2.区别一：不能使用基本的数据类型
// myweakmap.set(1, 'ccc')

// 3.常见方法
// get方法
console.log(myweakmap.get(obj))

// has方法
console.log(myweakmap.has(obj))

// delete方法
console.log(myweakmap.delete(obj))
console.log(myweakmap)
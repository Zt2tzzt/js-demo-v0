/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-23 15:07:31
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-23 15:09:39
 * @LastEditContent: 
 */
var obj = { name: 'zzt' }

// 到底是找到那一层对象后,停止查找了呢?
// 字面对象obj的原型是 {Object: null prototype} {}
// [Object: null prototype] {} 就是顶层的原型
console.log(obj.__proto__)

console.log(obj.__proto__.__proto__)
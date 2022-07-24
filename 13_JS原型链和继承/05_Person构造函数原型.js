/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-23 15:19:49
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-28 15:30:38
 * @LastEditContent:
 */
function Person() {
}

// console.log(Person.prototype)
// console.log(Object.getOwnPropertyDescriptors(Person.prototype))

console.log(Person.prototype.__proto__)
console.log(Person.prototype.__proto__.__proto__)

/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 21:22:30
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 21:26:07
 * @LastEditContent: 
 */
function Person() {
}

var p1 = new Person()
var p2 = new Person()

// 都是为true
console.log(p1.__proto__ === Person.prototype)
console.log(p2.__proto__ === Person.prototype)

// p1.name = 'zzt'
p1.__proto__.name = 'Lingard'
Person.prototype.name = 'Ronaldo'
p2.__proto__.name = 'Messi'

console.log(p1.name)

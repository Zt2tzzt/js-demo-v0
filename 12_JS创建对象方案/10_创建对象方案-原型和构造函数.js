/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 21:48:26
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 21:56:50
 * @LastEditContent: 
 */
function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address
}

Person.prototype.eating = function() {
  console.log(this.name, '在吃东西')
}
Person.prototype.running = function() {
  console.log(this.name, '在跑步')
}

var p1 = new Person('zzt', 18, 1.88, '北京市')
var p1 = new Person('Lingard', 18, 1.88, '曼彻斯特')

p1.eating()
p2.eating()
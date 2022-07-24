/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 17:27:06
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 17:31:06
 * @LastEditContent: 
 */
function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address
  this.eating = function() {
    console.log(this.name + '在吃东西')
  }
  this.running = function() {
    console.log(this.name + '在跑步')
  }
}

var p1 = new Person('张三', 18, 1.88, '广州市')
var p2 = new Person('李四', 18, 1.88, '北京市')

console.log(p1, p2)
p1.eating()
p2.eating()
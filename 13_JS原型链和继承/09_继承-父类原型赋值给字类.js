/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-27 15:51:22
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-27 16:00:19
 * @LastEditContent: 
 */
// 父类: 公共属性和方法
function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}

Person.prototype.eating = function() {
  console.log(this.name, 'eating')
}

// 字类: 特有属性和方法
function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends)
  this.sno = 111
}

// 直接将父类的原型赋值给子类, 作为子类原型
Student.prototype = Person.prototype

Student.prototype.studying = function() {
  console.log(this.name, 'studying')
}

// name / sna
var stu = new Student('why', 18, ['Kobe'], 111)
console.log(stu)
stu.eating()

var p = new Person('zzt', 18, ['Lingard'])
p.studying()
/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-23 15:29:05
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-23 15:48:04
 * @LastEditContent: 
 */
// 父类: 公共属性和
function Person() {
  this.name = 'zzt'
  this.friends = []
}

Person.prototype.eating = function() {
  console.log(this.name, 'eating~')
}

// 字类: 特有属性和方法
function Student() {
  this.sno = 111
}
var p = new Person()
Student.prototype = p

Student.prototype.studying = function() {
  console.log(this.name, 'studying')
}

// name.sno
var stu = new Student()
/* console.log(stu.name)
stu.eating()
stu.studying() */

// 原型链实现继承的弊端:
// 1. 第一个弊端: 打印stu对象,继承的属性是看不到的
console.log(stu)

// 2.第二个弊端: 创建出来两个stu对象后体现
var stu1 = new Student()
var stu2 = new Student()
// 直接修改对象上的属性,是给本对象添加了一个新属性
stu1.name = 'Lingard'
console.log(stu2.name)
// 获取引用, 修改引用中的值, 会相互影响
stu1.friends.push('Jesse')
console.log(stu1.friends)
console.log(stu2.friends)

// 3.第三个弊端: 在前面实现类的过程中, 都没有传递参数
var stu3 = new Student('Cristiano', 36)
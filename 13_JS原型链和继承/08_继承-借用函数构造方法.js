/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-23 15:49:55
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-23 17:21:55
 * @LastEditContent: 
 */
// 父类: 公共属性的方法
function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}

Person.prototype.eating = function() {
  console.log(this.name, 'eating')
}

// 子类: 特有属性和方法
function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends)
  this.sno = sno
}

var p = new Person()
Student.prototype = p

Student.prototype.studying = function() {
  console.log(this.name, 'studying')
}

var stu1 = new Student('zzt', 18, ['Lingard'], 144)
/* console.log(stu1.name)
stu1.eating()
stu1.studying() */

// 原型链实现的继承, 解决的弊端
// 1. 解决第一个弊端: 打印stu对象, 继承的属性是看不到的
// console.log(stu1)

// 2.解决第二个弊端: 创建出来的两个上图\的对象
var stu2 = new Student('Lingard', 28, ['Rice'],  288)
// 直接修改对象的属性, 是给本对象添加了一个新属性.
stu1.name = 'DeBruyne'
console.log(stu2.name)

// 3.解决第三个弊端: 在前面实现类的过程中都没有传递参数

// 强调: 借用构造函数, 也有弊端:
// 1. 第一个弊端: Person 函数至少被调用两次
// 2. 第二个弊端: stu 的原型对象上会多出一些属性, 但是这些属性是没有存在的必要的
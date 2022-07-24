/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-28 15:49:10
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-28 15:57:17
 * @LastEditContent: 
 */
// 类的声明
class Person {
  // 类的构造函数
  // 注意： 一个类只能有一个构造函数
  // 1.在内存中创建一个对象 nomi = {}
  // 2.将类的原型prototype赋值给创建出来的对象 moni.__proto__ = Person.prototype
  // 3.将对象赋值给函数的this：new绑定 this = nomi
  // 4.执行函数体中的代码
  // 5.自动返回创建出来的对象
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

var p1 = new Person('zzt', 18)
var p2 = new Person('Lingard', 28)
console.log(p1, p2)

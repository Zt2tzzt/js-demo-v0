/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 20:24:14
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 20:25:15
 * @LastEditContent: 
 */
function Person(name, age) {
  this.name = name
  this.age = age
}

var p1 = new Person('zzt', 18)
console.log(p1.name, p1.age)

var p2 = new Person('Lingard', 30)
console.log(p2.name, p2.age)

var obj = {
  foo: function() {
    console.log(this)
  }
}

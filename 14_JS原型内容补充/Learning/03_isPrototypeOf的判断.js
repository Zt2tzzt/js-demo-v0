/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-27 14:31:47
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-27 14:36:40
 * @LastEditContent: 
 */
function Person() {

}

var p = new Person()

console.log(p instanceof Person)
console.log(Person.prototype.isPrototypeOf(p))

var obj = {
  name: 'zzt',
  age: 18
}

var info = Object.create(obj)
console.log(info instanceof Object)
console.log(obj.isPrototypeOf(info))
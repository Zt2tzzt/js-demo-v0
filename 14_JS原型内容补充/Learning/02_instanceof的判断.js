/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-27 13:56:57
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-27 14:24:31
 * @LastEditContent: 
 */
function createObject(o) {
  function Fn() {}
  Fn.prototype = o
  return new Fn()
}

function inheritPrototype(SubType, SuperType) {
  SubType.prototype = createObject(SuperType.prototype)
  Object.defineProperty(SubType.prototype, 'constructor', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}

function Person() {
  
}

function Student() {

}

inheritPrototype(Student, Person)
console.log(Person.prototype.__proto__)

var stu = new Student()
console.log(stu instanceof Student)
console.log(stu instanceof Person)
console.log(stu instanceof Object)
/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-30 09:23:56
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-30 09:31:00
 * @LastEditContent: 
 */
class Person {}

function mixinRunner(BaseClass) {
  class NewClass extends BaseClass {
    running() {
      console.log('running~')
    }
  }
  return NewClass
}

function mixinEater(BaseClass) {
  return class extends BaseClass {
    eating() {
      console.log('eating~')
    }
  }
}

// 在JS中, 类只能有一个父类: 单继承
class Student extends Person {}
var NewStudent = mixinEater(mixinRunner(Student))
var ns = new NewStudent()
ns.running()
ns.eating()
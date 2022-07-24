/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-30 09:20:09
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-30 09:22:07
 * @LastEditContent: 
 */
class Person {}
class Student extends Person {}

class maArray extends Array {
  firstItem() {
    return this[0]
  }
  lastItem() {
    return this[this.length - 1]
  }
}

var arr = new maArray(1, 2, 3)
console.log(arr.firstItem())
console.log(arr.lastItem())

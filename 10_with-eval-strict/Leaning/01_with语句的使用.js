/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 13:37:09
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 13:40:47
 * @LastEditContent: 
 */
'use strict';

var message = 'Hello World'
console.log(message)

// with 语句：可以形成自己的作用域
var obj = { name: 'zzt', age: 18, message: 'obj message' }
function foo() {
  function bar() {
    with(obj) {
      console.log(message)
      console.log('------')
    }
  }
  bar()
}
foo()

var info = { name: 'Lingard' }
with(info) {
  console.log(name)
}
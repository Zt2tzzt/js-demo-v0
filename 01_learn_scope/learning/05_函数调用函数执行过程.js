/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 12:11:05
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 12:35:11
 * @LastEditContent: 
 */
var message = 'Hello World'  

function foo () {
  console.log(message) // Hello Bar
}

function bar() {
  message = 'Hello Bar'
  foo()
}

bar()
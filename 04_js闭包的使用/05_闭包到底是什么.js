/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 17:43:59
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 19:08:27
 * @LastEditContent: 
 */
function foo() {
  var name = 'foo'
  function bar() {
    console.log('bar', name)
  }
  return bar
}

var fn = foo()
fn()
fn = null

var msg = 'zzt'
function demo() {
  console.log(msg)
}

// 广义上：可以访问上级作用域变量，test就是闭包
// 狭义上：有访问到上级作用域变量，test就是闭包
function test() {}

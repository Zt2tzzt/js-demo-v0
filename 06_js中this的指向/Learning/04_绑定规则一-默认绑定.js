/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 19:36:08
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 19:53:51
 * @LastEditContent: 
 */
// 默认绑定：独立函数调用
// 1. 案例一：
/* function foo() {
  console.log(this)
}
foo() */

// 2.案例二：
/* function foo1() {
  console.log(this)
}
function foo2() {
  console.log(this)
  foo1()
}
function foo3() {
  console.log(this)
  foo2()
}
foo3() */

// 3.案例三：
/* var obj = {
  name: 'zzt',
  foo: function() {
    console.log(this)
  }
}
var bar = obj.foo
bar() */

// 4.案例四
/* function foo() {
  console.log(this)
}
var obj = {
  name: 'zzt',
  foo: foo
}
var bar = obj.foo
bar() */

// 5.案例5
function foo() {
  function bar() {
    console.log(this)
  }
  return bar
}
var fn = foo()
fn()

var obj = {
  name: 'zzt',
  eating: fn
}
obj.eating()


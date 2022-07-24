/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 10:38:57
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 10:48:19
 * @LastEditContent: 
 */
// foo 函数是否是一个纯函数
// 1.相同的输入，一定产生相同的输出
// 2.在执行的过程当中，不会产生任何副作用
function foo (num1, num2) {
  return num1 * 2 + num2 * num2
}

// bar不是一个纯函数，因为它修改了外界的变量
var msg = 'abc'
function bar() {
  console.log('bar其他的代码执行')
  msg = 'cba'
}
bar()
console.log(msg)

// baz也不是一个纯函数，因为我们修改了传入的参数
function baz(info) {
  info.age = 100
}

var obj = {name: 'zzt', age: 18}
/* baz(obj)
console.log(obj) */

// test是否是一个纯函数？是的
function test(info) {
  return {
    ...info,
    age: 100
  }
}
console.log(test(obj))
console.log(obj)

// React 的函数组件（类组件）
function HelloWorld(props) {
  props.info = {}
  props.info.name = 'zzt'
}
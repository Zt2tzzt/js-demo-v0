/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 14:14:13
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 14:19:00
 * @LastEditContent: 
 */
'use strict'
// 在严格模式下,自执行函数(默认绑定)会指向undefined
// 之前编写的代码中,我们没有使用自执行函数的this直接去引用window
function foo() {
  console.log(this)
}
var obj = {
  name: 'zzt',
  foo: foo
}

// foo()
// obj.foo()

var bar = obj.foo
// bar()

// setTimeout的this
// fn.apply(this = window)
setTimeout(function() {
  console.log(this)
}, 1000)

/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 16:30:02
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 17:03:32
 * @LastEditContent: 
 */
/* function foo(arg) {
  console.log('foo', arg)
}

foo(123) */

// 将函数作为另外一个函数的参数
/* function foo(aaaaa) {
  aaaaa()
}

function bar() {
  console.log('bar')
}

foo(bar) */

// 案列
function calc(num1, num2, calcFn) {
  console.log(calcFn(num1, num2))
}

function add(num1, num2) {
  return num1 + num2
}

function sub(num1, num2) {
  return num1 - num2
}

function mul(num1, num2) {
  return num1 * num2
}

var m = 20
var n = 30

calc(m, n, mul)
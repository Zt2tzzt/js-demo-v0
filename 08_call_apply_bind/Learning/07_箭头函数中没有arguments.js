/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 10:14:44
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 10:22:13
 * @LastEditContent: 
 */
// 1.案例一
var foo = () => {
  console.log(arguments)
}
foo(1, 2)

// 2.案例二
function foo1() {
  var bar = () => {
    console.log(arguments)
  }
  return bar
}

var fn = foo1(123)
fn()

// 3.案例三
var foo2 = (num1, num2, ...args) => {
  console.log(args)
}
foo2(10, 20, 30, 40, 50)


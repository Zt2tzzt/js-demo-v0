/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 17:32:34
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 17:34:23
 * @LastEditContent: 
 */
function foo() {
  function bar() {

  }
  return bar
}

var fn1 = foo()
var fn2 = foo()

console.log(fn1 === fn2)
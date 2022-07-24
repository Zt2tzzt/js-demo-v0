/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 17:41:25
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 17:41:26
 * @LastEditContent: 
 */
function foo() {
  function bar() {
    console.log('bar')
  }
  return bar
}

var fn = foo()
fn()

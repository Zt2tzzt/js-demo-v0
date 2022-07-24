/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 19:12:31
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 19:13:32
 * @LastEditContent: 
 */
function foo() {
  var name = 'foo'
  var age = 18

  function bar() {
    console.log(name)
    console.log(age)
  }
  return bar
}

var fn = foo()
fn()

fn = null
foo = null

// fn()
// fn()
// fn()
// fn()
// fn()


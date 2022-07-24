/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-09 10:08:04
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-09 10:14:52
 * @LastEditContent: 
 */
function foo() {}
console.log(foo.prototype)
// const f = new foo()
// f.__proto__ = foo.prototype

var bar = () => {
  console.log(this, arguments)
}
console.log(bar.prototype)

// bar is not a constructor
const b = new bar()
/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-21 18:28:30
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-21 18:58:55
 * @LastEditContent: 
 */
// 自己实现ztapply
Function.prototype.ztapply = function(thisArg, argArray) {
  // 1.获取到要执行的函数
  var fn = this

  // 2.处理绑定的thisArg
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : {}

  // 3.执行函数
  thisArg.fn = fn
  // argArray 是否有值
  // var result = !argArray ? thisArg.fn() : thisArg.fn(...argArray)
  // argArray = argArray ? argArray : []
  argArray = argArray || []
  result = thisArg.fn(...argArray)

  delete thisArg.fn

  // 4.返回结果
  return result

}

function sum(num1, num2) {
  console.log('sum被调用', this, num1, num2)
  return num1 + num2
}

function foo(num) {
  return num
}

function bar() {
  console.log('bar函数被执行', this)
}

// 系统调用
/* var result = sum.apply('abc', [20])
console.log(result) */

// 自己实现的调用
/* var result = sum.ztapply('abc', [20, 30])
console.log(result) */

var result2 = foo.ztapply('abc', [20])
console.log(result)

// edge case
bar.ztapply(0)

/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-21 19:00:07
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 09:37:32
 * @LastEditContent: 
 */
Function.prototype.ztbind = function(thisArg, ...argArray) {
  // 1.获取到真实需要调用的函数
  var fn = this

  // 2.绑定this
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

  function proxyFn(...args) {
    // 3.将函数放到thisArg中进行调用
    thisArg.fn = fn
    // 特殊：对两个传入的参数，进行合并
    var finalArgs = [...argArray, ...args]
    var result = thisArg.fn(...finalArgs)
    delete thisArg.fn

    // 4.返回结果
    return result
  }
  return proxyFn
}

function foo() {
  console.log('foo被执行', this)
  return 20
}

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4)
}

// 系统的bind使用、
/* var bar = foo.bind('abc')
bar() */

// 使用自己定义的bind
/* var bar = foo.ztbind('abc')
var result = bar()
console.log(result) */

var newSum = sum.ztbind('abc', 10, 20)
var result = newSum(30, 40)

/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-21 17:55:39
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-21 18:24:16
 * @LastEditContent: 
 */
//  apply / call / bind 的用法

// 给所有的函数添加一个 ztcall 的方法
Function.prototype.ztcall = function(thisArg, ...args) {
  // 在这里可以去执行调用的那个函数（foo）
  // 问题：得可以获取到是哪一个函数执行了ztcall
  // 1.获取需要被执行的函数
  var fn = this

  // 2.对thisArg转成对象类型（防止它传入的是非对象类型）
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : {}

  // 3.调用需要被执行的函数
  thisArg.fn = fn
  var result = thisArg.fn(...args)
  delete thisArg.fn

  // 4.将最终的结果返回出去
  return result
}

function foo() {
  console.log('foo函数被执行', this)
}

function sum(num1, num2) {
  console.log('sum函数被执行', this, num1, num2)
  return num1 + num2
}

// 系统函数的call方法
// foo.call(undefined)
// var result = sum.call({}, 20, 30)
// console.log('系统函数调用结果', result)

// 自己实现的函数的ztcall方法
// 默认进行隐式绑定
// foo.ztcall({name: 'zzt'})
foo.ztcall(undefined)
var result = sum.ztcall('abc', 20, 30)
console.log('ztcall的调用', result)

var num = {name: 'zzt'}
console.log(Object(num))


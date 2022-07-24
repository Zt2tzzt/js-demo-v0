/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 13:13:35
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 13:17:08
 * @LastEditContent: 
 */
function double(num) {
  return num * 2
}
function square(num) {
  return num ** 2
}
var count = 10
var result = square(double(count))
console.log(result)

// 实现最简单的组合函数
function composeFn(m, n) {
  return function(count) {
    return n(m(count))
  }
}

var newFn = composeFn(double, square)
console.log(newFn(10))

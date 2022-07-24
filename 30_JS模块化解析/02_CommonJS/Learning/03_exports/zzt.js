/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-03 00:03:11
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-03 00:08:26
 * @LastEditContent:
 */
const name = 'zzt'
const age = 18
function sum(num1, num2) {
  return num1 + num2
}

// 源码逻辑
/* module.exports = {}
exports = module.exports */

// 第二种导出方式
exports.name = name
exports.age = age
exports.sum = sum

// 这种代码不会进行导出
/* exports = {
  name,
  age,
  sum
} */

// 这种代码也不会进行导出
/* exports.name = name
exports.age = age
exports.sum = sum
module.exports = {} */


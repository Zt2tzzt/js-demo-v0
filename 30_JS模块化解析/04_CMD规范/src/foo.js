/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-04 11:26:18
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-04 11:29:07
 * @LastEditContent:
 */
define(function (require, exports, module) {
  const name = 'zzt'
  const age = 18
  function sum(num1, num2) {
    return num1 * num2
  }
  module.exports = {
    name,
    age,
    sum
  }
})
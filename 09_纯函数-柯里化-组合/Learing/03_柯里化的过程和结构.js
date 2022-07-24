/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 10:49:24
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 10:51:28
 * @LastEditContent: 
 */
function add(x, y, z) {
  return x + y + z
}

var result = add(10, 20, 30)
console.log(result)

function sum1(x) {
  return function(y) {
    return function(z) {
      return x + y + z
    }
  }
}

var result1 = sum1(10)(20)(30)
console.log(result1)

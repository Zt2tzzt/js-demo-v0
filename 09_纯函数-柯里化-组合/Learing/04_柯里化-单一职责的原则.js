/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 10:53:23
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 11:00:11
 * @LastEditContent: 
 */
function add(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}
console.log(add(10, 20, 30))

function sum(x) {
  x = x + 2
  return function(y) {
    y = y * 2
    return function(z) {
      z = z * z
      return x + y + z
    }
  }
}
console.log(sum(10)(20)(30))
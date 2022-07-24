/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 11:01:55
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 11:07:10
 * @LastEditContent: 
 */
/* function sum(m, n) {
  return m + n
} */

// 加入在程序中，我们经常需要把 5 和另外一个数字进行相加
/* console.log(sum(5, 10))
console.log(sum(5, 14))
console.log(sum(5, 1100))
console.log(sum(5, 555)) */

function makeAdder(count) {
  count = count * count
  return function(num) {
    return count + num
  }
}

var result = makeAdder(5)(10)
console.log(result)
/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 17:04:33
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 17:07:49
 * @LastEditContent: 
 */
function makeAdder(count) {
  function add(num) {
    return count + num
  }
  return add
}

var add5 = makeAdder(5)
console.log(add5(5))
console.log(add5(10))
add5 = null

var add10 = makeAdder(10)
var add100 = makeAdder(100)
add10 = null
add100 = null

// 高阶函数：如果一个函数，接受另外一个函数作为参数，或者该函数会返回另外一个函数作为参数，那么这个函数就称之为一个高阶函数。
/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-09 10:04:44
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-09 10:06:48
 * @LastEditContent: 
 */
/* function foo(...atgs, m, n) {
  console.log(m, n)
  console.log(args)

  console.log(arguments)
}

foo(20, 30, 40, 50, 60) */

// rest paramaters必须放到最后
// Rest parameter must be last formal parameter
function foo(m, n = m + 1) {
  console.log(m, n)
}
foo(10)
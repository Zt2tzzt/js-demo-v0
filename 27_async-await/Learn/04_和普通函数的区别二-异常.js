/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-28 14:54:02
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-28 14:57:26
 * @LastEditContent:
 */
async function foo() {
  console.log('foo function start~')
  console.log('中间代码')

  // 异步函数中的异常，会被作为异步函数返回的 Promise 的 reject 值
  throw new Error('error message')
  console.log('foo function end~')
}

// 异步函数的返回值一定是一个 Promise
foo().catch(err => {
  console.log('zzt err', err)
})
console.log('后续还有代码--------')
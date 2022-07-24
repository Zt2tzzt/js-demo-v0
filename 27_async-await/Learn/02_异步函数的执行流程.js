/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-28 14:36:14
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-28 14:38:03
 * @LastEditContent:
 */
async function foo() {
  console.log('foo function start~')
  console.log('内部执行代码1')
  console.log('内部执行代码2')
  console.log('内部执行代码3')
  console.log('foo function end~')
}

console.log('script start')
foo()
console.log('script end')
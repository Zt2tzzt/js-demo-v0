/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-27 09:31:57
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-27 09:42:16
 * @LastEditContent:
 */
function* foo(num) {
  console.log('函数开始执行')

  const value1 = 100 * num
  console.log('第一段代码：', value1)
  const n = yield value1

  const value2 = 200 * n
  console.log('第二段代码：', value2)
  const count = yield value2

  const value3 = 300 * count
  console.log('第三段代码:', value3)
  yield value3

  console.log('函数执行结束~')
  return '123'
}

// 生成器上的 next 方法， 可以传递参数
const generator = foo(5)
console.log(generator.next())
// 第二段代码，第二次调用 next 的时候执行
console.log(generator.next(10))
console.log(generator.next(25))

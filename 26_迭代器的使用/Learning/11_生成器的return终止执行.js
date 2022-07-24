/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-27 09:43:39
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-27 09:49:47
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

const generator = foo(10)
console.log(generator.next())
// 第二段代码的执行，使用了return
// 那么就意味着相当于在第一段代码的后面加上 return，就会提前终止生成器代码继续执行
console.log(generator.return(15))
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
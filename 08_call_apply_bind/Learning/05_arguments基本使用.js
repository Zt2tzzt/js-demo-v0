/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 09:39:53
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 09:42:57
 * @LastEditContent: 
 */
function foo(num1, num2, num3) {
  // 类数组对象中（长得象是一个数组，本质上是一个对象）：arguments
  console.log(arguments)

  // 常见的对arguments的操作是三个
  // 1.获取参数的长度
  console.log(arguments.length)

  // 2.根据索引值，获取某一个参数
  console.log(arguments[2])
  console.log(arguments[3])
  console.log(arguments[4])

  // 3.callee获取当前arguments所在的函数
  console.log(arguments.callee)
}

foo(10, 20, 30, 40, 50)
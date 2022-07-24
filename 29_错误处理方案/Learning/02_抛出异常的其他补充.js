/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-02 21:36:32
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-02 22:59:32
 * @LastEditContent:
 */
class MyError {
  constructor(errorCode, errorMessage) {
    this.errorCode = errorCode
    this.errorMessage = this.errorMessage
  }
}

function foo(type) {
  console.log('foo函数开始执行')
  if (type === 0) {
    // 1. 抛出一个字符串类型(基本的数据类型)
    // throw "error"

    // 2. 比较常见的是抛出一个对象类型
    // throw { errorCode: -1001, errorMessage: 'type不能为0~' }

    // 3. 创建类, 并且创建这个类对应的对象
    // throw new MyError(-1001, 'type不能为0~')

    // 4.提供了一个Error
    /* const err = new Error('type不能为0')
    err.name = 'zzt'
    err.stack = 'aaaa'
    throw err */

    // 5. Error的子类
    const err = new TypeError('当前type类型是错误的~')
    throw err

    // 强调: 如果函数中已经抛出了异常, 那么后续的代码都不会执行了.
    console.log('foo函数后续的代码')
  }
  console.log('foo函数结束执行')
}

foo(0)
console.log('后续的代码继续被执行~')

// 错误中的栈信息中有函数执行时的流程.
/* function test() {
  console.log('test')
}
function demo() {
  test()
}
function bar() {
  demo()
}
bar() */
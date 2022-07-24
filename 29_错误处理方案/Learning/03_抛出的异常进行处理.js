/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-02 22:59:56
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-02 23:08:44
 * @LastEditContent:
 */
function foo(type) {
  if (type === 0) {
    throw new Error('foo error message~')
  }
}
// 1. 第一种是不处理, bar函数会继续将收到的异常直接抛出去
function bar() {
  // foo(0)
  try {
    foo(0)
    console.log('bar函数后续的继续运行')
  } catch (err) {
    console.log('err:', err.message)
  } finally {
    console.log('finally代码执行~, close操作')
  }
}

function test() {
  try {
    bar()
  } catch (error) {
    console.log('error:', error)
  }
}

function demo() {
  test()
}

/**
 * 两种处理方法:
 * 1. 第一种是不处理, 那么异常会进一步的抛出, 直到最顶层的调用
 * 如果在最顶层, 也没有对这个异常进行处理, 那么我们的程序就会终止执行, 并且报错
 * 
 * 2. 使用 try catch 来捕获异常
 */
// foo()
try {
  demo()
} catch (error) {

}
console.log('后续代码执行~')
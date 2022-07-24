/*
 * @Description: file contentb
 * @Author: Zt2tzzt
 * @Date: 2021-11-01 10:19:39
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-01 10:21:41
 * @LastEditContent:
 */
setTimeout(() => {
  console.log('setTimeout')
}, 1000)

queueMicrotask(() => {
  console.log('queueMicrotask')
})

Promise.resolve().then(() => {
  console.log('Promise then')
})

function foo() {
  console.log('foo')
}

function bar() {
  console.log('bar')
  foo()
}

bar()

console.log('其他代码')
/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-20 09:27:29
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-20 09:44:26
 * @LastEditContent:
 */
function foo() {
  // Promist
  return new Promise((resolve, reject) => {
    resolve('success message')
    // reject('failure message')
  })
}

// main.js
const fooPromise = foo()
/**
 * then方法传入的回调函数有两个
 * > 第一个回调函数, 会在Promise执行resolve函数时, 被回调
 * > 第二个回调函数, 会在Promise执行reject函数时, 被回调
 */
fooPromise.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})

// catch 方法传入的回调函数, 会在 Promise 执行 reject 函数时, 被回调
// fooPromise.catch(() => {})

// 传入的这个函数, 被称之为 excutor
/* const promise = new Promise((resolve, reject) => {
  console.log('promise传入的函数被执行了')
  // resolve()
  reject()
})

promise.then(() => {})

promise.catch(() => {}) */

// 钩子函数
function foo(fn) {
  fn()
}
foo(() => { })
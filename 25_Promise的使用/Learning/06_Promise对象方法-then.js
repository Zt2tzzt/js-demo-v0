/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-22 09:08:04
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-22 09:23:36
 * @LastEditContent:
 */
// Promise有哪些对象方法
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype6 ))

const promise = new Promise((resolve, reject) => {
  resolve('foo')
})

// 1.同一个 Promise 可以被多次调用 then 方法
// 当我们的 resolve 方法被回调时，所有的 then 方法传入的回调函数都会被调用
/* promise.then(res => {
  console.log('res1', res)
})
promise.then(res => {
  console.log('res2', res)
}) */

/**
 * 2.then 方法传入的回调函数，可以有返回值
 * then 方法本身也是有返回值的，它的返回值是Promise
 */
// 1. 如果我们返回的是一个普通值（数值 / 字符串 / 普通对象/ undefined），那么这个普通值被作为一个新的 Promise 的 resolve
/* promise.then(res => {
  return 'aaaaa'
}).then(res => {
  console.log('res', res)
  return 'bbbbb'
}) */

// 2.如果我们返回的是一个 Promise
/* promise.then(res => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(111111)
    }, 3000)
  })
}).then(res => {
  console.log('res:', res)
}) */

// 3.如果返回的是一个对象，并且该对象实现了 thenable
promise.then(res => {
  return {
    then(resolve, reject) {
      resolve(22222)
    }
  }
}).then(res => {
  console.log('res:', res)
})
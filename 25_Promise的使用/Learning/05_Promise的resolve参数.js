/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-20 09:58:29
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-20 10:14:39
 * @LastEditContent:
 */
/**
 * resolve(参数)
 * 1. 普通的值或者对象, pending -> fulfilled
 * 2. 传入一个 Promise
 *    那么当前的 Promise 状态会由传入的 Promise 来决定
 *    相当于状态进行了移交
 * 3. 传入一个对象, 并且这个对象有实现 then 方法(并且这个对象是实现了 thenable 接口)
 *    那么也会执行该 then 方法, 并且该 then 方法决定后续状态
 */

// 1.传入 Promise 的特殊情况
const newPromise = new Promise((resolve, reject) => {
  // resolve('aaaaa')
  reject('err message')
})

new Promise((resolve, reject) => {
  // pending -> fulfilled
  resolve(newPromise)
}).then(res => {
  console.log('res:', res)
}, err => {
  console.log('err', err)
})

// 2.传入一个对象, 这个对象有 then 方法
new Promise((resolve, reject) => {
  // pending -> fulfilled
  const obj = {
    then: function (resolve, reject) {
      // resolve('resolve message')
      reject("reject message")
    }
  }
  resolve(obj)
}).then(res => {
  console.log('res', res)
}, err => {
  console.log('err', err)
})

// eatable / runable
const obj = {
  eat() { },
  run() { }
}
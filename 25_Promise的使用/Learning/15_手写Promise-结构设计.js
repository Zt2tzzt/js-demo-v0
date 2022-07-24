/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-24 16:54:25
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-24 17:04:14
 * @LastEditContent:
 */
// ES6 / ES2015
// https://promisesaplus.com/
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED
        this.value = value
        console.log('resolve被调用')
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED
        this.reason = reason
        console.log('reject被调用')
      }
    }
    executor(resolve, reject)
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log('状态pending')
  resolve(1111)
  reject(22222)
})
/* promise.then(res => {

}, err => {

}) */
/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-24 17:06:00
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-24 17:40:41
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
    this.onFulfilled = undefined
    this.onRejected = undefined

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 为什么改变 promise 状态的函数要放在微任务队列外? 如果不这样, resolve 函数和 reject 函数都会执行
        this.status = PROMISE_STATUS_FULFILLED
        // 为什么要使用微任务队列? new Promise对象时, executor 会立即执行, 此时 then 方法还未执行, 所以 this.onFulfilled 还是undefined
        queueMicrotask(() => {
          this.value = value
          this.onFulfilled(this.value)
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED
        queueMicrotask(() => {
          this.reason = reason
          this.onRejected(this.reason)
        })
      }
    }

    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log('状态pending')
  resolve(1111)
  reject(22222)
})

promise.then(res => {
  console.log('res1:', res)
  return 1111
}, err => {
  console.log('err:', err)
})
// 还不能链式调用
/* .then(res => {
  console.log('res3:', res)
}) */
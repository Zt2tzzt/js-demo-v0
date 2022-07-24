/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-24 17:30:33
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-03-09 17:09:58
 * @LastEditContent:
 */

// ES6 / ES2015
// https://promisesaplus.com/
// then 方法优化一: then 方法的多次调用
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    // 执行 executor 时, Promise 状态变为 pending
    this.status = PROMISE_STATUS_PENDING
    // resolve 函数中, 回调函数的参数
    this.value = undefined
    // reject 函数中, 回调函数的参数
    this.reason = undefined
    // 执行 resolve 时, then 方法中待执行的回调函数的数组
    this.onFulfilledFns = []
    // 执行 reject 时, then 方法中待执行的回调函数的数组
    this.onrejectedFns = []


    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 为什么要使用微任务队列? new Promise对象时, executor 会立即执行, 此时 then 方法还未执行, 所以 this.onFulfilled 还是undefined
        queueMicrotask(() => { // 由于会有定时器中调用then方法的宏任务操作，需要把微任务队列代码上移。
          // 以防 resolve 和 reject 函数都执行
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulfilledFns.forEach(fn => {
            fn(this.value)
          })
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onrejectedFns.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }

    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    // 1.如果在 this 调用的时候, 状态已经确定下来, 防止 then 在不同时调用时, 里面的回调函数都会执行.
    if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
      onFulfilled(this.value)
    }
    if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
      onRejected(this.reason)
    }

    // 2. 将成功的回调函数和失败的回调函数放到数组中
    if (this.status === PROMISE_STATUS_PENDING) {
      console.log('状态pending')
      this.onFulfilledFns.push(onFulfilled)
      this.onrejectedFns.push(onRejected)
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log('状态pending')
  resolve(1111)
  reject(2222)
})

promise.then(res => {
  console.log('res1:', res)
  return 1111
}, err => {
  console.log('err1:', err)
})
// 还不能链式调用
/* .then(res => {
  console.log('res3:', res)
}) */

promise.then(res => {
  console.log('res2:', res)
}, err => {
  console.log('err2:', err)
})

// 在确定 promise 状态后, 再次调用 then 方法
setTimeout(() => {
  promise.then(res => {
    console.log('res3', res)
  }, err => {
    console.log('err3', err)
  })
}, 1000);
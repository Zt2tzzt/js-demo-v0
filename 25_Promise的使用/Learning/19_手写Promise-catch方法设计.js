/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-24 19:33:51
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-24 20:12:09
 * @LastEditContent:
 */
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

// 工具函数
function execFnsWithCatchError(execFn, value, resolve, reject) {
  try {
    resolve(execFn(value))
  } catch (error) {
    reject(error)
  }
}

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
        queueMicrotask(() => {
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

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    // 如果 then 方法中, 处理 rejecct 的回调方法没值, 则抛出一个异常, 让下一个 catch 函数处理
    onRejected ||= (err => { throw err })
    return new MyPromise((resolve, reject) => {

      // 1.如果在 this 调用的时候, 状态已经确定下来, 防止 then 在不同时调用时, 里面的回调函数都会执行.
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        execFnsWithCatchError(onFulfilled, this.value, resolve, reject)
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        execFnsWithCatchError(onRejected, this.reason, resolve, reject)
      }

      // 2. 将成功的回调函数和失败的回调函数放到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        if (onFulfilled) this.onFulfilledFns.push(() => {
          execFnsWithCatchError(onFulfilled, this.value, resolve, this.reason)
        })
        if (onRejected) this.onrejectedFns.push(() => {
          execFnsWithCatchError(onRejected, this.reason, resolve, reject)
        })
      }
    })
  }

  catch(onRejected) {
    this.then(undefined, onRejected)
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log('状态pending')
  // resolve(1111)
  reject(2222)
  // throw new Error("executor error message")
})

// 链式调用 then 方法, 并使用 catch 方法
promise.then(res => {
  console.log('res:', res)
}).catch(err => {
  console.log('err:', err)
})


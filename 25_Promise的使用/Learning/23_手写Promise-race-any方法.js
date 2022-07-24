/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-24 21:35:08
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-03-09 18:11:38
 * @LastEditContent:
 */
// MyPromise 中增加 静态方法 race 和 any 方法
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
    // 如果 then 方法中, 处理 resolve 的回调方法没值, 则返回一个值, 让下一个 then 函数处理
    onFulfilled ||= (value => { return value })
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
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    this.then(() => [
      onFinally()
    ], () => {
      onFinally()
    })
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value))
  }
  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason))
  }
  static all(promises) {
    // 问题关键: 传入的所有 promise 全部 fulfilled 时时候执行 resolve, 传入 promise 有一个 rejected 时执行 reject
    return new MyPromise((resolve, reject) => {
      const values = []
      promises.forEach(promise => {
        promise.then(res => {
          values.push(res)
          if (values.length === promises.length) {
            resolve(values)
          }
        }, err => {
          reject(err)
        })
      })
    })
  }

  static allSettled(promises) {
    // 返回所有传入的 promise 的状态-结果对象数组
    return new MyPromise((resolve) => {
      const results = []
      promises.forEach(promise => {
        promise.then(res => {
          results.push({ status: PROMISE_STATUS_FULFILLED, value: res })
          if (results.length === promises.length) {
            resolve(results)
          }
        }, err => {
          results.push({ status: PROMISE_STATUS_REJECTED, reason: err })
          if (results.length === promises.length) {
            resolve(results)
          }
        })
      })
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        // promise.then(res => {
        //   resolve(res)
        // }, err => {
        //   reject(err)
        // })
        promise.then(resolve, reject)
      })
    })
  }

  static any(promises) {
    // 必须等到有一个 promise 成功返回结果, 才能调用 resolve, 否则调用 reject 返回一个失败的集合
    const reasons = []
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then(resolve, err => {
          reasons.push(err)
          if (reasons.length === promises.length) {
            reject(new AggregateError(reasons))
          }
        })
      })
    })
  }

}

const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => { resolve(1111) }, 3000)
})
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => { reject(2222) }, 2000)
})
const p3 = new MyPromise((resolve, reject) => {
  setTimeout(() => { reject(3333) }, 3000)
})

MyPromise.race([p1, p2, p3]).then(res => {
  console.log("res:", res)
}).catch(err => {
  console.log("err:", err)
})

MyPromise.any([p1, p2, p3]).then(res => {
  console.log("res:", res)
}).catch(err => {
  console.log("err:", err.errors)
})
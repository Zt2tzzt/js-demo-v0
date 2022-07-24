/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-11 11:43:50
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-11 14:29:41
 * @LastEditContent: 
 */
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

function execFunctionWithcatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch (err) {
    reject(err)
  }
}

class MyPromise {
  constructor(exector) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledcallbacks = []
    this.onRejectedcallbacks = []

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING)
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulfilledcallbacks.forEach(fn => {
            fn(this.value)
          });
        })
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING)
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedcallbacks.forEach(fn => {
            fn(this.reason)
          });
        })
    }

    try {
      exector(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const defaultOnFulfilled = res => res
      onFulfilled ||= defaultOnFulfilled

      const defaultOnRejected = err => { throw err }
      onRejected ||= defaultOnRejected

      if (this.status === PROMISE_STATUS_FULFILLED) {
        execFunctionWithcatchError(onFulfilled, this.value, resolve, reject)
        // onFulfilled(this.value)
      }
      if (this.status === PROMISE_STATUS_REJECTED) {
        execFunctionWithcatchError(onRejected, this.reason, resolve, reject)
        // onRejected(this.reason)
      }
      this.onFulfilledcallbacks.push(() => {
        execFunctionWithcatchError(onFulfilled, this.value, resolve, reject)
      })
      this.onRejectedcallbacks.push(() => {
        execFunctionWithcatchError(onRejected, this.reason, resolve, reject)
      })
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    this.then(onFinally, onFinally)
  }

  static resolve(value) {
    return new MyPromise(resolve => resolve(value))
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason))
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const results = []
      for (const p of promises) {
        p.then(res => {
          results.push(res)
          if (results.length === promises.length) resolve(results)
        }, err => {
          reject(err)
        })
      }
    })
  }

  static allsettled(promises) {
    return new MyPromise(resolve => {
      const results = []
      for (const p of promises) {
        p.then(res => {
          results.push({ status: PROMISE_STATUS_FULFILLED, value: res })
          if (results.length === promises.length) resolve(results)
        }, err => {
          results.push({ status: PROMISE_STATUS_REJECTED, reason: err })
          if (results.length === promises.length) resolve(results)
        })
      }
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      for (const p of promises) {
        p.then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      }
    })
  }

  static any(promises) {
    return new MyPromise((resolve, reject) => {
      const reasons = []
      for (const p of promises) {
        p.then(res => {
          resolve(res)
        }, err => {
          reasons.push(err)
          if (reasons.length === promises.length) reject(new AggregateError(reasons))
        })
      }
    })
  }
}

const p1 = new Promise((resolve) => {
  setTimeout(() => { resolve(1111) }, 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => { reject(2222) }, 2000)
})
const p3 = new Promise((resolve) => {
  setTimeout(() => { resolve(3333) }, 3000)
})
MyPromise.any([p1, p2, p3]).then(res => {
  console.log('res1', res)
}, err => {
  console.log('err1', err)
})

/* const mypromise = new MyPromise((resolve, reject) => {
  console.log('状态pending')
  resolve(111)
  reject(222)
})

mypromise.then(res => {
  console.log('res1', res)
  return 'aaa'
}, err => {
  console.log('err1', err)
})
  .then(res => {
    console.log('res2', res)
    throw 'bbb'
  }, err => {
    console.log('err2', err)
  })
  .catch(err => {
    console.log('err3', err)
  })
  .finally(() => {
    console.log('finally')
  }) */

/* mypromise.then(res => {
  console.log('res2', res)
}, err => {
  console.log('err2', err)
})

setTimeout(() => {
  mypromise.then(res => {
    console.log('res3', res)
  })
}, 1000); */

/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-09 13:46:48
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-03-09 17:43:39
 * @LastEditContent:
 */
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

function execFnWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch (err) {
    reject(err)
  }
}

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledCallbacks = []
    this.onRejectedcallbacks = []

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulfilledCallbacks.forEach(fn => {
            fn(this.value)
          });
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedcallbacks.forEach(fn => {
            fn(this.reason)
          });
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onfulfilled, onrejected) {
    const defaultOnFulfilled = res => res
    onfulfilled ||= defaultOnFulfilled

    const defaultOnRejected = err => { throw err }
    onrejected ||= defaultOnRejected

    return new MyPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_FULFILLED) {
        execFnWithCatchError(onfulfilled, this.value, resolve, reject)
      }
      if (this.status === PROMISE_STATUS_REJECTED) {
        execFnWithCatchError(onrejected, this.reason, resolve, reject)
      }
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledCallbacks.push(() => {
          execFnWithCatchError(onfulfilled, this.value, resolve, reject)
        })
        this.onRejectedcallbacks.push(() => {
          execFnWithCatchError(onrejected, this.reason, resolve, reject)
        })
      }
    })
  }

  catch(onrejected) {
    return this.then(undefined, onrejected)
  }

  finally(onFinally) {
    this.then(() => {
      onFinally()
    }, () => {
      onFinally()
    })
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
      for (const promise of promises) {
        promise.then(res => {
          results.push(res)
          if (results.length === promises.length) {
            resolve(results)
          }
        }, err => {
          reject(err)
        })
      }
    })
  }

  static allSettled(promises) {
    return new MyPromise(resolve => {
      const results = []
      for (const promise of promises) {
        promise.then(res => {
          results.push({ status: PROMISE_STATUS_FULFILLED, value: res })
          if (results.length === promises.length) {
            resolve(results)
          }
        }, err => {
          result.push({ status: PROMISE_STATUS_REJECTED, value: err })
          if (results.length === promises.length) {
            resolve(results)
          }
        })
      }
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      for (const promise of promises) {
        /* promise.then(res => {
          resolve(res)
        }, err => {
          reject(err)
        }) */
        promise.then(resolve, reject)
      }
    })
  }

  static any(promises) {
    return new MyPromise((resolve, reject) => {
      const reasons = []
      for (const promise of promises) {
        promise.then(res => {
          resolve(res)
        }, err => {
          reasons.push(err)
          if (reasons.length === promises.length) {
            reject(new AggregateError(reasons))
          }
        })
      }
    })
  }
}

const mypromise = new MyPromise((resolve, reject) => {
  console.log('状态 pending')
  reject(222)
  resolve(111)
})

mypromise.then(res => {
  console.log('res1', res)
  return 'aaa'
}, err => {
  console.log('err1', err)
  return 'bbb'
})
  .then(res => {
    console.log('res2', res)
  }, err => {
    console.log('err2', err)
  })
  .finally(() => {
    console.log('finally')
  })

mypromise.catch(err => {
  console.log('err3', err)
})


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
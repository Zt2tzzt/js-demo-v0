/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-15 15:26:17
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-15 20:45:43
 * @LastEditContent: 
 */
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FUIFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

function execFunctionWithCatchError(execFn, value, resolve, reject) {
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
		this.onFulfilledFns = []
		this.onRejectedFns = []

		const resolve = (value) => {
			if (this.status === PROMISE_STATUS_PENDING) {
				queueMicrotask(() => {
					if (this.status !== PROMISE_STATUS_PENDING) return
					this.status = PROMISE_STATUS_FUIFILLED
					this.value = value
					this.onFulfilledFns.forEach(fn => fn())
				})
			}
		}

		const reject = (reason) => {
			if (this.status === PROMISE_STATUS_PENDING) {
				queueMicrotask(() => {
					if (this.status !== PROMISE_STATUS_PENDING) return
					this.status = PROMISE_STATUS_REJECTED
					this.reason = reason
					this.onRejectedFns.forEach(fn => fn())
				})
			}
		}

		try {
			executor(resolve, reject)
		} catch (err) {
			reject(err)
		}
	}

	then(onFulfilled, onRejected) {
		const defaultOnFulfilled = res => res
		onFulfilled ||= defaultOnFulfilled

		const defaultOnRejected = err => { throw err }
		onRejected ||= defaultOnRejected

		return new MyPromise((resolve, reject) => {
			if (this.status === PROMISE_STATUS_FUIFILLED) {
				// onFulfilled(this.value)
				execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
			}
			if (this.status === PROMISE_STATUS_REJECTED) {
				// onRejected(this.reason)
				execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
			}
			this.onFulfilledFns.push(() => {
				execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
			})
			this.onRejectedFns.push(() => {
				execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
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
		return new MyPromise((resolve) => {
			const results = []
			for (const p of promises) {
				p.then(res => {
					results.push({ status: PROMISE_STATUS_FUIFILLED, value: res })
					if (results.length === promises.length) resolve(results)
				}, err => {
					results.push({ status: PROMISE_STATUS_REJECTED, value: err })
					if (results.length === promises.length) resolve(results)
				})
			}
		})
	}

	static race(promises) {
		return new MyPromise((resovle, reject) => {
			for (const p of promises) {
				p.then(resovle, reject)
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
					reject(new AggregateError(reasons))
				})
			}
		})
	}
}

const mypromise = new MyPromise((resolve, reject) => {
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
		return 'bbb'
	}, err => {
		console.log('err2', err)
	})
	.catch(err => {
		console.log('err3', err)
	})
	.finally(() => {
		console.log('finally')
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

/**
 * 使用 Promise 的两点元婴
 * 1.我们需要自己来设计回调函数，回调函数的名称，回调函数的使用等。
 * 2.对于不同的人，不同的框架设计出来的方案是不同的，那么我们必须耐心的去看别人的文档甚至源码，以便理解他这个函数到底怎么用。
 */

/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-12 21:42:07
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-12 23:32:29
 * @LastEditContent: 
 */
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

function execuFunctionWithCatchError(execFn, value, resolve, reject) {
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
		this.onRejectedCallback = []

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
					this.onRejectedCallback.forEach(fn => {
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

	then(onFulfilled, onRejected) {
		const defaultOnFulfilled = res => res
		onFulfilled ||= defaultOnFulfilled

		const defaultOnRejected = err => { throw err }
		onRejected ||= defaultOnRejected

		return new MyPromise((resolve, reject) => {
			if (this.status === PROMISE_STATUS_FULFILLED) {
				execuFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
			}
			if (this.status === PROMISE_STATUS_REJECTED) {
				execuFunctionWithCatchError(onRejected, this.reason, resolve, reject)
			}
			this.onFulfilledCallbacks.push(() => {
				execuFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
			})
			this.onRejectedCallback.push(() => {
				execuFunctionWithCatchError(onRejected, this.reason, resolve, reject)
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
		return new MyPromise((resolve => resolve(value)))
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

	static allSettled(promises) {
		return new MyPromise(resolve => {
			const results = []
			for (const p of promises) {
				p.then(res => {
					results.push({ status: PROMISE_STATUS_FULFILLED, value: res })
					if (results.length === promises.length) resolve(results)
				}, err => {
					results.push({ status: PROMISE_STATUS_REJECTED, value: err })
					if (results.length === promises.length) resolve(results)
				})
			}
		})
	}

	static race(promises) {
		return new MyPromise((resolve, reject) => {
			for (const p of promises) {
				p.then(resolve, reject)
			}
		})
	}

	static any(promises) {
		return new MyPromise((resolve, reject) => {
			const reasons = []
			for (const p of promises) {
				p.then(resolve, err => {
					reasons.push(err)
					if (reasons.length === promises.length) reject(new AggregateError(reasons))
				})
			}
		})
	}
}

const p = new MyPromise((resolve, reject) => {
	console.log('状态pending')
	reject(000)
	resolve(111)
})
p.then(res => {
	console.log('res1', res)
	return 'aaa'
}, err => {
	console.log('err1', err)
	throw 'bbb'
})
	.then(res => {
		console.log('res2', res)
	})
	.catch(err => {
		console.log('err2', err)
	})
	.finally(() => {
		console.log('finally')
	})
/* p.then(res => {
	console.log('res2', res)
}, err => {
	console.log('err2', err)
})
setTimeout(() => {
	p.then(res => {
		console.log('res3', res)
	})
}, 1000); */

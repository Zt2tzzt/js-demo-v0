/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-08 13:08:56
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-08 14:10:03
 * @LastEditContent: 
 */
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

const execFnWithCatchError = (execFn, value, resolve, reject) => {
	try {
		const res = execFn(value)
		resolve(res)
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
					this.status = PROMISE_STATUS_FULFILLED
					this.value = value
					this.onFulfilledFns.forEach(fn => fn(this.value))
				})
			}
		}

		const reject = (reason) => {
			if (this.status === PROMISE_STATUS_PENDING) {
				queueMicrotask(() => {
					if (this.status !== PROMISE_STATUS_PENDING) return
					this.status = PROMISE_STATUS_REJECTED
					this.reason = reason
					this.onRejectedFns.forEach(fn => fn(this.reason))
				})
			}
		}


		executor(resolve, reject)
	}

	then(onFulfilled, onRejected) {
		const defaultOnFulfilled = res => res
		onFulfilled ||= defaultOnFulfilled

		const defaultRejected = err => { throw err }
		onRejected ||= defaultRejected

		return new MyPromise((resolve, reject) => {
			if (this.status === PROMISE_STATUS_FULFILLED) {
				execFnWithCatchError(onFulfilled, this.value, resolve, reject)
			}
			if (this.status === PROMISE_STATUS_REJECTED) {
				execFnWithCatchError(onRejected, this.reason, resolve, reject)
			}
			this.onFulfilledFns.push(() => {
				execFnWithCatchError(onFulfilled, this.value, resolve, reject)
			})
			this.onRejectedFns.push(() => {
				execFnWithCatchError(onRejected, this.reason, resolve, reject)
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
		const result = []
		return new mypromise((resolve, reject) => {
			for (const p of promises) {
				p.then(res => {
					result.push(res)
					if (result.length === promises.length) {
						resolve(result)
					}
				}, reject)
			}
		})
	}

	static allSettled(promises) {
		const result = []
		return new MyPromise(resolve => {
			for (const p of promises) {
				p.then(res => {
					result.push({ status: PROMISE_STATUS_FULFILLED, value: res })
					if (result.length === promises.length) {
						resolve(result)
					}
				}, err => {
					result.push({ status: PROMISE_STATUS_REJECTED, value: err })
					if (result.length === promises.length) {
						resolve(result)
					}
				})
			}
		})
	}

	static race(promises) {
		return MyPromise((resolve, reject) => {
			for (const p of promises) {
				p.then(resolve, reject)
			}
		})
	}

	static any(promises) {
		const reason = []
		return new MyPromise((resolve, reject) => {
			for (const p of promises) {
				p.then(resolve, err => {
					reason.push(err)
					if (reason.length === promises.length) {
						reject(new AggregateError(reason))
					}
				})
			}
		})
	}
}

const mypromise = new MyPromise((resolve, reject) => {
	console.log('状态pedning');
	reject(222)
	resolve(111)
})

mypromise.then(res => {
	console.log('res1', res);
}, err => {
	console.log('err1', err);
	throw 'bbb'
})
	.catch(err => {
		console.log('err2', err);
	})
	.finally(() => {
		console.log('finally');
	})

/**
 * 使用Promise的2点原因
 * 
 */
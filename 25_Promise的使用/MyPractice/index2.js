/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-23 22:20:54
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-23 23:10:25
 * @LastEditContent: 
 */
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

const execFnWithcatchError = (resolve, reject, value, execFn) => {
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
					this.status = PROMISE_STATUS_FULFILLED
					this.value = value
					this.onFulfilledFns.forEach(fn => fn(this.value));
				})
			}
		}

		const reject = (reason) => {
			if (this.status === PROMISE_STATUS_PENDING) {
				queueMicrotask(() => {
					if (this.status !== PROMISE_STATUS_PENDING) return
					this.status = PROMISE_STATUS_REJECTED
					this.reason = reason
					this.onRejectedFns.forEach(fn => fn(this.reason));
				})
			}
		}

		executor(resolve, reject)
	}

	then(onFulfilled, onRejected) {
		const defaultOnFulfilled = res => res
		onFulfilled ||= defaultOnFulfilled

		const defaultOnRejected = err => { throw err } //----------
		onRejected ||= defaultOnRejected

		return new MyPromise((resolve, reject) => {

			if (this.status === PROMISE_STATUS_FULFILLED) {
				execFnWithcatchError(resolve, reject, this.value, onFulfilled)
			}
			if (this.status === PROMISE_STATUS_REJECTED) {
				execFnWithcatchError(resolve, reject, this.eason, onRejected)
			}
			if (this.status = PROMISE_STATUS_PENDING) { // ------------------
				this.onFulfilledFns.push(() => {
					execFnWithcatchError(resolve, reject, this.value, onFulfilled)
				})
				this.onRejectedFns.push(() => {
					execFnWithcatchError(resolve, reject, this.reason, onRejected)
				})
			}
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
		const results = []
		return new MyPromise((resolve, reject) => {
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
		const results = []
		return new MyPromise(resolve => {
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

	static race(promise) {
		return new mypromise((resolve, reject) => {
			for (const p of promise) {
				p.then(resolve, reject)
			}
		})
	}

	static any(promises) {
		const reasons = []
		return new MyPromise((resolve, reject) => {
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

const mypromise = new MyPromise((resolve, reject) => {
	console.log('状态pending');
	reject(222)
	resolve(111)
})
mypromise.then(res => {
	console.log('res1', res);
	return 'aaa'
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
/* mypromise.then(res => {
	console.log('res1', res);
}, err => {
	console.log('err1', err);
})
setTimeout(() => {
	mypromise.then(res => {
		console.log('res3', res);
	})
}, 1000); */
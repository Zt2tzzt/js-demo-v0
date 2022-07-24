/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-03-09 15:41:32
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-03-09 19:10:40
 * @LastEditContent: 
 */
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fuifilled'
const PROMISE_STATUS_REJECTED = 'rejected'

function execFnWithCatchError(execFn, val, resolve, reject) {
	try {
		resolve(execFn(val))
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
				console.log('promise fulfilled ~');
				queueMicrotask(() => {
					if (this.status !== PROMISE_STATUS_PENDING) return
					this.status = PROMISE_STATUS_FULFILLED
					console.log('Fulfilled queue');
					this.value = value
					this.onFulfilledFns.forEach(fn => fn(this.value))
				})
			}
		}

		const reject = (reason) => {
			if (this.status === PROMISE_STATUS_PENDING) {
				console.log('promise rejected ~');
				queueMicrotask(() => {
					if (this.status !== PROMISE_STATUS_PENDING) return
					this.status = PROMISE_STATUS_REJECTED
					console.log('Rejected queue');
					this.reason = reason
					this.onRejectedFns.forEach(fn => fn(this.reason))
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
		onFulfilled ||= (val => val)
		onRejected ||= (rea => { throw rea })
		return new MyPromise((resolve, reject) => {

			if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
				execFnWithCatchError(onFulfilled, this.value, resolve, reject)
			}
			if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
				execFnWithCatchError(onRejected, this.reason, resolve, reject)
			}
			if (this.status === PROMISE_STATUS_PENDING) {
				this.onFulfilledFns.push(() => {
					execFnWithCatchError(onFulfilled, this.value, resolve, reject)
				})
				this.onRejectedFns.push(() => {
					execFnWithCatchError(onRejected, this.reason, resolve, reject)
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

	static resolve(val) {
		return new MyPromise(resolve => resolve(val))
	}

	static reject(rea) {
		return new MyPromise((resolve, reject) => reject(rea))
	}

	static all(promises) {
		const results = []
		return new MyPromise((resolve, reject) => {
			for (const p of promises) {
				p.then(res => {
					results.push(res)
					if (results.length === promises.length) {
						resolve(results)
					}
				}, reject(err))
			}
		})
	}

	static allSettled(promises) {
		const results = []
		return new MyPromise(resolve => {
			for (const p of promises) {
				p.then(res => {
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
		const reasons = []
		return new MyPromise((resovle, reject) => {
			for (const p of promises) {
				p.then(resovle, err => {
					reasons.push(err)
					if (reasons.length === promises.length) {
						reject(new AggregateError(reasons))
					}
				})
			}
		})
	}

}

const p = new MyPromise((resovle, reject) => {
	console.log(`promise pending ~`);
	reject('haha')
	resovle(666)
})

p.then(res => {
	console.log('res1', res);
	return 111
}, err => {
	console.log('err1', err);
	throw new Error('haha')
})
	.catch(err => {
		console.log('err2', err);
		throw new Error('oopoo')
	})
	.catch(err => {
		console.log('err3', err);
	})
	.finally(() => {
		console.log('finally');
	})
	/* .then(res => {
console.log('res2', res);
}, err => {
console.log('err2', err);
}) */

/* p.then(res => {
	console.log('res2', res);
}, err => {
	console.log('err2', err);
})

setTimeout(() => {
	p.then(res => {
		console.log('res3', res);
	}, err => {
		console.log('err3', err);
	})
}, 1000); */

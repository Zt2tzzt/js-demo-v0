/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-03-09 18:37:23
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-03-12 17:35:54
 * @LastEditContent: 
 */
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
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
				queueMicrotask(() => {
					if (this.status !== PROMISE_STATUS_PENDING) return
					this.status = PROMISE_STATUS_FULFILLED
					this.value = value
					this.onFulfilledFns.forEach(fn => fn(value))
				})
			}
		}

		const reject = (reason) => {
			if (this.status === PROMISE_STATUS_PENDING) {
				queueMicrotask(() => {
					if (this.status !== PROMISE_STATUS_PENDING) return
					this.status = PROMISE_STATUS_REJECTED
					this.reason = reason
					this.onRejectedFns.forEach(fn => fn(reason))
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
		return this.then(onFinally, onFinally)
	}

	// 静态方法...
}

const p = new MyPromise((resolve, reject) => {
	console.log('promise pending');
	setTimeout(() => {
		reject(222)
		resolve(111)
	}, 1000);
})

p.then(res => {
	console.log('res1', res);
}, err => {
	console.log('err1', err);
	return 666
})
	.then(res => {
		console.log('res2', res);
	}, err => {
		console.log('err2', err);
	})

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

function foo() {
	console.log('helloo');
}
foo(12)
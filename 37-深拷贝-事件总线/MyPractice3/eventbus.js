/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-02-22 14:44:57
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-02-22 15:03:45
 * @LastEditContent: 
 */
class MyEventbus {
	constructor() {
		this.eventbus = {}
	}

	on(eventName, eventCallback, thisArg) {
		let handlers = this.eventbus[eventName]
		if (!handlers) {
			handlers = []
			this.eventbus[eventName] = handlers
		}
		handlers.push({eventCallback, thisArg})
	}

	off(eventName, eventCallback) {
		const handlers = this.eventbus[eventName]
		if (!handlers) return handlers

		handlers.forEach((h, i, hds) => {
			if (h.eventCallback === eventCallback) {
				hds.splice(i, 1)
			}
		});
	}

	emit(eventName, ...payload) {
		const handler = this.eventbus[eventName]
		handler.forEach(h => {
			h.eventCallback.apply(h.thisArg, payload)
		});
	}
}

// foreach回调中index是动态变化的
const arr = ['a', 'b', 'c', 'd', 'e']
arr.forEach((item, index, ar) => {
	console.log('--start--', item, index, ar, arr);
	if (item === 'c') {
		ar.splice(index, 1)
	}
	console.log('--end--', item, index, ar, arr);
});
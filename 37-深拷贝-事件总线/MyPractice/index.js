/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-23 17:49:23
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-23 22:18:41
 * @LastEditContent: 
 */
function isObject(originalValue) {
	const type = typeof originalValue
	return (type !== null) && (type === 'Object' || type === 'function')
}
// 考虑类型Map, set, Array, Function, Symbol, 自引用
function deepClone(originvalue, wmap = new WeakMap) {
	if (originvalue instanceof Map) return new Map([...originvalue])

	if (originvalue instanceof Set) return new Set([...originvalue])

	if (typeof originvalue === 'function') return originvalue

	if (typeof originvalue === 'symbol') return Symbol(originvalue.description)

	if (!isObject(originvalue)) return originvalue //-----------

	if (wmap.has(originvalue)) return wmap.get(originvalue)

	const newObj = Array.isArray(originvalue) ? [] : {}
	wmap.set(originvalue, newObj)
	for (const key in originvalue) {
		if (Object.hasOwnProperty.call(originvalue, key)) {
			const element = originvalue[key];
			newObj[key] = deepClone(element, wmap)
		}
	}
	for (const skey of Object.getOwnPropertySymbols(originvalue)) {
		newObj[skey] = deepClone(originvalue[skey], wmap)
	}
	return newObj
}

class MyEventbus {
	constructor() {
		this.eventbus = []
	}

	on(eventName, eventCallback, thisArg) {
		let handlers = this.eventbus[eventName] // -------
		if (!handlers) {
			handlers = []
			this.eventbus[eventName] = handlers
		}
		handlers.push({ eventCallback, thisArg })
	}

	off(eventName, eventCallback) {
		const handlers = this.eventbus[eventName]
		if (!handlers) return
		const newHandlers = [...handlers]
		for (const newHandler of newHandlers) {
			if (newHandler.eventCallback === eventCallback) {
				const index = handlers.indexof(newHandler)
				handlers.splice(index, 1)
			}
		}
	}

	emit(eventName, ...params) {
		const handlers = this.eventbus[eventName]
		if (!handlers) return
		handlers.forEach(handler => {
			handler.eventCallback.apply(handler.thisArg, params)
		});
	}
}
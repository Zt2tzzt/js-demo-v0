/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-26 20:48:03
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-26 21:11:43
 * @LastEditContent: 
 */
/**
 * 手写vue3响应式原理
 */
let activeReactiveFn = null

function watchFn(fn) {
	activeReactiveFn = fn
	fn()
	activeReactiveFn = null
}

class Depend {
	constructor() {
		this.reactiveFns = new Set
	}
	depend() {
		if (activeReactiveFn) {
			this.reactiveFns.add(activeReactiveFn)
		}
	}
	notify() {
		if (this.reactiveFns) {
			this.reactiveFns.forEach(fn => fn());
		}
	}
}

const tmap = new WeakMap
function getDepend(target, property) {
	let pmap = tmap.get(target)
	if (!pmap) {
		pmap = new Map()
		tmap.set(target, pmap)
	}
	let depend = pmap.get(property)
	if (!depend) {
		depend = new Depend
		pmap.set(property, depend)
	}
	return depend
}

function reactiveObj(obj) {
	/* return new Proxy(obj, {
		get(target, property, reciver) {
			const depend = getDepend(target, property)
			depend.depend()
			return Reflect.get(target, property, reciver)
		},
		set(target, property, value, reciver) {
			Reflect.set(target, property, value, reciver)
			const depend = getDepend(target, property)
			depend.notify()
		}
	}) */
	// Vue2
	Object.keys(obj).forEach(key => {
		(function (key) {
			var value = obj[key]
			Object.defineProperty(obj, key, {
				get: function() {
					const depend = getDepend(obj, key)
					depend.depend()
					return value
				},
				set: function(newValue) {
					value = newValue
					const depend = getDepend(obj, key)
					depend.notify()
				}
			})
		})(key)
	})
	return obj
}


const obj = { name: 'jlinz', age: 29 }
const objproxy = reactiveObj(obj)
watchFn(() => {
	console.log(`my name is ${objproxy.name}`);
})
objproxy.name = 'zzt'
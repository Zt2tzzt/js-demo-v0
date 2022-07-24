/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-03-11 22:23:33
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-03-11 22:47:18
 * @LastEditContent: 
 */
let activeEffect = null
function watchEffect(fn) {
	activeEffect = fn
	fn()
	activeEffect = null
}

class Dep {
	constructor() {
		this.subscribers = new Set
	}
	depend() {
		if (activeEffect) {
			this.subscribers.add(activeEffect)
		}
	}
	notify() {
		this.subscribers.forEach(fn => {
			fn()
		});
	}
}

const targetMap = new WeakMap
function getDepend(target, property) {
	let depMap = targetMap.get(target)
	if (!depMap) { // -----
		depMap = new Map
		targetMap.set(target, depMap)
	}
	let dep = depMap.get(property)
	if (!dep) { // ------
		dep = new Dep
		depMap.set(property, dep)
	}
	return dep
}

function reactive(raw) {
	/* return new Proxy(raw, {
		get(target, property, reciver) {
			const dep = getDepend(target, property)
			dep.depend()
			return Reflect.get(target, property, reciver)
		},
		set(target, property, value, reciver) {
			Reflect.set(target, property, value, reciver)
			const dep = getDepend(target, property)
			dep.notify()
		}
	}) */
	Object.keys(raw).forEach(key => {
		(function(k) {
			var value = raw[k]
			Object.defineProperty(raw, k, {
				get() {
					getDepend(raw, k).depend()
					return value
				},
				set(newVal) {
					value = newVal
					getDepend(raw, k).notify()
				}
			})
		})(key)
	})
	return raw
}

const info = {name: 'zzt', age: 18}
const info_p = reactive(info)
watchEffect(() => {
	console.log('info', info_p.name);
})
info_p.name = 'Lingard'
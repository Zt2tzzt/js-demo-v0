/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-10 14:20:01
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-10 14:42:30
 * @LastEditContent: 
 */
/**
 * 手写vue3响应式原理
 */
let reactActiveFn = null

function watchFn(fn) {
	reactActiveFn = fn
	fn()
	reactActiveFn = null
}

class Depend {
	constructor() {
		this.reactFns = new Set
	}
	depend() {
		if (reactActiveFn) this.reactFns.add(reactActiveFn)
	}
	notify() {
		this.reactFns.forEach(fn => {
			fn()
		});
	}
}

const targetMap = new WeakMap
function getDepend(target, property) {
	let pmap = targetMap.get(target)
	if (!pmap) {
		pmap = new Map
		targetMap.set(target, pmap)
	}
	let depend = pmap.get(property)
	if (!depend) {
		depend = new Depend
		pmap.set(property, depend)
	}
	return depend
}

function autoReact(obj) {
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
	Object.keys(obj).forEach(key => {
		(function (k) {
			var value = obj[k]
			Object.defineProperty(obj, k, {
				get: function () {
					const depend = getDepend(obj, k)
					depend.depend()
					return value
				},
				set(newValue) {
					value = newValue
					const depend = getDepend(obj, k)
					depend.notify()
				}
			})
		})(key)
	})

	return obj
}


const obj = { name: 'linz', age: 28 }
const objp = autoReact(obj)
watchFn(() => {
	console.log('hhh');
	console.log(objp.age);
})
objp.age = 29
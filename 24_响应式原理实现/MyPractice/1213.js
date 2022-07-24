/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-13 21:08:08
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-13 21:32:36
 * @LastEditContent: 
 */
// 手写 Vue3响应式原理
let activeReactiveFn = null

function watchFn(fn) {
	activeReactiveFn = fn
	fn()
	activeReactiveFn = null
}

class Depend {
	constructor() {
		this.reactiveFns = new Set()
	}
	depend() {
		if (activeReactiveFn) this.reactiveFns.add(activeReactiveFn)
	}
	notify() {
		this.reactiveFns.forEach(fn => fn());
	}
}

const tmap = new WeakMap()
function getDepend(target, property) {
	let pmap = tmap.get(target) // -----------
	if (!pmap) {
		pmap = new Map()
		tmap.set(target, pmap)
	}
	let depend = pmap.get(property) //------------
	if (!depend) {
		depend = new Depend()
		pmap.set(property, depend)
	}
	return depend
}

function reactiveFn(obj) {
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
		let value = obj[key]
		Object.defineProperty(obj, key, {
			get: function () {
				const depend = getDepend(obj, key)
				depend.depend()
				return value
			},
			set: function (newValue) {
				value = newValue
				const depend = getDepend(obj, key)
				depend.notify()
			}
		})
	})
	return obj
}

const obj = {
	name: 'zzt'
}
const objproxy = reactiveFn(obj)
watchFn(() => {
	console.log('获取对象name属性', objproxy.name)
})
objproxy.name = 'Lingard'
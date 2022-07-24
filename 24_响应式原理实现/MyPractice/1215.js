/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-15 19:59:06
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-15 20:32:28
 * @LastEditContent: 
 */
// 响应式原理的实现，手写Vue3响应式
let activeReactveFn = null
// 封装一个待执行响应式函数的函数
function watchFn(fn) {
	activeReactveFn = fn
	fn()
	activeReactveFn = null
}
// 封装依赖类
class Depend {
	constructor() {
		this.reactiveFns = new Set()
	}
	depend() {
		if (activeReactveFn) this.reactiveFns.add(activeReactveFn)
	}
	notify() {
		this.reactiveFns.forEach(fn => fn())
	}
}
// 封装收集依赖的函数
const tmap = new WeakMap()
function getDepend(target, prop) {
	let pmap = tmap.get(target)
	if (!pmap) {
		pmap = new Map()
		tmap.set(target, pmap)
	}
	let depend = pmap.get(prop)
	if (!depend) {
		depend = new Depend()
		pmap.set(prop, depend)
	}
	return depend
}
// 自动监听对象属性
function createProxyAuto(obj) {
	// vue3 响应式原理
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
	// vue2 响应式原理
	Object.keys(obj).forEach(key => {
		let value = obj[key]
		Object.defineProperty(obj, key, {
			get: function () {
				const depend = getDepend(target, property)
				depend.depend()
				return value
			},
			set: function (newValue) {
				value = newValue
				const depend = getDepend(target, property)
				depend.notify()
			}
		})
	})
	return obj
}

const obj = { name: 'zzt', age: 18 }
const objProxy = createProxyAuto(obj)
watchFn(() => {
	console.log(objProxy.name)
})
objProxy.name = 'Lingard'

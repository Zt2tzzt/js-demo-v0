/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-18 16:27:30
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-18 16:46:52
 * @LastEditContent: 
 */
// 正在执行的响应式函数
let activeReactiveFn = null
// 执行响应式函数方法
function watchFn(fn) {
	activeReactiveFn = fn
	fn()
	activeReactiveFn = null
}
// 封装依赖类
class Depend {
	constructor() {
		this.reactiveFns = new Set()
	}
	depend() {
		if (activeReactiveFn) this.reactiveFns.add(activeReactiveFn)
	}
	notify() {
		this.reactiveFns.forEach(fn => fn())
	}
}
// 封装收集依赖方法
const tmap = new WeakMap()
function getdepend(target, property) {
	let pmap = tmap.get(target)
	if (!pmap) {
		pmap = new Map()
		tmap.set(target, pmap)
	}
	let depend = pmap.get(property)
	if (!depend) {
		depend = new Depend()
		pmap.set(property, depend)
	}
	return depend
}
function reactiveFn(obj) {
	/* return new Proxy(obj, {
		get(target, property, reciver) {
			const depend = getdepend(target, property)
			depend.depend()
			return Reflect.get(target, property, reciver)
		},
		set(target, property, value, reciver) {
			Reflect.set(target, property, value, reciver)
			const depend = getdepend(target, property)
			depend.notify()
		}
	}) */
	var keys = Object.keys(obj)
	for (var i = 0; i < keys.length; i++) {
		(function (key) {
			var value = obj[key]
			Object.defineProperty(obj, key, {
				get: function () {
					const depend = getdepend(obj, key)
					depend.depend()
					return value
				},
				set: function (newvalue) {
					value = newvalue
					const depend = getdepend(obj, key)
					depend.notify()
				}
			})
		})(keys[i])
	}
	return obj
}

const obj = { name: 'zzt', age: 18 }
const objproxy = reactiveFn(obj)
watchFn(() => {
	console.log(objproxy.name);
})
objproxy.name = 'lingz'

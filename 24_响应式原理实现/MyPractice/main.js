/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-12 14:20:13
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-12 15:25:53
 * @LastEditContent: 
 */
// 激活的响应式函数
let activeReactiveFn = null
// 封装响应式函数
function watchFn(fn) {
	activeReactiveFn = fn
	fn()
	activeReactiveFn = null
}
// 封装依赖类
class Depend {
	constructor() {
		this.reactiveFns = []
	}
	depend() {
		if (activeReactiveFn) {
			this.reactiveFns.push(activeReactiveFn)
		}
	}
	notify() {
		this.reactiveFns.forEach(fn => {
			fn()
		});
	}
}

// 收集依赖
const tmap = new WeakMap()
function getDepend(target, property) {
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
// 监听对象的属性,vue3 写法
/* function reactive(obj) {
	return new Proxy(obj, {
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
	})
} */
function reactive(obj) {
	Object.keys(obj).forEach(key => {
		let value = obj[key]
		Object.defineProperty(obj, key, {
			get() {
				const depend = getDepend(obj, key)
				depend.depend()
				return value
			},
			set(newValue) {
				value = newValue
				const depend = getDepend(obj, key)
				depend.notify()
			}
		})
	})
	return obj
}

const obj = {
	name: 'zzt',
	age: 18
}
const objProxy = reactive(obj)
watchFn(() => {
	console.log(objProxy.name)
})
objProxy.name = 'Lingard'
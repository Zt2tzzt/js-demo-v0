/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-12 23:33:05
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-13 00:06:51
 * @LastEditContent: 
 */
// 保存当前需要收集的响应式函数
let activeReactiveFn = null
// 封装执行响应式函数的函数
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
		this.reactiveFns.forEach(fn => fn());
	}
}
// 封装收集依赖的方法
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
// 对象自动代理监听
function reactive(obj) {
	Object.keys(obj).forEach(key => {
		let value = obj[key]
		Object.defineProperty(obj, {
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
	});
	return obj
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
}

// 定义一个对象
const obj = {
	name: 'zzt',
	age: 18
}
// 自动生成代理对象
const objproxy = reactive(obj)
// 将该对象相关的代码放入响应式函数中执行
watchFn(() => {
	console.log(objproxy.name)
})
// 修改代理对象的属性值
objproxy.name = 'Lingard'
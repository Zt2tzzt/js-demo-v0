/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-12 01:52:47
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-12 13:34:03
 * @LastEditContent: 
 */
// 待执行的函数
let activeReactiveFn = null
// 封装一个响应式函数
function watchFn(fn) {
	activeReactiveFn = fn
	fn()
	activeReactiveFn = null
}
// 封装一个依赖类
class Depend {
	constructor() {
		this.reactiveFns = new Set()
	}
	addDepend() {
		if (activeReactiveFn) {
			this.reactiveFns.add(activeReactiveFn)
		}
	}
	notify() {
		this.reactiveFns.forEach(fn => {
			fn()
		});
	}
}
// 封装一个收集依赖的方法
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
// 封装一个函数，自动监听代理对象
function reactive(obj) {
	return new Proxy(obj, {
		get(target, property, reciver) {
			const depend = getDepend(target, property)
			depend.addDepend()
			return Reflect.get(target, property, reciver)
		},
		set(target, property, value, reciver) {
			Reflect.set(target, property, value, reciver)
			const depend = getDepend(target, property)
			depend.notify()
		}
	})
}



const obj = {
	name: 'zzt',
	age: 18
}
// 为 obj 对象自动创建代理对象
const objProxy = reactive(obj)
// 将包含 obj 代理对象属性的代码放入响应式函数种
watchFn(() => {
	console.log(objProxy.name)
})
// 改变 obj 代理对象属性的值，自动执行响应式函数中的代码
objProxy.name = 'Lingard'
/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-13 20:01:16
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-07-05 11:03:03
 * @LastEditContent: 
 */
// 使用ES5写一个对象属性捕获器案例
const obj = {
	name: 'zzt',
	age: 18
}
Object.keys(obj).forEach(key => {
	let value = obj[key]
	Object.defineProperty(obj, key, {
		get: function () {
			console.log(`监听到对象boj的${key}属性被访问了`)
			return value
		},
		set: function (newValue) {
			console.log(`监听到对象obj的${key}属性被设值成了${newValue}`)
			value = newValue
		}
	})
})

// 使用 Proxy 写一个代理对象捕获器案例，包括4个常用的对象属性捕获器和2个对象函数捕获器
const obj2 = { name: 'zzt', age: 18 }
const obj2Proxy = new Proxy(obj2, {
	get(target, property) {
		console.log(`监听到对象boj的${property}属性被访问了`)
		return target[property]
	},
	set(target, property, value) {
		console.log(`监听到对象obj的${property}属性被设值成了${value}`)
		target[property] = value
	},
	has(target, property) {
		return property in target
	},
	deleteProperty(target, property) {
		return delete target[property]
	}
})
function foo() { }
const fooProxy = new Proxy(foo, {
	apply(target, thisArg, argArray) {
		return target.apply(thisArg, argArray)
	},
	construct(target, argArray, newTarget) {
		return new target(...argArray)
	}
})

// 用代码解释 Proxy 捕获器和 Reflect 方法中参数 reciver 的作用
const obj3 = {
	_name: 'zzt',
	get name() {
		return this._name
	},
	set name(value) {
		this._name = value
	}
}
const obj3Proxy = new Proxy(obj3, {
	get(target, property, reciver) {
		console.log(`监听到对象obj3的${property}属性被访问了`)
		return Reflect.get(target, property, reciver)
	},
	set(target, property, value, reciver) {
		console.log(`监听到对象obj的${property}属性被设值成了${value}`)
		Reflect.set(target, property, value, reciver)
	},
	has(target, property) {
		return Reflect.has(target, property)
	},
	deleteProperty(target, property) {
		Reflect.deleteProperty(target, property)
	}
})
function foo2() { }
const foo2Proxy = new Proxy(foo2, {
	apply(target, thisArg, argArray) {
		return Reflect.apply(target, thisArg, argArray)
	},
	construct(target, argArray, newTarget) {
		return Reflect.construct(target, argArray, newTarget)
	}
})

// Proxy 捕获器和 Reflect 对象提供的13种方法
Reflect.getPrototypeOf()
Reflect.setPrototypeOf()
Reflect.isExtensible()
Reflect.preventExtensions()
Reflect.defineProperty()
Reflect.getOwnPropertyDescriptor()
Reflect.ownKeys()
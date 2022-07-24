/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-12 16:36:47
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-12 17:00:00
 * @LastEditContent: 
 */
// 使用ES5吸引一个对象属性捕获器案例
const obj = {
	name: 'zzt',
	age: 19
}
Object.keys(obj).forEach(key => {
	let value = obj[key]
	Object.defineProperty(obj, key, {
		get: function () {
			console.log(`监听到obj对象${key}属性被访问了`)
			return obj[key]
		},
		set: function (newValue) {
			console.log(`监听到obj对象${key}属性被设值了${newValue}`)
			value = newValue
		}
	})
});

// 使用 Proxy 写一个代理对象捕获器案例，包括4个常用对象捕获器和2个函数捕获器。
const obj3 = {
	name: 'zzt',
	age: 18
}
const obj3Proxy = new Proxy(obj3, {
	get(target, property, reciver) {
		return target[property]
	},
	set(target, property, value, reciver) {
		target[property] = value
	},
	has(target, property) {
		return property in target
	},
	deleteProperty(target, property) {
		delete target[property]
	}
})
function foo3() { }
const foo3Proxy = new Proxy(foo3, {
	apply(target, thisArgm, argArray) {
		return target.apply(thisArgm, argArray)
	},
	construct(target, argArray, nweTarget) {
		return new target(...argArray)
	}
})


// 使用 Proxy 写一个代理对象捕获器案例，包括4个常用对象捕获器和2个函数捕获器，并用代码解释 Proxy 和 Reflect 对象方法参数 reciver 的作用
const obj2 = {
	_name: 'zzt',
	get name() {
		return this._name
	},
	set name(value) {
		this._name = value
	}
}
const obj2Proxy = new Proxy(obj2, {
	get(target, property, reciver) {
		console.log(`监听到obj2对象${property}属性被访问了`)
		return Reflect.get(target, property, reciver)
	},
	set(target, property, value, reciver) {
		console.log(`监听到obj2对象${property}属性被设值成了${value}`)
		Reflect.set(target, property, value, reciver)
	},
	has(target, property) {
		return Reflect.has(target, property)
	},
	deleteProperty(target, property) {
		Reflect.deleteProperty(target, property)
	}
})
console.log(obj2Proxy.name)
obj2Proxy.name = 'Lingard'
function foo() { }
const fooProxy = new Proxy(foo, {
	apply(target, thisArgm, argArray) {
		return Reflect.apply(target, thisArgm, argArray)
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


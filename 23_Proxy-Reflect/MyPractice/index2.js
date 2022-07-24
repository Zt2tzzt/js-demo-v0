/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-24 14:51:03
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-03-09 19:35:24
 * @LastEditContent: 
 */
/**
 * 1.使用ES5写一个对象属性捕获器案例
 */
const obj = { name: 'lingz', age: 29 }
Object.keys(obj).forEach(key => {
	(function (key) {
		var value = obj[key]
		Object.defineProperty(obj, key, {
			get() {
				console.log('监听到obj对象' + key + '的属性被访问');
				return value
			},
			set(newvalue) {
				console.log('监听到obj对象的' + key + '属性被设值为' + newvalue);
				value = newvalue
			}
		})
	})(key)
})
console.log(obj.name);
obj.name = 'zzt'

/**
 * 使用proxy和reflect写一个代理对象捕获器案例，包括4个常用的捕获器和2个函数对象捕获器
 * 用代码解释proxy捕获器和reflect方法中参数reciver的作用
 */
const obj1 = {
	name: 'lingz',
	age: 29,
	_address: 'Manchester',
	get address() {
		return this._address
	},
	set address(value) {
		this._address = value
	}
}
const obj1proxy = new Proxy(obj1, {
	get(target, property, reciver) {
		console.log(`监听到obj1对象${property}属性被访问`);
		return Reflect.get(target, property, reciver)
	},
	set(target, property, value, reciber) {
		console.log(`监听到obj1对象${property}被设值为${value}`);
		Reflect.set(target, property, value, reciber)
	},
	has(target, property) {
		return Reflect.has(target, property)
	},
	deleteProperty(target, property) {
		return Reflect.deleteProperty(target, property)
	}
})
console.log(obj1proxy.address);
obj1proxy.address = 'London'

function foo() { }
const fooProxy = new Proxy(foo, {
	apply(target, thisArg, argArray) {
		return target.apply(thisArg, argArray)
	},
	construct(target, argArray, newTarget) {
		return new target(...argArray) //-------
	}
})

/**
 * Proxy捕获器和Reflect对象提供的13种方法
 */
 Reflect.getPrototypeOf()
 Reflect.setPrototypeOf()
 Reflect.isExtensible()
 Reflect.preventExtensions()
 Reflect.defineProperty()
 Reflect.getOwnPropertyDescriptor()
 Reflect.ownKeys()

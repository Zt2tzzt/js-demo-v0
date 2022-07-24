/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-09 10:25:11
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-09 11:22:09
 * @LastEditContent: 
 */
/**
 * 使用ES5写一个对象属性捕获器案例
 */
const obj = { name: 'zzt', age: 18 }

Object.keys(obj).forEach(key => {
	(function (key) {
		var value = obj[key]
		Object.defineProperty(obj, key, {
			get: function () {
				console.log('监听到obj对象' + key + '属性被访问');
				return value
			},
			set: function (newValue) {
				console.log('监听到obj对象' + key + '属性被设置为' + newValue);
				value = newValue // --------
			}
		})
	})(key)
});

console.log(obj.name);
obj.age = 20
console.log(obj.age);

/**
 * 使用proxy写一个代理对象捕获器案例，包括4个常用的捕获器和2个函数对象捕获器
 */
const obj2 = { name: 'lingz', age: 28 }
function foo() { }
const obj2p = new Proxy(obj2, {
	get(target, property, reciver) {
		console.log(`监听到obj2对象的${property}属性被访问了`);
		return target[property]
	},
	set(target, property, value, reciver) {
		console.log(`监听到obj2对象的${property}属性被设值成${value}`);
		target[property] = value
	},
	has(target, property) {
		return property in target
	},
	deleteProperty(target, property) {
		delete target[property]
	}
})
new Proxy(foo, {
	apply(target, thisArg, argArray) {
		return target.apply(thisArg, argArray)
	},
	construct(target, argArray, newTarget) {
		return new target(...argArray)
	}
})

/**
 * 使用Proxy和Reflect写一个代理对象捕获器案例，包括4个常用的铺货器和2个函数对象
 */
const obj3 = {
	name: 'jlinz', age: 28, _address: 'Menchester',
	get address() {
		return this._address
	},
	set address(value) {
		this._address = value
	}
}
function foo2() { }
const obj3p = new Proxy(obj3, {
	get(target, property, reciver) {
		console.log(`监听到obj3对象的${property}属性被访问了`);
		return Reflect.get(target, property, reciver)
	},
	set(target, property, value, reciver) {
		console.log(`监听到obj3对象的${property}属性被设值成${value}`);
		Reflect.set(target, property, value, reciver)
	},
	has(target, property) {
		return Reflect.has(target, property)
	},
	deleteProperty(target, property) {
		Reflect.deleteProperty(target, property)
	}
})
new Proxy(foo2, {
	apply(target, thisArg, argArray) {
		return Reflect.apply(target, thisArg, argArray)
	},
	construct(target, argArray, newTarget) {
		return Reflect.construct(target, argArray, newTarget)
	}
})
console.log(obj3p.address)
obj3p.address = 'London'

/**
 * Proxy捕获器和Reflect对象提供的13种方法
 */
Reflect.defineProperty()
Reflect.getOwnPropertyDescriptor()
Reflect.getPrototypeOf()
Reflect.setPrototypeOf()
Reflect.preventExtensions()
Reflect.isExtensible()
Reflect.ownKeys()
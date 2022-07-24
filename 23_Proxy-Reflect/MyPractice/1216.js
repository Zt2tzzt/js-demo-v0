/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-16 23:23:02
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-16 23:45:56
 * @LastEditContent: 
 */
// 使用 ES5 写一个对象属性捕获器案例
const obj = { name: 'lingz', age: 29 }
Object.keys(obj).forEach(key => {
	(function (obj, key) {
		var value = obj[key]
		Object.defineProperty(obj, key, {
			get: function () {
				console.log('监听到obj对象' + key + '属性被访问');
				return value
			},
			set: function (newValue) {
				value = newValue
			}
		})
	})(obj, key)
})
console.log(obj.name);

// 使用 Proxy 写一个代理对象捕获器案例，包括4个常用的捕获器和2个函数对象捕获器
const obj2 = {
	_name: 'lingz',
	get name() {
		return this._name
	},
	set name(value) {
		this._name = value
	}
}
const obj2Proxy = new Proxy(obj2, {
	get(t, p, r) {
		console.log(`监听到obj2对象${p}属性被访问`);
		return Reflect.get(t, p, r)
	},
	set(t, p, v, r) {
		console.log(`监听到obj2对象${p}属性被赋值为${v}`);
		Reflect.set(t, p, v, r)
	},
	has(t, p) {
		return Reflect.has(t, p)
	},
	deleteProperty(t, p) {
		Reflect.deleteProperty(t, p)
	}
})
console.log(obj2Proxy.name);
obj2Proxy.name = 'Salah'
const foo = function () { }
const fooProxy = new Proxy(foo, {
	apply(target, thisArg, argArr) {
		return Reflect.apply(target, thisArg, argArr)
	},
	construct(target, argArr, newTarget) {
		return Reflect.construct(target, argArr, newTarget)
	}
})

// Proxy 捕获器和 Reflect 对象提供的13种方法
Reflect.getPrototypeOf()
Reflect.setPrototypeOf()
Reflect.getOwnPropertyDescriptor()
Reflect.defineProperty()
Reflect.ownKeys()
Reflect.preventExtensions()
Reflect.isExtensible()

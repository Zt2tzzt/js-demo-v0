/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-27 22:07:17
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-07-11 20:21:20
 * @LastEditContent: 
 */
/**
 * JSON是一种数据格式，它的全称是JavaScript Object Notation
 */

/**
 * JSON的顶层支持3种类型的值。
 * 1.简单值：Number，String(双引号)，Boolean，null
 * 2.对象值：key必须是双引号字符串，值可以是简单值，对象，数组。
 * 3.数组值，数组的值可以是简单值，对象值，数组值。
 */

/**
 * JSON的2点限制：
 * 1.不能写注释。
 * 2.不能有多余的逗号
 */

/**
 * localStorage是全局对象，JSON也是全局对象
 */

/**
 * 写一个普通JSON的序列化案例，指定特定的属性被JSON序列化，传入回调函数拦截要转换的key/value并做处理，对生成的字符串进行格式化。
 */
const obj = {
	name: 'zzt',
	age: 18,
	friend: {
		name: 'Jesse',
		age: 29
	}
}
// 指定特定的属性被JSON序列化，对生成的字符串进行格式化。
const str1 = JSON.stringify(obj, ['name'], 2)
console.log(str1);
// 传入回调函数拦截要转换的key/value并做处理，对生成的字符串进行格式化。
const str2 = JSON.stringify(obj, (key, value) => {
	if (key === 'age') {
		value++
	}
	return value
}, 2)
console.log(str2);

/**
 * 在对象中使用toJSON方法，固定序列化形式。
 */
const obj2 = {
	name: 'zzt',
	age: 18,
	toJSON: function () {
		return { name: 'zzt', age: 18 }
	}
}
const res = JSON.stringify(obj2)
console.log('---res---', res);

/**
 * 将字符串转成对象，传入回调函数，拦截要转换的 key / value 并处理
 */
const objx = JSON.parse(str2, (key, value) => {
	if (key === 'age') {
		value--
	}
	return value
})
console.log(objx);

/**
 * JSON序列化可以做深拷贝，但不能拷贝函数。
 */

/**
 * Cookie在服务器中设置，前端一般不主动设置。
 */

/**
 * localStorage和sessionStorage的理解，2点
 * 1.localStorage：本地存储，永久存储，关闭网页后存储内容仍然保存。
 * 2.sessionStorage：会话存储：关闭会话时，存储的内容会被清除。
 */

/**
 * localStorage和sessionStorage的区别，3个验证：
 * 1.关闭网页后重新打开，localStorage会被保留，sessionStorage会被删除。
 * 2.在页面内实现跳转，localStorage会被保留，sessionStorage也会保留。
 * 3.在页面外实现跳转（打开新网页），localStorage会被保留，sessionStorage会被删除。
 */

/**
 * localStorage1个属性和5个方法
 * length，返回一个整数，表示Storage对象中数据项数量。
 * key()，接受一个数值n作为参数，返回存储中第n个key名称。
 * getItem()，接收一个key作为参数，返回key对应的value。
 * setItem()，接收key和value，将它们添加（或更新）到存储中。
 * removeItem()，接收一个key作为参数，把该key从存储中删除。
 * clear()，清空存储中的所有key
 */

/**
 * 自封装一个Storage类
 */
class MyCache {
	constructor(isLocal) {
		this.storage = isLocal ? localStorage : sessionStorage
	}

	length() {
		return this.storage.length
	}

	key(n) {
		return this.storage.key(n)
	}

	getItem(key) {
		let value = this.storage.getItem(key)
		return value ? JSON.parse(value) : undefined
	}

	setItem(key, value) {
		if (!value) return
		const result = JSON.stringify(value)
		this.storage.setItem(key, result)
	}

	removeItem(key) {
		this.storage.removeItem(key)
	}

	clear() {
		this.storage.clear()
	}
}

export const localCache = new MyCache(true)
export const sessionCache = new MyCache(false)

class MyCache2 {
	constructor(isLocal) {
		this.storage = isLocal ? localStorage : sessionStorage
	}
	length() {
		return this.storage.length
	}
	key(n) {
		return this.storage.key(n)
	}
	getItem(key) {
		const value = this.storage.getItem(key)
		return value ? JSON.parse(value) : null
	}
	setItem(key, value) {
		if (!value) return
		const result = JSON.stringify(value)
		this.storage.setItem(key, result)
	}
	removeItem(key) {
		this.storage.removeItem(key)
	}
	clear() {
		this.storage.clear()
	}
}
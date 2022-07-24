/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-02 21:01:16
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-02 21:34:31
 * @LastEditContent: 
 */
/**
 * Set的2种应用场景，Set常用的1种属性和4种方法，遍历Set的2种常用方法
 */
// 给数组去重
const arr1 = [1, 2, 3, 3, 4]
const set1 = new Set(arr1)
console.log(set1);
// 保存不重复的元素
const set2 = new Set([1, 2, 3, 3, 4])
console.log(set1.size)
set1.add(5)
set1.has(3)
set1.delete(4)
// set1.clear()
set1.forEach((ele1, ele2, set) => {
	console.log(ele1, ele2, set);
});
for (const ele of set1) {
	console.log(ele);
}

/**
 * 弱引用的概念
 * 	当强引用解除时，被弱引用的对象会被GC回收
 */

/**
 * WeakSet和Set的2个区别，没有size属性，没有clear方法，不能遍历（枚举）
 * 1.WeakSet中只能存放Object类型的数据，而Set中可以存放基本数据类型
 * 2.WeakSet对元素的引用是弱引用，当没有其它强引用指向WeakSet中存放的元素时，它将被GC回收
 */

/**
 * WeakSet常用的3个方法和1个应用场景
 */
const obj1 = { name: 'lingz', age: 29 }
const obj2 = { name: 'lingz', age: 29 }
const obj3 = { name: 'lingz', age: 29 }
const wset1 = new WeakSet([obj1, obj2, obj3])
wset1.add({ name: 'rice' })
wset1.has(obj1)
wset1.delete(obj3)
const wset2 = new WeakSet
class Person {
	constructor() {
		wset2.add(this)
	}
	running() {
		if (!wset2.has(this))
			throw new Error('不能用非构造函数创建的对象调用此方法')
		console.log('running', this);
	}
}
const p = new Person
p.running()
// p.running.call({name: 'rice'})

/**
 * Map和对象的区别，用entries创建一个Map
 * 1.对象只能使用字符串或者Symbol作为属性的key
 * 2.当我们需要使用其他数据类型作为key时，需要用到Map
 */
const map1 = new Map([['name', 'lingz'], ['age', 28]])

/**
 * Map的1种属性和5种方法，2种遍历方式
 */
console.log(map1.size);
map1.set('number', 14)
map1.get('age')
map1.has('name')
map1.delete('number')
// map1.clear()
map1.forEach((value, key, map) => {
	console.log(value, key, map);
});
for (const [key, value] of map1) {
	console.log(key, value);
}

/**
 * WeakMap和Map的2点区别，没有size属性，没有clear方法，不能枚举
 * 1.WeakMap中只能使用Object类型的数据作为key
 * 2.当WeakMap中存储的key没有其它强引用指向他时，它会被GC回收，对应的值也会被销毁
 */

/**
 * WeakMap常用的4种方法，和1种场景
 */
const wmap1 = new WeakMap([[obj1, 'info1'], [obj2, 'info2'], [obj3, 'info3']])
wmap1.set({ name: 'rice' }, 'friends')
wmap1.get(obj1)
wmap1.has(obj2)
wmap1.delete(obj3)
// 1种场景：vue3的响应式原理


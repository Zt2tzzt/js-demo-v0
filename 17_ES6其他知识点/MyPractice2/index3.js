/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-19 22:35:59
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-19 23:12:26
 * @LastEditContent: 
 */
/**'
 * Set的2种应用场景
 * 	1.保存不重复的元素
 * 	2.给数组去重
 */
const set1 = new Set([1, 2, 3, 3, 4])
const arr1 = [...set1]
const arr2 = Array.from(set1)
/**
 * Set常用的1种属性和4种方法
 */
console.log(set1.size);
set1.add(5)
set1.has(2)
set1.delete(3)
// set1.clear()
/**
 * 遍历Set的两种方法
 */
set1.forEach((el1, el2, set) => {
	console.log(el1, el2, set);
});
for (const el of set1) {
	console.log(el);
}
/**
 * 弱引用的概念：当强引用解除时，被弱引用的对象将被GC回收
 */

/**
 * WeakSet和Set的2个区别（没有size属性，没有clear方法，不能遍历（枚举））
 * 	1.WeakSet中只能存放对象类型的元素
 * 	2.WeakSet中存放的元素若没有其它引用指向它，则会被GC回收
 */

/**
 * WeakSet常用的3个方法
 */
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, b: 4 }
const obj3 = { e: 5, f: 6 }
const wset1 = new WeakSet([obj1, obj2, obj3])
wset1.add({ g: 7 })
wset1.has(obj1)
wset1.delete(obj2)
/**
 * WeakSet的1个应用场景
 */
const wset2 = new WeakSet
class Person {
	constructor() {
		wset2.add(this)
	}
	running() {
		if (!wset2.has(this)) {
			throw new Error('不能通过非构造函数创建的对象调用该方法')
		}
		console.log('runign', this);
	}
}
const p = new Person
p.running()
// p.running.call({a:1})

/**
 * Map和对象的区别
 * 	1.对象中只能使用字符串或Symbol作为属性名
 * 	2.当我们想要使用其它数据类型比如对象作为key时，需要使用Map
 */
/**
 * 使用entries创建一个Map
 */
const map1 = new Map([[1, obj1], [2, obj2], [3, obj3]])
/**
 * Map的1种属性，5种方法
 */
console.log(map1.size);
map1.set(4, { g: 7 })
map1.has(2)
map1.get(2)
map1.delete(3)
// map1.clear()
/**
 * Map的2种遍历方法
 */
map1.forEach((value, key, map) => {
	console.log(value, key, map);
});
for (const [key, value] of map1) {
	console.log(key, value);
}

/**
 * WeakMap和Map的2点区别（没有size属性，没有clear方法，不能遍历（枚举））
 * 	1.WeakMap中只能使用对象类型作为key
 * 	2.WeakMap中如果没有其它强引用指向作为key的对象，则该对象会被GC回收，对应的值也会被销毁
 */

/**
 * WeakMap常用的4种方法
 */
const wmap1 = new WeakMap([[obj1, 'info1'], [obj2, 'info2'], [obj3, 'info3']])
wmap1.set({ g: 7 }, 'info4')
wmap1.has(obj1)
wmap1.get(obj2)
wmap1.delete(obj3)
/**
 * WeakMap的应用场景：Vue3响应式原理
 */
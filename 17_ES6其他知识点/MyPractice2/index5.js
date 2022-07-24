/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-20 14:21:59
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-20 14:56:53
 * @LastEditContent: 
 */
/**
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
 * 遍历Set的2种常用方法
 */
set1.forEach((el1, el2, set) => {
	console.log(el1, el2, set);
});
for (const el of set1) {
	console.log(el);
}

/**
 * 弱引用的概念：如果被弱引用的对象没有被其它强引用引用，那么它会被GC回收
 */

/**
 * WeakSet和Set的2个区别（没有size属性，没有clear方法，不可枚举（遍历））
 * 	1.WeakSet中只能保存对象类型的数据
 * 	2.WeakSet引用的对象，如果没有其它强引用指向它，那么它会被GC回收
 */

/**
 * WeakSet常用的3个方法，1个应用场景
 */
const obj1 = { name: 'lingz', age: 29 }
const obj2 = { height: 175, weight: 70 }
const obj3 = { number: 14, team: 'Unity' }
const obj4 = { friend: 'Rice' }
const wset1 = new WeakSet([obj1, obj2, obj3])
wset1.add(obj4)
wset1.has(obj1)
wset1.delete(obj3)
/**
 * 1个应用场景
 */
const wset2 = new WeakSet
class Person {
	constructor() {
		wset2.add(this)
	}
	running() {
		if (!wset2.has(this)) throw new Error('不能通过非构造函数创建的对象调用此方法')
		console.log('running', this);
	}
}
const p = new Person
p.running()
// p.running.call(obj4)

/**
 * Map和对象的区别
 * 	1.对象中只能使用字符串/Symbol作为属性名
 * 	2.当我们需要使用其它数据类型比如Object作为key是，就需要用到Map
 */
/**
 * 用entries创建一个Map
 */
const map1 = new Map([[obj1, 111], [obj2, 222], [obj3, 333]])
/**
 * Map的1种属性和5种方法
 */
map1.set(obj4, 444)
map1.has(obj1)
map1.get(obj2)
map1.delete(obj3)
// map1.clear()
/**
 * 2种遍历方式
 */
map1.forEach((value, key, map) => {
	console.log(key, value);
});
for (const [key, value] of map1) {
	console.log(key, value);
}

/**
 * WeakMap和Map的2点区别（没有size属性，没有clear方法，不可枚举（遍历））
 * 	1.WeakMap中只接受Object类型的值作为key
 * 	2.WeakMap中key引用的对象，如果没有没其它强引用引用，那么会被GC回收，对应的值会销毁
 */

/**
 * WeakMap常用的4种方法和1个应用场景
 */
const wmap1 = new WeakMap([[obj1, 111], [obj2, 222], [obj3, 333]])
wmap1.set(obj4, 444)
wmap1.has(obj2)
wmap1.get(obj2)
wmap1.delete(obj3)
/**
 * WeakMap的应用场景：Vue3响应式原理
 */
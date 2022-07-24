/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-19 18:08:10
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-19 18:45:13
 * @LastEditContent: 
 */
/**
 * Set的2种应用场景
 * 	1.保存不重复的元素
 * 	2.用于数组的去重
 */
const set1 = new Set([1, 2, 3, 3, 4])
const arr1 = [...set1]
const arr2 = Array.from(set1)
/**
 * Set常用的1种属性和4种方法
 */
console.log(set1.size);
set1.add(6)
set1.has(1)
set1.delete(4)
// set1.clear()
/**
 * 遍历Set的2种方法
 */
// Set中没有索引，所以forEach回调函数两个参数都是元素值
set1.forEach((el1, el2, set) => {
	console.log(el1, el2, set);
});
for (const el of set1) {
	console.log(el);
}

/**
 * 弱引用的概念：如果没有强引用指向弱引用的对象，则该对象会被GC回收
 */

/**
 * WeakSet和Set的3个区别（没有size属性，没有clear方法，不能遍历（枚举））
 * 	1.WeakSet只能存放对象类型
 * 	2.WeakSet中对元素的引用是弱引用，存放的对象，如果没有引用指向它，则会被GC回收
 */

/**
 * WeakSet常用的3种方法
 */
const obj1 = { name: 'lingz', age: 29 }
const obj2 = { height: 175, weight: 70 }
const obj3 = { number: 14, team: 'unity' }
const wset1 = new WeakSet([obj1, obj2, obj3])
wset1.add({ name: 'zzt' })
wset1.has(obj1)
wset1.delete(obj3)
/**
 * WeakSet的1个应用场景
 */
const pws = new WeakSet()
class Person {
	constructor() {
		pws.add(this)
	}
	running() {
		if (!pws.has(this)) {
			throw new Error('不能用非构造函数创建的对象调用该构造方法')
		}
		console.log('running', this);
	}
}
const p = new Person()
p.running()
// p.running.call({ name: 'zzt' })

/**
 * Map和对象的区别
 * 	1.对象中存储映射关系，只能使用字符串或Symbol作为属性名
 * 	2.有时我们需要使用其它数据类型比如Object作为key，这是我们需要用到Map
 */
/**
 * 用entries创建一个Map
 */
const map1 = new Map([[obj1, 'info1'], [obj2, 'info2'], [obj3, 'info3']])

/**
 * Map的1种属性和5种方法
 */
console.log(map1.size);
map1.set(1, 666)
map1.get(obj1)
map1.has(obj2)
map1.delete(1)
// map1.clear()
/**
 * Map的2种遍历方式
 */
map1.forEach((value, key, map) => {
	console.log(value, key, map);
});
for (const [key, value] of map1) {
	console.log(key, value);
}

/**
 * WeakMap和Map的2点区别（没有size属性，没有clear方法，不能遍历（枚举））
 * 	1.WeakMap只能使用Object类型的数据作为key
 * 	2.WeakMap的key对对象的引用是弱引用，没有其它引用指向WeakMap中的key时，该对象会被GC回收，对应的值会销毁
 */

/**
 * WeakMap常用的4种方法
 */
const wmap1 = new Map([[obj1, 'info1'], [obj2, 'info2'], [obj3, 'info3']])
wmap1.set({ name: 'zzt' }, 666)
wmap1.get(obj1)
wmap1.has(obj2)
wmap1.delete(obj3)
/**
 * WeakMap的应用场景：Vue3响应式原理
 */

/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-19 14:44:32
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-07-02 16:01:47
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
console.log(set1);
// set1.clear()
/**
 * 遍历Set的2种常用方法
 */
// Set没有索引，所以第二个参数也是元素值
set1.forEach((el1, el2, set) => {
	console.log(el1, el2, set);
});
for (const el of set1) {
	console.log(el);
}

/**
 * 弱引用的概念：
 * 	可达的引用，当强引用解除时，被弱引用的对象会被GC回收
 */

/**
 * WeakSet和Set的两点区别，没有size属性，没有clear方法，不能被遍历（枚举）
 * 	1.WeakSet中只能存放对象类型，不能存放基本数据类型
 * 	2.WeakSet对元素的引用是弱引用，如果没有其它强引用对某个对象进行引用，那么GC可以对该对象进行回收
 */

/**
 * WeakSet常用的3个方法
 */
const obj1 = { name: 'lingz', age: 18 }
const obj2 = { height: 1.75, weight: 70 }
const obj3 = { number: 14, team: 'unity' }
const weakset1 = new WeakSet([obj1, obj2, obj3])
weakset1.add(obj1)
weakset1.has(obj1)
weakset1.delete(obj2)
/**
 * WeakSet的一个应用场景
 */
const pws = new WeakSet
class Person {
	constructor() {
		pws.add(this)
	}
	running() {
		if (!pws.has(this)) {
			throw new Error('不能通过非构造方法创建出来的对象调用running方法')
		}
		console.log('running', this);
	}
}
let p = new Person()
p.running()
// p.running.call({ name: 'lingz' })
p = null

/**
 * Map和对象的区别
 * 	1.用对象存储映射关系，只能用字符串/Symbol作为属性名
 * 	2.某些时候我们需要使用其它类型或者对象来作为key，那么就可以使用Map
 */
/**
 * 用entries创建一个Map
 */
const map1 = new Map([[obj1, 'info1'], [obj2, 'info2'], [obj3, 'info3']])

/**
 * Map的1种属性，4种方法，2中遍历方式
 */
console.log(map1.size);
map1.set(1, 'aaa')
map1.get(obj1)
map1.has(obj2)
map1.delete(1)
// map1.clear()
map1.forEach((value, key, map) => {
	console.log(key, value, map);
});
for (const [key, value] of map1) {
	console.log(key, value);
}

/**
 * WeakMap和Map的2点区别：（没有size属性，没有clear方法，不能便利（枚举））
 * 	1.WeakMap的key只能使用对象，不接受其他类型作为key
 * 	2.WeakMap的key对对象的引用是弱引用，如果没有其它引用指向该对象，那么GC可以回收给对象，键值都会销毁
 */

/**
 * WeakMap常用的4种方法，1个应用场景(vue3响应式)
 */
const wmap1 = new WeakMap([[obj1, 'info1'], [obj2, 'info2'], [obj3, 'info3']])
wmap1.set({ name: 'zzt' }, 666)
wmap1.has(obj1)
wmap1.get(obj2)
wmap1.delete(obj3)

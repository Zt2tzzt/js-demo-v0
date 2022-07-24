/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-20 09:35:39
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-20 10:10:52
 * @LastEditContent: 
 */
/**
 * Set的2种应用场景
 * 	1.保存不重复的元素
 * 	2.用于数组去重
 */
/**
 * Set常用的1种属性和4种方法
 */
const set1 = new Set([1, 2, 3, 3, 4])
const arr1 = [...set1]
const arr2 =Array.from(set1)
console.log(set1.size);
set1.add(5)
set1.has(2)
set1.delete(3)
// set1.clear()
/**
 * 遍历Set的2种方法
 */
set1.forEach((el1, el2, set) => {
	console.log(el1, el2, set);
});
for (const el of set1) {
	console.log(el);
}

/**
 * 弱引用的概念：如果没有其它强引用指向该弱引用的对象，则该对象会被删除
 */

/**
 * WeakSet和Set的两个区别（没有size属性，没有clear方法，不能遍历（枚举））
 * 	1.WeakSet只能存放对象类型的数据
 * 	2.如果没有其它强引用指向该WeakSet中的对象，则该对象会被GC回收
 */

/**
 * WeakSet常用的3个方法
 */
const obj1 = { name: 'lingz', age: 29 }
const obj2 = { height: 175, weight: 70 }
const obj3 = { number: 14, team: 'unity' }
const wset1 = new WeakSet([obj1, obj2, obj3])
wset1.add({ apprentice: 'Ronaldo' })
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
		if (!wset2.has(this)) {
			throw new Error('不能通过非狗在函数创建的对象调用该方法')
		}
		console.log('running', this);
	}
}
const p = new Person
p.running()
// p.running.call({name: 'zzt'})

/**
 * Map和对象的区别
 * 	1.对象中只能使用字符串/Symbol作为属性名
 * 	2.当我们需要使用其它数据类型比如Object作为key，那么就需要用到Map
 */
/**
 * 用entries创建一个Map
 */
const map1 = new Map([['name', 'lingz'], ['age', 29], ['team', 'unity']])

/**
 * Map的1种属性和5种方法
 */
console.log(map1.isze);
map1.set('number', 14)
map1.has('name')
map1.get('name')
map1.delete('team')
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
 * 	1.WeakMap中只能使用对象类型作为key
 * 	2.WeakMap中如果没有其它强引用指向key，那么这个key将被GC回收，对应的值将被销毁
 */

/**
 * WeakMap常用的4种方法
 */
const wmap1 = new WeakMap([[obj1, 'info1'], [obj2, 'info2'], [obj3, 'info3']])
wmap1.set({ name: 'zzt' }, 666)
wmap1.has(obj1)
wmap1.get(obj1)
wmap1.delete(obj3)
/**
 * WeakMap的应用场景：Vue3响应式原理
 */
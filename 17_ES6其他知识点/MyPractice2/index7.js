/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-25 14:09:02
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-25 14:35:53
 * @LastEditContent: 
 */
/**
 * Set的2种应用场景
 * 	1.用于保存不重复的元素
 * 	2.用于数组去重
 */
/**
 * Set的1个属性和4个方法
 */
const set1 = new Set([1, 2, 3, 3, 4])
console.log(set1.size);
set1.add(5)
set1.has(3)
set1.delete(4)
// set1.clear()
/**
 * Set的2种遍历方法
 */
set1.forEach((ele1, ele2, set1) => {
	console.log(ele1, ele2, set1);
});
for (const ele of set1) {
	console.log(ele);
}

/**
 * 弱引用的概念
 * 	弱引用的对象，弱国没有被其它引用指向，那么它会被GC回收
 */

/**
 * WeakSet和Set的2种区别（没有size属性，没有clear方法，不能枚举）
 * 	1.WeakSet中只能保存Object类型的数据
 * 	2.WeakSet中保存的元素，如果没有其它引用指向它，那么会被GC回收
 */

/**
 * WeakSet常用的3个方法和一个应用场景
 */
const obj1 = { name: 'lingz', age: 29 }
const obj3 = { height: 175, weight: 70 }
const obj2 = { number: 14, team: 'unity' }
const wset1 = new WeakSet([obj1, obj2, obj3])
wset1.add({ friend: 'rice' })
wset1.has(obj1)
wset1.delete(obj3)
const wset2 = new WeakSet
class Person {
	constructor() {
		wset2.add(this)
	}
	running() {
		if (!wset2.has(this)) {
			throw new Error('不能通过非构造方法创建的对象调用该方法')
		}
		console.log(this, 'running');
	}
}
const p = new Person
p.running()
// p.running.apply({name: 'zzt'})

/**
 * Map和对象的区别
 * 	1.对象只能使用字符串/Symbol作为属性名
 * 	2.Map可以使用任何数据类型来作为key
 */
/**
 * 用entries创建一个Map
 */
const map1 = new Map([['name', 'lingz'], ['age', 29]])
/**
 * Map的1种属性和5种方法，2种遍历方式
 */
console.log(map1.size)
map1.set('number', 14)
map1.has('name')
map1.get('age')
map1.delete('age')
// map1.clear()
map1.forEach((value, key, map1) => {
	console.log(value, key, map1);
});
for (const [key, value] of map1) {
	console.log(key, value);
}

/**
 * WeakMap和Map的2点区别（没有size属性，没有clear方法，不能枚举）
 * 	1.WeakMap的key只能存放Object类型数据
 * 	2.WeakMap的key如果没有被其它强引用指向的话，会被GC回收
 */

/**
 * WeakMap常用的4种方法
 */
const wmap1 = new WeakMap([[obj1, 'info1'], [obj2, 'info2'], [obj3, 'info3']])
wmap1.set({ friend: 'rice' }, 'info4')
wmap1.has(obj1)
wmap1.get(obj2)
wmap1.delete(obj3)
/**
 * WeakMap的1种应用场景：Vue3响应式
 */


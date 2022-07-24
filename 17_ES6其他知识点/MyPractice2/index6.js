/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-22 16:42:40
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-22 17:17:27
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
set1.delete(4)
set1.clear()
/**
 * 遍历Set的2种方法
 */
set1.forEach((ele1, ele2, set) => {
	console.log(ele1, ele2, set);
});
for (const ele of set1) {
	console.log(ele);
}

/**
 * 弱引用的概念：如果弱引用引用的对象没有被其它强引用引用，那么它会被GC回收
 */

/**
 * WeakSet和Set的2个区别（没有size属性，没有clear方法，不能枚举（遍历））
 * 	1.WeakSet中只能存放对象类型的数据
 * 	2.WeakSet中存放的对象，如果没有被其它引用指向，那么它会被GC回收
 */

/**
 * WeakSet常用的3个方法，1个应用场景
 */
const obj1 = { name: 'lingz', age: 29 }
const obj2 = { height: 175, weight: 70 }
const obj3 = { team: 'unity', number: 14 }
const wset1 = new WeakSet([obj1, obj2, obj3])
wset1.add({ friend: 'rice' })
wset1.has(obj1)
wset1.delete(obj3)
const wset2 = new WeakSet
class Person {
	constructor(name, age) {
		wset2.add(this)
	}
	running() {
		if (!wset2.has(this)) throw new Error('不能通过非构造函数创建的对象调用该方法')
		console.log('running', this);
	}
}
const p = new Person
p.running()
// p.running.apply({ naem: 'lingz' })

/**
 * Map和对象的区别
 * 	1.对象只能使用字符串/Symnbol作为属性名
 * 	2.Map可使用任何数据类型创建作为key
 */
/**
 * 用entries创建一个Map
 */
const map1 = new Map([['name', 'lingz'], ['age', 29]])
console.log(map1);

/**
 * Map的1种属性和5种方法
 */
console.log(map1.size);
map1.set('number', 14)
map1.has('name')
map1.get('age')
map1.delete('age')
map1.clear
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
 * WeakMap和Map的区别（没有size属性，没有clear方法，不能枚举）
 * 	1.WeakMap中存放的键必须是Object类型
 * 	2.当没有其它引用指向WeakMap中的键时，该对象会被GC回收，对应的值也会被销毁
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
 * WeakMap的1个应用场景：Vue3响应式
 */

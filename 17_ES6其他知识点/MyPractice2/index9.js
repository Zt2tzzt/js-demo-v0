/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-17 08:50:22
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-17 10:04:51
 * @LastEditContent: 
 */
/**
 * Set的2种应用场景，Set常用的1种属性和4种方法，遍历Set的2种常用方法
 * 1.给数组去重
 * 2.保存不重复的元素
 */
const set1 = new Set([1, 2, 3, 3, 4])
console.log(set1.size);
set1.add(5)
set1.has(3)
set1.delete(4)
// set1.clear()

set1.forEach((ele1, ele2, set) => {
	console.log(ele1, ele2, set);
})
for (const ele of set1) {
	console.log(ele);
}

/**
 * 弱引用的概念
 * 当强引用解除时，被弱引用的对象会被GC回收
 */

/**
 * WeakSet和Set的2个区别，没有size属性，没有clear方法，不能枚举
 * 1.WeakSet中只能存放Object类型的数据。不能存放基本数据类型。
 * 2.当WeakSet中存放的对象，没有其它强引用指向它时，会被GC回收
 */

/**
 * WeakSet常用的3个方法，1个应用场景
 */
const obj1 = { name: 'jesse', age: 28 }
const obj2 = { team: 'unity', number: 14 }
const wset = new WeakSet([obj1, obj2])
wset.add({ friend: 'rice' })
wset.has(obj1)
wset.delete(obj2)

const wset2 = new WeakSet
class Person {
	constructor() {
		wset2.add(this)
	}
	running() {
		if (!wset2.has(this)) {
			throw new Error('不能通过非构造方法创建出来的对象调用running方法')
		}
		console.log('running', this);
	}
}
const p = new Person()
p.running()
p.running.call({ naem: 'lingz' })

/**
 * Map和对象的区别，用entries创建一个Map
 * 用对象存储映射关系，只能用字符串/Symbol作为属性名
 * 某些时候我们需要使用其它类型或者对象来作为key，那么就可以使用Map
 */
const lingard = new Map([['name', 'lingz'], ['age', 28], ['number', 14]])

/**
 * Map的1种属性和5种方法，2种遍历方式
 */
console.log(lingard.size)
lingard.set('team', 'unity')
lingard.get('name')
lingard.has('number')
lingard.delete('team')
// lingard.clear()
lingard.forEach((value, key, map) => {
	console.log(key, value, map);
});
for (const [key, value] of lingard) {
	console.log(key, value);
}

/**
 * WeakMap和Map的2点区别，没有size属性，没有clear方法，不能枚举
 * 1.WeakMap中的键只能保存Object类型的数据。
 * 2.当WeakMap中key对应的对象没有强引用指向它时，会被GC回收，对应的值也会被销毁
 */

/**
 * WeakMap常用的4种方法，1种场景：Vue3响应式原理
 */
const wmap1 = new WeakMap([[obj1, 'info1'], [obj2, 'info2']])
wmap1.set({ friend: 'rice' }, 'info3')
wmap1.get(obj1)
wmap1.has(obj2)
wmap1.delete(obj2)


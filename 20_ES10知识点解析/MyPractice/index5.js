/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-24 09:06:38
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-24 09:36:36
 * @LastEditContent: 
 */
/**
 * flat和flatMap的使用，flatMap的1个应用场景（ES10)
 */
const arr1 = [1, 2, [3, 4], [[5, 6], [7, 6]], 9]
console.log(arr1.flat());
const arr2 = ['Hello Frog', 'Jesse Lingad']
const words = arr2.flatMap(ele => ele.split(' '))
console.log(words);

/**
 * flatMap的2项注意
 * 	1.先进性map操作，在进行flat操作
 * 	2.flat深度为1
 */

/**
 * Object.fromEntries()的使用，1个应用场景（ES10)
 */
const info = { name: 'lingz', age: 29 }
const entries = Object.entries(info)
const newInfo = Object.fromEntries(entries)
console.log(newInfo);
/* const queryStr = 'name=lingz&age=29&height=175'
const params = new URLSearchParams(queryStr) */
const params = new Map([['name', 'lingz'], ['age', 29]])
const paramObj = Object.fromEntries(params)
console.log(paramObj);

/**
 * trimEnd和trimStart的使用（ES10）
 */
console.log('     Hello Frog           '.trimEnd().trimStart());

/**
 * Symbol.description描述属性，Optional catch binding（ES10）(ES10)
 */

/**
 * ES11之前呢个正常表示的最大常量，BigInt类型声明，相加的2种方式，BigInt转Number类型（ES11）
 */
const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt);
const bigint = 900719925474099100n
console.log(bigint + 10n === bigint + BigInt(10));
const int = Number(10n)
console.log(int);

/**
 * Nullish Coalescing Operator.空值合并运算符的使用，它与逻辑或作比较（ES11）
 */
console.log('' || 'defalut value');
console.log(0 ?? 'defalut value');

/**
 * Optional Chaining。可选链的使用，他与逻辑与运算符作比较
 */
const info2 = { name: 'linz', age: 29, friend: { name: 'rice' } }
console.log(info2 && info2.friend && info2.friend.name);
console.log(info2?.friend?.name);

/**
 * 获取Node和浏览器环境全局对象，（ES11）
 * 	Node: global, 浏览器：this/window, ES11: globalThis
 */

/**
 * for...in标准化（ES11）
 * 	遍历key
 */

/**
 * ES Module Dynmic Import的使用（ES11）
 */

/**
 * Promise.allSettled() （ES11）
 */

/**
 * import meta （ES11）
 */

/**
 * FinalizationRegistry和WeakRef的结合使用（ES12）
 */
const registry = new FinaliationRegistry(value => {
	console.log(`监听到注册在registry上的${value}被回收`);
})
const obj = { name: 'lingz' }
const wobj = WeakRef(obj)
obj = null
console.log(wobj.deref().name);

setTimeout(() => {
	console.log(wobj.deref().name);
}, 10000);

/**
 * Numerical Seperator数字分割符（ES12）
 */

/**
 * 】String replaceAll()方法（ES12）
 */
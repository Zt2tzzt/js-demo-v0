/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-22 17:52:47
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-22 18:50:32
 * @LastEditContent: 
 */
/**
 * flat和flatMap的使用，flatMap的1个应用场景（ES10)
 */
const arr1 = [1, 2, [3, 4], [[5, 6], [7, 8]], 9]
console.log(arr1.flat(2));
const arr2 = ['Hello Frog', 'Jesse Lingard']
console.log(arr2.flatMap(ele => ele.split(' ')));

/**
 * flatMap的2项注意
 * 	1.先进行map操作，在进行flat操作
 * 	2.flat深度为1
 */

/**
 * Object.fromEntries()的使用，1个应用场景（ES10）
 */
const obj = { name: 'lingz', age: 29 }
const entries = Object.entries(obj)
const newObj = Object.fromEntries(entries)
const params = new URLSearchParams('naem=zzt&age=18&height=182')
const paraObj = Object.fromEntries(params)
console.log(paraObj);

/**
 * trimStart和trimEnd的使用（ES10）
 */
console.log('   Hello Frog   '.trimStart().trimEnd());

/**
 * Symbol descriptor描述属性，Optional Catch binding（ES10）
 */

/**
 * ES11之前能正常表示的最大常量，BigInt类型的声明，相加的2种方式，BigInt转Number类型（ES11）
 */
const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt);
const bigInt = 900719925474099100n
console.log(bigInt + 10n === bigInt + BigInt(10));
console.log(Number(10n));

/**
 * Nullish Coalescing Operator,控制合并运算符的使用，它与逻辑或作比较（ES11）
 */
console.log(0 || 'default value');
console.log(0 ?? 'default value');

/**
 * Optional Chaining，可选链的使用。它与逻辑与运算符作比较（ES11）
 */
const obj1 = { naem: 'lingz', age: 29, friend: { name: 'rice' } }
console.log(obj1 && obj1.friend && obj1.friend.name);
console.log(obj1?.friend?.name);

/**
 * 获取全局对象，Node：global，浏览器：this/window，ES11：globalThis
 */

/**
 * for...in标准化，遍历取值key
 */

/**
 * Dynamic import（ES11）
 */

/**
 * Import meta
 */

/**
 * FinalizationRegistry与WeakRef的结合使用
 */
const registry = new FinalizationRegistry(value => {
	console.log(`注册在registry对象上的${value}被回收`);
})
let obj2 = { name: 'lingz', age: 29 }
const info = new WeakRef(obj2)
registry.register(obj2, 'obj2')
obj2 = null
console.log(info.deref().name);
setTimeout(() => {
	console.log(info.deref().name);
}, 1000);

/**
 * Logical assinment operators，3个逻辑赋值运算符的使用（ES12）
 */
let msg = ''
msg ||= 'defalut value'
console.log(msg);
let obj3 = { name: 'lingz' }
obj3 &&= obj3.name
console.log(obj3);
let num = 0
num ??= 666
console.log(num);

/**
 * 数字分割符（ES12）
 */

/**
 * String replaceall() （ES12）
 */


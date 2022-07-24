/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-25 14:42:15
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-25 15:46:30
 * @LastEditContent: 
 */
/**
 * flat和flatMap的使用，flatMap的1个应用场景（ES10）
 */
const arr1 = [1, 2, [3, 4], [[5, 6], [7, 8]], 9]
console.log(arr1.flat());
const arr2 = ['Hello Frog', 'Jesse Lingard']
console.log(arr2.flatMap(ele => ele.split(' ')));

/**
 * flatMap的2项注意（ES10）
 * 	1.先进行map操作，在进行flat操作
 * 	2.flat深度为1
 */

/**
 * Object.fromEntries()的使用（ES10）
 */
const obj = { name: 'lingz', age: 29 }
const entries = Object.entries(obj)
const newObj = Object.fromEntries(entries)
console.log(newObj);

/**
 * trimStart和trimEnd的使用
 */
console.log('   Hello frog      '.trimStart().trimEnd());

/**
 * Symbol description描述属性（ES10）
 * Optional Catch bindging（ES10）
 */

/**
 * ES11之前能正确表示的最大常量，BigInt类型的声明，相加的2种方式，BigInt转Number类型（ES11）
 */
const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt);
const bigInt = 900719925474099100n
console.log(bigInt + 10n === bigInt + BigInt(10));
console.log(Number(10n));

/**
 * Nullish Coalescing Operator控制合并运算符的使用，它与逻辑或运算符作比较（ES11）
 */
console.log('' || 'default value');
console.log(0 ?? 'default value');

/**
 * Optional Chaining可选链的使用，它与逻辑与作比较（ES11）
 */
const obj1 = { name: 'lingz', age: 29, friend: { name: 'rice' } }
console.log(obj1 && obj1.friend && obj1.friend.name);
console.log(obj1?.friend?.name);

/**
 * 获取Node和浏览器的全局对象（ES11)
 * 	Node：global，浏览器：this/window
 * 	ES11：globalThis
 */

/**
 * for...in标准化（ES11）
 * 	枚举key
 */

/**
 * Dynamic Import的使用（ES11）
 * Promise.allSettled() （ES11）
 * Import meta(ES11)
 */

/**
 * FinalizationRegistry与WeakRef的使用（ES12）
 */
const register = new FinalizationRegistry(value => {
	console.log(`注册在register上的${value}被销毁了`);
})
let obj2 = { name: 'lingz', age: 29 }
const info = new WeakRef(obj2)
register.register(obj2, 'obj2')
obj2 = null
console.log(info.deref().name)
setTimeout(() => {
	console.log(info.deref()?.name)
}, 10000);

/**
 * Logical assignment operators三个逻辑赋值运算符的使用
 */
let msg = ''
msg ||= 'defalut value'
console.log(msg);
let obj3 = { name: 'lingz', age: 29 }
obj3 &&= obj3.name
console.log(obj3);
let num = 0
num ??= 666
console.log(num);

/**
 * Numeric seperator （ES12）
 * String.replaceAll() （ES12）
 */
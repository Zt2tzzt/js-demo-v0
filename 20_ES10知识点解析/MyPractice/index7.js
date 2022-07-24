/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-28 23:46:25
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-29 09:07:54
 * @LastEditContent: 
 */
/**
 * flat和flatMap的作用，flatMap的1个应用场景（ES10）
 */
const arr1 = [1, 2, [3, 4], [[7, 8]], 9]
console.log(arr1.flat());
const arr2 = ['Hello Frog', 'Jesse Lingard']
console.log(arr2.flatMap(ele => ele.split(' ')));

/**
 * flatMap注意事项2点
 * 	1.先进性Map操作，再进行flat操作
 * 	2.flat深度为1
 */

/**
 * Object.fromEntries()的使用，1个应用场景（ES10）
 */
const obj = { name: 'jlinz', age: 28 }
const entries = Object.entries(obj)
const newObj = Object.fromEntries(entries)
console.log(newObj);

/**
 * trimStart和trimEnd的使用（ES10）
 */
console.log('   Hello Frog   '.trimStart().trimEnd());

/**
 * Symbol description描述属性、(ES10)
 * Optional Catch binding(ES10)
 */

/**
 * ES11之前能正常表示的最大常量，BigInt类型的声明，相加的2种方式，BigInt转Number类型（ES11）
 */
const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt);
const bigInt = 900719925474099100n
console.log(bigInt + 10n === bigInt + BigInt(10));
console.log(Number(10n))

/**
 * Nullish Coalescing Operator空值合并运算符，它与逻辑或运算符的比较(ES11)
 */
console.log('' || 'defalut value');
console.log(0 ?? 'defalut value');

/**
 * Optional Chaning可选链的使用，它与逻辑与运算符做比较（ES11）
 */
const info = { name: 'linz', age: 29, friend: { name: 'rice' } }
console.log(info && info.friend && info.friend.name);
console.log(info?.friend?.name);

/**
 * 获取Node和浏览器的全局对象(ES11)
 * Node：global
 * 浏览器：this/window
 * ES11：globalThis
 */

/**
 * for...in的标准化(ES11)
 * 用于遍历key
 */

/**
 * Dynamic Import的使用（ES11）
 */

/**
 * Promise allSettled方法
 */

/**
 * Import meta
 */

/**
 * FinalizationRegistry与WeakRef的使用（ES12）
 */
const registry = new FinalizationRegistry(value => {
	console.log(`注册在registry上的${value}被回收了`);
})
let obj2 = { name: 'zzt' }
registry.register(obj2)
const info2 = new WeakRef(obj2)
obj2 = null
console.log(info2.deref().name);
setTimeout(() => {
	console.log(info2.deref().name);
}, 10000);

/**
 * Logical assignment operators三个逻辑赋值运算符的使用（ES12）
 */
let msg = ''
msg ||= 'default value'
console.log(msg);
let obj3 = { name: 'zzt' }
obj3 &&= obj3.name
console.log(obj3);
let num = 0
num ??= 'defalut value'
console.log(num);

/**
 * Numeric Sperator数字分割符（ES12）
 */

/**
 * String replaceAll方法（ES12）
 */
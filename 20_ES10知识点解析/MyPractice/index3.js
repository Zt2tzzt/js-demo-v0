/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-22 13:18:03
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-22 15:03:37
 * @LastEditContent: 
 */
/**
 * flat和flatMap的使用，flatMap的1个应用场景（ES10）
 */
const arr1 = [1, 2, [3, 4], [[5, 6], [7, 8]], 9]
console.log(arr1.flat(2));
const arr2 = ['Hello Frog', 'Jesse Lingard', 'Mo Salah']
console.log(arr2.flatMap(ele => ele.split(' ')));

/**
 * flatMap的2项注意
 * 	1.先进性map操作，再进行flat操作
 * 	2.flatMap的flat操作深度为1
 */

/**
 * Object.fromEntries()的使用，1个引用场景（ES10）
 */
const obj1 = { name: 'lingz', age: 29 }
const entries = Object.entries(obj1)
const newObj = Object.fromEntries(entries)
console.log(newObj);
const queryStr = 'name=zzt&age=28&height=182'
const queryParam = new URLSearchParams(queryStr)
const queryObj = Object.fromEntries(queryParam)
console.log(queryObj);

/**
 * trimStart和trimEnd的使用
 */
console.log('   Hello Frog   '.trimEnd().trimStart());

/**
 * Symbol descriptor描述属性，Optional Catch binding Catch参数可选（ES10）
 */

/**
 * ES11之前正常表示的最大常量，BigInt类型的声明，相加的2种方式，BigInt转Number类型（ES11）
 */
const maxInt = Number.MAX_SAFE_INTEGER
const bigInt = 900719925474099100n
console.log(bigInt);
console.log(bigInt + 10n);
console.log(bigInt + BigInt(10));
console.log(Number(10n));

/**
 * Nullish Coalescing Operator，空值合并运算符的使用，它与逻辑或做比较（ES11）
 */
console.log('' || 'default value');
console.log(0 ?? 'defalut value');

/**
 * Optional Chaining可选链的使用，它与逻辑与作比较（ES11）
 */
const obj2 = { name: 'lingz', age: 29, friend: { name: 'rice' } }
console.log(obj2 && obj2.friend && obj2.friend.name);
console.log(obj2?.friend?.name);

/**
 * 获取Node和浏览器的全局对象，Node：global，浏览器：window / this，ES11：globalThis
 */

/**
 * for..in的标准化，遍历取值的是键（ES11）
 */

/**
 * Dynamic Import的使用（ES11）
 */

/**
 * Promise.allSettled方法的使用（ES11）
 */

/**
 * import meta的使用（ES11）
 */

/**
 * FinalizationRegistry与WeakRef的结合使用（ES12）
 */
/* const registry = new FinalizationRegistry(value => {
	console.log(`将听到注册在registry的对象${value}被GC回收`);
})

let obj3 = { name: 'lingz', age: 29 }
const info = new WeakRef(obj3)
registry.register(obj3, 'obj3')
obj3 = null
console.log(info.deref()?.name);

setTimeout(() => {
	console.log(info.deref()?.name);
}, 10000); */

/**
 * logical assignment operators，3个逻辑赋值运算符（ES12)
 */
let msg = ''
msg ||= 'defalut value'
console.log(msg);
let obj = { name: 'lingz', age: 29 }
obj &&= obj.name
console.log(obj);
let num = 0
num ??= 'defalut value'
console.log(num);

/**
 * 数字分割运算符（ES12）
 */

/**
 * string.replaceAll()
 */


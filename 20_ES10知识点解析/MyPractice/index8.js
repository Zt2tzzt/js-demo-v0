/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-05 09:32:14
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-05 11:02:45
 * @LastEditContent: 
 */
/**
 * flat和flatMap的使用，flatMap的1个应用场景（ES10）
 */
const arr1 = [1, 2, [3, 4], [5, 6], [[7, 8]], 9]
console.log(arr1.flat())
const arr2 = ['Hello Frog', "Jesse Lingard"]
const newArr2 = arr2.flatMap(ele => ele.split(' '))
console.log(newArr2);


/**
 * flatMap的2项注意
 * 1.先进性map操作，在进行flat操作
 * 2.flat的深度为1
 */

/**
 * Object.fromEntries()的使用，1个应用场景（ES10）
 */
const obj1 = { name: 'lingz', age: 29 }
const entries = Object.entries(obj1)
const newObj1 = Object.fromEntries(entries)
console.log(newObj1);
const queryStr = 'name=linz&age=28&number=14'
const params = new URLSearchParams(queryStr)
const paramsObj = Object.fromEntries(params)
console.log(paramsObj);

/**
 * trimStart和trimEnd的使用(ES10)
 */
console.log('      Hello Frog         '.trimEnd().trimStart());


/**
 * Symbol description描述属性，Optional Catch binding（ES10）
 */

/**
 * ES11之前能正常表示的最大常量，BigInt类型的声明，相加的2种方式，BigInt转Number类型
 */
const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt);
console.log(900719925474099100n + 10n === 900719925474099100n + BigInt(10));
console.log(Number(10n) === 10)

/**
 * Nullish Coalescing Operator控制合并运算符的使用，它与逻辑或作比较
 */
console.log('' || 'default value');
console.log(0 ?? 'default value');

/**
 * Optional chaining，可选链的使用，它与逻辑与作比较（ES11）
 */
const obj2 = { name: 'linz', age: 28, friend: { name: 'rice' } }
console.log(obj2 && obj2.friend && obj2.friend.name);
console.log(obj2?.friend?.name);

/**
 * 获取Node和浏览器的全局对象，globalThis获取全局对象（ES11）
 * Node: global, 浏览器：window
 * ES11: globalThis
 */

/**
 * for...in标准化（ES11）
 * 统一规范，遍历出key
 */

/**
 * Dynamic Import的使用（ES11）
 */

/**
 * Promise allSettled方法的使用（ES11）
 */

/**
 * Import meta的使用（ES11）
 */

/**
 * FinalizationRegistry与WeakRef的结合使用（ES12）
 */
const register = new FinalizationRegistry(value => {
	console.log('监听到主责在register上的' + value + '被销毁了');
})
let obj3 = { name: 'lingz', age: 28 }
register.register(obj3, 'obj3')
const info = new WeakRef(obj3)
obj3 = null
console.log(info.deref()?.name)

setTimeout(() => {
	console.log(info.deref()?.name)
}, 5000);

/**
 * Logical assignment operators，3个逻辑赋值运算符的使用（ES12）
 */
let msg = ''
msg ||= 'default value'
console.log(msg);
let obj4 = { name: 'lingz' }
obj4 &&= obj4.name
console.log(obj4);
let num = 0
num ??= 666
console.log(num);

/**
 * Numberic separator
 */
const bigint = 100_100_345_999

/**
 * String replaceAll方法的使用（ES12）
 */


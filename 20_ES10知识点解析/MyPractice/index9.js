/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-20 09:06:09
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-20 09:48:23
 * @LastEditContent:
 */
/**
 * flat和flatMap的使用，flatMap的一个应用场景（ES10）
 */
const arr1 = [1, 2, [3, 4], [[5, 6], [7, 8]], 9]
console.log(arr1.flat())
const arr2 = ['Hello Frog', 'Jessse Lingard']
const res1 = arr2.flatMap(ele => ele.split(' '))
console.log(res1);

/**
 * flatMap的2项注意
 * 1.先进行map操作，再进行flat操作
 * 2.flat深度为1
 */

/**
 * Object.fromEntries()的使用，一个应用场景
 */
const queryStr = 'naem=Lingard&age=28'
const params = new URLSearchParams(queryStr)
const paramObj = Object.fromEntries(params)
console.log(paramObj);

/**
 * trimStart和trimEnd的使用
 */
console.log('   Hello From   '.trimStart().trimEnd());

/**
 * Symbol description描述属性，Optional catch binding
 */

/**
 * ES11之前能够正常表示的最大常量，BigInt类型的声明，相加的2种方式，BigInt装number类型
 */
const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt);
const bigInt = 900719925474099166n
console.log(bigInt + 6n === bigInt + BigInt(6));
const num = Number(4n)
console.log(num);

/**
 * Nullish Coalescing Operator，空值合并运算符，它与逻辑或作比较
 */
console.log('' || 'default value');
console.log('' ?? 'default value');
console.log(0 || 'default value');
console.log(0 ?? 'default value');

/**
 * Optional Chaining可选链的使用，它与逻辑与作比较。
 */
const info1 = { name: 'lingard', age: 26, friend: { name: 'rice' } }
console.log(info1 && info1.friend && info1.friend.name);
console.log(info1?.friend?.name);

/**
 * 获取Node和浏览器的全局对象使用globalThis
 */

/**
 * for...in标准化，用于遍历对象的key
 */

/**
 * ESModule Dynamic Import
 */

/**
 * Promise的allSettled方法
 */

/**
 * import meta用于暴露JS模块上下文元数据属性
 */

/**
 * FinalizationRegistry与WeakRef的结合使用
 */
const info2 = { name: 'Lingard', name: 28 }

const registry = new FinalizationRegistry(value => {
	console.log(`监听到registry中的${value}被回收了`);
})
registry.register(info3, 'info3')
const winfo = new WeakRef(info3)

info3 = null
console.log(winfo.deref()?.name);

setTimeout(() => {
	console.log(info.deref()?.name);
}, 10000);

/**
 * 三个逻辑运算符的使用
 */
let num1 = 0
num1 ||= 'default value'
console.log(num1);
num1 = 0
num1 ??= 'defalut value'
console.log(num1);
let obj = { name: 'zzt' }
obj &&= obj.name
console.log(obj);

/**
 * 数字分割符Numeric Seperator
 */

/**
 * String.replaceAll方法的使用
 */

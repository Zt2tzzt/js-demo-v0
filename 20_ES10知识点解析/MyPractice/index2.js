/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-22 08:55:09
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-03-21 13:29:21
 * @LastEditContent: 
 */
/**
 * flat和flatMap的使用，flatMap的1个应用场景（ES10）
 */
const arr = [1, 2, [3, 4], [[5, 6], 7], 8]
console.log(arr.flat(2));
const arr2 = arr.flat(2)
const arr3 = arr2.map(ele => ele * 2)
console.log(arr3);
const arr4 = arr2.flatMap(ele => ele * 2)
console.log(arr4);
const arr5 = ['Hello World', 'Hello Frog', 'Jesse Lingard']
const arr6 = arr5.flatMap(ele => ele.split(' '))
console.log(arr6);

/**
 * flatMap的2项主语：
 * 	1.flatMap是先进性map操作，再做flat操作
 * 	2.flatMap中flat深度相当于1
 */

/**
 * Object.fromEntries()的使用，1个应用场景（ES10）
 */
const obj = { name: 'lingz', age: 29 }
const entries = Object.entries(obj)
console.log(entries);
const obj2 = Object.fromEntries(entries)
console.log(obj2);
const queryStr = 'name=zzt&age=18&height=182'
const queries = new URLSearchParams(queryStr)
console.log(queries);
const paramObj = Object.fromEntries(queries)
console.log(paramObj);

/**
 * trimEnd，trimStart的使用（ES10）
 */
console.log('    Hello Frog   '.trimStart().trimEnd());

/**
 * Symbol descriptor描述属性，Optional Catch binding取消catch绑定参数可选（ES10）
 */

/**
 * ES11之前能正常表示的最大常量，BigInt类型的声明，相加的2种方式，BigInt转Number类型（ES11）
 */
console.log(Number.MAX_SAFE_INTEGER);
const num1 = 900719925474099100n + 10n
const num2 = 900719925474099100n + BigInt(10)
const num3 = Number(10n)
console.log(num1, num2, num3);

/**
 * Nullish Coalescing Operator, 空值合并运算符的使用，它与逻辑或作比较（ES11）
 */
console.log(0 || 'default value');
console.log(0 ?? 'default value');

/**
 * Optional Cahining可选链的使用，它与逻辑与作比较（ES11）
 */
const obj3 = { name: 'lingz', friend: { name: 'Rice' } }
console.log(obj3 && obj3.friend && obj3.friend.name);
console.log(obj3?.friend?.name);

/**
 * 获取Node和浏览器环境的全局对象，globalThis获取全局对象（ES11）
 */
// 浏览器
// console.log(this);
// console.log(window);
// Node
// console.log(global);
// ES11
// console.log(globalThis);

/**
 * for...in标准化（ES11）
 */

/**
 * Dynamic Import的使用（ES11）
 */

/**
 * Promise allSettled方法的使用（ES11）
 */

/**
 * Import meta的使用
 */

/**
 * FinalizationRegistry与WeakRef的结合使用（ES12）
 */
const registry = new FinalizationRegistry(value => {
	console.log(`注册在registry的对象，${value}被销毁`);
})
let obj4 = { name: 'lingz', age: 29 }
const info = new WeakRef(obj4)
registry.register(obj4, 'obj4')
obj4 = null
console.log(info.deref()?.name);
setTimeout(() => {
	console.log(info.deref()?.name);
}, 10000);

/**
 * Logical assignment operators, 三个逻辑运算符的使用（ES12）
 */
let value1 = 0
console.log(value1 ||= 'default value'); // 逻辑或赋值运算符
let obj6 = { name: 'lingz' }
console.log(obj6 &&= obj6.name); // 逻辑与赋值运算符
let value2 = ''
console.log(value2 ??= 'default value'); // 逻辑空赋值运算符

/**
 * Numeric Separator数字分割符（ES12）
 */
const num = 100_000_000

/**
 * String replaceAll方法的使用（ES12）
 */

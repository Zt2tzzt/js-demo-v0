/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-21 10:25:04
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-21 13:42:29
 * @LastEditContent: 
 */
/**
 * FinalizationRegistry的使用，在对象被GC回收时，请求一个回调（ES12），
 * WeakRef保留对一个对象的弱引用
 */
const finalRegistry = new FinalizationRegistry(value => {
	console.log(`注册在finalRegistry的对象，${value}被销毁`);
})
let obj = { name: 'lingz' }
let info = new WeakRef(obj)
finalRegistry.register(obj, 'obj')
obj = null
console.log(info.deref()?.name);
setTimeout(() => {
	console.log(info.deref()?.name);
}, 10000);

/**
 * Logical assignment operators，三个逻辑赋值运算符的使用
 */
// 逻辑或赋值运算符
let message = ''
message ||= 'default value'
console.log(message)
// 逻辑与赋值运算符
let obj1 = { name: 'lingz', age: 29 };
obj1 &&= obj1.name
console.log(obj1);
// 逻辑空赋值运算符
let num = 0
num ??= 'default Number'
console.log(num);

/**
 * Numberic Separator
 */
const num2 = 100_100_001

/**
 * String.replaceAll()方法的使用
 */



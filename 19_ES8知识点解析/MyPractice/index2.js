/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-20 13:48:34
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-20 14:15:09
 * @LastEditContent: 
 */
/**
 * 判断数组种是否包含一种元素的2种写法（以前，ES7）
 */
const arr1 = ['abc', 666, 'nba', NaN]
console.log(arr1.indexOf('abc') !== -1);
console.log(arr1.includes(666));
/**
 * 2种写法的区别，以前不能判断NaN类型，includes方法可以判断
 */
console.log(arr1.indexOf(NaN));
console.log(arr1.includes(NaN));

/**
 * 指数运算的辆中写法（以前，ES7）
 */
console.log(Math.pow(3, 3) === 3 ** 3);

/**
 * 获取对象中所有value写法，传入非对象类型的写法
 */
const obj1 = { name: 'lingz', age: 29 }
console.log(Object.values(obj1));
console.log(Object.values('zzt'));
console.log(Object.values(['abc', 'cba', 'nba']));

/**
 * entries数据类型定义：数组中存放可枚举属性的键值对数组
 */

/**
 * 获取对象entries的写法，传入非对象类型的写法
 */
console.log(Object.entries(obj1));
console.log(Object.entries('zzt'));
console.log(Object.entries(['abc', 'cba', 'nba']));

/**
 * String Padding的2个方法
 */
console.log('Hello Frog'.padStart(15, '*').padEnd(20, '-'));
/**
 * 1个案例，身份证保留后4位
 */
const cardNo = '430202199710160012'
console.log(cardNo.slice(-4).padStart(cardNo.length, '*'));

/**
 * Trailing Commas的使用（ES8）
 */
function foo(x, y,) {
	console.log((x, y));
}

/**
 * Object新增的方法（ES8）
 * 	Object.getOwnPropertyDescriptors()
 */

/**
 * 新增的用于修饰函数的async关键字，和它对应的await关键字（ES8）
 */

/**
 * 异步迭代器的处理方式Async iterator（for await of）的使用（ES9）
 */
function gen(time) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(time)
		}, time);
	})
}
async function test() {
	const arr = [gen(1000), gen(200), gen(3000)]
	for await (const g of arr) {
		console.log(Date.now(), g);
	}
}
test()

/**
 * 对象的展开运算符
 */

/**
 * Promise里新增的方法finally
 */


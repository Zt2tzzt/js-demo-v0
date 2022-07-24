/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-27 13:42:21
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-27 14:01:34
 * @LastEditContent: 
 */
/**
 * 判断数组中是否包含某一元素的3种写法（以前，ES7），2种写法的区别
 */
const arr1 = [1, 2, 3, 4, NaN]
console.log(arr1.indexOf(2));
console.log(arr1.includes(2));
console.log(arr1.indexOf(NaN));
console.log(arr1.includes(NaN));

/**
 * 指数运算的2种写法（以前，ES7）
 */
console.log(Math.pow(3, 3) === 3 ** 3);

/**
 * 获取对象中所有value写法，传入非对象的写法（ES8）
 */
const obj1 = { name: 'jlinz', age: 29 }
console.log(Object.values(obj1));
console.log(Object.values('zzt'));
console.log(Object.values(['abc', 'cba', 'nba']));

/**
 * enries数据类型定义：
 * 	数组中存放可枚举属性的键值对数组
 */

/**
 * 获取对象entries的写法，传入非对象类型的写法（ES8）
 */
console.log(Object.entries(obj1));
console.log(Object.entries('zzt'));
console.log(Object.entries(['abc', 'cba', 'nba']));

/**
 * String Padding的2个方法使用和1个案例（ES8）
 */
console.log('Hello Frog'.padStart(15, '*').padEnd(20, '-'));
const cardNo = '430202199710160012'
console.log(cardNo.slice(-4).padStart(cardNo.length, '*'));

/**
 * Trailing Commas的使用（ES8）
 */
function foo(x, y,) { }

/**
 * Object新增的方法getOwnPropertyDescriptors
 */

/**
 * 新增的用于处理异步函数的async关键字，和它对应的await关键字（ES6）
 */

/**
 * 异步迭代器的处理（ES9）
 * 	Async iterator (for await of)的使用
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
	for await (const res of arr) {
		console.log(new Date().getTime(), res);
	}
}
test()

/**
 * 对象的展开运算符（ES9）
 */

/**
 * Promise里新增方法finally（ES9）
 */
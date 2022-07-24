/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-21 23:25:36
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-22 00:41:55
 * @LastEditContent: 
 */
/**
 * 判断数组中是否包含某一元素的2种写法的区别
 * Object.includes() （ES7）
 */
const arr = [1, 2, 3, 3, 4, 5, NaN]
console.log(arr.indexOf(3));
console.log(arr.includes(3));
console.log(arr.indexOf(NaN));
console.log(arr.includes(NaN));

/**
 * 指数运算的2种写法（以前，ES7）
 */
console.log(Math.pow(3, 3) === 3 ** 3);

/**
 * 获取对象中所有value的写法，传入非对象类型的写法（ES8）
 */
const obj = { name: 'lingz', age: 29 }
console.log(Object.values(obj));
console.log(Object.values('zzt'));
console.log(Object.values(['abc', 'cba', 'nba']));

/**
 * entries数据类型的定义：存放在数组中的可枚举键值对数组（ES8）
 */

/**
 * 获取对象entries的写法，传入非对象类型的写法（ES8）
 */
console.log(Object.entries(obj));
console.log(Object.entries('zzt'));
console.log(Object.entries(['abc', 'cba', 'nba']));

/**
 * String Padding的2个方法使用和1个案例（ES8）
 */
console.log('Hello Frog'.padStart(15, '*').padEnd(20, '-'));
const cardNo = '430202199710160012'
console.log(cardNo.slice(-4).padStart(cardNo.length, '*'));

/**
 * Trailng commas的使用（ES8）
 */
function foo(x, y,) { }

/**
 * Object.getWonPropertydescriptors（ES8）
 */

/**
 * 用于处理异步函数的关键字async和它对应的await（ES8）
 */

/**
 * 异步迭代器的处理，Async iterator（for await of）的使用（ES9）
 */
function gen(time) {
	return new Promise(resolve => [
		setTimeout(() => {
			resolve(time)
		}, time)
	])
}
async function test() {
	const arr = [gen(1000), gen(200), gen(3000)]
	for await (const res of arr) {
		console.log(Date.now(), res);
	}
}
test()

/**
 * 对象的展开运算符
 */

/**
 * Promise里新增的finally方法
 */

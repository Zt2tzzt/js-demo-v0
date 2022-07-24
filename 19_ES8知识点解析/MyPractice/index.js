/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-20 11:28:44
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-07-02 20:43:17
 * @LastEditContent: 
 */
/**
 * 判断数组中是否包含一种元素的2种写法（以前，ES7）
 */
const arr1 = ['abc', 'cba', 'nba', NaN]
// 以前的写法
if (arr1.indexOf('nba') !== -1) {
	console.log('arr1中包含nba元素');
}
// ES7写法
if (arr1.includes('nba', 1)) {
	console.log('arr1中第1个元素之后有nba元素');
}
/**
 * 2种写法的区别，以前的写法不能判断NaN元素，ES7写法可以
 */
console.log(arr1.indexOf(NaN));
console.log(arr1.includes(NaN));

/**
 * 指数运算的2种方法（以前，ES7）
 */
console.log(Math.pow(3, 3) === 3 ** 3);

/**
 * 获取对象中所有value的写法，传入非对象类型的写法（ES8）
 */
const obj = { name: 'zzt', age: 18 }
console.log(Object.values(obj));
console.log(Object.values('zzt'));
console.log(Object.values(['abc', 'cba', 'nba']));

/**
 * Object entries定义（ES8）
 * 	数组中存放可枚举属性的键值对数组
 */

/**
 * 获取对象entries的写法，传入非对象类型的写法
 */
console.log(Object.entries(obj));
console.log(Object.entries('zzt'));
console.log(Object.entries(['abc', 'cba', 'nba']));

/**
 * String Padding的2个方法使用和1个案例（ES8）
 */
console.log(`Hello Frog`.padStart(15, '*').padEnd(20, '-'));
const cardNo = `430202199710160012`
const last4No = cardNo.slice(-4)
const finalcard = last4No.padStart(cardNo.length, '*')
console.log(finalcard);

/**
 * Trailing Commas的使用（ES8）
 */
function foo(x, y,) {
	console.log(x, y);
}

/**
 * Object新增的方法 (ES8)
 * 	Object.getOwnPropertyDescriptors()
 */

/**
 * 新增的用于修饰函数的async关键字，和它对应的await关键字（ES8）
 */

/**
 * 遍历异步迭代器Async iterator（for await of）的使用（ES9）
 */
function Gen(time) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(time)
		}, time)
	})
}
async function test() {
	const arr = [Gen(200), Gen(100), Gen(300)]
	for await (const item of arr) {
		console.log(Date.now(), item)
	}
}
test()

/**
 * 对象的展开运算符（ES9）
 */

/**
 * Promise里新增的关键字finally（ES9）
 */
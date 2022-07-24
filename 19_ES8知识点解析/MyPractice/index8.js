/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-04 09:29:56
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-04 10:16:52
 * @LastEditContent: 
 */
/**
 * 判断数组中是否包含某一元素写法（以前，ES7），2种写法的区别
 */
const arr = [1, 2, 3, 4, NaN]
console.log(arr.indexOf(3))
console.log(arr.includes(3));
console.log(arr.indexOf(NaN));
console.log(arr.includes(NaN));

/**
 * 指数运算的2种写法（以前，ES7）
 */
console.log(Math.pow(3, 3) === 3 ** 3);

/**
 * 获取对象中所用value的写法，传入非对象类型的写法（ES8）
 */
const obj = { name: 'lingz', age: 28 }
console.log(Object.values(obj))
console.log(Object.values('zzt'));
console.log(Object.values(['abc', 'cba', 'nba']));

/**
 * entries数据类型的定义（ES8）
 * 	数组中存放可枚举属性的键值对的数组
 */

/**
 * 获取对象entries的写法，传入非对象类型的写法（ES8）
 */
console.log(Object.entries(obj))
console.log(Object.entries('zzt'));
console.log(Object.entries(['abc', 'cba', 'nba']));

/**
 * String Padding的2个方法的使用和1个案例
 */
console.log('Hello Frog'.padStart(15, '*').padEnd(20, '-'));
const cardNo = '430202188710160012'
const hideCaed = cardNo.slice(-4).padStart(cardNo.length, '*')
console.log(hideCaed);

/**
 * Trailling Commas的使用
 */
function foo(x, y,) {

}

/**
 * Object新增的方法（ES8）getOwnPropertyDescriptors
 */

/**
 * 新增的用于修饰函数的async关键字，和它对应的await关键字（ES8）
 */

/**
 * 异步迭代器的处理，Asyn iterator（for await of）(ES9)
 */
function gen(time) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(time)
		}, time);
	})
}
async function test() {
	const arr = [gen(1000), gen(100), gen(3000)]
	for await (const res of arr) {
		console.log(new Date().getTime(), res);
	}
}
test()

/**
 * 对象的展开运算符（ES9）
 */

/**
 * Promise新增的方法finally（ES9）
 */
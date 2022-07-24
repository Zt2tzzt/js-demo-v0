/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-19 10:24:37
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-19 11:07:11
 * @LastEditContent: 
 */
/**
 * 判断数组中是否包含某一元素的2种写法，（以前，ES7），2种写法的区别
 */
const arr = [1, 2, 3, 4, NaN]
console.log(arr.indexOf(3));
console.log(arr.includes(3));
console.log(arr.indexOf(NaN));
console.log(arr.includes(NaN));

/**
 * 指数运算的2种写法，（以前，ES7）
 */
console.log(Math.pow(3, 3) == 3 ** 3);

/**
 * 获取对象所有value的写法，传入非对象的写法。（ES8）
 */
const obj = { name: 'zzt', age: 18 }
console.log(Object.values(obj));
console.log(Object.values('zzt'));
console.log(Object.values([1, 2, 3]));

/**
 * entries数据类型的定义：数组中存放可枚举属性的键值对数组
 */

/**
 * 获取对象的entries的写法，传入非对象类型的写法（ES8）
 */
console.log(Object.entries(obj));
console.log(Object.entries('zzt'));
console.log(Object.entries([1, 2, 3]));

/**
 * String Padding两个方法使用和1个案例（ES8）
 */
console.log('Hello Frog'.padStart(15, '*').padEnd(20, '-'))
const idcarNo = '430202199710160012'
const no = idcarNo.slice(-4).padStart(idcarNo.length, '*')
console.log(no);

/**
 * Trailing Commas的使用（ES8）
 */
function foo(x, y,) { }

/**
 * Object新增的方法getOwnPropertyDescriptors（ES8）
 */

/**
 * 新增用于修饰函数的关键字async，和它对应的关键字await（ES8）
 */

/**
 * 异步迭代器的处理（Async iterator）for await of（ES9）
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
		console.log((new Date).getTime(), res);
	}
}
test()

/**
 * 对象的展开运算符（ES9）
 */

/**
 * Promise里新增方法finally
 */
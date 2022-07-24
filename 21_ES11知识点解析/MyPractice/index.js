/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-21 11:04:40
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-22 09:26:21
 * @LastEditContent: 
 */
/**
 * 在ES11之前能够正常表示的最大常量，BigInt类型声明，相加的2种方式，BigInt的Number类型（ES11）
 */
const maxint = Number.MAX_SAFE_INTEGER
console.log(maxint);
const bigint = 900719925474099100n
console.log(bigint + 10n);
console.log(bigint + BigInt(10));
console.log(Number(10n));

/**
 * Nullish Coalescing Operator，空值合并运算符的使用，它与逻辑或作比较（ES11）
 */
console.log(0 ?? 'default value');
console.log(0 || 'default value');

/**
 * Optional Chaining，可选链的使用，他与逻辑与作比较（ES11）
 */
const obj = {
	name: 'lingz',
	friend: {
		name: 'zzt'
	}
}
console.log(obj && obj.friend && obj.friend.name);
console.log(obj?.friend?.name);


/**
 * 获取Node和浏览器的全局对象。（ES11）
 */
// node
console.log(global);
// 浏览器
// console.log(window, this);
// ES11
console.log(globalThis);

/**
 * for...in标准化，遍历出的值是key（ES11）
 */

/**
 * Dynamic Import（ES11）
 */

/**
 * Promise的allSettled方法
 */

/**
 * import meta
 */


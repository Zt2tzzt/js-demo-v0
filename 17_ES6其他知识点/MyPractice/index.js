/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-17 08:58:25
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-03-16 20:56:44
 * @LastEditContent: 
 */
const heName = 'lingz'; age = 29; height = 1.75
// 模板字符串拼接标识符和表达式
const message = `He heName is ${heName}, age is ${age}, height is ${height}`
console.log(message);

const info = `age double is ${age * 2}`
console.log(info);

function doubleAge() {
	return age * 2
}
const info2 = `double age is ${doubleAge()}`
console.log(info2);

// 标签模板字符串的使用
function foo1(m, n, x) {
	console.log(m, n, x, '-----'); // [ 'hello', 'wo', 'rld' ] lingz 29 -----
}
foo1`hello${heName}wo${age}rld`

// 函数的默认值写法
function foo2(m = 'aaa', n = 'bbb') {
	console.log(m, n);
}
foo2(0, '')
// 对象参数赋默认值并解构 2种写法
function foo3({ name, age } = { name: 'zzt', age: 18 }) {
	console.log(name, age);
}
function foo4({ name = 'zzt', age = 18 } = {}) {
	console.log(name, age);
}

/**
 * 函数参数的默认值规范以及对length的=影响
 * 	函数有默认值的参数，一般放在参数末位
 * 	有默认值的参数及后面的参数不算在函数length属性中
 */

// 函数的剩余参数写法：剩余参数必须放在参数的末位，否则会报错
function foo5(n, ...args) { }
/**
 * 剩余参数与 arguments 的区别
 * 1.剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含传给函数的所有实参
 * 2.arguments 对象不是一个真正的数组，而剩余参数是一个真正的数组，可以进行数组的所有操作
 * 3.arguments 对象是早期的ECMAScript中为了方便去获取所有参数提供的一个数据结构，而剩余参数是ES6中提供并且希望以此来代替arguments的
 */

/**
 * 箭头函数与普通函数的3点区别
 * 1.将头函数没有 this，会去上层作用域找 this
 * 2.箭头函数没有 arguments, 会去上层作用域找 arguments
 * 3.箭头函数没有显式原型，不能使用 new 来创建对象
 */

// 展开运算符是一种浅拷贝
// 展开运算符的3种用法，包括 ES9 中的一个用法
// 在函数调用时使用
const names = ['abc', 'cba', 'nba']
function foo6(x, y, z) {
	console.log(x, y, z);
}
foo6(...names)
// 数组构造时使用
const arr = [...names, ...heName]
// 构造对象字面量时使用，ES9新特性
const o1 = { name: 'zzt', age: 18 }
const o2 = { height: 1.88, weight: 70 }
const obj = { ...o1, ...o2 }

// ES6 中二进制，八进制，十六进制的数值表示，ES12大数字连接符
const num1 = 100 // 十进制
const num2 = 0b100 // 二进制
const num3 = 0o100 // 八进制
const num4 = 0x100 // 十六进制
console.log(num1, num2, num3, num3,);
const num5 = 10_000_000
console.log(num5);

// Symbol 的4种使用方法
// 基本使用
const s1 = Symbol()
const s2 = Symbol()
console.log(s1 === s2);
// ES10 中，Symbol还有一个描述属性（description）
const s3 = Symbol('aaa')
console.log(s3.description);
// symbol 值作为 key
const o3 = {
	[s1]: 'abc',
	[s2]: 'cba'
}
o3[s3] = 'nba'
const s4 = Symbol()
Object.defineProperty(o3, s4, {
	configurable: true,
	enumerable: true,
	writable: true,
	value: 'mba'
})
// 创建相同的 symbol
const sa = Symbol.for('aaa')
const sb = Symbol.for('aaa')
console.log(sa === sb);
const key = Symbol.keyFor(sa)
console.log(key);
const sc = Symbol.for(key)
console.log(sa === sc);

/**
 * Symbol 的局限性
 * 1.不能通过.语法获取
 * 2.使用 Symbol 作为 key 的属性名，在遍历 Object.keys 等方法中是获取不到 Symbol 值的
 * 需要使用 Object.getOwnPropertySymbols 来获取所有 Symbol 的 key
 */
const skeys = Object.getOwnPropertySymbols(o3)
for (const skey of skeys) {
	console.log(skey);
}


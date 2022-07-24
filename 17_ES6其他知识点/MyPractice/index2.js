/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-17 17:15:19
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-17 23:23:01
 * @LastEditContent: 
 */
// 根据字符串拼接标识符和表达式
const namee = 'lingz'; age = 18;
console.log(`My nane is ${namee}, age is ${age}`);
console.log(`My nane is ${namee}, double age is ${age * 2}`);
function doubleAge(age) {
	return age * 2
}
console.log(`My nane is ${namee}, double age is ${doubleAge(age)}`);
// 标签模板字符串的使用
function foo(x, y) {
	console.log(x, y);
}
foo`Hello${namee}Frog`

// 函数的默认值写法
function foo2(x, y = 666) {
	console.log(x, y);
}

// 对象参数赋默认值并解构的两种写法
function foo3({ name, age } = { name: 'lingz', age: 29 }) {
	console.log(name, age);
}
function foo4({ name = 'lingz', age = 20 } = {}) {
	console.log(name, age);
}
foo3({ name: 'zzt', age: 18 })
foo4({ name: 'zzt', age: 18 })
/**
 * 函数参数的默认值规范
 * 	有默认值的参数一般放在函数末位
 * 	有默认值的参数以及之后的参数，不计入函数属性length
 */

// 函数的剩余参数写法
function foo5(x, ...args) { }
/**
 * 函数的剩余参数与 arguments 的区别
 * 1.函数的剩余参数只包含了那些没有对应形参的实参，而 arguments 对象中包含了所有传给改函数的实参
 * 2.arguments 对象并不是一个真正的数组，rest 参数是一个数组，可以对他进行数组的任何操作
 * 3.arguments 对象是ECMAScript早期为了方便获取所有参数提供的一个数据结构，而 rest 参数是 ES6 提供并且希望以此取代 arguments 的
 */

/**
 * 箭头函数与普通函数的3点区别
 * 1.箭头函数没有 arguments 对象，需要在上级作用域中获取 arguments
 * 2.箭头函数没有 this，需要在上级作用域中获取this
 * 3.箭头函数没有显式原型, 不能通过 new 运算符创建对象
 */

// 展开运算符是一种浅拷贝

/**
 * 展开运算符的3种用法，包括ES9种的一种用法
 * 1.调用函数展开
 * 2.构建数组展开
 * 3.对象字面量的展开写法（ES9）
 */
const arr1 = ['abc', 'cba', 'nba']
const arr2 = ['ghj', 'kiu', 'vbn']
foo5(...arr1) // 使用的迭代器原理

const newArr = [...arr1, ...arr2] // 使用的迭代器原理

const obj1 = { name: 'zzt', age: 18 }
const obj2 = { height: 1.88, weight: 70 }
const newObj = { ...obj1, ...obj2 }

// ES6中二进制，八进制，十六进制的数值表示，大数字连接符（ES12）
const num1 = 100
const num2 = 0b100
const num3 = 0o100
const num4 = 0x100
const num5 = 100_000_000

// ES6 中 Symbol 的4种使用
// 基本使用
const s1 = Symbol()
// ES10 Symbol.description
const s2 = Symbol('aaa')
const s3 = Symbol.for('bbb')
// Symbol 值作为 key
const obj3 = {
	[s1]: 'abc',
	[s2]: 'cba'
}
obj3[s3] = 'mba'
// 创建相同的 Symbol
const key = Symbol.keyFor(s3)
const s4 = Symbol.for(key)
console.log(s3 === s4);

// Symbol 属性不能通过普通的方式访问，只能通过 Object.getOwnPropertysymbols() 取到
for (const skey of Object.getOwnPropertySymbols(obj3)) {
	console.log(skey);
}


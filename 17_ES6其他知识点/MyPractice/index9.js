/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-15 21:19:38
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-15 22:42:52
 * @LastEditContent: 
 */
/**
 * 模板字符串拼接标识符和表达式，标签模板字符串的适用
 */
const name = 'lingz'
const age = 28
console.log(`Hello my name is ${name}, my age is ${age}`);
console.log(`Hello my name is ${name}, my age is ${age * 2}`);
function doubleAge(age) {
	return age * 2
}
console.log(`Hello my name is ${name}, my age is ${doubleAge(age)}`);

function foo(x, y, z) {
	console.log(x, y, z);
}
foo`Hello${name}Frog${age}`

/**
 * 函数的默认值写法，对象参数默认值并解构（2种写法）
 */
function foo1(x = 666, y = 888) {
	console.log(x, y);
}
function foo0({ name, age } = { name: 'lingz', age: 28 }) {
	console.log(name, age);
}
function foo2({ name = 'lingz', age = 28 } = {}) {
	console.log(name, age);
}

/**
 * 函数参数的默认值规范，以及对length的影响
 * 1.有默认值的参数，一般放在参数末位
 * 2.有默认值的参数以及后面的参数不计入函数的length属性
 */

/**
 * 函数的剩余参数的写法
 */
function foo3(x, ...arr) {
	console.log(x, arr);
}

/**
 * 函数剩余参数与arguments的区别
 * 1.rest参数是一个真正的数组，可以对其进行任何数组操作，arguments不是。
 * 2.rest参数中仅包含没有形参的实参，而arguments对象中包含所有的实参
 * 3.arguments对象是早期ECMAScript为了获取函数的全部参数提供的一种数据结构，而rest参数是ES6中提供，为了取代arguments的
 */

/**
 * 箭头函数与普通函数的3点区别
 * 1.箭头函数中没有this，要去上层作用域查找
 * 2.箭头函数中没有arguments对象，要去上层作用域查找
 * 3.箭头函数不能作为构造函数被new运算符调用，没有显式原型
 */

/**
 * 展开运算符是一种浅拷贝
 */

/**
 * 展开运算符的三种用法，包括ES9中的一种永福
 */
// 数组
const arr1 = [1, 2]
const arr2 = [3, 4]
const newArr = [...arr1, ...arr2]
// 对象  ES9
const obj1 = { name: 'lingz', age: 28 }
const obj2 = { number: 14, team: 'unity' }
const newObj = { ...obj1, ...obj2 }
// 调用函数
foo3(...newArr)

/**
 * ES6中二进制，八进制，十六进制的数值表示，大数字连接符（ES12）
 */
const num1 = 0b100
const num2 = 0o100
const num3 = 0x100
const num4 = 100_100_100

/**
 * ES6中Symbol的4种适用（ES10中的描述属性）
 */
// 1.基本使用
const s1 = Symbol()
// 2.ES10描述属性
const s2 = Symbol(222)
// 3.用于对象属性
const info = {
	[s1]: 111,
	[s2]: 222
}
// 4.创建相同的Symbol
const s3 = Symbol.for(333)
const key = Symbol.keyFor(s3)
const _s3 = Symbol.for(key)

/**
 * Symbol属性不能通过普通的方式访问
 */
const symbols = Object.getOwnPropertySymbols(info)
symbols.forEach(s => {
	console.log(s);
})
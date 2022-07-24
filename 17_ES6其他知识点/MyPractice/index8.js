/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-31 09:50:11
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-31 10:48:31
 * @LastEditContent: 
 */
/**
 * 模板字符串拼接标识符表达式，标签模板字符串的使用
 */
const nam = 'linz'
const age = 18
console.log(`Hello my name is '${nam}, ma age is ${age}`);
console.log(`Hello my name is '${nam}, ma doubelAge is ${age * 2}`);
function doubleAge(age) {
	return 2 * age
}
console.log(`Hello my name is '${nam}, ma doubelAge is ${doubleAge(age)}`);
function foo(x, y) {
	console.log(x, y);
}
foo`Hello${nam}Frog`

/**
 * 函数的默认值写法，对象参数赋默认值并解构（2种写法）
 */
function foo1(z, y = 666) {
	console.log(x, y);
}
function foo2({ name, age } = { name: 'zzt', age: 18 }) {
	console.log(name, age);
}
function foo3({ name = 'jlinz', age = 28 } = {}) {
	console.log(name, age);
}

/**
 * 函数参数的默认值规范，以及对length的影响
 * 	有默认值的参数，一般放在参数末位。
 * 	有默认值的参数以及后面的参数，不计入函数的length属性
 */

/**
 * 函数的剩余参数的写法
 */
function f004(x, ...args) {
	console.log(x, args);
}

/**
 * 函数的剩余参数与arguments比较
 * 	1.rest参数只包含那些没有对应形参的实参，而arguments参数中包含了全部的实参
 * 	1.rest参数是一个真正的数组，可以对它进行任何数组的操作。arguments参数不是
 * 	2.arguments参数是早期ECMAScript为了获取函数的全部参数而创建的一种数据结构，rest参数是ES6推出并希望以此取代arguments的
 */

/**
 * 箭头函数与普通函数的3点区别
 * 	1.箭头函数中没有this，要去上层作用域获取
 * 	2.箭头函数中没有arguments，要去上层作用域获取
 * 	3.箭头函数没有显示原型，箭头函数不能使用new运算符创建对象
 */

/**
 * 展开运算符是一种浅拷贝
 */

/**
 * 展开运算符的3中用法：包括ES9中的一个用法
 */
// 数组展开
const arr1 = [1, 2]
const arr2 = [3, 4]
const newArr = [...arr1, ...arr2]
console.log(newArr);
// 对象展开运算符（ES9）
const obj1 = { nae: 'linz', age: 28 }
const obj2 = { number: 14, team: 'unity' }
const newObj = { ...obj1, ...obj2 }
console.log(newObj);
// 函数调用时使用
foo4(...newArr)

/**
 * ES6中二进制，八进制，十六进制的数值表示，大数字连接符（ES12）
 */
const num1 = 0b100
const num2 = 0o123
const num3 = 0x100
const num4 = 100_234_341

/**
 * ES6中Symbol的4种使用（ES10中的1种用法description的使用）
 */
// 1.普通使用
const s1 = Symbol()
// 2.描述属性（ES10）
const s2 = Symbol(222)
// 3.用于对象属性名
const obj3 = {
	[s1]: 's1',
	[s2]: 's2'
}
// 4.创建相同的Symbol
const s3 = Symbol.for(333)
const key = Symbol.keyFor(s3)
const s4 = Symbol.for(key)
console.log(s3 === s4);

/**
 * Symbol属性不能通过普通的方式访问如 Object.keys / for...in
 */
console.log(Object.getOwnPropertySymbols(obj3))
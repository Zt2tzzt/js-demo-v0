/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-18 18:27:20
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-18 19:07:15
 * @LastEditContent: 
 */
/**
 * 模板字符串拼接标识符和表达式
 */
const nam = 'lingz'
const age = 29
console.log(`Hello, My name is ${nam}, My age is ${age}`);
console.log(`Hello, My name is ${nam}, My double age is ${age * 2}`);
function doubleAge(age) {
	return age * 2
}
console.log(`Hello, My name is ${nam}, My double age is ${doubleAge(age)}`);
/**
 * 标签模板字符串的使用
 */
function foo(x, y, z) {
	console.log(x, y, z);
}
foo`Hello${nam}Frog${age}Haha`

/**
 * 函数的默认值写法
 */
function foo2(x, y = 666) {
	console.log(x, y);
}
/**
 * 对象参数赋默认值并解构，两种写法
 */
function foo3({ name, age } = { name: 'lingz', age: 29 }) {
	console.log(name, age);
}
function foo3({ name = 'lingz', age = 29 } = {}) {
	console.log(name, age);
}

/**
 * 函数参数的默认值规范以及对length的影响
 * 	函数中有默认值的参数一般放在参数末位，
 * 	函数中有默认值的参数以及后面的参数不计入函数的length属性
 */

/**
 * 函数的剩余参数的写法
 */
function foo4(x, ...args) {
	console.log(x, args);
}

/**
 * 函数剩余参数与arguments的区别
 * 1.函数的剩余参数包含那些没有形参的实参，而arguments包含了传给函数的所有实参
 * 2.arguments对象不是真正的数组，而rest参数是真正的数组，可以对它进行数组的任何操作
 * 3.arguments对象是ECMAScript早期为了获取函数的所有参数提供的一种数据结构，而rest函数是用于取代它的
 */

/**
 * 箭头函数与普通函数的3点区别
 * 1.箭头函数中没有arguments，需要在上层作用域中获取arguments
 * 2.箭头函数中没有this，需要在上层作用域中获取this
 * 3.箭头函数中没有显式原型，不能通过new运算符来创建对象
 */

/**
 * 展开运算符是一种浅拷贝
 */

/**
 * 展开运算符的3种用法，包括ES9中的一种用法
 */
// 1.用于构建数组
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const newarr = [...arr1, ...arr2]
// 2.用于构建对象字面量,ES9
const obj1 = { naem: 'lingz', age: 29 }
const obj2 = { height: 1.75, weight: 70 }
const obj3 = { ...obj1, ...obj2 }
// 3.用于函数调用时的参数
foo4(...newarr)

/**
 * ES6中二进制，八进制，十六进制的数值表示
 */
const num1 = 0b100
const num2 = 0o100
const num3 = 0x100
/**
 * ES12中大数字表示
 */
const num4 = 100_000_000

/**
 * ES6中Symbol的4种使用
 */
// 1.基本使用
const s1 = Symbol()
// 2.ES10描述属性
const s2 = Symbol(222)
// 3.用于对象属性
const obj4 = {
	[s1]: 111,
	[s2]: 222
}
// 4.创建相同的Symbol
const s3 = Symbol.for(333)
const key = Symbol.keyFor(s3)
const s4 = Symbol.for(key)
console.log(s3 === s4);
obj4[s3] = 333

/**
 * Symbol属性不能通过普./for...in/Object.keys等普通的方式来访问
 */
Object.getOwnPropertySymbols(obj4).forEach(skey => {
	console.log(skey);
});

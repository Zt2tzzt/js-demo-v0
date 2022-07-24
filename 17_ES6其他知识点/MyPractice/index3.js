/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-18 10:21:51
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-18 11:25:24
 * @LastEditContent: 
 */
/**
 * 模板字符串拼接标识符和表达式
 */
const nam = 'lingz'; age = 29
console.log(`Hello, my name is ${nam}, my age is ${age}`);
console.log(`Hello, my name is ${nam}, my double age is ${age * 2}`);

function doubleAge(age) {
	return age * 2
}
console.log(`Hello, my name is ${nam}, my double age is ${doubleAge(age)}`);

/**
 * 标签模板字符串的使用
 */
function foo(x, y, z) {
	console.log(x, y, z);
}
foo`Hello${nam}Frog${age}haha`

/**
 * 函数的默认值写法
 */
function foo2(x, y = 666) {
	console.log(x, y);
}

/**
 * 对象参数符默认值并解构2种写法
 */
function foo3({ name, age } = { name: 'lingz', age: 29 }) {
	console.log(name, age);
}
function foo4({ name = 'lingz', age = 29 } = {}) {
	console.log(name, age);
}
foo3()
foo4()

/**
 * 函数参数的默认值规范，以及对 length 的影响
 * 1.有默认值的参数一般放在参数末位
 * 2.有默认值的参数以及后续参数不会算在函数 length 属性里
 */

/**
 * 函数的剩余参数写法
 */
function foo5(x, ...args) {
	console.log(x, args);
}

/**
 * 函数的剩余参数与arguments的区别
 * 1.函数的剩余参数是没有对应实参的形参，而arguments对象包含了传给函数的所有实参
 * 2.函数的剩余参数是一个真正的数组，可以对它进行任何数组操作，而arguments对象不是一个真正的数组
 * 3.arguments对象是早期ECMAScript提供的一种用于获取函数所有参数的数据结构，而rest参数是用于取代arguments的
 */

/**
 * 箭头函数与普通函数的3点区别
 * 1.箭头函数没有arguments，需要到上级作用域获取
 * 2.箭头函数没有this，需要到上级作用域获取
 * 3.箭头函数没有显式原型，不能通过new运算符创建对象
 */

/**
 * 展开运算符是一种浅拷贝
 */

/**
 * 展开运算符的3种用法，包括ES9中的一种用法
 */
// 1.用于数组的构建
const arr1 = [1, 2];
const arr2 = [3, 4];
const newArr = [...arr1, ...arr2]
// 2,用于执行函数中的参数
foo5(...newArr)
// 3.用于对象的构建，ES9
const obj1 = { name: 'lingz', age: 29 }
const obj2 = { height: 1.88, weight: 70 }
const newObj = { ...obj1, ...obj2 }

/**
 * ES6中二进制，八进制，十六进制的数值表示，大数字连接符
 */
const num1 = 0b100
const num2 = 0o100
const num3 = 0x100
const num4 = 100_000_000

/**
 * ES6中Symbol的4种使用（ES10中1种用法description）
 */
// 1.创建一个Symbol类型的值
const s1 = Symbol()
// 2.ES10 传入一个描述属性description
const s2 = Symbol('aaa')
console.log('----', Symbol.keyFor(s2));
// 3.用于对象属性
const obj3 = {
	[s1]: 'aaa',
	[s2]: 'bbb'
}
// 创建相同的Symbol
const s4 = Symbol.for('bbb')
const key = Symbol.keyFor(s4)
const s5 = Symbol.for(key)
console.log(s4 === s5);
obj3[s4] = 'ccc'

/**
 * Symbol属性不能通过普通方式方位
 */
Object.getOwnPropertySymbols(obj3).forEach(skey => {
	console.log(skey);
})

/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-19 11:32:33
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-19 14:36:29
 * @LastEditContent: 
 */
/**
 * 模板字符串拼接标识符和表达式，标签模板字符串的使用
 */
const nam = 'lingz'
const age = 29
console.log(`My name is ${nam}, My age is ${age}`);
console.log(`My name is ${nam}, My double age is ${age * 2}`);
function doubleAge(age) {
	return age * 2
}
console.log(`My name is ${nam}, My double age is ${doubleAge(age)}`);
function foo(x, y, z) {
	console.log(x, y, z);
}
foo`Hello${nam}frog${age}Haha`

/**
 * 函数参数的默认值写法，对象参数解构并赋默认值（2种写法）
 */
function foo2({ name, age } = { name: 'lingz', age: 29 }) {
	console.log(name, age);
}
function foo3({ name = 'lingz', age = 29 } = {}) {
	console.log(name, age);
}
foo2()
foo3()

/**
 * 函数参数的默认值规范以及对length的影响
 * 	有默认值的参数，一般放在参数末位
 * 	有默认值的参数以及以后的参数，不计入函数的length属性
 */

/**
 * 函数的剩余参数写法
 */
function foo4(x, ...args) {
	console.log(x, args);
}

/**
 * 函数剩余参数与arguments的区别
 * 	1.rest参数中只包含没有对应形参的实参，而arguments参数中包含传给函数的所有实参
 * 	2.rest参数是一个真正的数组，可以进行任何数组操作，而argument不是一个真正的数组
 * 	3.arguments是早期ECMAScript为了获取函数的所有参数而提供的一种数据结构，而rest参数是ES6种提供并且希望以此来取代它的
 */

/**
 * 箭头函数与普通函数的3点区别
 * 	1.箭头函数没有arguments，会去上层作用域获取
 * 	2.箭头函数没有this，会去上层作用域获取
 * 	3.箭头函数没有显式原型，不能通过new运算符创建对象
 */

/**
 * 展开运算符是一种浅拷贝
 */

/**
 * 展开运算符的3种用法，包括ES9中的一种用法
 */
// 1.构建数组
const arr1 = [1, 2]
const arr2 = [3, 4]
const newArr = [...arr1, ...arr2]
// 2.构建对象字面量（ES9）
const obj1 = { name: 'lingz', age: 18 }
const obj2 = { height: 1.75, weight: 70 }
const newObj = { ...obj1, ...obj2 }
// 执行函数时展开参数
foo4(...newArr)

/**
 * ES6中二进制，八进制，十六进制的数值表示，大数字连接符（ES12）
 */
const num1 = 0b100
const num2 = 0o100
const num3 = 0x100
const num4 = 100_100_120

/**
 * ES6中Symbol的4种使用，包括（ES10description用法）
 */
// 1.普通使用
const s1 = Symbol()
// 2.ES10,Symbol描述属性
const s2 = Symbol('aaa')
// 3.用于对象属性名
const obj3 = {
	[s1]: 111,
	[s2]: 222
}
// 4.创建两个相同的Symbol
const s3 = Symbol.for('bbb')
const skey = Symbol.keyFor(s3)
const s4 = Symbol.for(skey)
console.log(s3 === s4);
obj3[s3] = 333

/**
 * Symbol属性不能通过普通的方式访问 for...in / Object.keys()
 */
Object.getOwnPropertySymbols(obj3).forEach(key => {
	console.log(key);
});

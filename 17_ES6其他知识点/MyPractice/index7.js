/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-23 23:26:45
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-24 09:04:09
 * @LastEditContent: 
 */
/**
 * 模板字符串拼接标识符和表达式
 */
const nam = 'lingz'
const age = 29
console.log(`Hello My name is ${nam}, My age is ${age}`);
console.log(`Hello My name is ${nam}, My doublie age is ${age * 2}`);
function doubleAge() {
	return age * 2
}
console.log(`Hello My name is ${nam}, My doublie age is ${doubleAge()}`);
/**
 * 标签模板字符串使用
 */
function foo1(x, y, z) {
	console.log(x, y, z);
}
foo1`Hello${nam}Frog${age}Haha`

/**
 * 函数的默认值写法
 */
function foo2(x, y = 666) {
	console.log(x, y);
}
/**
 * 对象参数默认值并解构（2种写法）
 */
function foo3({ name, age } = { name: 'lingz', age: 29 }) {
	console.log(name, age);
}
function foo4({ name = 'lingz', age = 29 } = {}) {
	console.log(name, age);
}

/**
 * 函数参数的默认值规范以及对length的影响
 * 	函数参数的默认值一般放在参数末位，有默认值的参数以及后面的参数不计入length属性
 */

/**
 * 函数参数的剩余参数写法
 */
function foo5(x, ...args) {
	console.log(x, args);
}

/**
 * 函数剩余参数和arguments的区别
 * 	1.rest参数只包含那些没有对应形参的实参，而arguments参数包含传给函数的所有实参
 * 	1.rest参数是真正的数组，可对它进行任何数组参数，arguments参数不是真正的数组
 * 	3.arguments参数是早期ECMAScript为了获取函数的全部参数而提供的一种数据结构，而rest参数是ES6提出并希望以此取代argumtns的
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
 * 展开运算符的3种用法
 */
// 数组展开运算符
const arr1 = [1, 2]
const arr2 = [3, 4]
const nweArr = [...arr1, ...arr2]
//对象展开运算符 (ES9)
const obj1 = { name: 'lingz', age: 29 }
const obj2 = { height: 175, weight: 70 }
const newObj = { ...obj1, ...obj2 }
// 函数调用展开运算符
foo5(...nweArr)

/**
 * ES6中二进制，八进制，十六进制的数值表示，大数字连接符（ES12)
 */
const num1 = 0b100
const num2 = 0o100
const num3 = 0x100
const num4 = 100_100_100

/**
 * ES6中Symbol的4种用法
 */
// 基本使用
const s1 = Symbol()
// 描述属性（ES10）
const s2 = Symbol('aaa')
// 用于对象属性名
const info = {
	[s1]: 666,
	[s2]: 999
}
//创建相同的Symbo
const s3 = Symbol.for(333)
const key = Symbol.keyFor(s3) // ------------
const s4 = Symbol.for(key)
console.log(s3 === s4);

/**
 * Symbol属性不能通过普通方式访问 ./for...in/Object.keys
 */
Object.getOwnPropertySymbols(info).forEach(skey => {
	console.log(skey);
})

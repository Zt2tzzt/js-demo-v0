/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-20 08:59:03
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-20 09:32:19
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
function foo2(param = 666) {
	console.log(param);
}
/**
 * 对象参数赋默认值并解构（2种写法）
 */
function foo3({ name, age } = { name: 'lingz', age: 29 }) {
	console.log(name, age);
}
function foo4({ name = 'lingz', age = 29 } = {}) {
	console.log(name, age);
}

/**
 * 函数参数的默认值规范，以及对length的影响
 * 	1.有默认值的参数一般放在参数末位
 * 	2.有默认值的参数以及后面的参数不计入函数的length属性
 */

/**
 * 函数的剩余参数的写法
 */
function foo5(param1, ...args) {
	console.log(param1, args);
}

/**
 * 函数的剩余参数与arguments的区别
 * 	1.rest参数中只包含那些没有形参的实参，而arguments中包含传给函数的所有实参
 * 	2.rest参数是一个真正的数组，可以对其进行任何数组操作，而arguments不是一个数组
 * 	3.arguments是早期ECMAScript为了获取函数的所用参数而提供的一个数据类型，而rest参数是ES6提供并希望以此取代arguments的
 */

/**
 * 箭头函数与普通函数的3点区别
 * 	1.箭头函数没有arguments，要去上层作用域获取
 * 	2.箭头函数没有this，要去上层作用域获取
 * 	3.箭头函数中没有显式原型，不能通过new创建对象
 */

/**
 * 展开运算符是一种浅拷贝
 */

/**
 * 展开运算符的3种用法
 */
// 1.数组的构建
const arr1 = [1, 2]
const arr2 = [3, 4]
const newArr = [...arr1, ...arr2]
// 2.对象的构建（ES9）
const obj1 = { name: 'lingz', age: 29 }
const obj2 = { height: 1.75, weight: 70 }
const newObj = { ...obj1, ...obj2 }
// 3.函数调用
foo5(...newArr)

/**
 * ES6中用于表示二进制，八进制，十六进制的数值，大数字连接符（ES12）
 */
const num1 = 0b100
const num2 = 0o100
const num3 = 0x100
const num4 = 100_000_000

/**
 * ES6中Symbol的4种使用（ES10中的1种用法description的使用
 */
// 1.基本使用
const s1 = Symbol()
// 2.描述属性（ES10）
const s2 = Symbol('aaa')
// 3.用于对象的属性
const obj3 = {
	[s1]: 111,
	[s2]: 222
}
// 4.创建相同的Symbol类型值
const s3 = Symbol.for('bbb')
const key = Symbol.keyFor(s3)
const s4 = Symbol.for(key)
console.log(s3 === s4);

/**
 * Symbol属性不能通过普通的方法访问，./ Object.keys / for...in
 */
Object.getOwnPropertySymbols(obj3).forEach(key => {
	console.log(key);
});


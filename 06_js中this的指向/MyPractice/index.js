/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-30 19:07:04
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-03-29 11:05:57
 * @LastEditContent: 
 */
/**
 * JS中的this与其它传统面向对象语言this的区别
 * 	常见的编程语言中，比如Java、C++、Swift、Dart等一系列语言中，this通常只会出现在类的方法中，特别是实例方法，this代表的是当前调用对象
 * 	但是JavaScript中的this更加灵活，无论是它出现的位置还是它代表的含义。
 */

/**
 * JS中this的作用
 * 	从某些角度来说，开发中如果没有this，很多的问题，我们也是有解决方案的。
 * 	但是没有this，会让我们编写代码，变得非常的不方便
 */

/**
 * this在全局作用域下的指向
 * 	浏览器：window。Node：{}
 */

/**
 * this绑定的机制4点
 * 	1.在函数调用时，JavaScript会默认给函数绑定一个this
 * 	2.this的绑定和函数定义的位置没有关系
 * 	3.this绑定和调用方式和调用位置有关系
 * 	4.this是在运行时被绑定的
 */

/**
 * this绑定方式4点
 * 	1.默认绑定
 * 	2.隐式绑定
 * 	3.显示绑定
 * 	4.new绑定
 */

/**
 *内置函数的this绑定（div点击默认绑定div元素本身）
 * 	setTimeout, forEach内置函数为普通函数时，this默认绑定为window，内置函数为箭头函数时，this取上层作用域的this
 */
setTimeout(() => {
	console.log('***', this); // window | {}
}, 0);
setTimeout(function () {
	console.log('----', this); // window | setTimeout?
}, 0);
[1].forEach(ele => {
	console.log(ele, '&&&', this); // window | {}
});
[1].forEach(function (ele) {
	console.log(ele, '^^^', this); // window | global
})

/**
 * this绑定的优先级规则
 * 	1.默认绑定优先级最低
 * 	2.显示绑定优先级高于隐式绑定
 * 	3.new绑定优先级高于隐式绑定
 * 	4.new绑定优先级高于bind
 * 		new绑定和call、apply不允许同时使用，所以不存在谁的优先级高
 */

/**
 * this绑定规则之外，忽略显示绑定的情况
 */
function foo() {
	console.log(this);
}
foo.call(null) // window | global
foo.call(undefined) // window | global

/**
 * this绑定规则之外，间接函数引用的情况
 * 	这种情况使用默认绑定的规则
 */
const obj1 = {
	foo: foo
}
const obj2 = {
	name: 'zzt'
};
(obj2.foo = obj1.foo)() // window | global

/**
 * 一行代码实现高阶函数filter, map, raduce
 */
const arr = [1, 2, 3, 4]
const newArr = arr.filter(ele => ele % 2 === 0).map(ele => ele * 2).reduce((accumulation, curreEle) => accumulation + curreEle)
console.log(newArr);

/**
 * 箭头函数返回对象的简写
 */
const bar = () => ({ name: 'zzt', age: 18 })


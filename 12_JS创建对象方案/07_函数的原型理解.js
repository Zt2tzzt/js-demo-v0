/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 21:16:13
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 21:19:21
 * @LastEditContent: 
 */
function foo() {
}

// 函数也是一个对象
console.log(foo.__proto__) // 函数作为对象来说,它也有[[prototype]]隐式原型

// 函数它因为是一个函数,所以它还会多出来一个显示原型: prototype
console.log(foo.prototype)
console.log(foo.__proto__ === foo.prototype)

var f1 = new foo()
var f2 = new foo()

console.log(f1.__proto__ === foo.prototype)
console.log(f2.__proto__ === foo.prototype)
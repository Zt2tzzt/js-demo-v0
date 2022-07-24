/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 21:26:29
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 21:46:46
 * @LastEditContent: 
 */
function foo() {}

// 1.constructor属性
// foo.prototype 这个对象中有一个 constructor 属性
/* console.log(foo.prototype)
console.log(Object.getOwnPropertyDescriptors(foo.prototype)) */

/* Object.defineProperty(foo.prototype, "constructor", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: '哈哈哈哈'
})
console.log(foo.prototype) */

// prototype.constructor = 构造函数本身
/* console.log(foo.prototype.constructor) // [Function: foo
console.log(foo.prototype.constructor.name)

console.log(foo.prototype.constructor.prototype.constructor) */

// 2.我们也可以添加自己的属性
/* foo.prototype.name = 'zzt'
foo.prototype.age = 18
foo.prototype.height = 18
foo.prototype.eating = function() {} */

// var f1 = new foo()
// console.log(f1.name, f1.age)

// 3.直接修改整个prototype对象
foo.prototype = {
  // custructor: foo,
  name: 'zzt',
  age: 18,
  height: 1.88
}
// 真是开发中,我们可以通过 Object.defineProperty 的方式添加 constructor
Object.defineProperty(foo.prototype, 'constructor', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: foo
})

console.log(foo.prototype)

var f1 = new foo()
console.log(f1.name, f1.age, f1.height)



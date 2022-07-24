/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-30 17:12:42
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-30 17:14:58
 * @LastEditContent: 
 */
console.log(foo)
var foo = 'foo'

// Reference(引用)Error: Cannot access 'foo' before initialization(初始化)
// let / const 他们是没有作用域提升的
// foo 被创建出来, 但是不能被访问
// 作用于提升: 能提前被访问
console.log(bar)
let bar = 'bar'
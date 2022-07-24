/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-01 14:44:55
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-01 14:49:35
 * @LastEditContent: 
 */
// ES6中的代码块级作用域
// 对 let / const / function / class 声明的类型是有效的
{
  let foo = 'zzt'
  function demo() {
    console.log('demo function')
  }
  class Person {}
}

// console.log(foo) // ReferenceError: foo is not defined
// 不同的浏览器, 有不同的实现(大部分浏览器为了兼容以前的代码, 让function是没有块级作用域的)
demo()
var p = new Person() // Person is not defined


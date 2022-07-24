/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 17:24:32
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 17:25:33
 * @LastEditContent: 
 */
function foo() {
  console.log('foo~, 函数体代码')
}

// foo就是一个普通的函数
// fo()

// 换一种方式,来调用foo函数: 通过new关键字去调用一个函数, 那么这个函数就是一个构造函数了.
var f1 = new foo
console.log(f1)
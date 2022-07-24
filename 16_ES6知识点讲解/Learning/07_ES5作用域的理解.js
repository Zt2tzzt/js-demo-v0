/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-01 14:41:01
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-01 14:43:05
 * @LastEditContent: 
 */
// 声明对象的字面量
var obj = {
  name: 'zzt'
}

// ES5中没有块级作用域
// 块代码(block code)
{
  // 声明一个变量
  var foo = 'foo'
}
console.log(foo)

// 在ES5中, 只有两个东西会形成作用域
// 1. 全局作用域
// 2. 函数作用域
function foo() {
  var bar = 'bar'
}
console.log(bar)

function foo() {
  function demo() {

  }
}
/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 19:32:26
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 19:34:28
 * @LastEditContent: 
 */
// this指向什么，跟函数的所处的位置是没有关系的
// 跟函数被调用的方式是有关系的

function foo() {
  console.log(this)
}

// 1.直接调用这个函数
foo()

// 2.创建一个对象，对象中的函数指向foo
var obj = {
  name: 'zzt',
  foo: foo
}

obj.foo()

// 3.apply调用
foo.apply("abc")
/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-20 18:23:47
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-20 18:27:10
 * @LastEditContent: 
 */
// 结论：new关键字不能和 apply / call 一起调用

// new的优先级高于bind
function foo() {
  console.log(this)
}

var bar = foo.bind('aaa')
bar()
var obj = new bar()

// new 绑定 > 显示绑定（apply / call / bind） > 隐式绑定(obj.foo()) > 默认绑定（独立函数调用）
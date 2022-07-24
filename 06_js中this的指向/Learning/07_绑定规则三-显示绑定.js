/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 20:13:21
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 20:19:36
 * @LastEditContent: 
 */
function foo() {
  console.log(this)
}

// foo.call('aaa')

// 默认绑定和显示绑定冲突：优先级（显示绑定）

var newFoo = foo.bind('aaa')
newFoo()

var bar = foo
console.log(bar === foo)
console.log(newFoo === foo)
newFoo = null

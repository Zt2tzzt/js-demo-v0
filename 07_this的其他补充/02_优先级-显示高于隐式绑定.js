/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-20 18:00:36
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-20 18:03:43
 * @LastEditContent: 
 */
var obj = {
  name: 'obj',
  foo: function() {
    console.log(this)
  }
}

// obj.foo()

// 1.call / apply 的显示绑定高于隐式绑定
/* obj.foo.apply('abc')
obj.foo.call('abc') */

// 2.bind 的优先级高于隐式绑定
/* var bar = obj.foo.bind('cba')
bar() */

// 3.更明显的比较
function foo() {
  console.log(this)
}

var obj = {
  name: 'obj',
  foo: foo.bind('aaa')
}

obj.foo()
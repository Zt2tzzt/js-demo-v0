/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 19:55:53
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 20:00:46
 * @LastEditContent: 
 */
// 隐式绑定：object.fn()
// object对象会被js引擎绑定到fn函数中的this里面

function foo() {
  console.log(this)
}

// 独立函数调用
foo()

// 1.案例一
/* var obj = {
  name: 'zzt',
  foo: foo
}
obj.foo() */

// 2.案例二
var obj = {
  name: 'zzt',
  eating: function() {
    console.log(this.name, '在吃东西')
  },
  running: function() {
    console.log(obj.name, '在跑步')
  }
}
obj.eating()
obj.running()

var fn = obj.eating
fn()
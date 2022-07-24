/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-20 18:45:10
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-20 18:46:17
 * @LastEditContent: 
 */
var obj1 = {
  name: 'obj1',
  foo: function() {
    console.log(this)
  }
}

var obj2 = {
  name: 'obj2'
}

obj2.bar = obj1.foo
obj2.bar();

(obj2.bar = obj1.foo)()
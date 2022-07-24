/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-20 18:21:40
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-20 18:21:41
 * @LastEditContent: 
 */
var obj = {
  name: 'obj',
  foo: function() {
    console.log(this)
  }
}

// new的优先级高于隐式绑定
var f = new obj.foo()
